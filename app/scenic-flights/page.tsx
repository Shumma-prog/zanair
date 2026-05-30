import type { Metadata } from "next";
import Link from "next/link";
import { scenicFlights, siteConfig } from "@/lib/content";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Scenic Flights Zanzibar | ZanAir Exclusive",
  description:
    "ZanAir is the only carrier authorised to operate scenic aerial tours over Zanzibar. 30-minute flights over Stone Town, the reef, and the Indian Ocean coast. Book now.",
  alternates: { canonical: "https://zanair.com/scenic-flights" },
};

export default function ScenicsPage() {
  const svcSchema = serviceSchema({
    name: "Scenic Flights over Zanzibar",
    description: scenicFlights.subheadline,
    slug: "scenic-flights",
  });
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Scenic Flights", href: "/scenic-flights" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="pb-20">
        {/* Hero */}
        <section className="bg-page-white py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-gray-400" role="list">
                <li><Link href="/" className="hover:text-deep-ocean transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-deep-ocean">Scenic Flights</li>
              </ol>
            </nav>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
              {scenicFlights.eyebrow}
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-normal italic text-deep-ocean leading-tight whitespace-pre-line mb-6">
              {scenicFlights.headline}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
              {scenicFlights.subheadline}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange text-white font-body text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity min-h-[52px]"
            >
              Book a Scenic Flight
            </Link>
          </div>
        </section>

        {/* Experiences */}
        <section className="py-16 md:py-20 bg-page-off" aria-label="Scenic flight routes">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-4xl font-normal italic text-deep-ocean mb-10">
              Choose your experience.
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
              {scenicFlights.experiences.map((exp) => (
                <li key={exp.title} className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-xl font-normal italic text-deep-ocean">{exp.title}</h3>
                    <span className="font-body text-xs text-zanair-blue tracking-widest uppercase border border-zanair-blue/30 px-2 py-1 rounded">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 bg-page-white border-y border-gray-100" aria-label="What's included">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-normal italic text-deep-ocean mb-8">
              What&apos;s included.
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
              {scenicFlights.included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-zanair-blue mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-16 md:py-20 bg-page-off" aria-label="Book scenic flight">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-display text-4xl font-normal italic text-deep-ocean mb-3">
              {scenicFlights.pricing.from}
            </p>
            <p className="text-sm text-gray-500 mb-2">{scenicFlights.pricing.note}</p>
            <p className="text-xs text-gray-400 mb-8">{scenicFlights.bookingNote}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange text-white font-body text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity min-h-[52px]"
              >
                Book a Scenic Flight
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                className="text-sm text-gray-500 hover:text-deep-ocean transition-colors min-h-[44px] inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ZanAir"
              >
                WhatsApp us →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
