import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import { normalizeLang } from "@/lib/lang";

type Props = {
  params: { lang?: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = normalizeLang(params.lang);

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
    openGraph: {
      title,
      description,
      url: `https://nibofix.com/${lang}`,
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

export default function LangLayout({ children, params }: Props) {
  const lang = normalizeLang(params.lang);

  return (
    <ClientLayout lang={lang}>
      {children}
    </ClientLayout>
  );
}
