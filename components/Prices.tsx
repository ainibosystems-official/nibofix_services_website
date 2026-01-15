"use client";

import { useState } from "react";
import { translations } from "@/lib/translations";
import { Lang } from "@/lib/lang";
import { services } from "@/lib/pricingConfig";
import { usePricing } from "@/lib/usePricing";
import PriceCard from "./PriceCard";
import { PricesTranslations } from "@/lib/translations";
import { eurToBgn } from "@/lib/currency";
import { DiscountHint } from "@/lib/pricingConfig";
import Link from "next/link";

export default function Prices({ lang }: { lang: Lang }) {
  const t = translations[lang].prices as PricesTranslations;


  const repair = services.filter((s) => s.category === "repair");
  const cleaning = services.filter((s) => s.category === "cleaning");
  const [popup, setPopup] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);


  /* =========================
     STATIC DISCOUNT INFO
     (always visible messages)
  ========================= */

  const discountInfoMap: Record<string, DiscountHint> = Object.fromEntries(
    services
      .filter((s) => s.discountRule && !s.isModifier)
      .map((s) => {
        const rule = s.discountRule!;

        let unit: "m2" | "pcs" | null = null;
        let minQuantity: number | null = null;

        if (rule.minQuantityM2 && !rule.minQuantityPcs) {
          unit = "m2";
          minQuantity = rule.minQuantityM2;
        }

        if (rule.minQuantityPcs && !rule.minQuantityM2) {
          unit = "pcs";
          minQuantity = rule.minQuantityPcs;
        }

        // ако има и двете → UI показва generic текст
        if (rule.minQuantityM2 && rule.minQuantityPcs) {
          unit = null;
          minQuantity = null;
        }

        return [
          s.id,
          {
            sourceServiceId: rule.sourceServiceId,
            unit,
            minQuantity,
            percent: rule.percent,
          },
        ];
      })
  );

  /* =========================
     DYNAMIC PRICING
  ========================= */
  const {
    mounted,
    quantities,
    setQuantity,
    total,
    discountsApplied,
  } = usePricing(services);

  /* =========================
     OFFER REQUEST FORM STATE
  ========================= */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const updateForm = (
    key: keyof typeof form,
    value: string | boolean
  ) =>
    setForm((f) => ({ ...f, [key]: value }));

  /* =========================
     SUBMIT CONDITIONS
  ========================= */
  const canSubmit =
    form.consent &&
    (form.email.trim() !== "" || form.phone.trim() !== "");

  if (!mounted) return null;

  /* =========================
     SUBMIT HANDLER
  ========================= */
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!canSubmit || sending) return;

    setSending(true);

    const selectedServices = services
      .filter((s) => quantities[s.id] > 0)
      .map((s) => ({
        id: s.id,
        label: t.services[s.id],
        quantity: quantities[s.id],
        unit: t.units[s.unitKey],
        subtotal: (
          quantities[s.id] *
          s.pricePerUnit *
          (discountsApplied[s.id]
            ? 1 - discountsApplied[s.id] / 100
            : 1)
        ).toFixed(2),
      }));

    try {
      const res = await fetch("/api/send-offer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          services: selectedServices,
          total: total.toFixed(2),
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          lang,
        }),
      });

      if (!res.ok) throw new Error("Send failed");

      setPopup({
        type: "success",
        message: t.form?.success,
      });
    } catch {
      setPopup({
        type: "error",
        message: t.form?.error,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="prices"
      className="scroll-mt-32 pt-24 pb-16 bg-white"
    >
      {/* =========================
          HEADER
      ========================= */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center gap-6 justify-center">
            <span className="hidden md:block flex-1 h-px bg-gray-300 translate-y-[3px]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2e7d6f] whitespace-nowrap">
              {t.title}
            </h2>
            <span className="hidden md:block flex-1 h-px bg-gray-300 translate-y-[3px]" />
          </div>

          <p className="mt-4 text-lg font-semibold text-gray-600">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* =========================
          CONTENT STRIP
      ========================= */}
      <div className="relative">
        <div className="absolute inset-y-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gray-100" />

        <div
          className="
            relative
            z-10
            max-w-7xl
            lg:max-w-[90rem]
            xl:max-w-[110rem]
            2xl:max-w-[128rem]
            mx-auto
            px-6 lg:px-12 xl:px-16
            py-16
          "
        >
          {/* PRICE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
            <PriceCard
              title={t.cards.repair.title}
              services={repair}
              quantities={quantities}
              discountsApplied={discountsApplied}
              discountInfo={discountInfoMap}
              t={t}
              lang={lang}
              onQuantityChange={setQuantity}
            />

            <PriceCard
              title={t.cards.cleaning.title}
              services={cleaning}
              featuredServiceId="apartment_cleaning"
              quantities={quantities}
              discountsApplied={discountsApplied}
              discountInfo={discountInfoMap}
              t={t}
              lang={lang}
              onQuantityChange={setQuantity}
            />
          </div>

          {/* =========================
              TOTAL + OFFER REQUEST
          ========================= */}
          <div className="mt-14 rounded-xl bg-blue-600 text-white p-6">
            <p className="text-xl font-semibold text-center">
              {t.totalLabel}: €{total.toFixed(2)} / {eurToBgn(total)} лв. {t.vatLabel}
            </p>

            <p className="text-sm opacity-90 mt-2 text-center">
              {t.note}
            </p>

            {/* ✅ DISCOUNTS NOTICE */}
            <p className="mt-2 text-sm opacity-90 text-center">
              {t.discountsNotice}{" "}
              <Link
                href={`/${lang}/faq`}
                className="font-medium underline hover:opacity-100"
              >
                {t.learnMore}
              </Link>
            </p>

            {/* FORM */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder={t.form?.name}
                value={form.name}
                onChange={(e) =>
                  updateForm("name", e.target.value)
                }
                className="rounded-md px-3 py-2 text-black"
              />

              <input
                placeholder={t.form?.email}
                value={form.email}
                onChange={(e) =>
                  updateForm("email", e.target.value)
                }
                className="rounded-md px-3 py-2 text-black"
              />

              <input
                placeholder={t.form?.phone}
                value={form.phone}
                onChange={(e) =>
                  updateForm("phone", e.target.value)
                }
                className="rounded-md px-3 py-2 text-black md:col-span-2"
              />

              <textarea
                placeholder={t.form?.message}
                value={form.message}
                onChange={(e) =>
                  updateForm("message", e.target.value)
                }
                className="rounded-md px-3 py-2 text-black md:col-span-2"
              />
            </div>

            {/* CONSENT */}
            <div className="mt-6 flex justify-center">
              <label className="flex items-start gap-3 text-sm max-w-xl cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) =>
                    updateForm("consent", e.target.checked)
                  }
                  className="mt-1 h-5 w-5 accent-[#2e7d6f]"
                />
                <span className="leading-relaxed">
                  {t.form?.consent}
                </span>
              </label>
            </div>

            {/* SEND BUTTON */}
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canSubmit || sending}
                className={`
                  rounded-xl
                  px-8
                  py-3
                  font-semibold
                  shadow-md
                  transition
                  ${canSubmit
                    ? `
                          bg-white
                          text-blue-700
                          hover:bg-[#2e7d6f]
                          hover:text-white
                          active:bg-[#2e7d6f]
                          active:text-white
                          active:scale-[0.98]
                        `
                    : `
                          bg-gray-200
                          text-gray-400
                          cursor-not-allowed
                        `
                  }
                `}
              >
                {t.form?.send}
              </button>
            </div>
          </div>
        </div>
      </div>
      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setPopup(null)}
          />

          {/* MODAL */}
          <div className="relative z-10 max-w-md w-full rounded-2xl bg-white p-6 shadow-xl text-center">
            <div
              className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full
          ${popup.type === "success"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"}
        `}
            >
              {popup.type === "success" ? "✓" : "!"}
            </div>

            <p className="text-lg font-semibold text-gray-900">
              {popup.message}
            </p>

            <button
              onClick={() => setPopup(null)}
              className="mt-6 rounded-xl bg-[#2e7d6f] px-6 py-2 font-semibold text-white hover:opacity-90 transition"
            >
              {(t.form as any)?.close || "Close"}
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
