"use client";

import { translations } from "@/lib/translations";
import { Lang } from "@/lib/lang";

export default function About({ lang }: { lang: Lang }) {
  const t = translations[lang].aboutSection;

  return (
    <section
      id="about"
      className="scroll-mt-32 pt-24 pb-16 bg-white"
    >
      {/* =========================
          WHITE HEADER STRIP
      ========================= */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          {/* TITLE ROW WITH LINES */}
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

        {/* CONTENT ABOVE GRAY */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
            {/* IMAGE */}
            <div className="w-full h-full">
              <img
                src="/images/work-hard.jpg"
                alt="Professional home services by NiBoFix"
                className="
                  w-full
                  h-full
                  rounded-2xl
                  shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                  object-cover
                "
              />
            </div>

            {/* TEXT */}
            <div className="space-y-6 text-center flex flex-col justify-center">
              {t.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
