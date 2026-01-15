"use client";

import Link from "next/link";
import { translations } from "@/lib/translations";
import { Lang } from "@/lib/lang";
import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function MobileMenu({
  lang,
  open,
  setOpen,
}: {
  lang: Lang;
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const t = translations[lang];
  const scrollY = useRef(0);
  const router = useRouter();
  const pathname = usePathname();

  /* ===============================
     HARD BODY SCROLL LOCK (MOBILE SAFE)
  =============================== */
  useEffect(() => {
    if (open) {
      scrollY.current = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="
        lg:hidden
        fixed inset-x-0
        top-[80px]
        bottom-0
        z-[40]
        overflow-hidden
      "
    >
      {/* BACKGROUND IMAGE — CONNECTED TO HEADER */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/menu-bg.jpg')" }}
      />

      {/* OVERLAY — STATIC */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2e7d6f]/75 to-[#1f5f52]/90" />

      {/* SCROLLABLE MENU CONTENT ONLY */}
      <div
        className="
          relative
          h-full
          overflow-y-auto
          overscroll-contain
          flex flex-col
          items-center
          px-6
          py-12
          text-white
        "
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-semibold">
          <Link
            href={`/${lang}#services`}
            scroll={false}
            onClick={() => setOpen(false)}
          >
            {t.nav.services}
          </Link>

          <Link
            href={`/${lang}#prices`}
            scroll={false}
            onClick={() => setOpen(false)}
          >
            {t.nav.prices}
          </Link>

          <Link
            href={`/${lang}#contact`}
            scroll={false}
            onClick={() => setOpen(false)}
          >
            {t.nav.contact}
          </Link>

          <Link
            href={`/${lang}#about`}
            scroll={false}
            onClick={() => setOpen(false)}
          >
            {t.nav.about}
          </Link>

          <Link
            href={`/${lang}/faq`}
            onClick={() => setOpen(false)}
          >
            {t.nav.faq}
          </Link>
        </nav>

        {/* LANGUAGES */}
        <div className="mt-14 flex gap-8 border-t border-white/30 pt-8 text-lg font-semibold">
          {(["bg", "en", "ua"] as const).map((l) => {
            const isActive = lang === l;

            return (
              <span
                key={l}
                onClick={() => {
                  // ✅ use the REAL scroll value
                  sessionStorage.setItem("scrollY", String(scrollY.current));
                  sessionStorage.setItem("langChange", "1");

                  const newPath = `/${l}${pathname.replace(/^\/(bg|en|ua)/, "")}`;

                  setOpen(false);
                  router.push(newPath, { scroll: false });
                }}
                className={`
    cursor-pointer text-lg font-semibold transition
    ${isActive ? "text-blue-500" : "text-white/80 hover:text-white"}
  `}
              >
                {l.toUpperCase()}
              </span>
            );
          })}

        </div>
      </div>
    </div>
  );
}
