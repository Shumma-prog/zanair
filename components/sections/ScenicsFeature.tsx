// Owner: add scenic flight aerial photo at public/images/scenic.jpg

import Link from "next/link";
import Image from "next/image";
import { homepage } from "@/lib/content";

export default function ScenicsFeature() {
  const { scenicFlightsFeature } = homepage;

  return (
    <section
      className="bg-page-off py-24 md:py-32"
      aria-label="ZanAir scenic flights"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT — content */}
          <div>
            {/* Accent line */}
            <div className="w-12 h-px bg-zanair-blue mb-8" aria-hidden="true" />

            {/* Eyebrow */}
            <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
              {scenicFlightsFeature.eyebrow}
            </p>

            {/* Headline */}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal italic text-deep-ocean leading-[1.05] mb-8">
              {scenicFlightsFeature.headline}
            </h2>

            {/* Body */}
            <p className="font-body text-base text-gray-600 leading-relaxed mb-4 max-w-lg">
              {scenicFlightsFeature.body}
            </p>

            {/* Note */}
            <p className="font-body text-xs tracking-widest uppercase text-gray-500 mb-10">
              {scenicFlightsFeature.note}
            </p>

            {/* CTA */}
            <Link
              href="/scenic-flights"
              className="inline-flex items-center px-8 py-4 bg-orange text-white font-body text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity min-h-[52px]"
            >
              Book a Scenic Flight
            </Link>
          </div>

          {/* RIGHT — image */}
          <div className="relative w-full aspect-[4/5] bg-page-light rounded-sm border border-[#E5E5E3] overflow-hidden">
            {/* Fallback text */}
            <div
              className="absolute inset-0 flex items-center justify-center z-0"
              aria-hidden="true"
            >
              <p className="font-display text-6xl italic text-deep-ocean/5 text-center leading-tight whitespace-pre-line">
                {"Zanzibar\nFrom\nAbove"}
              </p>
            </div>

            <Image
              src="/images/scenic.jpg"
              fill
              className="object-cover object-center z-10"
              alt="Aerial view of Zanzibar Island from a ZanAir scenic flight"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
