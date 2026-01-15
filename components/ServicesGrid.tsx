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
          {/* TITLE ROW WITH LINES */}
          <div className="flex items-center gap-6 justify-center">
            {/* LEFT LINE */}
            <span className="hidden md:block flex-1 h-px bg-gray-300 translate-y-[3px]" />

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#2e7d6f] whitespace-nowrap">
              {t.nav.services}
            </h2>

            {/* RIGHT LINE */}
            <span className="hidden md:block flex-1 h-px bg-gray-300 translate-y-[3px]" />
          </div>

          {/* SUBTITLE */}
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
                <div
                  key={key}
                  className="
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    border border-gray-100
                    shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                    hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]
                    transition-shadow
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="h-60 md:h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  />

                  {/* CONTENT */}
                  <div className="p-7 md:p-8">
                    <h3 className="font-bold text-lg md:text-xl text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
