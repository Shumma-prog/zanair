import Image from "next/image";
import Link from "next/link";
import { fleet } from "@/lib/content";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Our Fleet",
  description:
    "ZanAir operates Cessna Grand Caravans, Cessna 404 Titan, and Cessna 207 Skywagon aircraft from Zanzibar International Airport. Small aircraft built for East Africa's bush airstrips.",
  path: "/fleet",
});

// Map slugs to image paths as stored in fleet data
// Maps fleet slugs (from content.ts) to actual image files present on disk
const IMAGE_PATHS: Record<string, string> = {
  "cessna-404":     "/images/fleet/piper-seneca.jpg",   // twin-engine proxy
  "cessna-caravan": "/images/fleet/cessna-caravan.jpg", // ✓ exact match
  "cessna-207":     "/images/fleet/cessna-206.jpg",     // single-engine proxy
};

export default function FleetPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Fleet", href: "/fleet" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── HERO ── */}
      <section className="bg-page-white pt-12 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-gray-400 tracking-wide" role="list">
              <li><Link href="/" className="hover:text-deep-ocean transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-deep-ocean">Fleet</li>
            </ol>
          </nav>

          <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
            Our Aircraft
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-normal italic text-deep-ocean leading-[1.05]">
            Three aircraft.
            <br />
            Every airstrip in Tanzania.
          </h1>
          <p className="font-body text-lg text-gray-500 max-w-2xl mt-6">
            ZanAir's fleet is purpose-built for East Africa — Cessna aircraft that land on
            grass, gravel, and paved runways with equal reliability. Maintained to Tanzania
            Civil Aviation Authority standards since 1991.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-page-off py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-base text-gray-600 leading-relaxed">
            Small aircraft are not a compromise — they are the only way to reach the
            Serengeti&apos;s bush airstrips, Ruaha&apos;s remote approaches, and the narrow
            grass strips used by East Africa&apos;s finest lodges. Every aircraft in the
            ZanAir fleet was chosen for the routes it serves.
          </p>
        </div>
      </section>

      {/* ── AIRCRAFT ── */}
      <section className="bg-page-white py-20" aria-label="ZanAir fleet">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {fleet.map((aircraft, i) => {
            const isOdd = i % 2 === 1;
            const imgPath = IMAGE_PATHS[aircraft.slug];

            return (
              <article
                key={aircraft.slug}
                className={[
                  "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                  "mb-20 pb-20",
                  i < fleet.length - 1 ? "border-b border-gray-100" : "",
                ].join(" ")}
              >
                {/* Image */}
                <div className={isOdd ? "md:order-last" : ""}>
                  <div className="relative aspect-[4/3] bg-page-off rounded-sm overflow-hidden">
                    {/* Fallback */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center">
                      <span className="font-display text-4xl italic text-gray-200">
                        {aircraft.name}
                      </span>
                    </div>
                    <Image
                      src={imgPath}
                      fill
                      className="object-cover z-[1]"
                      alt={`${aircraft.name} — ZanAir fleet`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-zanair-blue mb-4">
                    {aircraft.type}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl font-normal italic text-deep-ocean mb-4">
                    {aircraft.name}
                  </h2>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-8 mb-6">
                    {[
                      { label: "Capacity", value: `${aircraft.seats} passengers` },
                      { label: "Range", value: aircraft.range },
                      { label: "Cruise Speed", value: aircraft.cruiseSpeed },
                    ].map((spec) => (
                      <div key={spec.label}>
                        <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-1">
                          {spec.label}
                        </p>
                        <p className="font-body text-sm font-medium text-deep-ocean">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                    {aircraft.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {aircraft.usedFor.map((use) => (
                      <span
                        key={use}
                        className="font-body text-xs text-zanair-blue border border-zanair-blue/30 px-3 py-1 rounded-full"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── SAFETY ── */}
      <section className="bg-zanair-blue py-20 text-center" aria-label="Safety record">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-white/60 mb-4">
            Safety &amp; Standards
          </p>
          <h2 className="font-display text-4xl font-normal italic text-white mb-8">
            35 years. Every aircraft maintained to standard.
          </h2>
          <p className="font-body text-base text-white/80 leading-relaxed">
            ZanAir operates under the full oversight of the Tanzania Civil Aviation
            Authority. All aircraft are maintained to international airworthiness
            standards. ZanAir pilots hold TCAA commercial licences with type ratings
            specific to each aircraft in the fleet. Our maintenance record reflects
            35 years of continuous operations — without interruption.
          </p>
        </div>
      </section>
    </>
  );
}
