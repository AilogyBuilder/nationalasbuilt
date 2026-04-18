import { Section } from "./Section";

const steps = [
  {
    title: "1. Scope in minutes",
    copy: "Visitors submit project details, preferred timeline, and square footage through a guided quote flow."
  },
  {
    title: "2. Survey and production",
    copy: "Field teams collect conditions with laser-based measurement and route clean scope to production."
  },
  {
    title: "3. Deliver and expand",
    copy: "DWG and PDF packages are delivered fast, then larger clients move into rollout planning and repeat work."
  }
];

export function Process() {
  return (
    <Section
      eyebrow="How it works"
      title="From site to CAD in 3 steps"
      subtitle="This keeps the path simple for high-intent buyers while making the next action obvious at every step."
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
