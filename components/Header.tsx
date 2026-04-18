"use client";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { COMPANY, CITIES } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);

  return (
    <>
      {/* Announce bar */}
      <div style={{ background: "var(--navy)", color: "rgba(255,255,255,0.75)", fontSize: 13, textAlign: "center", padding: "9px 24px" }}>
        Serving all 50 states, Puerto Rico &amp; Canada since {COMPANY.founded} —{" "}
        <a href={COMPANY.phoneHref} style={{ color: "var(--blue-light)", fontWeight: 600 }}>{COMPANY.phone}</a>
      </div>

      {/* Main header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72, gap: 24 }}>
          <Logo size="md" />

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="desktop-nav">
            <Link href="/#services" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-mid)", textDecoration: "none" }}>Services</Link>
            <Link href="/#process" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-mid)", textDecoration: "none" }}>How It Works</Link>
            <Link href="/#pricing" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-mid)", textDecoration: "none" }}>Pricing</Link>

            {/* Cities dropdown */}
            <div style={{ position: "relative" }} onMouseEnter={() => setCitiesOpen(true)} onMouseLeave={() => setCitiesOpen(false)}>
              <button style={{ background: "none", border: "none", fontSize: 14, fontWeight: 500, color: "var(--text-mid)", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                Locations
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              {citiesOpen && (
                <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8, background: "white", border: "1px solid var(--border)", borderRadius: 8, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", padding: "8px 0", minWidth: 220, zIndex: 200 }}>
                  {CITIES.map(c => (
                    <Link key={c.slug} href={`/cities/${c.slug}`} style={{ display: "block", padding: "9px 20px", fontSize: 14, color: "var(--text-mid)", textDecoration: "none", transition: "background 0.1s" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "var(--bg)")}
                      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                      {c.name}, {c.state}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#faq" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-mid)", textDecoration: "none" }}>FAQ</Link>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href={COMPANY.phoneHref} className="btn btn-outline btn-sm" style={{ gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              {COMPANY.phone}
            </a>
            <Link href="/#quote" className="btn btn-primary btn-sm">Get a Free Quote</Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }} className="mobile-burger" aria-label="Toggle menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ background: "white", borderTop: "1px solid var(--border)", padding: "16px 24px 24px" }}>
            {[
              { href: "/#services", label: "Services" },
              { href: "/#process", label: "How It Works" },
              { href: "/#pricing", label: "Pricing" },
              { href: "/#faq", label: "FAQ" },
            ].map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "12px 0", fontSize: 15, fontWeight: 500, color: "var(--text)", borderBottom: "1px solid var(--border)", textDecoration: "none" }}>{l.label}</Link>
            ))}
            <div style={{ paddingTop: 8, fontWeight: 600, fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8, marginTop: 8 }}>Locations</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
              {CITIES.map(c => (
                <Link key={c.slug} href={`/cities/${c.slug}`} onClick={() => setOpen(false)} style={{ fontSize: 14, color: "var(--text-mid)", padding: "6px 0", textDecoration: "none" }}>{c.name}, {c.state}</Link>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 20 }}>
              <a href={COMPANY.phoneHref} className="btn btn-outline" style={{ justifyContent: "center" }}>Call {COMPANY.phone}</a>
              <Link href="/#quote" className="btn btn-primary" style={{ justifyContent: "center" }} onClick={() => setOpen(false)}>Get a Free Quote</Link>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: block !important; }
        }
      `}</style>
    </>
  );
}
