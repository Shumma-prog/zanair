import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { faqs, siteConfig } from "@/lib/content";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import FaqAccordion from "./FaqAccordion";

export const metadata = generatePageMetadata({
  title: "Travel Guide & FAQ",
  description:
    "Everything you need to know before flying with ZanAir. Baggage allowance, check-in times, Dar es Salaam connections, scenic flight details, and transfer information.",
  path: "/faq",
});

export default function FAQPage() {
  const allItems = faqs.flatMap((cat) => cat.items);
  const faqJsonLd = faqSchema(allItems);
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "FAQ", href: "/faq" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── HERO ── */}
      <section className="bg-page-white pt-12 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-gray-400 tracking-wide" role="list">
              <li><Link href="/" className="hover:text-deep-ocean transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-deep-ocean">FAQ</li>
            </ol>
          </nav>

          <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
            Before You Fly
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-normal italic text-deep-ocean leading-[1.05]">
            Everything you need to know
            <br />
            before you fly with ZanAir.
          </h1>
        </div>
      </section>

      {/* ── ACCORDION ── */}
      <section className="bg-page-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion categories={faqs} />
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ── */}
      <section className="bg-page-off py-16" aria-label="Contact options">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-normal italic text-deep-ocean mb-4">
            Still have questions?
          </h2>
          <p className="font-body text-base text-gray-500 mb-10">
            Our reservations team is here.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-start gap-4 bg-page-white border border-gray-100 p-8 rounded-sm hover:border-zanair-blue/30 hover:shadow-sm transition-all"
            >
              <div className="bg-zanair-blue/8 p-3 rounded-full shrink-0">
                <Mail size={24} className="text-zanair-blue" aria-hidden="true" />
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-1">Email</p>
                <p className="font-body text-base font-medium text-deep-ocean group-hover:text-zanair-blue transition-colors">
                  {siteConfig.email}
                </p>
                <p className="font-body text-xs text-gray-400 leading-relaxed mt-1">
                  We respond within 24 hours on business days.
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="group flex items-start gap-4 bg-page-white border border-gray-100 p-8 rounded-sm hover:border-zanair-blue/30 hover:shadow-sm transition-all"
            >
              <div className="bg-zanair-blue/8 p-3 rounded-full shrink-0">
                <MessageCircle size={24} className="text-zanair-blue" aria-hidden="true" />
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-1">WhatsApp</p>
                <p className="font-body text-base font-medium text-deep-ocean group-hover:text-zanair-blue transition-colors">
                  {siteConfig.phone}
                </p>
                <p className="font-body text-xs text-gray-400 leading-relaxed mt-1">
                  Available daily. Fast responses for urgent bookings.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
