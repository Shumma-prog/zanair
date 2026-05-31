"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://res.cloudinary.com/dmvpm094o/image/upload/f_auto,q_auto/Hero_ev3vgw"
          alt="Aerial view of Zanzibar"
          className="w-full h-full object-cover object-center animate-kenburns"
        />
      </div>

      {/* Strong dark overlay — sits above image */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Content — sits above overlay */}
      <div className="relative z-20 flex flex-col justify-end min-h-screen pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal italic text-white leading-[1.05] mb-6 drop-shadow-2xl">
              Where Roads End,{" "}
              <br />We Begin
            </h1>

            {/* Subheadline */}
            <p className="font-body text-base md:text-lg text-white/90 max-w-lg mb-10 leading-relaxed drop-shadow-lg">
              35 years connecting East Africa&apos;s most extraordinary places — from above.
              Scheduled flights, private charters, and scenic experiences across Tanzania
              and the islands.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="bg-orange text-white px-8 py-4 rounded font-body text-sm tracking-wide uppercase hover:opacity-90 transition min-h-[52px] flex items-center justify-center shadow-lg"
              >
                Book a Flight
              </Link>
              <Link
                href="/destinations"
                className="bg-transparent border border-white/60 text-white px-8 py-4 rounded font-body text-sm tracking-wide uppercase hover:border-white hover:bg-white/10 transition min-h-[52px] flex items-center justify-center"
              >
                Explore Destinations
              </Link>
            </div>

            {/* Booking widget */}
            <div
              className="rounded-xl p-4 md:p-5 max-w-2xl"
              style={{
                background: "rgba(0,0,0,0.30)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.20)",
              }}
            >
              <p className="font-body text-xs tracking-widest uppercase text-white/50 mb-3">
                Plan your flight
              </p>
              <div className="flex flex-col gap-3">
                <select
                  className="bg-black/40 border border-white/20 rounded px-4 py-3 text-white text-sm min-h-[48px] w-full focus:outline-none focus:border-zanair-blue/60 [color-scheme:dark]"
                  aria-label="Flying from"
                >
                  <option>Zanzibar</option>
                  <option>Dar es Salaam</option>
                  <option>Arusha</option>
                  <option>Pemba</option>
                  <option>Mafia</option>
                  <option>Serengeti</option>
                  <option>Selous</option>
                  <option>Lake Manyara</option>
                  <option>Tarangire</option>
                  <option>Ngorongoro (via Manyara)</option>
                  <option>Ruaha</option>
                </select>
                <select
                  className="bg-black/40 border border-white/20 rounded px-4 py-3 text-white text-sm min-h-[48px] w-full focus:outline-none focus:border-zanair-blue/60 [color-scheme:dark]"
                  aria-label="Flying to"
                >
                  <option value="">To…</option>
                  <option>Dar es Salaam</option>
                  <option>Arusha</option>
                  <option>Pemba</option>
                  <option>Mafia</option>
                  <option>Serengeti</option>
                  <option>Selous</option>
                  <option>Lake Manyara</option>
                  <option>Tarangire</option>
                  <option>Ngorongoro (via Manyara)</option>
                  <option>Ruaha</option>
                </select>
                <div className="flex gap-3">
                  <input
                    type="date"
                    className="bg-black/40 border border-white/20 rounded px-4 py-3 text-white text-sm min-h-[48px] flex-1 focus:outline-none [color-scheme:dark]"
                    aria-label="Travel date"
                  />
                  <select
                    className="bg-black/40 border border-white/20 rounded px-4 py-3 text-white text-sm min-h-[48px] flex-1 focus:outline-none [color-scheme:dark]"
                    aria-label="Passengers"
                  >
                    <option>1 Passenger</option>
                    <option>2 Passengers</option>
                    <option>3 Passengers</option>
                    <option>4 Passengers</option>
                    <option>5 Passengers</option>
                    <option>6 Passengers</option>
                    <option>7-12 (Charter)</option>
                  </select>
                </div>
                <Link
                  href="/contact"
                  className="bg-orange text-white px-6 py-3 rounded font-body text-sm tracking-wide uppercase hover:opacity-90 transition min-h-[48px] flex items-center justify-center"
                >
                  Search Flights
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-white/20 relative overflow-hidden rounded-full">
          <div className="w-full h-1/2 bg-white/60 rounded-full animate-bounce" />
        </div>
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
      </div>

    </section>
  );
}
