import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/content";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title: "Destinations",
  description:
    "ZanAir flies to 11 destinations across Tanzania — Serengeti, Zanzibar, Ngorongoro, Selous, Pemba, Mafia, Arusha, Lake Manyara, Tarangire, and the Northern Circuit. Est. 1991.",
  path: "/destinations",
});

const FALLBACK: Record<string, string> = {
  serengeti:     "linear-gradient(135deg, #1a3a1a, #2d5a1b)",
  zanzibar:      "linear-gradient(135deg, #0a2533, #0d4a6b)",
  ngorongoro:    "linear-gradient(135deg, #2a1a0a, #4a3010)",
  selous:        "linear-gradient(135deg, #1a2a0a, #3a4a20)",
  pemba:         "linear-gradient(135deg, #0a1a2a, #0a3a4a)",
  mafia:         "linear-gradient(135deg, #0a1a2a, #0d3a5a)",
  arusha:        "linear-gradient(135deg, #1a1a2a, #2a2a4a)",
  "lake-manyara":"linear-gradient(135deg, #0a2a1a, #0a4a2a)",
  tarangire:     "linear-gradient(135deg, #2a1a0a, #5a3a10)",
  "dar-es-salaam":"linear-gradient(135deg, #0a1a33, #0a3355)",
  ruaha:         "linear-gradient(135deg, #2a1a10, #4a2a10)",
};

export default function DestinationsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <p className="sr-only">
        ZanAir serves 11 destinations across Tanzania from Zanzibar International Airport:
        Serengeti National Park (5 airstrips), Zanzibar Island, Ngorongoro Conservation Area,
        Selous Game Reserve (Nyerere National Park), Pemba Island, Mafia Island, Arusha,
        Lake Manyara, Tarangire, and the Northern Circuit. Operating since 1991.
      </p>

      {/* Hero */}
      <section className="bg-page-white pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-gray-400 tracking-wide" role="list">
              <li><Link href="/" className="hover:text-deep-ocean transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-deep-ocean">Destinations</li>
            </ol>
          </nav>

          <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
            Where We Fly
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-normal italic text-deep-ocean leading-[1.05] mb-6">
            11 destinations.
            <br />
            Every one worth the flight.
          </h1>
          <p className="font-body text-lg text-gray-500 max-w-2xl">
            From the Serengeti&apos;s endless plains to the hidden reef of Pemba Island —
            ZanAir connects East Africa&apos;s most extraordinary places.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-page-off py-16" aria-label="All ZanAir destinations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            {destinations.map((dest) => (
              <li key={dest.slug}>
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="group relative overflow-hidden rounded-sm block aspect-[4/3] bg-gray-100 cursor-pointer"
                  aria-label={`Fly to ${dest.name} with ZanAir`}
                >
                  {/* Fallback gradient */}
                  <div
                    className="absolute inset-0 z-0"
                    style={{ background: FALLBACK[dest.slug] ?? FALLBACK.serengeti }}
                    aria-hidden="true"
                  />

                  {/* Photo */}
                  <Image
                    src={`/images/destinations/${dest.slug}.jpg`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover z-[1] group-hover:scale-105 transition-transform duration-700"
                    alt={`${dest.name} — ZanAir flights from Zanzibar International Airport`}
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 z-[2]"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 30%, rgba(10,37,51,0.80) 100%)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-[3]">
                    <p className="font-body text-xs tracking-widest uppercase text-white/60 mb-2">
                      {dest.badge}
                    </p>
                    <h2 className="font-display text-2xl font-normal italic text-white mb-1">
                      {dest.name}
                    </h2>
                    <p className="font-body text-xs text-white/50">
                      {dest.duration.split("from")[0].trim()}
                    </p>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 font-body text-xs tracking-widest uppercase text-white/80">
                      Discover →
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
