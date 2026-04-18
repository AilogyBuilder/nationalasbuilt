import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CITIES, COMPANY, SERVICES, PROCESS } from "@/lib/data";
import { QuoteForm } from "@/components/QuoteForm";

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return CITIES.map(c => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const city = CITIES.find(c => c.slug === params.slug);
  if (!city) return {};
  return {
    title: `${city.heroLine} | National As Built Inc.`,
    description: `Laser-measured as-built surveys, Scan-to-CAD, and Matterport 3D documentation in ${city.name}, ${city.state}. Fast turnaround. Call 972-342-7070.`,
  };
}

export default function CityPage({ params }: Props) {
  const city = CITIES.find(c => c.slug === params.slug);
  if (!city) notFound();

  const otherCities = CITIES.filter(c => c.slug !== city.slug).slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, var(--navy) 0%, #1a3568 55%, #1e4d9b 100%)",
        color: "white", padding: "80px 0 64px", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 60% at 70% 40%, rgba(45,95,179,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 24 }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span>Locations</span>
            <span>/</span>
            <span style={{ color: "var(--silver-light)" }}>{city.name}, {city.state}</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 56, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "var(--silver-light)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--blue-light)", display: "inline-block" }} />
                {city.metro}
              </div>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
                {city.heroLine}
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.68)", maxWidth: 520, marginBottom: 36 }}>
                {city.intro}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href="#quote" className="btn btn-blue btn-lg">Get a Free Quote</a>
                <a href={COMPANY.phoneHref} className="btn btn-outline-white btn-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            {/* Stats panel */}
            <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: 32 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>Key areas we serve</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {city.keyAreas.map(area => (
                  <span key={area} style={{ background: "rgba(30,77,155,0.3)", border: "1px solid rgba(45,95,179,0.3)", color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 500, padding: "5px 12px", borderRadius: 100 }}>{area}</span>
                ))}
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { num: "48h", label: "Avg scheduling" },
                    { num: "±1/32\"", label: "LEICA accuracy" },
                    { num: "DWG+PDF", label: "Deliverables" },
                    { num: "2004", label: "Founded" },
                  ].map(s => (
                    <div key={s.num} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "14px 16px" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--silver-light)", lineHeight: 1 }}>{s.num}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 3 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){section:first-of-type>.container>div:last-child{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)", padding: "16px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {["Founded 2004 — 20+ years experience","LEICA ±1/32\" precision","DWG + PDF deliverables","All 50 states + PR & Canada"].map(t => (
              <div key={t} style={{ fontSize: 13, fontWeight: 500, color: "var(--text-mid)", display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--navy-mid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES IN THIS MARKET */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <span className="eyebrow">Services in {city.name}</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,3vw,40px)", color: "var(--navy)" }}>
              What We Deliver in <em style={{ color: "var(--navy-mid)" }}>{city.name}, {city.state}</em>
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.7, maxWidth: 560, marginTop: 12 }}>
              Every service available nationwide is fully available in the {city.metro} area. Same quality. Same flat rate. Same fast turnaround.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {SERVICES.map(s => (
              <div key={s.id} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 8, padding: "24px 22px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "var(--navy)", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "var(--text-mid)" }}>{s.desc}</p>
                <a href="#quote" style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 14, fontSize: 13, fontWeight: 600, color: "var(--blue)", textDecoration: "none" }}>Quote in {city.name} →</a>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:800px){section>.container>div:last-child{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* PROCESS */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="eyebrow">How it works</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,3vw,38px)", color: "var(--navy)" }}>
              Your {city.name} Survey in 3 Steps
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, position: "relative" }}>
            <div style={{ position: "absolute", top: 34, left: "16.67%", right: "16.67%", height: 1, background: "var(--border)" }} />
            {PROCESS.map((step, i) => (
              <div key={step.num} style={{ textAlign: "center", padding: "0 28px" }}>
                <div style={{ width: 68, height: 68, borderRadius: "50%", background: "var(--navy)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 24, margin: "0 auto 20px", position: "relative", zIndex: 1 }}>{step.num}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--navy)", marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-mid)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NAB IN THIS CITY */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
            <div>
              <span className="eyebrow">Why National As Built</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,3vw,38px)", color: "var(--navy)", marginTop: 12, marginBottom: 20 }}>
                The Right Partner for<br /><em style={{ color: "var(--navy-mid)" }}>{city.name} Projects</em>
              </h2>
              <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.7, marginBottom: 24 }}>
                {city.name}&apos;s construction and renovation market demands reliable, accurate documentation. We bring the same LEICA laser precision and AIA-standard deliverables to every {city.name} project that we provide nationwide.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.7 }}>
                Whether you&apos;re an architect renovating in {city.keyAreas[0]}, a contractor permitting in {city.keyAreas[1]}, or a developer managing multiple {city.name} properties, we deliver accurate drawings on your timeline.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Local market coverage", body: `We serve ${city.keyAreas.join(", ")} and the broader ${city.metro} area.` },
                { title: "48-hour scheduling", body: "Survey teams scheduled within 48 hours — no waiting for out-of-state crews." },
                { title: "Flat rate — no surprises", body: "Our nationwide flat rate applies in " + city.name + ". No travel surcharges, no hidden fees." },
                { title: "Permit-ready deliverables", body: "DWG and PDF files aligned to AIA standards, ready for " + city.name + " permit submissions." },
              ].map(item => (
                <div key={item.title} style={{ display: "flex", gap: 16, padding: 20, background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--navy-mid)", flexShrink: 0, marginTop: 6 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "var(--navy)", marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 14, color: "var(--text-mid)", lineHeight: 1.6 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:800px){section>.container>div:first-child{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* QUOTE FORM */}
      <section className="section section-dark" id="quote">
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <span className="eyebrow" style={{ color: "var(--blue-light)" }}>Get started in {city.name}</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px,3vw,38px)", color: "white", marginTop: 12 }}>
              Request a Quote for <em style={{ color: "var(--silver-light)" }}>{city.name}</em>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", maxWidth: 520, lineHeight: 1.7, marginTop: 10 }}>
              Tell us about your {city.name} project and we&apos;ll respond within 2 business hours with a clear cost range and next steps.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 40, alignItems: "start" }}>
            <div style={{ background: "white", borderRadius: 8, padding: 32 }}>
              <QuoteForm source={`city-${city.slug}`} defaultCity={`${city.name}, ${city.state}`} />
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: 28 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "white", marginBottom: 16 }}>Contact us directly</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Call us", val: COMPANY.phone, href: COMPANY.phoneHref },
                  { label: "Email", val: COMPANY.email, href: `mailto:${COMPANY.email}` },
                  { label: "Headquarters", val: COMPANY.address, href: undefined },
                ].map(c => (
                  <div key={c.label} style={{ paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>{c.label}</div>
                    {c.href ? <a href={c.href} style={{ fontSize: 15, fontWeight: 600, color: "var(--silver-light)", textDecoration: "none" }}>{c.val}</a> : <div style={{ fontSize: 15, color: "rgba(255,255,255,0.6)" }}>{c.val}</div>}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginTop: 16 }}>
                Every request is reviewed by a real team member. We respond within 2 business hours with a clear cost range.
              </p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){section.section-dark>.container>div:last-child{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* OTHER CITIES */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ marginBottom: 32 }}>
            <span className="eyebrow">Other locations</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,2.5vw,34px)", color: "var(--navy)" }}>We Also Serve</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
            {otherCities.map(c => (
              <Link key={c.slug} href={`/cities/${c.slug}`} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "16px 20px", background: "white", border: "1px solid var(--border)",
                borderRadius: 6, textDecoration: "none",
              }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)" }}>{c.name}, {c.state}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{c.metro}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--silver)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
