import { normalizeLang } from "@/lib/lang";

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  const today = new Date().toLocaleDateString();

  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-gray-700">
      {/* =========================
          BULGARIAN
      ========================= */}
      {lang === "bg" && (
        <>
          <h1 className="text-3xl font-bold mb-6">
            Политика за поверителност
          </h1>

          <p className="mb-4 text-sm text-gray-500">
            Последна актуализация: {today}
          </p>

          <p className="mb-4">
            NiBoFix Services уважава поверителността на своите клиенти и
            обработва лични данни в съответствие с Общия регламент за защита
            на данните (GDPR).
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Какви данни събираме
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Име (по избор)</li>
            <li>Имейл адрес (по избор)</li>
            <li>Телефонен номер (по избор)</li>
            <li>Съобщение</li>
            <li>Избрани услуги и ориентировъчна цена</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            За какво използваме данните
          </h2>
          <p className="mb-4">
            Данните се използват единствено за изготвяне на оферта и
            осъществяване на връзка с клиента във връзка със заявката.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Срок на съхранение
          </h2>
          <p className="mb-4">
            Данните се съхраняват само за периода, необходим за обработка
            на заявката, и се изтриват в разумен срок, освен ако не е
            необходима последваща комуникация.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Вашите права
          </h2>
          <p className="mb-4">
            Имате право на достъп, корекция или изтриване на личните си
            данни, както и право да възразите срещу обработката им.
            Заявки могат да бъдат изпращани по имейл.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Бисквитки
          </h2>
          <p className="mb-4">
            Този уебсайт не използва бисквитки или технологии за
            проследяване.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Контакт
          </h2>
          <p>Имейл: nibofix@gmail.com</p>
        </>
      )}

      {/* =========================
          ENGLISH
      ========================= */}
      {lang === "en" && (
        <>
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p className="mb-4 text-sm text-gray-500">
            Last updated: {today}
          </p>

          <p className="mb-4">
            NiBoFix Services respects your privacy and processes personal
            data in accordance with the General Data Protection Regulation
            (GDPR).
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Data we collect
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Name (optional)</li>
            <li>Email address (optional)</li>
            <li>Phone number (optional)</li>
            <li>Message</li>
            <li>Selected services and estimated price</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Purpose
          </h2>
          <p className="mb-4">
            The data is used solely to prepare service offers and to contact
            customers regarding their request.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Data retention
          </h2>
          <p className="mb-4">
            Submitted data is stored only for the time necessary to process
            the request and is deleted within a reasonable period unless
            further communication is required.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Your rights
          </h2>
          <p className="mb-4">
            You have the right to access, correct, or request deletion of
            your personal data, as well as the right to object to processing.
            Requests can be made by email.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Cookies
          </h2>
          <p className="mb-4">
            This website does not use cookies or tracking technologies.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Contact
          </h2>
          <p>Email: nibofix@gmail.com</p>
        </>
      )}

      {/* =========================
          UKRAINIAN
      ========================= */}
      {lang === "ua" && (
        <>
          <h1 className="text-3xl font-bold mb-6">
            Політика конфіденційності
          </h1>

          <p className="mb-4 text-sm text-gray-500">
            Останнє оновлення: {today}
          </p>

          <p className="mb-4">
            NiBoFix Services обробляє персональні дані відповідно до
            Загального регламенту захисту даних (GDPR).
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Які дані ми збираємо
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Ім’я (необов’язково)</li>
            <li>Email (необов’язково)</li>
            <li>Телефон (необов’язково)</li>
            <li>Повідомлення</li>
            <li>Обрані послуги та орієнтовна ціна</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Мета обробки
          </h2>
          <p className="mb-4">
            Дані використовуються виключно для підготовки пропозиції та
            зв’язку з клієнтом.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Зберігання даних
          </h2>
          <p className="mb-4">
            Дані зберігаються лише протягом часу, необхідного для обробки
            запиту, та видаляються в розумний строк, якщо подальша
            комунікація не потрібна.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Ваші права
          </h2>
          <p className="mb-4">
            Ви маєте право на доступ, виправлення або видалення своїх
            персональних даних, а також право заперечувати проти їх
            обробки. Запити можна надсилати електронною поштою.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Cookies
          </h2>
          <p className="mb-4">
            Цей сайт не використовує cookies або технології відстеження.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Контакт
          </h2>
          <p>Email: nibofix@gmail.com</p>
        </>
      )}
    </section>
  );
}
