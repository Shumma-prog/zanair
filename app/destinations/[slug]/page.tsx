import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { destinations, siteConfig } from "@/lib/content";
import { generatePageMetadata } from "@/lib/metadata";
import { destinationSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

const FALLBACK: Record<string, string> = {
  serengeti:      "linear-gradient(135deg, #1a3a1a, #2d5a1b)",
  zanzibar:       "linear-gradient(135deg, #0a2533, #0d4a6b)",
  ngorongoro:     "linear-gradient(135deg, #2a1a0a, #4a3010)",
  selous:         "linear-gradient(135deg, #1a2a0a, #3a4a20)",
  pemba:          "linear-gradient(135deg, #0a1a2a, #0a3a4a)",
  mafia:          "linear-gradient(135deg, #0a1a2a, #0d3a5a)",
  arusha:         "linear-gradient(135deg, #1a1a2a, #2a2a4a)",
  "lake-manyara": "linear-gradient(135deg, #0a2a1a, #0a4a2a)",
  tarangire:      "linear-gradient(135deg, #2a1a0a, #5a3a10)",
  "dar-es-salaam":"linear-gradient(135deg, #0a1a33, #0a3355)",
  ruaha:          "linear-gradient(135deg, #2a1a10, #4a2a10)",
};

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return {};
  return generatePageMetadata({
    title: dest.seo.title,
    description: dest.seo.description,
    path: "/destinations/" + dest.slug,
  });
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) notFound();

  const destSchema = destinationSchema({
    name: dest.name,
    slug: dest.slug,
    description: dest.body.split("\n")[0],
    intro: dest.intro,
    latitude: dest.latitude,
    longitude: dest.longitude,
    bestTime: dest.bestTime,
    badge: dest.badge,
  });
  const crumbSchema = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: dest.name, href: "/destinations/" + dest.slug },
  ]);

  // Resolve connected destinations
  const connected = (dest.connectedDestinations ?? [])
    .map((s) => destinations.find((d) => d.slug === s))
    .filter(Boolean) as typeof destinations;

  const headlineParts = dest.heroHeadline.split("\\n");
  const bodyParagraphs = dest.body.split("\n\n");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(destSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }} />
      {dest.geoFAQ?.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(dest.geoFAQ)) }} />
      )}

      {/* ── HERO ── */}
      <section className="bg-page-white pt-12 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-gray-400 tracking-wide" role="list">
              <li><Link href="/" className="hover:text-deep-ocean transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/destinations" className="hover:text-deep-ocean transition-colors">Destinations</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-deep-ocean">{dest.name}</li>
            </ol>
          </nav>

          <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
            {dest.badge}
          </p>

          <h1 className="font-display text-5xl md:text-7xl font-normal italic text-deep-ocean leading-[1.05] mb-6">
            {headlineParts.map((line, i) => (
              <span key={i}>
                {line}
                {i < headlineParts.length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Flight info strip */}
          <div className="flex flex-wrap gap-8 mt-8 mb-0 border-t border-gray-100 pt-6">
            {[
              { label: "Flying From", value: dest.flightFrom },
              { label: "Flight Duration", value: dest.duration },
              { label: "Best Time", value: dest.bestTime },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-body text-xs tracking-widest uppercase text-gray-400 mb-1">
                  {item.label}
                </span>
                <span className="font-body text-sm text-deep-ocean font-medium max-w-xs">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image — full width, cinematic */}
        <div
          className="relative mt-12 w-full"
          style={{ aspectRatio: "21/9" }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{ background: FALLBACK[dest.slug] ?? FALLBACK.serengeti }}
            aria-hidden="true"
          />
          <Image
            src={`/images/destinations/${dest.slug}.jpg`}
            fill
            priority
            className="object-cover z-[1]"
            alt={`${dest.name} aerial view — ZanAir`}
            sizes="100vw"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-page-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-display text-2xl md:text-3xl font-normal italic text-deep-ocean leading-relaxed mb-8">
            {dest.intro}
          </p>
          <div className="space-y-4">
            {bodyParagraphs.map((para, i) => (
              <p key={i} className="font-body text-base text-gray-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO SEE ── */}
      <section className="bg-page-off py-20" aria-label="Highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
            What To See
          </p>
          <h2 className="font-display text-3xl font-normal italic text-deep-ocean mb-12">
            Highlights
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
            {dest.whatToSee.map((item) => (
              <li key={item.title} className="bg-page-white p-8 rounded-sm border border-gray-100">
                <h3 className="font-display text-xl font-normal italic text-deep-ocean mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── BEST TIME TO VISIT ── */}
      <section className="bg-page-white py-20" aria-label="Best time to visit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-normal italic text-deep-ocean mb-12">
            When to visit {dest.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zanair-blue/5 border border-zanair-blue/20 p-8 rounded-sm">
              <p className="font-body text-xs tracking-widest uppercase text-zanair-blue mb-3">
                Peak Season
              </p>
              <p className="font-body text-sm text-gray-700 leading-relaxed">
                {dest.bestTimeDetail.peak}
              </p>
            </div>
            <div className="bg-page-off border border-gray-100 p-8 rounded-sm">
              <p className="font-body text-xs tracking-widest uppercase text-gray-500 mb-3">
                Alternative Season
              </p>
              <p className="font-body text-sm text-gray-700 leading-relaxed">
                {dest.bestTimeDetail.alternative}
              </p>
            </div>
            <div className="bg-page-off border border-gray-100 p-8 rounded-sm">
              <p className="font-body text-xs tracking-widest uppercase text-gray-500 mb-3">
                Good To Know
              </p>
              <p className="font-body text-sm text-gray-700 leading-relaxed">
                {dest.bestTimeDetail.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GEO FAQ ── */}
      {dest.geoFAQ?.length > 0 && (
        <section className="bg-page-white py-20" aria-label="Frequently asked questions">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
              Frequently Asked
            </p>
            <h2 className="font-display text-3xl font-normal italic text-deep-ocean mb-12">
              Questions about flying to {dest.name}
            </h2>
            <dl className="divide-y divide-gray-100">
              {dest.geoFAQ.map((item) => (
                <div key={item.q} className="py-6">
                  <dt className="font-body text-base font-medium text-deep-ocean mb-3">
                    {item.q}
                  </dt>
                  <dd className="font-body text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ── CONNECTED DESTINATIONS ── */}
      {connected.length > 0 && (
        <section className="bg-page-off py-20" aria-label="Connected destinations">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
              Combine With
            </p>
            <h2 className="font-display text-3xl font-normal italic text-deep-ocean mb-12">
              Connected destinations
            </h2>
            <ul className="flex flex-wrap gap-4" role="list">
              {connected.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/destinations/${c.slug}`}
                    className="block bg-page-white border border-gray-100 px-6 py-4 rounded-sm hover:border-zanair-blue/40 transition-colors"
                  >
                    <span className="font-display text-lg italic text-deep-ocean">
                      {c.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── BOOK CTA ── */}
      <section className="bg-zanair-blue py-20 text-center" aria-label="Book this route">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-normal italic text-white mb-6">
            Ready to fly to {dest.name}?
          </h2>
          <p className="font-body text-base text-white/80 mb-10 leading-relaxed">
            Scheduled and charter flights available.
            <br />
            Contact our reservations team to book.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange text-white font-body text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity min-h-[52px]"
            >
              Book a Flight
            </Link>
            <Link
              href="/services/charter-flights"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/40 text-white font-body text-sm tracking-wide uppercase rounded hover:border-white/80 hover:bg-white/5 transition-colors min-h-[52px]"
            >
              Request Charter
            </Link>
          </div>
          <p className="mt-8 font-body text-sm text-white/50">
            {siteConfig.phone} &nbsp;·&nbsp; {siteConfig.email}
          </p>
        </div>
      </section>
    </>
  );
}
