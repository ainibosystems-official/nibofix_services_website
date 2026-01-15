"use client";

import { translations } from "@/lib/translations";
import { Lang } from "@/lib/lang";

export default function Contacts({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;

  return (
    <section
      id="contact"
      className="scroll-mt-32 pt-24 pb-16 bg-white"
    >
      {/* =========================
          WHITE HEADER STRIP
      ========================= */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* TITLE ROW */}
          <div className="flex items-center gap-6 justify-center">
            {/* LEFT LINE */}
            <span className="hidden md:block flex-1 h-px bg-gray-300 translate-y-[3px]" />

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#2e7d6f] whitespace-nowrap">
              {t.title}
            </h2>

            {/* RIGHT LINE */}
            <span className="hidden md:block flex-1 h-px bg-gray-300 translate-y-[3px]" />
          </div>

          {/* SUBTITLE */}
          <p className="mt-4 text-lg font-semibold text-gray-600">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* =========================
          GRAY CONTENT STRIP
      ========================= */}
      <div className="relative">
        {/* FULL-WIDTH GRAY BACKGROUND */}
        <div
          className="
            absolute left-1/2 right-1/2
            -ml-[50vw] -mr-[50vw]
            inset-y-0
            bg-gray-100
          "
        />

        {/* CONTENT CONTAINER */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* LEFT CARD */}
            <div
              className="
    bg-white
    rounded-2xl
    border border-gray-100
    shadow-[0_12px_30px_rgba(0,0,0,0.08)]
    hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
    transition-shadow
    p-10

    text-center
    lg:text-left
  "
            >

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t.boxTitle}
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {t.boxText}
              </p>

              <div className="space-y-4 font-semibold text-gray-800">
                <p>
                  {t.phoneLabel}:{" "}
                  <a
                    href="tel:+359877215636"
                    className="text-[#2e7d6f] hover:text-[#256a5f] hover:underline"
                  >
                    +359 877 21 56 36
                  </a>
                </p>

                <p>
                  {t.emailLabel}:{" "}
                  <a
                    href="mailto:nibofix@gmail.com"
                    className="text-[#2e7d6f] hover:text-[#256a5f] hover:underline"
                  >
                    nibofix@gmail.com
                  </a>
                </p>
              </div>

            </div>

            {/* RIGHT CARD */}
            <div
              className="
    bg-white
    rounded-2xl
    border border-gray-100
    shadow-[0_12px_30px_rgba(0,0,0,0.08)]
    hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
    transition-shadow
    p-10

    text-center
    lg:text-left
  "
            >

              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {t.callTitle}
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {t.callText}
              </p>

              <a
                href="tel:+359877215636"
                className="
        inline-block
        bg-[#3B82F6]
        hover:bg-[#2563EB]
        text-white
        px-8 py-4
        rounded-xl
        font-semibold
        transition-colors
        shadow-md
      "
              >
                {t.cta}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
