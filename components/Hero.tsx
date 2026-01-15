"use client";

import { useEffect, useState } from "react";
import { translations } from "@/lib/translations";
import { Lang } from "@/lib/lang";

const images = [
  "/images/hero-services/flooring.png",
  "/images/hero-services/painting.png",
  "/images/hero-services/cleaning.png",
  "/images/hero-services/assembly.png",
];

export default function Hero({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] lg:h-[80vh]">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-main.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2F7D4C]/100 via-[#6BBF59]/90 to-[#CFEAD6]/60" />
      </div>

      {/* ================= FOREGROUND IMAGE SLIDER ================= */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`
              absolute
              right-[-10px] lg:right-10
              bottom-0 lg:bottom-[-100px]
              max-h-[70%] lg:max-h-[85%]
              lg:border-t-[10px] lg:border-b-[10px] lg:border-r-[10px] lg:border-white
              transition-all duration-1000 ease-in-out
              ${i === index
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[40px]"}
            `}
            style={{
              maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 70%, transparent 100%)",
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative w-full h-full z-30">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          <div
            className="
              max-w-xl text-white
              pt-0 -mt-6 lg:pt-28 lg:mt-0
              w-full
              grid grid-cols-1 gap-6
              lg:block
              [@media(orientation:landscape)_and_(max-width:1023px)]:grid-cols-2
              [@media(orientation:landscape)_and_(max-width:1023px)]:gap-8
              [@media(orientation:landscape)_and_(max-width:1023px)]:mt-16
            "
          >
            {/* LEFT COLUMN */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                {t.hero.title}
              </h1>

              <p className="mt-6 text-lg lg:text-xl opacity-90">
                {t.hero.subtitle}
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div
              className="
                mt-2 lg:mt-6
                [@media(orientation:landscape)_and_(max-width:1023px)]:mt-36
              "
            >
              <a
                href="#contact"
                className="
                  inline-block
                  bg-[#3B82F6]
                  hover:bg-[#2563EB]
                  text-white
                  px-7 py-3
                  rounded-lg
                  font-semibold
                  transition
                  shadow-md
                "
              >
                {t.hero.cta}
              </a>

              <p className="mt-1 text-sm text-white/80">
                {t.hero.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
