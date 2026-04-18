import Link from "next/link";
import { company, cityPages } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 font-bold text-white">NA</div>
          <div>
            <div className="font-semibold text-slate-950">{company.name}</div>
            <div className="text-sm text-slate-500">Nationwide As-Built Surveys</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          <Link href="/#services">Services</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#cities">Cities</Link>
          <Link href="/enterprise">Enterprise</Link>
          <a href={company.phoneHref} className="btn-secondary px-4 py-2">Call {company.phoneDisplay}</a>
          <Link href="/#quote" className="btn-primary px-4 py-2">Get Quote</Link>
        </nav>
      </div>
      <div className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="container-shell flex flex-wrap items-center justify-between gap-3 py-2 text-sm">
          <p>Since {company.founded} • {company.coverage}</p>
          <div className="flex items-center gap-4">
            <a href={company.phoneHref} className="font-semibold text-white">Call {company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`} className="text-slate-200">{company.email}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
