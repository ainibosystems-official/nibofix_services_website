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

export default function Home({
  params,
}: {
  params: { lang?: string };
}) {
  const lang = normalizeLang(params.lang);

  return (
    <>
      <Hero lang={lang} />
      <ServicesStrip lang={lang} />
      <ServicesGrid lang={lang} />
      <Prices lang={lang} />
      <Contacts lang={lang} />
      <About lang={lang} />
    </>
  );
}
