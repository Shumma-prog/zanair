"use client";

import { useState } from "react";
import { homepage } from "@/lib/content";

export default function EmailCapture() {
  const { emailCapture } = homepage;
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (honeypot) return; // Bot trap
    setStatus("loading");
    try {
      const res = await fetch("/api/email-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      className="bg-zanair-blue py-20 md:py-24"
      aria-label="Newsletter signup"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-normal italic text-warm-white mb-4">
          {emailCapture.headline}
        </h2>
        <p className="font-body text-sm text-warm-white/50 leading-relaxed mb-10 max-w-lg mx-auto">
          {emailCapture.subheadline}
        </p>

        {status === "success" ? (
          <p className="font-display italic text-warm-white text-xl">
            You&apos;re in. We&apos;ll be in touch.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Email newsletter signup"
          >
            {/* Honeypot — hidden from real users */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="email-capture" className="sr-only">
                Email address
              </label>
              <input
                id="email-capture"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={emailCapture.placeholder}
                required
                className="flex-1 bg-white border border-transparent rounded px-4 py-3 text-deep-ocean font-body text-sm placeholder:text-gray-400 focus:outline-none focus:border-deep-ocean/30 transition-colors min-h-[48px]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-orange text-warm-white font-body text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity disabled:opacity-50 min-h-[48px] whitespace-nowrap"
              >
                {status === "loading" ? "…" : emailCapture.cta}
              </button>
            </div>

            {status === "error" && (
              <p className="mt-3 font-body text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}

        <p className="font-body text-xs text-white/50 tracking-wide mt-4">
          {emailCapture.note}
        </p>
      </div>
    </section>
  );
}
