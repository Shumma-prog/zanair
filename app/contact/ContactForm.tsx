"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const INPUT_CLASS =
  "w-full border border-gray-200 rounded px-4 py-3 font-body text-sm text-deep-ocean bg-white focus:outline-none focus:border-zanair-blue transition-colors min-h-[48px] placeholder:text-gray-300";

const LABEL_CLASS =
  "font-body text-xs tracking-widest uppercase text-gray-500 mb-2 block";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", type: "scheduled",
    route: "", date: "", passengers: "", message: "", honeypot: "",
  });

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (form.honeypot) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          type: form.type,
          message: form.message,
          from: form.route || undefined,
          date: form.date || undefined,
          passengers: form.passengers ? parseInt(form.passengers) : undefined,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-zanair-blue/5 border border-zanair-blue/20 p-6 rounded text-center">
        <p className="font-display text-xl italic text-deep-ocean">
          Thank you. We&apos;ll respond within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact enquiry form">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={form.honeypot}
        onChange={(e) => set("honeypot", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cf-name" className={LABEL_CLASS}>
              Name <span className="text-red-400">*</span>
            </label>
            <input
              id="cf-name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className={INPUT_CLASS}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="cf-email" className={LABEL_CLASS}>
              Email <span className="text-red-400">*</span>
            </label>
            <input
              id="cf-email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              className={INPUT_CLASS}
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cf-phone" className={LABEL_CLASS}>Phone</label>
            <input
              id="cf-phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              className={INPUT_CLASS}
              placeholder="+1 234 567 8900"
            />
          </div>
          <div>
            <label htmlFor="cf-type" className={LABEL_CLASS}>
              Enquiry type <span className="text-red-400">*</span>
            </label>
            <select
              id="cf-type"
              required
              value={form.type}
              onChange={(e) => set("type", e.target.value)}
              className={INPUT_CLASS}
            >
              <option value="scheduled">Scheduled Flight</option>
              <option value="charter">Charter Flight</option>
              <option value="scenic">Scenic Flight</option>
              <option value="transfer">Transfer</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cf-route" className={LABEL_CLASS}>Route / Destination</label>
            <input
              id="cf-route"
              type="text"
              value={form.route}
              onChange={(e) => set("route", e.target.value)}
              className={INPUT_CLASS}
              placeholder="e.g. Zanzibar → Serengeti"
            />
          </div>
          <div>
            <label htmlFor="cf-date" className={LABEL_CLASS}>Travel date</label>
            <input
              id="cf-date"
              type="date"
              value={form.date}
              onChange={(e) => set("date", e.target.value)}
              className={INPUT_CLASS}
            />
          </div>
        </div>

        <div>
          <label htmlFor="cf-passengers" className={LABEL_CLASS}>
            Passengers (max 12)
          </label>
          <input
            id="cf-passengers"
            type="number"
            min="1"
            max="12"
            value={form.passengers}
            onChange={(e) => set("passengers", e.target.value)}
            className={INPUT_CLASS}
            placeholder="1"
          />
        </div>

        <div>
          <label htmlFor="cf-message" className={LABEL_CLASS}>
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="cf-message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            className={`${INPUT_CLASS} min-h-[100px] resize-y`}
            placeholder="Tell us about your trip…"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-3 font-body text-sm text-red-500">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full py-4 bg-orange text-white font-body text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity disabled:opacity-50 min-h-[52px]"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
