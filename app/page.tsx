import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { RoiCalculator } from "@/components/RoiCalculator";
import { LeadForm } from "@/components/LeadForm";
import { CitiesGrid } from "@/components/CitiesGrid";
import { Proof } from "@/components/Proof";
import { EnterpriseFunnel } from "@/components/EnterpriseFunnel";
import { CtaBand } from "@/components/CtaBand";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesGrid />
      <Process />
      <Proof />
      <Pricing />
      <Section
        eyebrow="Lead generation"
        title="Instant quote and ROI calculators turn passive visitors into sales conversations"
        subtitle="The quote calculator helps buyers self-qualify. The revenue calculator shows internal stakeholders why the site is now a real acquisition asset."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <QuoteCalculator />
          <RoiCalculator />
        </div>
      </Section>
      <Section
        id="quote"
        eyebrow="Quote capture"
        title="Working CRM and email capture"
        subtitle="The form posts to a server route with validation, honeypot protection, and optional HubSpot + Resend integrations."
        className="bg-slate-50"
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <LeadForm />
          <div className="card prose-clean">
            <h3 className="text-xl font-semibold text-slate-950">What happens after submit</h3>
            <p className="mt-3">1. Lead is validated server-side.</p>
            <p>2. Contact can be pushed into HubSpot with page source and project metadata.</p>
            <p>3. Notification email can be sent to the sales inbox through Resend.</p>
            <p>4. Larger accounts can be routed to the enterprise path for proposal-led selling.</p>
          </div>
        </div>
      </Section>
      <CitiesGrid />
      <EnterpriseFunnel />
      <CtaBand />
    </>
  );
}
