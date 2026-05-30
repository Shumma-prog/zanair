import type { Metadata } from "next";
import Link from "next/link";
import { about, siteConfig } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About ZanAir",
  description:
    "ZanAir was founded in 1991 by Carl G. Salisbury at Zanzibar International Airport. East Africa's most experienced boutique airline — 35+ years of flying Tanzania's extraordinary destinations.",
  alternates: { canonical: "https://zanair.com/about" },
};

// Pair each story paragraph with a chapter year + title
const CHAPTERS = [
  { year: "1991", title: "How it started." },
  { year: "2000s", title: "Growing the network." },
  { year: "2010s", title: "Sister company ZanTours." },
  { year: "Today", title: "The scenic flights programme." },
] as const;

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="pb-20">
        {/* Hero */}
        <section className="bg-page-white py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-12">
              <ol className="flex items-center gap-2 text-sm text-gray-400" role="list">
                <li><Link href="/" className="hover:text-deep-ocean transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-deep-ocean">About</li>
              </ol>
            </nav>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
              Our Story
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-normal italic text-deep-ocean leading-[1.05] max-w-3xl mb-6">
              {about.headline}
            </h1>
            <p className="font-body text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
              {about.subheadline}
            </p>
          </div>
        </section>

        {/* Timeline / History */}
        <section className="bg-page-off py-24" aria-label="ZanAir history">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
              <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
                Est. {siteConfig.founded}
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-normal italic text-deep-ocean max-w-2xl">
                {about.team.headline}
              </h2>
            </div>

            <div className="space-y-0">
              {about.story.map((para, i) => (
                <div
                  key={i}
                  className={[
                    "grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 items-start pb-16 mb-16",
                    i < about.story.length - 1 ? "border-b border-gray-100" : "",
                  ].join(" ")}
                >
                  <div className="font-display text-5xl font-normal italic text-zanair-blue/30 leading-none">
                    {CHAPTERS[i]?.year}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-normal italic text-deep-ocean mb-4">
                      {CHAPTERS[i]?.title}
                    </h3>
                    <p className="font-body text-base text-gray-600 leading-relaxed max-w-2xl">
                      {para}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-page-white py-24" aria-label="ZanAir values">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
                What We Believe
              </p>
              <h2 className="font-display text-4xl font-normal italic text-deep-ocean max-w-xl">
                Why small is the right size.
              </h2>
            </div>

            <ul
              className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100"
              role="list"
            >
              {about.values.map((val) => (
                <li key={val.title} className="bg-white p-10">
                  <h3 className="font-display text-xl font-normal italic text-deep-ocean mb-3">
                    {val.title}
                  </h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {val.body}
                  </p>
                </li>
              ))}
              {/* 4th cell for visual balance */}
              <li className="bg-page-off p-10 hidden md:block">
                <p className="font-display text-4xl italic text-zanair-blue/10 leading-tight select-none">
                  Est.{"\n"}1991
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ZanTours section */}
        <section className="bg-zanair-blue py-20" aria-label="ZanTours sister company">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-white/60 mb-4">
              Sister Company
            </p>
            <h2 className="font-display text-4xl font-normal italic text-white mb-8">
              ZanAir and ZanTours. One journey.
            </h2>
            <p className="font-body text-base text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
              ZanAir&apos;s sister company, ZanTours, provides ground transport, tours, and
              destination services on Zanzibar — offering passengers an end-to-end
              connection from the moment they land to the moment they board their return
              flight.
            </p>
            <a
              href="https://zantours.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-zanair-blue font-body text-sm tracking-wide uppercase rounded hover:bg-white/90 transition-opacity min-h-[52px]"
            >
              Visit ZanTours →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
