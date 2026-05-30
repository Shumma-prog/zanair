import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/agent/", "/api/"],
      },
    ],
    sitemap: "https://zanair.com/sitemap.xml",
    host: "https://zanair.com",
  };
}
