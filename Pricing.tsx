import { pricingPackages } from "@/lib/site";
import { Section } from "./Section";

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Packaging model"
      title="A pricing and packaging structure built to convert faster than custom-quote-only competitors"
      subtitle="Instead of hiding everything behind a generic form, show buyers realistic ranges and move qualified prospects into a call."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {pricingPackages.map((pkg, index) => (
          <div key={pkg.name} className={`card ${index === 1 ? "border-brand-300 ring-4 ring-brand-50" : ""}`}>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{pkg.name}</div>
            <div className="mt-3 text-3xl font-semibold text-slate-950">{pkg.price}</div>
            <p className="mt-3 text-slate-600">{pkg.target}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {pkg.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
