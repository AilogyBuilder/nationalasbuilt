import Link from "next/link";
import { enterpriseFunnelSteps } from "@/lib/site";
import { Section } from "./Section";

export function EnterpriseFunnel() {
  return (
    <Section
      eyebrow="Multi-site programs"
      title="Managing multiple locations? We built a program for that."
      subtitle="Retail chains, franchise operators, developers, and portfolio owners get a dedicated process with standardized deliverables and a single point of contact."
    >
      <div className="grid gap-6 lg:grid-cols-4">
        {enterpriseFunnelSteps.map((step) => (
          <div key={step.title} className="card">
            <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-3 text-slate-600 leading-7">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/enterprise" className="btn-primary">Learn about enterprise programs</Link>
      </div>
    </Section>
  );
}
