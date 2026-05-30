"use client";

import { useEffect, useRef, useState } from "react";

// ── Design tokens ─────────────────────────────────────────────────────────────

const T = {
  textPrimary: "#F5F1E8",
  textSecondary: "rgba(245,241,232,0.65)",
  textMuted: "rgba(245,241,232,0.3)",
  gold: "#C9A66B",
  ocean: "#4EB7D8",
  goldFaint: "rgba(201,166,107,0.15)",
  bg: "linear-gradient(135deg, #021524 0%, #06263A 50%, #082C42 100%)",
};

// ── Card data ─────────────────────────────────────────────────────────────────

interface CardDef {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: string;
  iconBg: string;
  accentColor: string;
  isLiveClock?: boolean;
  isRoute?: boolean;
}

const CARDS: CardDef[] = [
  {
    id: "weather",
    label: "Weather in Zanzibar",
    value: "30°",
    description: "Sunny Skies",
    icon: "☀",
    iconBg: "radial-gradient(circle, rgba(255,215,0,0.15), rgba(255,160,0,0.05))",
    accentColor: "#FFD166",
  },
  {
    id: "time",
    label: "Local Time",
    value: "—",
    description: "East Africa Time",
    icon: "◷",
    iconBg: "radial-gradient(circle, rgba(78,183,216,0.18), rgba(41,171,226,0.05))",
    accentColor: T.ocean,
    isLiveClock: true,
  },
  {
    id: "route",
    label: "Popular Route",
    value: "DAR → ZNZ",
    description: "Most Traveled Route",
    icon: "✈",
    iconBg: "radial-gradient(circle, rgba(201,166,107,0.18), rgba(201,166,107,0.04))",
    accentColor: T.gold,
    isRoute: true,
  },
  {
    id: "heritage",
    label: "Stone Town",
    value: "UNESCO",
    description: "World Heritage Site",
    icon: "◈",
    iconBg: "radial-gradient(circle, rgba(201,166,107,0.15), rgba(180,140,80,0.04))",
    accentColor: T.gold,
  },
  {
    id: "ocean",
    label: "Ocean Conditions",
    value: "26°C",
    description: "Perfect for Diving",
    icon: "◉",
    iconBg: "radial-gradient(circle, rgba(78,183,216,0.18), rgba(41,171,226,0.04))",
    accentColor: T.ocean,
  },
  {
    id: "satisfaction",
    label: "Traveler Satisfaction",
    value: "96%",
    description: "Guest Approval Rating",
    icon: "★",
    iconBg: "radial-gradient(circle, rgba(255,215,0,0.15), rgba(201,166,107,0.04))",
    accentColor: "#FFD166",
  },
];

// ── Intelligence card ─────────────────────────────────────────────────────────

