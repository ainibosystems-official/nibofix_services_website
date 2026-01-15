import { normalizeLang } from "@/lib/lang";

export default function TermsOfService({
  params,
}: {
  params: { lang?: string };
}) {
  const lang = normalizeLang(params.lang);

  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-gray-700">
      {/* =========================
          BULGARIAN
      ========================= */}
      {lang === "bg" && (
        <>
          <h1 className="text-3xl font-bold mb-6">Общи условия</h1>

          <p className="mb-4">
            Този уебсайт предоставя ориентировъчен калкулатор за ремонтни и
            почистващи услуги.
          </p>

          <p className="mb-4">
            Всички цени са ориентировъчни и не представляват обвързваща оферта.
          </p>

          <p className="mb-4">
            Цените в български лева (BGN) са изчислени по фиксирания курс:
            <strong> 1 EUR = 1.95583 BGN</strong>, закръглени надолу.
          </p>

          <p className="mb-4">
            NiBoFix Services си запазва правото да коригира цените в зависимост
            от реалния обем, състояние и специфика на услугата.
          </p>

          <p className="mb-4">
            Окончателната цена се потвърждава след оглед и допълнително
            уточняване.
          </p>

          <p>Контакт: nibofix@gmail.com</p>
        </>
      )}

      {/* =========================
          ENGLISH
      ========================= */}
      {lang === "en" && (
        <>
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

          <p className="mb-4">
            This website provides an informational price calculator for repair
            and cleaning services.
          </p>

          <p className="mb-4">
            All prices shown are indicative and non-binding.
          </p>

          <p className="mb-4">
            Prices in Bulgarian leva (BGN) are calculated using the fixed
            exchange rate:
            <strong> 1 EUR = 1.95583 BGN</strong>, rounded down.
          </p>

          <p className="mb-4">
            NiBoFix Services reserves the right to adjust prices based on the
            actual scope, condition, and requirements of the service.
          </p>

          <p className="mb-4">
            Final pricing is confirmed after on-site inspection and agreement.
          </p>

          <p>Email: nibofix@gmail.com</p>
        </>
      )}

      {/* =========================
          UKRAINIAN
      ========================= */}
      {lang === "ua" && (
        <>
          <h1 className="text-3xl font-bold mb-6">Умови користування</h1>

          <p className="mb-4">
            Цей вебсайт надає орієнтовний калькулятор вартості ремонтних та
            клінінгових послуг.
          </p>

          <p className="mb-4">
            Усі зазначені ціни є орієнтовними та не є обовʼязковою пропозицією.
          </p>

          <p className="mb-4">
            Ціни в болгарських левах (BGN) розраховані за фіксованим курсом:
            <strong> 1 EUR = 1.95583 BGN</strong>, із округленням до меншого
            значення.
          </p>

          <p className="mb-4">
            NiBoFix Services залишає за собою право коригувати ціни залежно
            від фактичного обсягу, стану та вимог послуги.
          </p>

          <p className="mb-4">
            Остаточна вартість підтверджується після огляду та погодження.
          </p>

          <p>Email: nibofix@gmail.com</p>
        </>
      )}
    </section>
  );
}
