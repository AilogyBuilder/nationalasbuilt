import Link from "next/link";
import { cityPages, company } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">{company.name}</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Commercial and residential as-built surveys, Scan-to-CAD, Matterport 3D tours, and portfolio rollout programs across all 50 states.
            </p>
          </div>
          <div>
            <div className="font-semibold text-slate-950">Contact us</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href={company.phoneHref} className="hover:text-slate-900">{company.phoneDisplay}</a></li>
              <li><a href={`mailto:${company.email}`} className="hover:text-slate-900">{company.email}</a></li>
              <li>{company.location}</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-950">Service areas</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {cityPages.slice(0, 6).map((c) => (
                <li key={c.slug}><Link href={`/locations/${c.slug}`} className="hover:text-slate-900">{c.city}, {c.state}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-950">Services</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/#services" className="hover:text-slate-900">As-built surveys</Link></li>
              <li><Link href="/#services" className="hover:text-slate-900">Scan-to-CAD</Link></li>
              <li><Link href="/#services" className="hover:text-slate-900">Matterport 3D tours</Link></li>
              <li><Link href="/enterprise" className="hover:text-slate-900">Enterprise programs</Link></li>
              <li><Link href="/#quote" className="hover:text-slate-900">Request a quote</Link></li>
              <li><a href={`mailto:${company.hrEmail}`} className="hover:text-slate-900">Surveyor inquiries</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {company.name}. All rights reserved. Plano, Texas.
        </div>
      </div>
    </footer>
  );
}
