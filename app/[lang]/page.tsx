import { Suspense } from "react";
import Hero from "@/components/Hero";
import ServicesStrip from "@/components/ServicesStrip";
import ServicesGrid from "@/components/ServicesGrid";
import Prices from "@/components/Prices";
import Contacts from "@/components/Contacts";
import About from "@/components/About";
import { normalizeLang } from "@/lib/lang";

export function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "bg" },
    { lang: "ua" },
  ];
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  return (
    <Suspense fallback={null}>
      <Hero lang={lang} />
      <ServicesStrip lang={lang} />
      <ServicesGrid lang={lang} />
      <Prices lang={lang} />
      <Contacts lang={lang} />
      <About lang={lang} />
    </Suspense>
  );
}
