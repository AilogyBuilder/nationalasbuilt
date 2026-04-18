import Link from "next/link";
import { Logo } from "./Logo";
import { COMPANY, CITIES, SERVICES } from "@/lib/data";

export function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "white", paddingTop: 72, paddingBottom: 32 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          <div>
            <Logo variant="white" size="md" />
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", margin: "20px 0 24px", maxWidth: 280 }}>
              Commercial and residential as-built surveys, Scan-to-CAD, Matterport 3D tours, and multi-site rollout programs across all 50 states, Puerto Rico, and Canada. Founded {COMPANY.founded}.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href={COMPANY.phoneHref} style={{ color: "var(--blue-light)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>{COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`} style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, textDecoration: "none" }}>{COMPANY.email}</a>
              <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>{COMPANY.address}</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Services</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {SERVICES.map(s => (
                <li key={s.id}><Link href="/#services" style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Locations</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {CITIES.map(c => (
                <li key={c.slug}><Link href={`/cities/${c.slug}`} style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{c.name}, {c.state}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 20 }}>Get Started</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "/#quote", label: "Request a Quote" },
                { href: "/#pricing", label: "View Pricing" },
                { href: "/#process", label: "How It Works" },
                { href: "/#faq", label: "FAQ" },
                { href: `mailto:${COMPANY.hrEmail}`, label: "Surveyor Inquiries" },
              ].map(l => (
                <li key={l.href}><Link href={l.href} style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>{l.label}</Link></li>
              ))}
            </ul>
            <div style={{ marginTop: 28 }}>
              <Link href="/#quote" className="btn btn-blue btn-sm" style={{ width: "100%", justifyContent: "center" }}>Get Free Quote</Link>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.07)", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)" }}>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { href: `mailto:${COMPANY.email}`, label: "Contact" },
              { href: "/#faq", label: "FAQ" },
              { href: `mailto:${COMPANY.hrEmail}`, label: "Careers" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
