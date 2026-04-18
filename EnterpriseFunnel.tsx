import Link from "next/link";
import { enterpriseFunnelSteps } from "@/lib/site";
import { Section } from "./Section";

export function EnterpriseFunnel() {
  return (
    <Section
      eyebrow="Enterprise sales funnel"
      title="A cleaner path for multi-site, rollout, and repeat-program business"
      subtitle="Instead of forcing large accounts through the same generic form, the site now has a dedicated route for enterprise qualification."
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
        <Link href="/enterprise" className="btn-primary">Open enterprise page</Link>
      </div>
    </Section>
  );
}
