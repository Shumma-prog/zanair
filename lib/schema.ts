export function airlineSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Airline", "Organization"],
    name: "ZanAir",
    alternateName: "Zanzibar Air",
    url: "https://zanair.com",
    logo: "https://zanair.com/zanair_logo.png",
    foundingDate: "1991",
    foundingLocation: {
      "@type": "Place",
      name: "Zanzibar International Airport, Tanzania",
    },
    founder: {
      "@type": "Person",
      name: "Carl G. Salisbury",
    },
    description:
      "ZanAir is East Africa's most experienced boutique airline, operating since 1991 from Zanzibar International Airport. ZanAir provides scheduled flights, private charter flights, scenic flights over Zanzibar, and airport transfer coordination across Tanzania.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+255-242-233768",
      email: "reservations@zanair.com",
      contactType: "reservations",
      availableLanguage: "English",
    },
    areaServed: [
      "Tanzania",
      "Zanzibar",
      "Serengeti",
      "Ngorongoro",
      "Selous",
      "Pemba",
      "Mafia",
    ],
    sameAs: [
      "https://www.facebook.com/zanair",
      "https://www.instagram.com/zanair",
    ],
  };
}

export function destinationSchema(destination: {
  name: string;
  slug: string;
  description: string;
  intro: string;
  latitude: string;
  longitude: string;
  bestTime: string;
  badge: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.intro,
    url: "https://zanair.com/destinations/" + destination.slug,
    touristType: destination.badge,
    geo: {
      "@type": "GeoCoordinates",
      latitude: destination.latitude,
      longitude: destination.longitude,
    },
    includesAttraction: {
      "@type": "TouristAttraction",
      name: destination.name,
      description: destination.description,
    },
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: "https://zanair.com" + item.href,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: "https://zanair.com/services/" + service.slug,
    provider: {
      "@type": "Airline",
      name: "ZanAir",
      url: "https://zanair.com",
    },
    areaServed: "Tanzania",
  };
}
