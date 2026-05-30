import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { homepage } from "@/lib/content";

export default function Services() {
  const { services } = homepage;

  return (
    <section
      className="bg-page-white py-24 md:py-32"
      aria-label="ZanAir flight services"
    >
      <p className="sr-only">
        ZanAir operates four flight services from Zanzibar International Airport:
        scheduled flights across Tanzania, private charter flights to any East
        African airstrip, 30-minute scenic flights over Zanzibar Island, and
        airport transfer coordination through ZanTours. ZanAir has operated these
        services continuously since 1991.
      </p>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
          {services.eyebrow}
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-normal italic text-deep-ocean max-w-xl">
          {services.headline}
        </h2>
      </div>

      {/* Grid */}
      <ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E5E5E3]"
        role="list"
      >
        {services.items.map((service, i) => {
          const isScenic = !!service.highlight;

          return (
            <li key={service.slug}>
              <Link
                href={service.href}
                className={[
                  "group flex flex-col min-h-[320px] p-8 md:p-10",
                  "border-r border-b border-[#E5E5E3]",
                  "transition-colors duration-300 cursor-pointer",
                  isScenic
                    ? "bg-white hover:bg-page-off border-t-[3px] border-t-zanair-blue"
                    : "bg-page-off hover:bg-page-light",
                ].join(" ")}
              >
                {/* Number */}
                <span className="font-body text-xs tracking-widest text-gray-300 mb-8">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl font-normal italic text-deep-ocean mb-3">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p
                  className={[
                    "font-body text-sm mb-4",
                    isScenic ? "text-zanair-blue" : "text-gray-500",
                  ].join(" ")}
                >
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="font-body text-sm text-gray-500 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Bottom link */}
                <span
                  className={[
                    "mt-8 inline-flex items-center gap-2",
                    "font-body text-xs tracking-widest uppercase",
                    "text-gray-400 transition-colors duration-200",
                    isScenic
                      ? "group-hover:text-zanair-blue"
                      : "group-hover:text-deep-ocean",
                  ].join(" ")}
                >
                  Discover
                  <ChevronRight size={14} aria-hidden="true" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Bottom row */}
      <div className="border-t border-[#E5E5E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="font-body text-sm text-gray-500">
              Need something specific? We fly charter to any airstrip.
            </p>
            <Link
              href="/services/charter-flights"
              className="font-body text-sm text-gray-600 tracking-widest uppercase hover:text-deep-ocean transition-colors duration-200 inline-flex items-center gap-2 min-h-[44px]"
            >
              Request Charter
              <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
