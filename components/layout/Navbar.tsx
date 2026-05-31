"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // Non-home pages are always solid; home starts transparent until scroll
  const [scrolled, setScrolled] = useState(!isHome);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // On route change: non-home is always solid; home tracks scroll
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Focus trap + Escape key
  useEffect(() => {
    if (!isMenuOpen) return;

    // Move focus into menu after mount
    const id = window.requestAnimationFrame(() => {
      const el = menuRef.current?.querySelector<HTMLElement>(
        'button[aria-label="Close navigation menu"]'
      );
      el?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.cancelAnimationFrame(id);
    };
  }, [isMenuOpen]);

  // Active link detection by first path segment
  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      const base = "/" + href.split("/")[1];
      return pathname === base || pathname.startsWith(base + "/");
    },
    [pathname]
  );

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? "#0A2533" : "rgba(0,0,0,0.25)",
          borderBottom: scrolled
            ? "1px solid rgba(41,171,226,0.15)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.08)" : "none",
          transition: "background-color 300ms ease, border-color 300ms ease, box-shadow 300ms ease",
        }}
      >
        {/* ── DESKTOP BAR (md+) ── */}
        <div className="hidden md:flex items-center h-[80px] px-10">
          {/* LEFT — Logo */}
          <Link href="/" aria-label="ZanAir — home" className="flex-none">
            <LogoImage
              error={logoError}
              onError={() => setLogoError(true)}
              width={120}
              height={40}
            />
          </Link>

          {/* CENTER — Nav links */}
          <nav
            className="flex-1 flex justify-center items-center gap-8"
            aria-label="Main navigation"
          >
            {navigation.links.map((link) => {
              const active = isActive(link.href);
              const scenic = !!link.highlight;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "relative inline-flex items-center text-sm tracking-wide",
                    "min-h-[44px] transition-colors duration-200",
                    "outline-none focus:outline-none focus:ring-0 focus:shadow-none",
                    scenic
                      ? "text-zanair-blue hover:text-zanair-blue/80"
                      : active
                      ? "text-warm-white"
                      : "text-warm-white/70 hover:text-warm-white",
                  ].join(" ")}
                >
                  {scenic && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-zanair-blue inline-block mr-2 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  {link.label}
                  {/* Active underline — appears on all active links */}
                  {active && (
                    <span
                      className="absolute left-0 right-0 bg-zanair-blue rounded-full"
                      style={{
                        bottom: "-2px",
                        height: "2px",
                        display: "block",
                      }}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT — Actions */}
          <div className="flex-none flex items-center">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with ZanAir on WhatsApp"
              className="text-warm-white/60 hover:text-warm-white transition-colors duration-200 flex items-center justify-center w-10 h-10 rounded-full hover:bg-warm-white/8 outline-none focus:outline-none focus:ring-0"
            >
              <WhatsAppIcon width={22} height={22} />
            </a>

            <div
              className="mx-4 h-4 w-px bg-warm-white/20"
              aria-hidden="true"
            />

            <Link
              href={navigation.cta.href}
              className="inline-flex items-center justify-center px-5 py-2 bg-orange text-warm-white text-sm font-medium rounded hover:bg-orange/90 transition-colors duration-200 min-h-[44px] outline-none focus:outline-none focus:ring-0"
            >
              {navigation.cta.label}
            </Link>
          </div>
        </div>

        {/* ── MOBILE BAR (below md) ── */}
        <div className="flex md:hidden items-center justify-between h-16 px-4">
          <Link href="/" aria-label="ZanAir — home" className="flex-none">
            <LogoImage
              error={logoError}
              onError={() => setLogoError(true)}
              width={100}
              height={34}
            />
          </Link>

          <button
            ref={hamburgerRef}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="dialog"
            className="text-warm-white min-h-[44px] min-w-[44px] flex items-center justify-center outline-none focus:outline-none focus:ring-0"
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {isMenuOpen && (
            <m.div
              id="mobile-menu"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-[100] flex flex-col"
              style={{ backgroundColor: "#0A2533" }}
            >
              {/* Top bar mirrors mobile header bar */}
              <div className="flex items-center justify-between h-16 px-4 shrink-0">
                <Link
                  href="/"
                  aria-label="ZanAir — home"
                  onClick={closeMenu}
                  className="flex-none"
                >
                  <LogoImage
                    error={logoError}
                    onError={() => setLogoError(true)}
                    width={100}
                    height={34}
                  />
                </Link>

                <button
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="text-warm-white min-h-[44px] min-w-[44px] flex items-center justify-center outline-none focus:outline-none focus:ring-0"
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>

              {/* Nav links */}
              <nav
                className="flex-1 flex flex-col overflow-y-auto"
                aria-label="Mobile navigation"
              >
                {navigation.links.map((link) => {
                  const active = isActive(link.href);
                  const scenic = !!link.highlight;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "py-5 text-2xl text-center w-full font-display",
                        "inline-flex items-center justify-center",
                        "border-b border-warm-white/10",
                        "transition-colors duration-200",
                        "outline-none focus:outline-none focus:ring-0",
                        scenic || active ? "text-zanair-blue" : "text-warm-white",
                      ].join(" ")}
                    >
                      {scenic && (
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-zanair-blue inline-block mr-3 shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* CTA + WhatsApp */}
              <div className="mt-8 px-6 pb-safe pb-8 shrink-0">
                <Link
                  href={navigation.cta.href}
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full py-4 text-base font-medium text-warm-white bg-orange rounded min-h-[56px] hover:bg-orange/90 transition-colors duration-200 outline-none focus:outline-none focus:ring-0"
                >
                  {navigation.cta.label}
                </Link>

                <div className="mt-4 flex items-center justify-center">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with ZanAir on WhatsApp"
                    className="text-warm-white/60 hover:text-warm-white transition-colors duration-200 flex items-center justify-center w-10 h-10 rounded-full hover:bg-warm-white/8 outline-none focus:outline-none focus:ring-0"
                  >
                    <WhatsAppIcon width={26} height={26} />
                  </a>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}

// ── WhatsApp SVG icon ────────────────────────────────────────────────────────
function WhatsAppIcon({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        fill="#25D366"
      />
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.405A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
        stroke="#25D366"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

// ── Shared logo with text fallback ──────────────────────────────────────────
function LogoImage({
  error,
  onError,
  width,
  height,
}: {
  error: boolean;
  onError: () => void;
  width: number;
  height: number;
}) {
  if (error) {
    return (
      <span className="font-display text-xl text-warm-white font-semibold tracking-wide">
        ZanAir
      </span>
    );
  }
  return (
    <div className="relative flex-shrink-0" style={{ width, height }}>
      <Image
        src="/zanair_logo.png"
        alt="ZanAir"
        fill
        priority
        className="object-contain object-left"
        sizes="130px"
        onError={() => {
          onError();
        }}
      />
    </div>
  );
}
