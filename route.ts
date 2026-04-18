import { LeadForm } from "@/components/LeadForm";
import { Section } from "@/components/Section";
import { enterpriseFunnelSteps } from "@/lib/site";

export const metadata = {
  title: "Enterprise Rollout Programs | National As Built Inc."
};

export default function EnterprisePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
        <div className="container-shell py-20">
          <div className="eyebrow border-white/20 bg-white/10 text-brand-100">Enterprise funnel</div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight">Portfolio-scale as-built programs for rollouts, renovations, and repeat-site work</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            This page is designed for multi-site retail, hospitality, office, healthcare, and portfolio owners who need standardized deliverables and a cleaner procurement path.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Sales design"
        title="Enterprise funnel architecture"
        subtitle="A dedicated sales path helps larger buyers self-identify and gives your team better discovery context before the first conversation."
      >
        <div className="grid gap-6 lg:grid-cols-4">
          {enterpriseFunnelSteps.map((step) => (
            <div key={step.title} className="card">
              <h2 className="text-lg font-semibold">{step.title}</h2>
              <p className="mt-3 text-slate-600 leading-7">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Best-fit accounts"
        title="Who this is built for"
        subtitle="These segments are the easiest to package into higher-value recurring programs."
        className="bg-slate-50"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {["Retail chains", "Hospitality brands", "Office portfolios", "Developers and design firms"].map((segment) => (
            <div key={segment} className="card">
              <h3 className="text-xl font-semibold text-slate-950">{segment}</h3>
              <p className="mt-3 text-slate-600">Use a pilot site to prove speed and quality, then convert into a rollout or annual update program.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Request proposal"
        title="Start with a pilot site or rollout conversation"
        subtitle="The enterprise form can be routed to a different CRM pipeline, owner, or SLA than standard quote requests."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <LeadForm source="enterprise" page="/enterprise" compact />
          <div className="card prose-clean">
            <h3 className="text-xl font-semibold text-slate-950">Recommended enterprise workflow</h3>
            <p className="mt-3">Use this page for multi-site or portfolio buyers, not one-off local projects.</p>
            <p>Tag these leads inside the CRM as enterprise, rollout, or portfolio so response time and messaging stay different from standard quote traffic.</p>
            <p>After the first qualified call, send a proposal anchored around pilot site scope, template standardization, PM oversight, and reporting cadence.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
