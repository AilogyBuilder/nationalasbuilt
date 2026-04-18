import { Section } from "./Section";

export function Proof() {
  const items = [
    {
      title: "Positioning gap to exploit",
      copy: "Competitors heavily emphasize quote buttons, vertical pages, and portfolio proof. National As Built already has national coverage and technical credibility — this redesign adds sharper messaging and conversion architecture."
    },
    {
      title: "Operational trust points",
      copy: "Founded in 2004, serving the United States, Puerto Rico, and Canada, with laser measurement, AutoCAD workflows, and DWG/PDF deliverables."
    },
    {
      title: "Higher-value sales motion",
      copy: "A dedicated enterprise path for multi-site retail, hospitality, and portfolio rollouts helps separate larger accounts from standard lead flow."
    }
  ];

  return (
    <Section
      eyebrow="Why this wins"
      title="Built to outperform brochure sites and quote-only competitors"
      subtitle="The goal is not a prettier homepage. The goal is more calls, more qualified email leads, and more revenue from portfolio-scale opportunities."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="card">
            <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-slate-600 leading-7">{item.copy}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
