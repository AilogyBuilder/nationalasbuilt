import Link from "next/link";
import { company } from "@/lib/site";
import { Phone, Upload, Building2, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_right,rgba(44,124,242,0.18),transparent_35%),radial-gradient(circle_at_top_left,rgba(17,36,74,0.08),transparent_25%)]" />
      <div className="container-shell relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <div className="eyebrow">Commercial • Residential • Nationwide</div>
          <h1 className="heading-xl mt-6">{company.heroTagline}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
            Laser-measured commercial and residential as-built drawings, Scan-to-CAD, and 3D virtual surveys across all 50 states, Puerto Rico, and Canada — trusted since {company.founded}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#quote" className="btn-primary">Get Instant Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
            <a href="mailto:info@nationalasbuilt.com?subject=Plans Upload Request" className="btn-secondary"><Upload className="mr-2 h-5 w-5" /> Upload Plans</a>
            <a href={company.phoneHref} className="btn-secondary"><Phone className="mr-2 h-5 w-5" /> Call {company.phoneDisplay}</a>
          </div>
          <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              `Founded ${company.founded}`,
              "All 50 states",
              "LEICA laser precision",
              "DWG + PDF delivery"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-soft">{item}</div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-soft">
          <div className="flex items-center gap-3 text-brand-200">
            <Building2 className="h-6 w-6" />
            <span className="font-medium">Conversion-first site structure</span>
          </div>
          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-white/5 p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-brand-200">Best fit</div>
              <div className="mt-2 text-2xl font-semibold">Renovations, rollouts, permit support</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Built for architects, contractors, developers, designers, brokers, and engineers who need reliable field data and clean deliverables.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-5">
                <div className="text-3xl font-semibold">48 hrs</div>
                <p className="mt-2 text-sm text-slate-300">Fast scheduling language to accelerate high-intent inquiries.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <div className="text-3xl font-semibold">10 cities</div>
                <p className="mt-2 text-sm text-slate-300">SEO-ready landing pages for metro-level demand capture and regional portfolio visibility.</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-brand-200">Differentiation</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Competitors emphasize quote buttons, case studies, and rollout capacity. This build adds stronger conversion architecture, packaging, and enterprise routing on top of National As Built’s existing nationwide footprint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
