import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import ScenicsFeature from "@/components/sections/ScenicsFeature";
import DestinationsGrid from "@/components/sections/DestinationsGrid";

// Below-fold sections lazy-loaded to reduce initial JS bundle
const Experience = dynamic(
  () => import("@/components/sections/Experience"),
  { loading: () => <div className="h-96 bg-page-off" aria-hidden="true" /> }
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { loading: () => <div className="h-96 bg-page-white" aria-hidden="true" /> }
);
const EmailCapture = dynamic(
  () => import("@/components/sections/EmailCapture"),
  { loading: () => <div className="h-64 bg-zanair-blue" aria-hidden="true" /> }
);

export const metadata: Metadata = {
  title: "ZanAir | Where Roads End, We Begin",
  description:
    "East Africa's most experienced boutique airline. Charter, scenic, and scheduled flights across Tanzania, Zanzibar, Serengeti, and beyond. Flying since 1991.",
  alternates: { canonical: "https://zanair.com" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <ScenicsFeature />
      <DestinationsGrid />
      <Experience />
      <Testimonials />
      <EmailCapture />
    </>
  );
}
