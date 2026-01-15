"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { translations } from "@/lib/translations";
import { Lang } from "@/lib/lang";

export default function Header({
  lang,
  open,
  setOpen,
}: {
  lang: Lang;
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const t = translations[lang];

  const [langOpen, setLangOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();


  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.location.hash) return;
    if (pathname.includes("/faq")) return;

    const id = window.location.hash.slice(1);

    let attempts = 0;
    const maxAttempts = 10;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      if (rect.top === 0 && attempts < maxAttempts) {
        attempts++;
        requestAnimationFrame(tryScroll);
        return;
      }

      const y =
        rect.top +
        window.pageYOffset -
        140; // header offset

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    };

    requestAnimationFrame(tryScroll);
  }, [pathname, searchParams]);

  /* HEADER SHOW / HIDE */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(open || y < lastScrollY || y < 80);
      setLastScrollY(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY, open]);

  return (
    <header
      className={`fixed top-[10px] left-0 right-0 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="bg-white/90 backdrop-blur-lg shadow-lg">
        <div
          className="
      max-w-[1700px]
      mx-auto
      px-6 lg:px-10
      py-5
      flex
      justify-between
      items-center
    "
        >


          {/* LOGO — smooth scroll to top */}
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="flex items-center gap-2"
            aria-label="NiBoFix Home"
          >
            <img
              src="/images/logo.svg"
              alt="NiBoFix Services"
              className="
            h-8
            lg:h-10
            w-auto
            object-contain
          "
            />
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-10 text-lg font-semibold text-gray-700">
            <Link
              href={`/${lang}#services`}
              scroll={false}
              className="
  paint-hover
  transition-colors
  hover:text-[#1f5f52]
"
            >
              {t.nav.services}
            </Link>

            <Link
              href={`/${lang}#prices`}
              scroll={false}
              className="
  paint-hover
  transition-colors
  hover:text-[#1f5f52]
"
            >
              {t.nav.prices}
            </Link>

            <Link
              href={`/${lang}#contact`}
              scroll={false}
              className="
  paint-hover
  transition-colors
  hover:text-[#1f5f52]
"
            >
              {t.nav.contact}
            </Link>

            <Link
              href={`/${lang}#about`}
              scroll={false}
              className="
  paint-hover
  transition-colors
  hover:text-[#1f5f52]
"
            >
              {t.nav.about}
            </Link>

            <Link
              href={`/${lang}/faq`}
              className="
  paint-hover
  transition-colors
  hover:text-[#1f5f52]
"
            >
              {t.nav.faq}
            </Link>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            {/* LANGUAGE */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="text-lg font-semibold text-blue-700 hover:text-green-600"
              >
                {lang.toUpperCase()}
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-3 bg-white rounded-xl shadow-lg px-4 py-3 space-y-2">
                  {["bg", "en", "ua"].map((l) => (
                    <div
                      key={l}
                      onClick={() => {
                        sessionStorage.setItem("scrollY", String(window.scrollY));

                        const newPath = `/${l}${pathname.replace(/^\/(bg|en|ua)/, "")}`;
                        router.push(newPath, { scroll: false });

                        setLangOpen(false);
                      }}

                      className="cursor-pointer text-sm font-semibold hover:text-blue-600"
                    >
                      {l.toUpperCase()}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* BURGER */}
            <button onClick={() => setOpen(!open)} className="lg:hidden text-[#2e7d6f]">
              {open ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
