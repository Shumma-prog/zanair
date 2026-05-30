import type { MetadataRoute } from "next";
import { destinations, services } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zanair.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/destinations`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/scenic-flights`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/fleet`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];

  const destinationPages: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${base}/destinations/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...destinationPages, ...servicePages];
}
