import Link from "next/link";
import { company } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="section bg-slate-950 text-white">
      <div className="container-shell flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">Ready to turn traffic into qualified survey leads?</h2>
          <p className="mt-3 text-lg leading-8 text-slate-300">
            Call, email, or request a quote now. This frontend is built so every major section routes buyers to the next action.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={company.phoneHref} className="btn-secondary border-white/20 bg-white text-slate-950">Call {company.phoneDisplay}</a>
          <a href={`mailto:${company.email}`} className="btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10">Email us</a>
          <Link href="/#quote" className="btn-primary">Get quote</Link>
        </div>
      </div>
    </section>
  );
}
