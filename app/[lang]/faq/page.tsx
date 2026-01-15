"use client";

import { translations } from "@/lib/translations";
import { normalizeLang } from "@/lib/lang";
import { useEffect, useRef, useState } from "react";
import { use } from "react";


/* =========================
   TYPES
========================= */
type FaqItem = {
  q: string;
  a: string;
};

type FaqTranslation = {
  title: string;
  subtitle: string;
  items: FaqItem[];
};

/* =========================
   FAQ CARD
========================= */
function FaqCard({
  item,
  isOpen,
  onClick,
}: {
  item: FaqItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_16px_36px_rgba(0,0,0,0.12)] overflow-hidden">
      {/* QUESTION */}
      <button
        type="button"
        onClick={onClick}
        className="
          w-full
          text-left
          px-8 py-6
          flex justify-between items-center
          font-semibold
          text-gray-900
          hover:bg-gray-50
          transition-colors
        "
      >
        <span className="text-lg">{item.q}</span>

        <span
          className={`
            text-[#3B82F6]
            text-2xl
            transition-transform duration-300
            ${isOpen ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      {/* ANSWER */}
      <div
        style={{ maxHeight: `${height}px` }}
        className="
          overflow-hidden
          transition-[max-height,opacity]
          duration-500
          ease-[cubic-bezier(0.4,0,0.2,1)]
        "
      >
        <div
          ref={contentRef}
          className="px-8 pb-6 text-gray-700 leading-relaxed"
          style={{ whiteSpace: "pre-line" }}
        >
          {item.a}
        </div>

      </div>
    </div>
  );
}

/* =========================
   PAGE
========================= */
export default function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;

}) {
  const { lang: rawLang } = use(params);
  const lang = normalizeLang(rawLang);
  const t = (translations as any)[lang].faq as FaqTranslation;

  /* =========================
     SPLIT ITEMS
  ========================= */
  const leftItems = t.items.filter((_, i) => i % 2 === 0);
  const rightItems = t.items.filter((_, i) => i % 2 === 1);

  /* =========================
     STATE PER COLUMN
  ========================= */
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  return (
    <>
      {/* =========================
          FAQ HERO
      ========================= */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-main.jpg')" }}
        />

        <div className="relative z-10 w-full h-full flex items-center pt-28 md:pt-40">
          <div className="w-full bg-[#2F7D4C]/50 backdrop-blur-sm py-10 md:py-14">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                  {t.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl opacity-90">
                  {t.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FAQ CONTENT
      ========================= */}
      <section className="relative bg-white scroll-mt-32 pb-24">
        <div className="relative mt-20">
          {/* FULL-WIDTH GRAY STRIPE */}
          <div
            className="
              absolute left-1/2 right-1/2
              -ml-[50vw] -mr-[50vw]
              top-0 bottom-0
              bg-gray-100
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative
              max-w-7xl
              lg:max-w-[90rem]
              xl:max-w-[110rem]
              2xl:max-w-[128rem]
              mx-auto
              px-6 lg:px-12 xl:px-16
              py-16
            "
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-6 flex-1">
                {leftItems.map((item, i) => (
                  <FaqCard
                    key={`left-${i}`}
                    item={item}
                    isOpen={openLeft === i}
                    onClick={() =>
                      setOpenLeft(openLeft === i ? null : i)
                    }
                  />
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-6 flex-1">
                {rightItems.map((item, i) => (
                  <FaqCard
                    key={`right-${i}`}
                    item={item}
                    isOpen={openRight === i}
                    onClick={() =>
                      setOpenRight(openRight === i ? null : i)
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
