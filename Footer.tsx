import Link from "next/link";
import { company } from "@/lib/site";
import { Phone, Upload, Building2, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_right,rgba(44,124,242,0.18),transparent_35%),radial-gradient(circle_at_top_left,rgba(17,36,74,0.08),transparent_25%)]" />
      <div className="container-shell relative grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <div className="eyebrow">Commercial &middot; Residential &middot; Nationwide</div>
          <h1 className="heading-xl mt-6">
            Stop Guessing. Get Exact As-Built Plans &mdash; Fast.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
            Laser-accurate surveys, Scan-to-CAD, and 3D documentation across all 50 states, Puerto Rico, and Canada. No delays, no surprises, no costly mistakes. Trusted since {company.founded}.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/#quote" className="btn-primary">Get Instant Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
            <a href={`mailto:${company.email}?subject=Plans Upload Request`} className="btn-secondary"><Upload className="mr-2 h-5 w-5" /> Upload Plans</a>
            <a href={company.phoneHref} className="btn-secondary"><Phone className="mr-2 h-5 w-5" /> Call {company.phoneDisplay}</a>
          </div>
          <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Founded 2004",
              "50 states + PR + Canada",
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
            <span className="font-medium">Why clients choose us</span>
          </div>
          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-white/5 p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-brand-200">Who we serve</div>
              <div className="mt-2 text-2xl font-semibold">Architects, contractors, developers &amp; engineers</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Whether you need drawings for a single building or a 50-location rollout, our nationwide team delivers accurate, permit-ready documentation on time.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-5">
                <div className="text-3xl font-semibold">48-hour</div>
                <p className="mt-2 text-sm text-slate-300">Survey scheduling so your project never stalls waiting for field data.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <div className="text-3xl font-semibold">+/-1/32&quot;</div>
                <p className="mt-2 text-sm text-slate-300">LEICA laser accuracy &mdash; the precision your design and construction team depends on.</p>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-5">
              <div className="text-sm uppercase tracking-[0.2em] text-brand-200">Deliverables</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                DWG and PDF files via Dropbox, aligned to AIA standards. Ready for design, permitting, leasing, or construction the moment you receive them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
