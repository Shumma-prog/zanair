"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const INPUT_CLASS =
  "w-full border border-gray-200 rounded px-4 py-3 font-body text-sm text-deep-ocean bg-white focus:outline-none focus:border-zanair-blue transition-colors min-h-[48px] placeholder:text-gray-300";

const LABEL_CLASS =
  "font-body text-xs tracking-widest uppercase text-gray-500 mb-2 block";

export default function AgentLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [logoError, setLogoError] = useState(false);

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { createClient } = await import("@/lib/supabase");
      const supabase = createClient();
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message);
      } else {
        router.push("/agent");
      }
    } catch (err) {
      setError(
        err instanceof Error && err.message.includes("env vars")
          ? "Authentication is not configured. Contact the site administrator."
          : "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex bg-white" style={{ paddingTop: "80px" }}>
      {/* LEFT — hero image */}
      <div className="hidden md:block relative w-1/2 flex-shrink-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations/serengeti.jpg"
            fill
            className="object-cover"
            alt="Serengeti plains from above — ZanAir"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-deep-ocean/40 z-[1]" />
        <div className="relative z-[2] flex items-center justify-center h-full px-12">
          <p className="font-display text-4xl font-normal italic text-white leading-[1.1] text-center">
            The world&apos;s greatest
            <br />
            safari routes.
            <br />
            At your fingertips.
          </p>
        </div>
      </div>

      {/* RIGHT — form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-12 bg-white">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <Link href="/" aria-label="ZanAir — home">
            {logoError ? (
              <span className="font-display text-xl font-semibold text-deep-ocean">
                ZanAir
              </span>
            ) : (
              <Image
                src="/zanair_logo.png"
                alt="ZanAir"
                width={100}
                height={34}
                onError={() => setLogoError(true)}
                className="object-contain"
              />
            )}
          </Link>

          <h1 className="font-display text-3xl font-normal italic text-deep-ocean mt-8 mb-2">
            Agent Portal
          </h1>
          <p className="font-body text-sm text-gray-500 mb-10">
            Sign in to access schedules, fares, and booking tools.
          </p>

          <form onSubmit={handleSubmit} noValidate aria-label="Agent sign in">
            <div className="space-y-5">
              <div>
                <label htmlFor="al-email" className={LABEL_CLASS}>
                  Email
                </label>
                <input
                  id="al-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={INPUT_CLASS}
                  placeholder="agent@agency.com"
                />
              </div>
              <div>
                <label htmlFor="al-password" className={LABEL_CLASS}>
                  Password
                </label>
                <input
                  id="al-password"
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={INPUT_CLASS}
                />
              </div>
            </div>

            {error && (
              <p className="mt-4 font-body text-sm text-red-500" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full py-4 bg-orange text-white font-body text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity disabled:opacity-50 min-h-[52px]"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <p className="font-body text-xs text-gray-400 mt-8">
            Don&apos;t have an agent account?{" "}
            <Link
              href="/contact?type=agent"
              className="text-zanair-blue hover:text-deep-ocean transition-colors"
            >
              Request access →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
