import { Section } from "./Section";

const items = [
  {
    title: "20+ years of experience",
    copy: "Founded in 2004, National As Built has delivered accurate as-built documentation for thousands of commercial and residential projects across the country.",
  },
  {
    title: "Nationwide coverage",
    copy: "Local field teams in every major market. We serve all 50 states, Puerto Rico, and Canada with consistent quality and fast turnaround on every project.",
  },
  {
    title: "Permit-ready deliverables",
    copy: "Every drawing is laser-verified, AutoCAD-drafted, and aligned to AIA guidelines. DWG and PDF files delivered via Dropbox, ready for design, permitting, or construction.",
  },
];

export function Proof() {
  return (
    <Section
      eyebrow="Why National As Built"
      title="Trusted accuracy. Nationwide reach. On-time delivery."
      subtitle="Bad measurements cost time, money, and permits. We eliminate that risk on every project."
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