function IntelligenceCard({
  card,
  liveTime,
  planeOffset,
  isLast,
}: {
  card: CardDef;
  liveTime: string;
  planeOffset: number;
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const displayValue = card.isLiveClock ? liveTime : card.value;

  return (
    <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
      {/* Pill card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "12px 22px 12px 14px",
          borderRadius: "999px",
          background: hovered
            ? "rgba(255,255,255,0.06)"
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${hovered ? "rgba(201,166,107,0.25)" : "rgba(255,255,255,0.08)"}`,
          cursor: "default",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered
            ? `0 16px 40px rgba(0,0,0,0.4), 0 0 20px ${card.accentColor}18`
            : "none",
          transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
          position: "relative",
          overflow: "hidden",
          minWidth: "fit-content",
        }}
      >
        {/* Hover inner glow */}
        {hovered && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "999px",
              background: `radial-gradient(ellipse at 30% 50%, ${card.accentColor}0E 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />
        )}

        {/* Circular icon */}
        <div
          aria-hidden="true"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: card.iconBg,
            border: `1px solid ${card.accentColor}30`,
            boxShadow: hovered ? `0 0 12px ${card.accentColor}25` : "none",
            transition: "box-shadow 0.35s ease",
            fontSize: "18px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {card.isRoute ? (
            <span
              style={{
                display: "inline-block",
                transform: `translateX(${planeOffset}px)`,
                transition: "transform 0.6s ease",
                color: card.accentColor,
                fontSize: "16px",
              }}
            >
              ✈
            </span>
          ) : (
            <span style={{ color: card.accentColor, lineHeight: 1 }}>
              {card.icon}
            </span>
          )}
        </div>

        {/* Text stack */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Label */}
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "9px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: T.textMuted,
              whiteSpace: "nowrap",
            }}
          >
            {card.label}
          </div>

          {/* Value — luxury serif */}
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              fontStyle: "italic",
              fontWeight: 400,
              color: hovered ? T.textPrimary : "rgba(245,241,232,0.88)",
              lineHeight: 1,
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
              transition: "color 0.3s ease",
            }}
          >
            {displayValue}
          </div>

          {/* Description */}
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              color: hovered ? `${card.accentColor}BB` : T.textSecondary,
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
              transition: "color 0.3s ease",
            }}
          >
            {card.description}
          </div>
        </div>
      </div>

      {/* Premium gold separator */}
      {!isLast && (
        <div
          aria-hidden="true"
          style={{
            width: "1px",
            height: "44px",
            margin: "0 6px",
            flexShrink: 0,
            background: `linear-gradient(to bottom,
              transparent 0%,
              ${T.goldFaint} 30%,
              rgba(201,166,107,0.22) 50%,
              ${T.goldFaint} 70%,
              transparent 100%)`,
          }}
        />
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function TrustBar() {
  const [time, setTime] = useState("—");
  const [sweep, setSweep] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [planeOffset, setPlaneOffset] = useState(0);

  // Live EAT clock
  useEffect(() => {
    const update = () => {
      const eat = new Date(
        new Date().toLocaleString("en-US", {
          timeZone: "Africa/Dar_es_Salaam",
        })
      );
      const h = eat.getHours() % 12 || 12;
      const m = eat.getMinutes().toString().padStart(2, "0");
      const ampm = eat.getHours() >= 12 ? "PM" : "AM";
      setTime(`${h}:${m} ${ampm}`);
    };
    update();
    const iv = setInterval(update, 1000);
    return () => clearInterval(iv);
  }, []);

  // Gold shimmer sweep every 12s
  useEffect(() => {
    const iv = setInterval(() => {
      setSweep(true);
      setTimeout(() => setSweep(false), 2200);
    }, 12000);
    return () => clearInterval(iv);
  }, []);

  // Plane oscillation on route card
  useEffect(() => {
    let t = 0;
    const iv = setInterval(() => {
      t += 0.04;
      setPlaneOffset(Math.sin(t) * 5);
    }, 50);
    return () => clearInterval(iv);
  }, []);

  // Seeded particles — stable ref
  const particles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      left: `${(i * 5.7 + 1.8) % 100}%`,
      top: `${(i * 6.1 + 12) % 75}%`,
      delay: `${(i * 0.45) % 4}s`,
      duration: `${3.5 + (i % 3) * 0.8}s`,
    }))
  ).current;

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.width / 2) / rect.width,
      y: (e.clientY - rect.height / 2) / rect.height,
    });
  }

  return (
    <>
      {/* Gold runway line */}
      <div
        aria-hidden="true"
        style={{
          height: "1px",
          background: `linear-gradient(90deg, transparent 0%, ${T.gold} 50%, transparent 100%)`,
          opacity: 0.5,
        }}
      />

      {/* Intelligence ribbon */}
      <section
        aria-label="Zanzibar destination intelligence"
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          height: "130px",
          background: T.bg,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: `1px solid ${T.goldFaint}`,
        }}
      >
        {/* Topographic contour lines */}
        <svg
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.03,
            pointerEvents: "none",
          }}
          viewBox="0 0 1400 130"
          preserveAspectRatio="xMidYMid slice"
        >
          {[15, 28, 42, 56, 70, 84, 100, 114].map((y, i) => (
            <path
              key={i}
              d={`M0,${y} C180,${y - 7} 360,${y + 6} 560,${y - 4} S900,${y + 5} 1100,${y - 3} S1300,${y + 4} 1400,${y}`}
              stroke={T.ocean}
              strokeWidth="0.7"
              fill="none"
            />
          ))}
        </svg>

        {/* Ocean particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            aria-hidden="true"
            style={{
              position: "absolute",
              left: p.left,
              top: p.top,
              width: "2px",
              height: "2px",
              borderRadius: "50%",
              background: `rgba(78,183,216,0.5)`,
              animation: `floatParticle ${p.duration} ${p.delay} ease-in-out infinite`,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Ambient mouse glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(78,183,216,0.07) 0%, transparent 65%)`,
            transform: `translate(calc(${mouse.x * 50}px - 250px), calc(${mouse.y * 30}px - 250px))`,
            left: "50%",
            top: "50%",
            pointerEvents: "none",
            transition: "transform 0.4s ease",
          }}
        />

        {/* Gentle gold reflection at top edge */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${T.gold}40, transparent)`,
          }}
        />

        {/* Shimmer sweep */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(90deg,
              transparent 0%,
              rgba(201,166,107,0.05) 40%,
              rgba(245,241,232,0.04) 50%,
              rgba(201,166,107,0.05) 60%,
              transparent 100%)`,
            transform: sweep ? "translateX(130%)" : "translateX(-130%)",
            transition: sweep ? "transform 2.2s cubic-bezier(0.23,1,0.32,1)" : "none",
            pointerEvents: "none",
            zIndex: 5,
          }}
        />

        {/* Left edge fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "80px",
            zIndex: 20,
            pointerEvents: "none",
            background: "linear-gradient(to right, #021524 0%, transparent 100%)",
          }}
        />

        {/* Right edge fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "80px",
            zIndex: 20,
            pointerEvents: "none",
            background: "linear-gradient(to left, #082C42 0%, transparent 100%)",
          }}
        />

        {/* Cards */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "0 80px",
            gap: "0",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          } as React.CSSProperties}
        >
          {CARDS.map((card, i) => (
            <IntelligenceCard
              key={card.id}
              card={card}
              liveTime={time}
              planeOffset={planeOffset}
              isLast={i === CARDS.length - 1}
            />
          ))}
        </div>

        {/* Screen reader version */}
        <ul className="sr-only">
          {CARDS.map((card) => (
            <li key={card.id}>
              {card.label}: {card.isLiveClock ? time : card.value} —{" "}
              {card.description}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
