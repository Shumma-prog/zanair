import type { Metadata } from "next";

// Alias used by page imports
export { buildMetadata as generatePageMetadata };

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `https://zanair.com${opts.path}`;
  const image = opts.image ?? "https://zanair.com/og-default.jpg";

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: opts.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}
