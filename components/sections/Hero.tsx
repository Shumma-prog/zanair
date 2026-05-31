// Owner: add your hero image at public/images/hero.jpg
// Recommended: aerial photo of Zanzibar coastline or Serengeti at golden hour
// Min resolution: 1920x1080

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { homepage } from "@/lib/content";

const DESTINATIONS = [
  "Zanzibar",
  "Dar es Salaam",
  "Arusha",
  "Pemba",
  "Mafia",
  "Serengeti",
  "Selous",
  "Lake Manyara",
  "Tarangire",
  "Ngorongoro (via Manyara)",
  "Ruaha",
];

const PASSENGER_OPTIONS = [
  "1 Passenger",
  "2 Passengers",
  "3 Passengers",
  "4 Passengers",
  "5 Passengers",
  "6 Passengers",
  "7-12 (Charter)",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const today = new Date().toISOString().split("T")[0];

const selectClass =
  "bg-deep-ocean/60 border border-warm-white/20 rounded px-4 py-3 text-warm-white text-sm " +
  "placeholder:text-warm-white/30 focus:outline-none focus:border-zanair-blue/60 " +
  "transition-colors min-h-[48px] w-full [color-scheme:dark]";

export default function Hero() {
  const { hero } = homepage;
  const router = useRouter();

  const [from, setFrom] = useState("Zanzibar");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1 Passenger");

  function handleSearch() {
    if (passengers === "7-12 (Charter)") {
      router.push("/services/charter-flights");
    } else {
      const params = new URLSearchParams({ from, ...(to && { to }), ...(date && { date }), passengers });
      router.push(`/contact?${params.toString()}`);
    }
  }

  // Split headline on \n for line breaks
  const headlineParts = hero.headline.split("\\n");

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="relative min-h-screen w-full overflow-hidden -mt-[80px]"
        aria-label="ZanAir — East Africa boutique airline"
        style={{
          background: "#2a4a3a",
        }}
      >
        {/* ── BACKGROUND IMAGE ── */}
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 animate-kenburns">
            <Image
              src="/images/hero.jpg"
              fill
              priority
              quality={90}
              alt="Aerial view of Zanzibar coastline and Indian Ocean — ZanAir scenic flights"
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>

        {/* ── GRADIENT OVERLAYS ── */}
        <div
          className="absolute inset-0 z-[1]"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.00) 30%, rgba(0,0,0,0.30) 70%, rgba(0,0,0,0.70) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-[1] hidden md:block"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.20) 50%, transparent 100%)",
          }}
        />

        {/* ── CONTENT ── */}
        <div className="relative z-[2] flex flex-col justify-end min-h-screen pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <m.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl text-center md:text-left"
            >
              {/* Headline */}
              <m.h1
                variants={itemVariants}
                className="font-display text-4xl sm:text-5xl md:text-8xl lg:text-[110px] font-normal italic text-warm-white leading-[1.0] md:leading-[0.95] mb-6"
              >
                {headlineParts.map((part, i) => (
                  <span key={i}>
                    {part}
                    {i < headlineParts.length - 1 && <br />}
                  </span>
                ))}
              </m.h1>

              {/* Subheadline */}
              <m.p
                variants={itemVariants}
                className="font-body text-base md:text-lg text-warm-white/70 max-w-lg mb-10 leading-relaxed mx-auto md:mx-0"
              >
                {hero.subheadline}
              </m.p>

              {/* CTAs */}
              <m.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start"
              >
                <Link
                  href={hero.cta_primary.href}
                  className="inline-flex items-center justify-center px-8 py-4 min-h-[52px] bg-orange text-warm-white font-body text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity"
                >
                  {hero.cta_primary.label}
                </Link>
                <Link
                  href={hero.cta_secondary.href}
                  className="inline-flex items-center justify-center px-8 py-4 min-h-[52px] bg-transparent border border-warm-white/40 text-warm-white font-body text-sm tracking-wide uppercase rounded hover:border-warm-white/80 hover:bg-warm-white/5 transition-colors"
                >
                  {hero.cta_secondary.label}
                </Link>
              </m.div>

              {/* ── BOOKING WIDGET ── */}
              <m.div
                variants={itemVariants}
                className="rounded-xl p-4 md:p-5 max-w-2xl"
                style={{
                  backgroundColor: "rgba(250,250,248,0.08)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(250,250,248,0.15)",
                }}
              >
                <p className="font-body text-xs tracking-widest uppercase text-warm-white/40 mb-3">
                  Plan your flight
                </p>

                <div className="flex flex-col md:flex-row gap-3">
                  {/* From */}
                  <label className="sr-only" htmlFor="hero-from">Flying from</label>
                  <select
                    id="hero-from"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className={selectClass}
                    aria-label="Flying from"
                  >
                    {DESTINATIONS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>

                  {/* To */}
                  <label className="sr-only" htmlFor="hero-to">Flying to</label>
                  <select
                    id="hero-to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className={selectClass}
                    aria-label="Flying to"
                  >
                    <option value="">To…</option>
                    {DESTINATIONS.filter((d) => d !== from).map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>

                  {/* Date */}
                  <label className="sr-only" htmlFor="hero-date">Travel date</label>
                  <input
                    id="hero-date"
                    type="date"
                    value={date}
                    min={today}
                    onChange={(e) => setDate(e.target.value)}
                    className={selectClass}
                    aria-label="Travel date"
                  />

                  {/* Passengers */}
                  <label className="sr-only" htmlFor="hero-passengers">Passengers</label>
                  <select
                    id="hero-passengers"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className={selectClass}
                    aria-label="Number of passengers"
                  >
                    {PASSENGER_OPTIONS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>

                  {/* Search */}
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="px-6 py-3 bg-orange text-warm-white font-body text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity min-h-[48px] whitespace-nowrap shrink-0"
                    aria-label="Search flights"
                  >
                    Search
                  </button>
                </div>
              </m.div>
            </m.div>
          </div>

          {/* ── SCROLL INDICATOR ── */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center"
            aria-hidden="true"
          >
            <div className="w-px h-12 relative overflow-hidden bg-warm-white/20 rounded-full">
              <m.div
                className="absolute top-0 left-0 w-full rounded-full bg-warm-white/60"
                style={{ height: "50%" }}
                animate={{ y: ["0%", "100%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <p className="text-warm-white/30 text-xs tracking-widest uppercase mt-2">
              Scroll
            </p>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
