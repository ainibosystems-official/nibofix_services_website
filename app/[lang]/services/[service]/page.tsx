import Link from "next/link";
import { translations } from "@/lib/translations";
import { Lang } from "@/lib/lang";

type Props = {
  params: Promise<{
    lang: Lang;
    service: string;
  }>;
};

type ServiceDetails = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  prices: string[];
  discounts?: string[];
};

type ServicePageT = {
  hero: { cta: string };
  discounts: { title: string };
  servicesDetails: Record<string, ServiceDetails>;
};

function isServicePageT(x: unknown): x is ServicePageT {
  if (!x || typeof x !== "object") return false;
  const obj = x as any;

  return (
    obj.hero?.cta &&
    obj.discounts?.title &&
    obj.servicesDetails &&
    typeof obj.servicesDetails === "object"
  );
}

export default async function ServicePage({ params }: Props) {
  const { lang, service } = await params;

  const raw = translations[lang];

  if (!isServicePageT(raw)) {
    return (
      <section className="pt-32 pb-20 bg-white text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Service page translations are missing
        </h1>

        <Link
          href={`/${lang}`}
          className="inline-block mt-6 bg-[#2e7d6f] hover:bg-[#256b60] text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Back to homepage
        </Link>
      </section>
    );
  }

  const data = raw.servicesDetails[service];

  if (!data) {
    return (
      <section className="pt-32 pb-20 bg-white text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Service not found
        </h1>

        <Link
          href={`/${lang}#services`}
          className="inline-block mt-6 bg-[#2e7d6f] hover:bg-[#256b60] text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Back to services
        </Link>
      </section>
    );
  }

  return (
    <section className="scroll-mt-32 pt-32 pb-20 bg-white">
      {/* =========================
          HERO / HEADER
      ========================= */}
      <div className="
        max-w-7xl
        lg:max-w-[90rem]
        xl:max-w-[110rem]
        2xl:max-w-[128rem]
        mx-auto
        px-6 lg:px-12 xl:px-16
        mb-20
        text-center
      ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2e7d6f]">
          {data.title}
        </h1>

        <p className="mt-6 text-lg md:text-xl font-semibold text-gray-600">
          {data.subtitle}
        </p>
      </div>

      {/* =========================
          GRAY CONTENT STRIP
      ========================= */}
      <div className="relative">
        {/* FULL-WIDTH GRAY BACKGROUND */}
        <div
          className="
            absolute left-1/2 right-1/2
            -ml-[50vw] -mr-[50vw]
            inset-y-0
            bg-gray-100
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            max-w-7xl
            lg:max-w-[90rem]
            xl:max-w-[110rem]
            2xl:max-w-[128rem]
            mx-auto
            px-6 lg:px-12 xl:px-16
            py-20
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
            {/* IMAGE */}
            <div className="w-full h-full">
              <img
                src={data.image}
                alt={data.title}
                className="
                  w-full
                  h-full
                  rounded-2xl
                  shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                  object-cover
                "
              />
            </div>

            {/* TEXT */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {data.description}
              </p>

              {/* PRICES */}
              <div className="space-y-2">
                {data.prices.map((p, i) => (
                  <p key={i} className="text-gray-900 font-medium">
                    • {p}
                  </p>
                ))}
              </div>

              {/* DISCOUNTS */}
              {data.discounts && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-bold text-green-700 mb-2">
                    {raw.discounts.title}
                  </h4>

                  <ul className="space-y-1 text-green-700 text-sm">
                    {data.discounts.map((d, i) => (
                      <li key={i}>✔ {d}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <Link
                href={`/${lang}#prices`}
                className="
    mt-4
    inline-block
    bg-[#3B82F6]
    hover:bg-[#2563EB]
    text-white
    font-semibold
    px-6
    py-3
    rounded-xl
    transition
    w-fit
    mx-auto
    md:mx-0
  "
              >
                {raw.hero.cta}
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
