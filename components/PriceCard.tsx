// components/PriceCard.tsx

import { Service } from "@/lib/pricingConfig";
import ServiceRow from "./ServiceRow";
import Link from "next/link";
import { DiscountHint } from "@/lib/pricingConfig";



type DiscountInfo = {
  sourceServiceId: string;
  minQuantity: number;
  percent: number;
};

type Props = {
  title: string;
  services: Service[];
  quantities: Record<string, number>;
  discountsApplied: Record<string, number>;
  discountInfo: Record<string, DiscountHint>;
  t: any;
  lang: string;
  onQuantityChange: (id: string, value: string) => void;

  // Optional featured service (e.g. apartment cleaning)
  featuredServiceId?: string;
};

export default function PriceCard({
  title,
  services,
  quantities,
  discountsApplied,
  discountInfo,
  t,
  lang,
  onQuantityChange,
  featuredServiceId,
}: Props) {
  /* =========================
     FEATURED SERVICE
  ========================= */
  const featuredService = featuredServiceId
    ? services.find((s) => s.id === featuredServiceId)
    : undefined;

  const remainingServices = services.filter(
    (s) => s.id !== featuredServiceId
  );

  /* =========================
     MODIFIER ENABLE CHECK
  ========================= */
  const hasAnyBaseServiceSelected = remainingServices.some(
    (s) => !s.isModifier && (quantities[s.id] || 0) > 0
  );

  /* =========================
     GROUP SERVICES
  ========================= */
  const groupedServices = remainingServices.reduce<
    Record<string, Service[]>
  >((acc, service) => {
    const key = service.group || "other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(service);
    return acc;
  }, {});

  return (
    <div className="h-full rounded-3xl bg-white shadow-xl p-10">
      {/* CARD TITLE */}
      <h3 className="text-2xl font-semibold mb-6">
        {title}
      </h3>

      {/* =========================
          FEATURED SERVICE (TOP)
      ========================= */}
      {featuredService && (
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px flex-1 bg-blue-200" />
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              {t.groups?.featured || "Main service"}
            </span>
            <span className="h-px flex-1 bg-blue-200" />
          </div>

          <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4">
            <ServiceRow
              t={t}
              label={t.services[featuredService.id]}
              unit={t.units[featuredService.unitKey]}
              pricePerUnit={featuredService.pricePerUnit}
              quantity={quantities[featuredService.id] || 0}
              discountPercent={discountsApplied[featuredService.id]}
              discountInfo={discountInfo[featuredService.id]}
              onChange={(value) =>
                onQuantityChange(featuredService.id, value)
              }
            />

            {/* 🔴 DESCRIPTION MUST BE OUTSIDE ServiceRow CONTAINER */}
            {t.serviceDescriptions?.[featuredService.id] && (
              <div className="relative z-20 mt-3 text-sm text-gray-700 leading-relaxed pointer-events-auto">
                {t.serviceDescriptions[featuredService.id]}{" "}
                <Link
                  href={`/${lang}/faq`}
                  className="inline-flex items-center gap-1 font-medium text-[#2e7d6f] hover:underline cursor-pointer"
                >
                  {t.links?.faq}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================
          GROUPED SERVICES
      ========================= */}
      <div>
        {Object.entries(groupedServices).map(
          ([groupKey, groupServices]) => (
            <div key={groupKey} className="mb-8">
              {/* GROUP TITLE */}
              {t.groups?.[groupKey] && (
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-px flex-1 bg-gray-200" />
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                    {t.groups[groupKey]}
                  </h4>
                  <span className="h-px flex-1 bg-gray-200" />
                </div>
              )}

              {/* SERVICES */}
              <div>
                {groupServices.map((service) => (
                  <ServiceRow
                    key={service.id}
                    t={t}
                    label={t.services[service.id]}
                    unit={t.units[service.unitKey]}
                    pricePerUnit={service.pricePerUnit}
                    quantity={quantities[service.id] || 0}
                    isModifier={service.isModifier}
                    disabled={
                      service.isModifier &&
                      !hasAnyBaseServiceSelected
                    }
                    discountPercent={
                      discountsApplied[service.id]
                    }
                    discountInfo={discountInfo[service.id]}
                    onChange={(value) =>
                      onQuantityChange(service.id, value)
                    }
                  />
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
