import { translations } from "@/lib/translations";
import { Lang } from "@/lib/lang";
import {
  Home,
  Hammer,
  Paintbrush,
  Armchair,
} from "lucide-react";

export default function ServicesStrip({ lang }: { lang: Lang }) {
  const items = translations[lang].servicesStrip;

  const icons = [
    <Paintbrush key="paint" />,
    <Home key="floor" />,
    <Hammer key="furniture" />,
    <Armchair key="sofa" />,
  ];

  return (
    <section className="relative w-full mt-5">
      {/* FULL-WIDTH GRAY STRIP */}
      <div className="relative">
        <div
          className="
            absolute left-1/2 right-1/2
            -ml-[50vw] -mr-[50vw]
            top-0 bottom-0
            bg-gray-100
          "
        />

        {/* HEIGHT HOLDER (keeps original spacing logic) */}
        <div className="relative py-10 md:h-36 md:py-0">
          {/* WHITE STRIP */}
          <div
            className="
              relative md:absolute
              md:left-1/2 md:top-1/2
              md:-translate-x-1/2 md:-translate-y-1/2
              w-full md:w-[100%] lg:w-[90%]
              max-w-[1700px]
              px-4
              z-20
            "
          >
            <div
              className="
                bg-white
                rounded-xl
                shadow-[0_20px_40px_rgba(0,0,0,0.18)]
                px-4 py-6
              "
            >
              <div className="relative">
                {/* MOBILE: CENTER VERTICAL DIVIDER */}
                <span className="absolute md:hidden left-1/2 top-0 h-full w-px bg-gray-300" />

                {/* GRID */}
                <div
                  className="
                    grid grid-cols-2 md:grid-cols-4
                    gap-y-2 gap-x-2
                    text-sm font-semibold text-gray-800
                  "
                >
                  {items.map((label, i) => (
                    <div
                      key={label}
                      title={label}
                      className="
                        flex flex-col md:flex-row
                        items-center justify-center
                        gap-3 md:gap-3
                        text-center md:text-left
                        relative
                      "
                    >
                      {/* ICON */}
                      <span className="text-blue-600 shrink-0">
                        {icons[i]}
                      </span>

                      {/* TEXT */}
                      <span className="whitespace-nowrap">
                        {label}
                      </span>

                      {/* DESKTOP DIVIDERS */}
                      {i < items.length - 1 && (
                        <span className="hidden md:block absolute right-0 h-6 w-px bg-gray-300" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
