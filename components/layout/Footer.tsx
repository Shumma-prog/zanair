import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigation, destinations } from "@/lib/content";

const COMPANY_LINKS = [
  { label: "About ZanAir", href: "/about" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Agent Portal", href: "/agent" },
];

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep-ocean" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-warm-white/10">

          {/* Col 1 — Logo + tagline */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="ZanAir — home" className="inline-block mb-5">
              <div className="relative w-[110px] h-[36px]">
                <Image
                  src="/zanair_logo.png"
                  alt="ZanAir"
                  fill
                  className="object-contain object-left"
                  sizes="110px"
                />
              </div>
            </Link>
            <p className="font-body text-sm text-warm-white/50 leading-relaxed mb-6 max-w-xs">
              {siteConfig.description}
            </p>
            <address className="not-italic space-y-1">
              <p className="font-body text-xs text-warm-white/35">
                {siteConfig.address}
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone.replace(/[\s()]/g, "")}`}
                  className="font-body text-xs text-warm-white/50 hover:text-warm-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-body text-xs text-warm-white/50 hover:text-warm-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>

          {/* Col 2 — Destinations */}
          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-warm-white/35 mb-5">
              Destinations
            </h3>
            <ul className="space-y-2.5" role="list">
              {destinations.slice(0, 7).map((dest) => (
                <li key={dest.slug}>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="font-body text-sm text-warm-white/55 hover:text-warm-white transition-colors min-h-[36px] inline-flex items-center"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/destinations"
                  className="font-body text-xs text-zanair-blue hover:text-warm-white transition-colors tracking-wide uppercase"
                >
                  All Destinations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-warm-white/35 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {[
                { label: "Scheduled Flights", href: "/services/scheduled-flights" },
                { label: "Charter Flights",   href: "/services/charter-flights" },
                { label: "Scenic Flights",    href: "/scenic-flights" },
                { label: "Transfers",         href: "/services/transfers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-warm-white/55 hover:text-warm-white transition-colors min-h-[36px] inline-flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Company */}
          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-warm-white/35 mb-5">
              Company
            </h3>
            <ul className="space-y-2.5" role="list">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-warm-white/55 hover:text-warm-white transition-colors min-h-[36px] inline-flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social row */}
        <div className="flex gap-6 mt-8">
          <a
            href="https://facebook.com/zanair"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ZanAir on Facebook"
            className="text-warm-white/40 hover:text-warm-white transition-colors min-h-[44px] min-w-[44px] flex items-center"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://instagram.com/zanair"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ZanAir on Instagram"
            className="text-warm-white/40 hover:text-warm-white transition-colors min-h-[44px] min-w-[44px] flex items-center"
          >
            <InstagramIcon />
          </a>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 pt-8 border-t border-warm-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-warm-white/30">
            &copy; {year} ZanAir. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-body text-xs text-warm-white/30 hover:text-warm-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/conditions"
              className="font-body text-xs text-warm-white/30 hover:text-warm-white/60 transition-colors"
            >
              Conditions of Carriage
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
