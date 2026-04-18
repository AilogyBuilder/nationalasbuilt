import { notFound } from "next/navigation";
import { cityPages, company } from "@/lib/site";
import { LeadForm } from "@/components/LeadForm";
import { Section } from "@/components/Section";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return cityPages.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const city = cityPages.find((entry) => entry.slug === slug);
  if (!city) return {};
  return {
    title: `${city.hero} | National As Built Inc.`,
    description: `${city.hero} with nationwide support, commercial and residential surveys, Scan-to-CAD, and permit-ready deliverables.`
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = cityPages.find((entry) => entry.slug === slug);
  if (!city) return notFound();

  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="container-shell py-20">
          <div className="eyebrow">Local landing page</div>
          <h1 className="mt-6 heading-lg sm:text-5xl">{city.hero} — Fast field documentation for {city.region}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
            National As Built uses its national coverage and established production flow to support architects, contractors, developers, designers, brokers, and engineers in {city.city}, {city.state}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={company.phoneHref} className="btn-primary">Call {company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`} className="btn-secondary">Email {company.email}</a>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Why this page exists"
        title={`Capture high-intent local search in ${city.city}`}
        subtitle="Each city page follows the same proven structure: local headline, service credibility, pricing orientation, and strong CTA."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card">
            <h2 className="text-xl font-semibold">Best-fit work</h2>
            <p className="mt-3 text-slate-600">Commercial renovations, retail rollouts, hospitality renovations, lease verification, permit support, and existing conditions documentation.</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-semibold">Deliverables</h2>
            <p className="mt-3 text-slate-600">DWG and PDF files, laser-measured field data, and optional Matterport-driven visual documentation.</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-semibold">Positioning</h2>
            <p className="mt-3 text-slate-600">Faster conversion path than generic “contact us” pages, with pricing cues, lead capture, and enterprise routing.</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Local pricing cues"
        title={`Typical pricing ranges for ${city.city} buyers`}
        subtitle="Use ranges to orient buyers without overcommitting. Final scope still depends on site complexity and deliverables."
        className="bg-slate-50"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Essentials", price: "$0.20–$0.40 / sq ft" },
            { name: "Professional", price: "$0.40–$0.80 / sq ft" },
            { name: "Enterprise rollout", price: "Custom portfolio pricing" }
          ].map((tier) => (
            <div key={tier.name} className="card">
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="mt-3 text-3xl font-semibold text-slate-950">{tier.price}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Get quote"
        title={`Request a ${city.city} project quote`}
        subtitle={`This form can be tagged automatically in the CRM as ${city.city.toLowerCase()} demand so city performance is measurable.`}
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <LeadForm source={`location-${city.slug}`} page={`/locations/${city.slug}`} />
          <div className="card">
            <h3 className="text-xl font-semibold text-slate-950">Next move</h3>
            <p className="mt-3 text-slate-600 leading-7">
              For portfolios, large renovation programs, or repeat-site work, route directly into the enterprise page so the sales conversation starts at a higher level.
            </p>
            <div className="mt-6">
              <Link href="/enterprise" className="btn-primary">Open enterprise funnel</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
