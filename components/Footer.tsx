"use client";

import Link from "next/link";
import { translations } from "@/lib/translations";
import { Lang } from "@/lib/lang";

export default function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <footer className="relative bg-[#01311f] text-white">
      {/* TOP DIVIDER */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/images/logo.svg"
              alt="NiBoFix Services"
              className="h-10 mb-6 mx-auto md:mx-0"
            />

            <p className="text-white/70 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>

            {/* EXCHANGE RATE NOTE */}
            <p className="mt-3 text-xs text-white/50 max-w-sm">
              {t.footer.exchangeRateNote}
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">
              {t.nav.services}
            </h4>

            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  href={`/${lang}#services`}
                  className="hover:text-white transition"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}#prices`}
                  className="hover:text-white transition"
                >
                  {t.nav.prices}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}#about`}
                  className="hover:text-white transition"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/faq`}
                  className="hover:text-white transition"
                >
                  {t.nav.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT + SEE ALSO */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">
              {t.nav.contact}
            </h4>

            <div className="space-y-3 text-white/70">
              <p>
                📞{" "}
                <a
                  href="tel:+359877215636"
                  className="hover:text-white transition"
                >
                  +359 877 21 56 36
                </a>
              </p>

              <p>
                ✉️{" "}
                <a
                  href="mailto:nibofix@gmail.com"
                  className="hover:text-white transition"
                >
                  nibofix@gmail.com
                </a>
              </p>

              <p className="text-sm text-white/50">
                {t.footer.area}
              </p>

              {/* SEE ALSO */}
              <p className="pt-4 text-sm">
                {t.footer.seeAlso}:{" "}
                <a
                  href="https://nibodom.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  {t.footer.staycare}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm text-white/50 text-center md:text-left">
          {/* LEFT */}
          <p>
            © {new Date().getFullYear()} NiBoFix Services. {t.footer.rights}
          </p>

          {/* CENTER — LEGAL LINKS */}
          <div className="flex gap-4">
            <a
              href={`/${lang}/privacy-policy`}
              className="hover:text-white transition"
            >
              {t.footer.privacy}
            </a>

            <span className="opacity-40">|</span>

            <a
              href={`/${lang}/terms-of-service`}
              className="hover:text-white transition"
            >
              {t.footer.terms}
            </a>
          </div>

          {/* RIGHT */}
          <p>
            {t.footer.poweredBy}{" "}
            <a
              href="https://ainibosystems.bg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              {t.footer.ainibo}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
