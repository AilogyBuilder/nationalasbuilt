import Link from "next/link";
import { cityPages } from "@/lib/site";
import { Section } from "./Section";

export function CitiesGrid() {
  return (
    <Section
      id="cities"
      eyebrow="City domination"
      title="50 high-intent landing pages ready for local search capture"
      subtitle="Built as static routes so National As Built can rank for commercial as-built demand across major U.S. metros while routing everything into one centralized sales process."
      className="bg-slate-50"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cityPages.slice(0, 15).map((city) => (
          <Link key={city.slug} href={`/locations/${city.slug}`} className="card transition hover:-translate-y-0.5">
            <div className="text-lg font-semibold text-slate-950">{city.city}, {city.state}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{city.region} • localized service page with strong CTA, pricing cues, and enterprise path.</p>
          </Link>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-600">Plus {cityPages.length - 15} additional metro pages included in the codebase.</p>
    </Section>
  );
}
