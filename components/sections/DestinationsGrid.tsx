{/* Owner: add destination photos at
   public/images/destinations/serengeti.jpg
   public/images/destinations/zanzibar.jpg
   public/images/destinations/ngorongoro.jpg
   public/images/destinations/selous.jpg
   public/images/destinations/pemba.jpg
   Min 1200x800px each */}

import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/lib/content";

// Gradient fallbacks — shown until real photography is added
const FALLBACK: Record<string, string> = {
  serengeti:  "linear-gradient(135deg, #1a3a1a, #2d5a1b)",
  zanzibar:   "linear-gradient(135deg, #0a2533, #0d4a6b)",
  ngorongoro: "linear-gradient(135deg, #2a1a0a, #4a3010)",
  selous:     "linear-gradient(135deg, #1a2a0a, #3a4a20)",
  pemba:      "linear-gradient(135deg, #0a1a2a, #0a3a4a)",
};

const BOTTOM_GRADIENT =
  "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.75) 100%)";

// First 5 destinations only — asymmetric 5-card layout
const FEATURED = destinations.slice(0, 5);

function DestCard({
  dest,
  aspectClass,
  colClass = "",
  sizes,
  eager = false,
}: {
  dest: (typeof destinations)[0];
  aspectClass: string;
  colClass?: string;
  sizes: string;
  eager?: boolean;
}) {
  return (
    <li className={colClass}>
      <Link
        href={`/destinations/${dest.slug}`}
        className={`group relative overflow-hidden block ${aspectClass} w-full`}
        aria-label={`Fly to ${dest.name} with ZanAir`}
      >
        {/* Fallback gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: FALLBACK[dest.slug] ?? FALLBACK.serengeti }}
          aria-hidden="true"
        />

        {/* Destination photo — covers fallback when present */}
        <Image
          src={`/images/destinations/${dest.slug}.jpg`}
          fill
          sizes={sizes}
          className="object-cover z-[1]"
          alt={`${dest.name} — ZanAir flights`}
          loading={eager ? "eager" : "lazy"}
        />

        {/* Dark overlay from bottom */}
        <div
          className="absolute inset-0 z-[2]"
          style={{ background: BOTTOM_GRADIENT }}
          aria-hidden="true"
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 z-[3] bg-deep-ocean/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden="true"
        />

        {/* Text content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-[4]">
          <span className="font-body text-xs tracking-widest uppercase text-warm-white/50 mb-2 block">
            {dest.badge}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-normal italic text-warm-white mb-1 leading-tight">
            {dest.name}
          </h3>
          <p className="font-body text-xs text-warm-white/60">
            {dest.tagline}
          </p>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 font-body text-xs tracking-widest uppercase text-warm-white/70 block">
            Discover →
          </span>
        </div>
      </Link>
    </li>
  );
}

export default function DestinationsGrid() {
  const [serengeti, zanzibar, ngorongoro, selous, pemba] = FEATURED;

  return (
    <section
      className="py-24 md:py-32 bg-page-white"
      aria-label="ZanAir destinations"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
              Where We Fly
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-normal italic text-deep-ocean">
              Every destination we fly to.
            </h2>
          </div>
          <Link
            href="/destinations"
            className="hidden md:inline-flex items-center font-body text-sm tracking-widest uppercase text-gray-500 hover:text-deep-ocean transition-colors duration-200 min-h-[44px] pb-1 border-b border-gray-300 hover:border-deep-ocean"
          >
            All Destinations →
          </Link>
        </div>
      </div>

      {/* Magazine grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Row 1: Serengeti (2/3) + Zanzibar (1/3) */}
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E3]"
          role="list"
        >
          <DestCard
            dest={serengeti}
            aspectClass="aspect-[4/3] md:aspect-[16/9]"
            colClass="col-span-1 md:col-span-2"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
            eager
          />
          <DestCard
            dest={zanzibar}
            aspectClass="aspect-[4/3] md:aspect-[3/4]"
            colClass="col-span-1"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </ul>

        {/* Row 2: Ngorongoro (1/3) + Selous (1/3) + Pemba (1/3) */}
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E3] mt-px"
          role="list"
        >
          <DestCard
            dest={ngorongoro}
            aspectClass="aspect-[4/3] md:aspect-[3/4]"
            colClass="col-span-1"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <DestCard
            dest={selous}
            aspectClass="aspect-[4/3] md:aspect-square"
            colClass="col-span-1"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <DestCard
            dest={pemba}
            aspectClass="aspect-[4/3] md:aspect-square"
            colClass="col-span-1"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </ul>

        {/* Mobile "all destinations" link */}
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/destinations"
            className="font-body text-sm tracking-widest uppercase text-gray-500 hover:text-deep-ocean transition-colors duration-200 inline-flex items-center gap-2 min-h-[44px]"
          >
            All Destinations →
          </Link>
        </div>
      </div>
    </section>
  );
}
