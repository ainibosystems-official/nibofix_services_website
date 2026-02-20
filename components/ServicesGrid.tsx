import Link from "next/link";
import { translations } from "@/lib/translations";
import { Lang } from "@/lib/lang";

export default function ServicesGrid({ lang }: { lang: Lang }) {
  const t = translations[lang];

  const services = [
    { key: "painting", image: "/images/service-painting.jpg" },
    { key: "flooring", image: "/images/service-flooring.jpg" },
    { key: "furniture", image: "/images/service-furniture.jpg" },
    { key: "upholstery", image: "/images/service-upholstery.jpg" },
    { key: "windows", image: "/images/service-windows.jpg" },
    { key: "deepCleaning", image: "/images/service-cleaning.jpg" },
  ] as const;

  return (
    <section
      id="services"
      className="scroll-mt-32 pt-24 pb-16 bg-white"
    >
      {/* =========================
          WHITE HEADER STRIP
      ========================= */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center gap-6 justify-center">
            <span className="hidden md:block flex-1 h-px bg-gray-300 translate-y-[3px]" />

            <h2 className="text-3xl md:text-4xl font-bold text-[#2e7d6f] whitespace-nowrap">
              {t.nav.services}
            </h2>

            <span className="hidden md:block flex-1 h-px bg-gray-300 translate-y-[3px]" />
          </div>

          <p className="mt-4 text-lg font-semibold text-gray-600">
            {t.hero.subtitle}
          </p>
        </div>
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

        {/* WIDE CONTENT CONTAINER */}
        <div
          className="
            relative
            max-w-7xl
            lg:max-w-[90rem]
            xl:max-w-[110rem]
            2xl:max-w-[128rem]
            mx-auto
            px-6 lg:px-12 xl:px-16
            py-16
          "
        >
          <div className="grid gap-10 lg:gap-14 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ key, image }) => {
              const service = t.servicesGrid[key];

              return (
                <Link
                  key={key}
                  href={`/${lang}/services/${key}`}
                  className="
                    group
                    relative
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    border border-gray-100
                    shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:scale-[1.02]
                    hover:shadow-[0_35px_70px_rgba(0,0,0,0.22)]
                    cursor-pointer
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="relative h-60 md:h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    {/* Hover overlay */}
                    <div
                      className="
                        absolute inset-0
                        bg-black/0
                        group-hover:bg-black/10
                        transition
                      "
                    />

                    {/* Arrow hint */}
                    <div
                      className="
                        absolute bottom-4 right-4
                        bg-white/90
                        text-[#2e7d6f]
                        rounded-full
                        w-10 h-10
                        flex items-center justify-center
                        opacity-0
                        translate-y-2
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        transition
                        shadow
                        text-lg
                        font-bold
                      "
                    >
                      →
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7 md:p-8">
                    <h3 className="font-bold text-lg md:text-xl text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <p
                      className="
                        mt-4
                        text-sm
                        font-semibold
                        text-[#2e7d6f]
                        opacity-70
                        group-hover:opacity-100
                        transition
                      "
                    >
                      {t.learnMore}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
