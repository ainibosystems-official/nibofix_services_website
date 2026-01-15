import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";
import ClientLayout from "./ClientLayout";
import { normalizeLang } from "@/lib/lang";

type Props = {
  params: Promise<{
    lang: string;
  }>;
  children: ReactNode;
};

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  const title =
    lang === "bg"
      ? "Ремонтни услуги в Бургас – NiBoFix"
      : lang === "ua"
        ? "Ремонтні послуги в Бургасі – NiBoFix"
        : "Home Repair Services in Burgas – NiBoFix";

  const description =
    lang === "bg"
      ? "Професионални ремонтни и довършителни услуги за дома."
      : lang === "ua"
        ? "Професійні ремонтні та оздоблювальні послуги для дому."
        : "Professional home repair, renovation and finishing services.";

  return {
    title,
    description,

    /* ✅ SEO: canonical + hreflang */
    alternates: {
      canonical: `https://www.nibofix.com/${lang}`,
      languages: {
        bg: "https://www.nibofix.com/bg",     // 🇧🇬 PRIMARY
        en: "https://www.nibofix.com/en",
        uk: "https://www.nibofix.com/ua",
        "x-default": "https://www.nibofix.com/bg", // ⭐ DEFAULT = BG
      },
    },

    openGraph: {
      title,
      description,
      url: `https://www.nibofix.com/${lang}`,
      siteName: "NiBoFix Services",
      images: [
        {
          url: "/images/og.png",
          width: 1200,
          height: 630,
          alt: "NiBoFix Services",
        },
      ],
      locale:
        lang === "bg" ? "bg_BG" : lang === "ua" ? "uk_UA" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og.png"],
    },
  };
}

export default async function LangLayout({ children, params }: Props) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  return (
    <Suspense fallback={null}>
      <ClientLayout lang={lang}>
        {children}
      </ClientLayout>
    </Suspense>
  );
}
