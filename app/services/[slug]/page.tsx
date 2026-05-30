import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/content";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    alternates: { canonical: `https://zanair.com/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const svcSchema = serviceSchema({ name: service.name, description: service.description, slug: service.slug });
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: service.name, href: `/services/${service.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="pb-20">
        {/* Hero */}
        <section className="bg-page-white py-16 md:py-20 border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-gray-400" role="list">
                <li><Link href="/" className="hover:text-deep-ocean transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services/scheduled-flights" className="hover:text-deep-ocean transition-colors">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-deep-ocean">{service.name}</li>
              </ol>
            </nav>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-zanair-blue mb-4">
              {service.name}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal italic text-deep-ocean mb-4">
              {service.headline}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">{service.description}</p>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 md:py-20 bg-page-off">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {service.body.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
                ))}
              </div>

              <aside className="space-y-6">
                <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6">
                  <h2 className="text-sm font-medium text-zanair-blue uppercase tracking-wider mb-4">
                    What&apos;s included
                  </h2>
                  <ul className="space-y-2" role="list">
                    {service.features.map((f) => (
                      <li key={f} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-zanair-blue mt-0.5 shrink-0">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-6 flex items-center justify-center w-full px-6 py-3 bg-orange text-white font-body text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity min-h-[48px]"
                  >
                    Book Now
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
