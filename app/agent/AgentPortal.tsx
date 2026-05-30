"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Download, Calendar, Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig, destinations } from "@/lib/content";

const DEST_OPTIONS = destinations.map((d) => d.name);

const INPUT_CLASS =
  "w-full border border-gray-200 rounded px-4 py-3 font-body text-sm text-deep-ocean bg-white focus:outline-none focus:border-zanair-blue transition-colors min-h-[48px]";

const LABEL_CLASS =
  "font-body text-xs tracking-widest uppercase text-gray-500 mb-2 block";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function AgentPortal() {
  const router = useRouter();
  const [agentEmail, setAgentEmail] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({
    agentName: "", agency: "", clientName: "",
    from: DEST_OPTIONS[0], to: DEST_OPTIONS[1],
    date: "", passengers: "", notes: "",
  });

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  useEffect(() => {
    async function checkSession() {
      try {
        const { createClient } = await import("@/lib/supabase");
        const supabase = createClient();
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          router.replace("/agent/login");
        } else {
          setAgentEmail(session.user.email ?? null);
        }
      } catch {
        // Supabase not configured — allow access in dev
        setAgentEmail("dev@zanair.com");
      }
    }
    checkSession();
  }, [router]);

  async function handleSignOut() {
    try {
      const { createClient } = await import("@/lib/supabase");
      const supabase = createClient();
      await supabase.auth.signOut();
    } catch {
      // ignore if not configured
    }
    router.push("/agent/login");
  }

  async function handleBookingSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setFormStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.agentName,
          email: agentEmail ?? "",
          type: "other",
          message: `Agency: ${form.agency}\nClient: ${form.clientName}\nRoute: ${form.from} → ${form.to}\nDate: ${form.date}\nPassengers: ${form.passengers}\nNotes: ${form.notes}`,
          from: form.from,
          to: form.to,
          date: form.date || undefined,
          passengers: form.passengers ? parseInt(form.passengers) : undefined,
        }),
      });
      setFormStatus(res.ok ? "success" : "error");
    } catch {
      setFormStatus("error");
    }
  }

  if (agentEmail === null) {
    return (
      <div className="min-h-screen bg-page-off flex items-center justify-center">
        <p className="font-body text-sm text-gray-400">Loading…</p>
      </div>
    );
  }

  return (
    <div className="bg-page-off min-h-screen">
      {/* Portal navbar */}
      <div className="bg-deep-ocean px-6 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {logoError ? (
            <span className="font-display text-lg italic text-warm-white">ZanAir</span>
          ) : (
            <Image
              src="/zanair_logo.png"
              alt="ZanAir"
              width={80}
              height={27}
              onError={() => setLogoError(true)}
              className="object-contain"
            />
          )}
          <span className="font-body text-xs tracking-widest uppercase text-zanair-blue hidden sm:block">
            Agent Portal
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-body text-sm text-warm-white/60 hidden sm:block">
            {agentEmail}
          </span>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 font-body text-sm text-warm-white/60 hover:text-warm-white transition-colors min-h-[44px]"
          >
            <LogOut size={16} aria-hidden="true" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl font-normal italic text-deep-ocean mb-2">
          Welcome back.
        </h1>
        <p className="font-body text-sm text-gray-500 mb-12">
          Access ZanAir schedules, fares, and booking resources below.
        </p>

        {/* Resource cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Schedules */}
          <div className="bg-page-white border border-gray-100 p-8 rounded-sm">
            <Calendar size={32} className="text-zanair-blue mb-4" aria-hidden="true" />
            <h2 className="font-display text-xl font-normal italic text-deep-ocean mb-2">
              Current Schedules
            </h2>
            <p className="font-body text-sm text-gray-500 mb-6">
              Download the current ZanAir scheduled route network and departure times.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-deep-ocean text-white font-body text-xs tracking-widest uppercase rounded hover:opacity-90 transition-opacity min-h-[44px]"
              aria-label="Download flight schedule"
            >
              <Download size={14} aria-hidden="true" />
              Download Schedule
            </a>
          </div>

          {/* Fares */}
          <div className="bg-page-white border border-gray-100 p-8 rounded-sm">
            <Download size={32} className="text-zanair-blue mb-4" aria-hidden="true" />
            <h2 className="font-display text-xl font-normal italic text-deep-ocean mb-2">
              Agent Fare Sheet
            </h2>
            <p className="font-body text-sm text-gray-500 mb-6">
              Current agent rates and commission structure for all scheduled routes.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-deep-ocean text-white font-body text-xs tracking-widest uppercase rounded hover:opacity-90 transition-opacity min-h-[44px]"
              aria-label="Download agent fare sheet"
            >
              <Download size={14} aria-hidden="true" />
              Download Fares
            </a>
          </div>

          {/* Reservations */}
          <div className="bg-page-white border border-gray-100 p-8 rounded-sm">
            <Phone size={32} className="text-zanair-blue mb-4" aria-hidden="true" />
            <h2 className="font-display text-xl font-normal italic text-deep-ocean mb-2">
              Reservations Team
            </h2>
            <p className="font-body text-sm text-gray-500 mb-6">
              For complex multi-leg bookings or group reservations, contact our
              dedicated agent support line.
            </p>
            <div className="space-y-2">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 font-body text-sm text-zanair-blue hover:text-deep-ocean transition-colors min-h-[36px]">
                <Mail size={14} aria-hidden="true" /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/[\s()]/g, "")}`} className="flex items-center gap-2 font-body text-sm text-zanair-blue hover:text-deep-ocean transition-colors min-h-[36px]">
                <Phone size={14} aria-hidden="true" /> {siteConfig.phone}
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-zanair-blue hover:text-deep-ocean transition-colors min-h-[36px]">
                <MessageCircle size={14} aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Booking form */}
        <div className="bg-page-white p-8 rounded-sm border border-gray-100">
          <h2 className="font-display text-2xl font-normal italic text-deep-ocean mb-6">
            Submit a Booking Request
          </h2>

          {formStatus === "success" ? (
            <div className="bg-zanair-blue/5 border border-zanair-blue/20 p-6 rounded text-center">
              <p className="font-display text-xl italic text-deep-ocean">
                Request received. We&apos;ll respond within a few hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} noValidate aria-label="Agent booking request">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="ap-agent-name" className={LABEL_CLASS}>Agent Name *</label>
                  <input id="ap-agent-name" type="text" required value={form.agentName} onChange={(e) => set("agentName", e.target.value)} className={INPUT_CLASS} />
                </div>
                <div>
                  <label htmlFor="ap-agency" className={LABEL_CLASS}>Agency Name</label>
                  <input id="ap-agency" type="text" value={form.agency} onChange={(e) => set("agency", e.target.value)} className={INPUT_CLASS} />
                </div>
                <div>
                  <label htmlFor="ap-client" className={LABEL_CLASS}>Client Name *</label>
                  <input id="ap-client" type="text" required value={form.clientName} onChange={(e) => set("clientName", e.target.value)} className={INPUT_CLASS} />
                </div>
                <div>
                  <label htmlFor="ap-from" className={LABEL_CLASS}>From</label>
                  <select id="ap-from" value={form.from} onChange={(e) => set("from", e.target.value)} className={INPUT_CLASS}>
                    {DEST_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="ap-to" className={LABEL_CLASS}>To</label>
                  <select id="ap-to" value={form.to} onChange={(e) => set("to", e.target.value)} className={INPUT_CLASS}>
                    {DEST_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="ap-date" className={LABEL_CLASS}>Travel Date</label>
                  <input id="ap-date" type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className={INPUT_CLASS} />
                </div>
                <div>
                  <label htmlFor="ap-pax" className={LABEL_CLASS}>Passengers</label>
                  <input id="ap-pax" type="number" min="1" max="12" value={form.passengers} onChange={(e) => set("passengers", e.target.value)} className={INPUT_CLASS} placeholder="1" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="ap-notes" className={LABEL_CLASS}>Special Requirements</label>
                  <textarea id="ap-notes" rows={3} value={form.notes} onChange={(e) => set("notes", e.target.value)} className={`${INPUT_CLASS} min-h-[80px] resize-y`} placeholder="Dietary needs, accessibility, specific timing…" />
                </div>
              </div>

              {formStatus === "error" && (
                <p className="mt-3 font-body text-sm text-red-500">
                  Something went wrong. Please contact us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="mt-6 px-8 py-4 bg-orange text-white font-body text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity disabled:opacity-50 min-h-[52px]"
              >
                {formStatus === "loading" ? "Sending…" : "Submit Request"}
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
