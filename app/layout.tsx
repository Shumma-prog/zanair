import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { airlineSchema } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zanair.com"),
  title: {
    default: "ZanAir | Where Roads End, We Begin",
    template: "%s | ZanAir",
  },
  description:
    "East Africa's most experienced boutique airline. Charter, scenic, and scheduled flights across Tanzania, Zanzibar, Serengeti, and beyond. Flying since 1991.",
  keywords: [
    "ZanAir",
    "Tanzania airline",
    "Zanzibar flights",
    "Serengeti flights",
    "safari flights Tanzania",
    "charter flights Tanzania",
    "scenic flights Zanzibar",
    "East Africa boutique airline",
    "Pemba Island flights",
    "Mafia Island flights",
    "Ngorongoro flights",
    "small airline Tanzania",
    "bush flights Tanzania",
  ],
  openGraph: {
    type: "website",
    siteName: "ZanAir",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://zanair.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = airlineSchema();

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${playfair.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Font preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Hero image preload — LCP */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dmvpm094o/image/upload/f_auto,q_auto/Hero_ev3vgw"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="bg-white text-deep-ocean antialiased">
        <Navbar />
        <main className="pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
