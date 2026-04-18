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
              Commercial and residential as-built surveys, Scan-to-CAD, Matterport, and portfolio rollout support.
            </p>
          </div>
          <div>
            <div className="font-semibold text-slate-950">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href={company.phoneHref}>{company.phoneDisplay}</a></li>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li>{company.location}</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-950">Top city pages</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {cityPages.slice(0, 5).map((c) => (
                <li key={c.slug}><Link href={`/locations/${c.slug}`}>{c.city}, {c.state}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-950">Enterprise funnel</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/enterprise">Portfolio programs</Link></li>
              <li><Link href="/#quote">Request proposal</Link></li>
              <li><a href={`mailto:${company.hrEmail}`}>Vendor / surveyor inquiries</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {company.name}. Built for high-intent lead capture and portfolio growth.
        </div>
      </div>
    </footer>
  );
}
