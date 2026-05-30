"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homepage } from "@/lib/content";

export default function Testimonials() {
  const { testimonials } = homepage;
  const items = testimonials.items;

  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  function goTo(index: number) {
    if (index === activeIndex) return;
    setFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFading(false);
    }, 180);
  }

  function prev() {
    goTo((activeIndex - 1 + items.length) % items.length);
  }
  function next() {
    goTo((activeIndex + 1) % items.length);
  }

  const active = items[activeIndex];

  return (
    <section
      className="bg-page-white py-24 md:py-32"
      aria-label="Passenger testimonials"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
          {testimonials.eyebrow}
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-normal italic text-deep-ocean">
          {testimonials.headline}
        </h2>
      </div>

      {/* Carousel */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <blockquote
          style={{
            opacity: fading ? 0 : 1,
            transition: "opacity 0.18s ease-out",
          }}
          aria-live="polite"
        >
          {/* Opening quote mark */}
          <span
            className="font-display text-8xl text-deep-ocean/10 leading-none mb-8 block select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Quote text */}
          <p className="font-display text-2xl md:text-3xl font-normal italic text-deep-ocean leading-relaxed mb-10">
            {active.quote}
          </p>

          {/* Attribution */}
          <footer>
            <div className="flex items-center gap-6">
              <div
                className="w-8 h-px bg-gray-300 shrink-0"
                aria-hidden="true"
              />
              <div>
                <cite className="not-italic font-body text-sm text-gray-700 block">
                  {active.name}
                </cite>
                <span className="font-body text-xs text-gray-500 block">
                  {active.country}
                </span>
                <span className="font-body text-xs text-gray-400 tracking-widest uppercase block mt-1">
                  {active.route}
                </span>
              </div>
            </div>
          </footer>
        </blockquote>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-zanair-blue hover:bg-zanair-blue/5 transition-colors duration-200"
          >
            <ChevronLeft size={18} className="text-gray-500" aria-hidden="true" />
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
            {items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={[
                  "w-1.5 h-1.5 rounded-full transition-colors duration-300",
                  i === activeIndex ? "bg-deep-ocean" : "bg-gray-300",
                ].join(" ")}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-zanair-blue hover:bg-zanair-blue/5 transition-colors duration-200"
          >
            <ChevronRight size={18} className="text-gray-500" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
