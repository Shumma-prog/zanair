import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import ContactForm from "./ContactForm";

export const metadata = generatePageMetadata({
  title: "Contact ZanAir",
  description:
    "Contact ZanAir reservations team. Email reservations@zanair.com or WhatsApp +255 242 233768. Charter quotes, scenic flight bookings, scheduled flight enquiries.",
  path: "/contact",
});

const CONTACT_METHODS = [
  {
    icon: Mail,
    type: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: "We respond to all enquiries within 24 hours on business days.",
  },
  {
    icon: Phone,
    type: "Telephone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[\s()]/g, "")}`,
    note: "Available during Zanzibar business hours.",
  },
  {
    icon: MessageCircle,
    type: "WhatsApp",
    value: siteConfig.phone,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    note: "Fast responses for urgent bookings and same-day enquiries.",
    external: true,
  },
];

export default function ContactPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── HERO ── */}
      <section className="bg-page-white pt-12 pb-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-gray-400 tracking-wide" role="list">
              <li><Link href="/" className="hover:text-deep-ocean transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-deep-ocean">Contact</li>
            </ol>
          </nav>

          <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
            Get In Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-normal italic text-deep-ocean mb-4 leading-[1.05]">
            Book a flight or ask a question.
          </h1>
          <p className="font-body text-lg text-gray-500 max-w-xl">
            Our reservations team responds within 24 hours on business days. For urgent
            bookings, WhatsApp or call directly.
          </p>
        </div>
      </section>

      {/* ── CONTENT GRID ── */}
      <section className="bg-page-off py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* LEFT — Contact methods */}
            <div>
              <h2 className="font-display text-2xl font-normal italic text-deep-ocean mb-8">
                Reach us directly.
              </h2>

              <div className="space-y-4">
                {CONTACT_METHODS.map((method) => {
                  const Icon = method.icon;
                  const Tag = method.external ? "a" : "a";
                  const extraProps = method.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {};

                  return (
                    <Tag
                      key={method.type}
                      href={method.href}
                      {...extraProps}
                      className="group flex items-start gap-4 bg-page-white p-6 rounded-sm border border-gray-100 hover:border-zanair-blue/30 hover:shadow-sm transition-all block"
                    >
                      <div className="bg-zanair-blue/8 p-3 rounded-full shrink-0">
                        <Icon size={24} className="text-zanair-blue" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-1">
                          {method.type}
                        </p>
                        <p className="font-body text-base font-medium text-deep-ocean group-hover:text-zanair-blue transition-colors truncate">
                          {method.value}
                        </p>
                        <p className="font-body text-xs text-gray-400 leading-relaxed mt-1">
                          {method.note}
                        </p>
                      </div>
                    </Tag>
                  );
                })}
              </div>

              {/* Agent note */}
              <div className="bg-zanair-blue/5 border border-zanair-blue/20 p-6 rounded-sm mt-8">
                <h3 className="font-display text-xl font-normal italic text-deep-ocean mb-2">
                  Travel agents &amp; tour operators
                </h3>
                <p className="font-body text-sm text-gray-600 mb-4">
                  ZanAir works directly with registered travel agents and tour operators.
                  Contact us to discuss preferential rates and agent booking procedures.
                </p>
                <Link
                  href="/agent"
                  className="font-body text-sm text-zanair-blue hover:text-deep-ocean transition-colors"
                >
                  Agent Enquiry →
                </Link>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="bg-page-white p-8 rounded-sm border border-gray-100">
              <h2 className="font-display text-2xl font-normal italic text-deep-ocean mb-6">
                Send us a message.
              </h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
