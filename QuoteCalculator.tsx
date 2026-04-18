import { pricingPackages } from "@/lib/site";
import { Section } from "./Section";

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Transparent pricing packages"
      subtitle="Our tiered pricing models help you plan projects with confidence. Contact us for customized enterprise solutions."
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
