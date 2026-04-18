import { Section } from "./Section";

const steps = [
  {
    title: "1. Request a quote",
    copy: "Tell us your project type, square footage, location, and timeline. We respond fast with a clear cost range and next steps.",
  },
  {
    title: "2. On-site survey",
    copy: "Our field team captures existing conditions using LEICA laser measurement. We schedule within 48 hours and work around your timeline.",
  },
  {
    title: "3. Receive your drawings",
    copy: "Clean DWG and PDF files delivered via Dropbox, aligned to AIA standards and ready for design, permitting, leasing, or construction.",
  },
];

export function Process() {
  return (
    <Section
      eyebrow="How it works"
      title="From site to CAD in 3 steps"
      subtitle="Simple, fast, and reliable. We handle the field work and drafting so you can focus on the project."
      className="bg-slate-50"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="card">
            <h3 className="text-xl font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-3 text-slate-600 leading-7">{step.copy}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
