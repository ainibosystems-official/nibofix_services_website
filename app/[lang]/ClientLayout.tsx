// app/[lang]/ClientLayout.tsx
"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import { Lang } from "@/lib/lang";

export default function ClientLayout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: Lang;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const y = sessionStorage.getItem("scrollY");
    const fromLangChange = sessionStorage.getItem("langChange");

    if (!y || !fromLangChange) return;

    requestAnimationFrame(() => {
      window.scrollTo({ top: Number(y), behavior: "auto" });
      sessionStorage.removeItem("scrollY");
      sessionStorage.removeItem("langChange");
    });
  }, [lang]);

  return (
    <>
      <Header lang={lang} open={open} setOpen={setOpen} />
      <MobileMenu lang={lang} open={open} setOpen={setOpen} />
      {children}
      <Footer lang={lang} />
    </>
  );
}
