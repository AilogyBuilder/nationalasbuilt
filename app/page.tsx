import Link from "next/link";
import { COMPANY, PROCESS, PRICING, FAQS, CITIES } from "@/lib/data";
import { QuoteForm } from "@/components/QuoteForm";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CitiesGrid } from "@/components/CitiesGrid";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(135deg, var(--navy) 0%, #1a3568 55%, #1e4d9b 100%)",
        color: "white", padding: "100px 0 80px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 75% 40%, rgba(45,95,179,0.28) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, right: "22%", width: 2, height: "100%", background: "linear-gradient(180deg, transparent 0%, rgba(142,163,188,0.12) 40%, transparent 100%)", transform: "rotate(12deg)", transformOrigin: "top", pointerEvents: "none" }} />

        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "center" }}>

            {/* LEFT — copy */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(197,208,223,0.9)", fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "6px 16px", borderRadius: 100, marginBottom: 28 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b7de8", display: "inline-block", flexShrink: 0 }} />
                Trusted since {COMPANY.founded} &mdash; {COMPANY.coverage}
              </div>

              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px, 4.5vw, 58px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", color: "white", marginBottom: 24 }}>
                Accurate As-Built<br />
                <em style={{ color: "#c5d0df", fontWeight: 400 }}>Surveys, Delivered Fast.</em>
              </h1>

              <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: 540, marginBottom: 40 }}>
                Laser-measured commercial and residential drawings, Scan-to-CAD, and Matterport 3D tours. One reliable team. One flat rate. Anywhere in the country.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 56 }}>
                <a href="#quote" className="btn btn-blue btn-lg">
                  Get a Free Quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href={COMPANY.phoneHref} className="btn btn-outline-white btn-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  {COMPANY.phone}
                </a>
              </div>

              {/* Proof stats */}
              <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
                {[
                  { num: "20+",    label: "Years in business" },
                  { num: "50",     label: "States served" },
                  { num: "±1/32″", label: "LEICA accuracy" },
                  { num: "48h",    label: "Avg scheduling" },
                ].map(s => (
                  <div key={s.num}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 30, color: "#c5d0df", lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — mini quote card */}
            <div style={{ background: "white", borderRadius: 10, padding: 32, boxShadow: "0 24px 80px rgba(0,0,0,0.28)", color: "var(--text)" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--navy)", marginBottom: 4 }}>Request a Free Quote</h2>
              <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>We respond within 2 business hours</p>
              <MiniQuoteCard />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 1020px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-card { max-width: 500px; }
          }
        `}</style>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            {[
              { path: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", text: "Founded 2004 — 20+ years nationwide" },
              { path: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 10m-3 0a3 3 0 106 0 3 3 0 10-6 0", text: "All 50 states + PR & Canada" },
              { path: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8", text: "AIA-standard DWG + PDF" },
              { path: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z", text: "LEICA ±1/32″ precision" },
            ].map(t => (
              <div key={t.text} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13, fontWeight: 500, color: "var(--text-mid)" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--navy-mid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={t.path} /></svg>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="section" id="services">
        <div className="container">
          <div style={{ marginBottom: 52 }}>
            <span className="eyebrow">What we do</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 3.5vw, 44px)", color: "var(--navy)", marginBottom: 14 }}>
              Complete As-Built <em style={{ color: "var(--navy-mid)" }}>Documentation Services</em>
            </h2>
            <p style={{ fontSize: 17, color: "var(--text-mid)", lineHeight: 1.7, maxWidth: 560 }}>
              From a single floor plan to a full multi-discipline survey package, we capture and deliver the field data your project depends on.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section" id="process" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="eyebrow">How it works</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", color: "var(--navy)" }}>
              From Site to CAD in <em style={{ color: "var(--navy-mid)" }}>3 Steps</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, position: "relative" }}>
            <div style={{ position: "absolute", top: 33, left: "16.67%", right: "16.67%", height: 1, background: "var(--border)" }} />
            {PROCESS.map((step) => (
              <div key={step.num} style={{ textAlign: "center", padding: "0 32px" }}>
                <div style={{ width: 68, height: 68, borderRadius: "50%", background: "var(--navy)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 24, margin: "0 auto 24px", position: "relative", zIndex: 1 }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--navy)", marginBottom: 12 }}>{step.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-mid)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:700px){#process .container>div:last-child{grid-template-columns:1fr!important;gap:40px!important} #process .container>div:last-child>div{padding:0 16px!important} #process .container>div:last-child::before{display:none!important}}`}</style>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <span className="eyebrow" style={{ color: "#3b7de8" }}>Why choose us</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", color: "white", marginTop: 12, marginBottom: 20 }}>
                Accuracy Is Our <em style={{ color: "#c5d0df" }}>First Priority</em>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, marginBottom: 40 }}>
                Since {COMPANY.founded}, we&apos;ve built our reputation on one thing: getting the measurements right every single time. No guesswork. No costly redesigns.
              </p>
              <div>
                {[
                  { title: "LEICA Laser Precision", body: "Professional LEICA devices achieving ±1/32\" over 300 ft — far beyond tape-measure tolerances that cause expensive errors downstream." },
                  { title: "One Flat Rate, Anywhere", body: "Whether your project is in Manhattan or rural Montana, same competitive rate. No travel surcharges, no surprise fees." },
                  { title: "AIA-Standard Deliverables", body: "Every drawing produced per AIA guidelines — floor plans, RCPs, elevations, sections, and site plans in DWG and PDF." },
                  { title: "Error Correction Guarantee", body: "If an error occurs in our drawings, we return to the site at no charge to verify measurements and issue corrected plans." },
                ].map((item, i) => (
                  <div key={item.title} style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 18, padding: "20px 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "#8ea3bc", opacity: 0.45, lineHeight: 1 }}>0{i + 1}</div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: "white", marginBottom: 5 }}>{item.title}</div>
                      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.48)", lineHeight: 1.65 }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 10, padding: 40 }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "white", lineHeight: 1.4, marginBottom: 32 }}>
                &ldquo;Bad measurements cost time, money, and permits.{" "}
                <em style={{ color: "#c5d0df" }}>We eliminate that risk.</em>&rdquo;
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
                {[
                  { num: "2004",   label: "Year founded, Plano TX" },
                  { num: "50+",    label: "States inc. PR & Canada" },
                  { num: "±1/32″", label: "LEICA laser accuracy" },
                  { num: "48h",    label: "Avg. scheduling" },
                ].map(s => (
                  <div key={s.num} style={{ background: "rgba(30,77,155,0.22)", border: "1px solid rgba(45,95,179,0.28)", borderRadius: 6, padding: "16px 18px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 30, color: "#c5d0df", lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "var(--navy-mid)", borderRadius: 6, padding: "18px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 600, marginBottom: 3 }}>Ready to get started?</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "white" }}>{COMPANY.phone}</div>
                </div>
                <a href={COMPANY.phoneHref} style={{ background: "white", color: "var(--navy)", fontSize: 13, fontWeight: 700, padding: "10px 18px", borderRadius: 4, textDecoration: "none", flexShrink: 0 }}>Call Now</a>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){section[style*="var(--navy)"]>.container>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="eyebrow">Client stories</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", color: "var(--navy)" }}>
              Trusted by <em style={{ color: "var(--navy-mid)" }}>AEC Professionals</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { initials: "MR", name: "M. Rodriguez", role: "Principal Architect, Dallas TX", quote: "We've worked with National As Built on over a dozen commercial renovation projects. Their drawings are always accurate and delivered on time. Our design team trusts them completely." },
              { initials: "JT", name: "J. Thompson", role: "General Contractor, Houston TX", quote: "We had an urgent permit submission and needed as-built drawings in under a week. National As Built made it happen. The LEICA accuracy saved us from a costly redesign." },
              { initials: "SK", name: "S. Kim", role: "Development Manager, Retail Chain", quote: "Managing a 30-location retail rollout requires a reliable survey partner. National As Built gives us consistent deliverables across every market. Highly recommended." },
            ].map(t => (
              <div key={t.initials} style={{ background: "white", border: "1px solid var(--border)", borderRadius: 8, padding: 28, position: "relative" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 72, color: "var(--navy-mid)", opacity: 0.1, position: "absolute", top: 8, left: 18, lineHeight: 1 }}>&ldquo;</div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)", marginBottom: 20, position: "relative" }}>{t.quote}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 14, color: "#c5d0df", flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:800px){.testimonials-grid{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="section" id="pricing">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="eyebrow">Transparent pricing</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", color: "var(--navy)" }}>
              Clear Pricing. <em style={{ color: "var(--navy-mid)" }}>No Surprises.</em>
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-mid)", maxWidth: 520, margin: "12px auto 0" }}>
              Typical pricing ranges so you can plan with confidence. Contact us for an exact quote tailored to your project.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {PRICING.map(pkg => (
              <div key={pkg.tier} style={{ border: pkg.featured ? "2px solid var(--navy-mid)" : "1px solid var(--border)", borderRadius: 8, padding: 32, position: "relative", background: pkg.featured ? "var(--navy)" : "white" }}>
                {pkg.featured && (
                  <div style={{ position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)", background: "var(--blue)", color: "white", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 16px", borderRadius: "0 0 6px 6px" }}>
                    Most Popular
                  </div>
                )}
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: pkg.featured ? "#c5d0df" : "var(--blue)", marginBottom: 10 }}>{pkg.tier}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 34, color: pkg.featured ? "#c5d0df" : "var(--navy)", lineHeight: 1 }}>{pkg.price}</div>
                <div style={{ fontSize: 13, color: pkg.featured ? "rgba(255,255,255,0.42)" : "var(--text-muted)", marginBottom: 14, marginTop: 2 }}>{pkg.unit}</div>
                <p style={{ fontSize: 14, color: pkg.featured ? "rgba(255,255,255,0.58)" : "var(--text-mid)", marginBottom: 20, paddingBottom: 20, borderBottom: `1px solid ${pkg.featured ? "rgba(255,255,255,0.1)" : "var(--border)"}` }}>{pkg.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {pkg.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: pkg.featured ? "rgba(255,255,255,0.68)" : "var(--text-mid)" }}>
                      <svg width="16" height="16" style={{ flexShrink: 0, marginTop: 2 }} viewBox="0 0 24 24" fill="none" stroke={pkg.featured ? "#c5d0df" : "var(--navy-mid)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#quote" style={{ display: "block", textAlign: "center", padding: "12px", borderRadius: 4, fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14, textDecoration: "none", transition: "all 0.15s", background: pkg.featured ? "var(--blue)" : "transparent", color: pkg.featured ? "white" : "var(--navy)", border: pkg.featured ? "none" : "1.5px solid var(--navy)" }}>
                  {pkg.tier === "Enterprise" ? "Talk to Our Team" : "Request This Package"}
                </a>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 28, fontSize: 13, color: "var(--text-muted)" }}>
            Pricing varies by square footage, complexity, and location.{" "}
            <a href="#quote" style={{ color: "var(--blue)", fontWeight: 600 }}>Contact us</a> for an exact quote — we respond within 2 business hours.
          </p>
          <style>{`@media(max-width:800px){#pricing .container>div:nth-child(2){grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* ── QUOTE CALCULATOR ── */}
      <section className="section" style={{ background: "var(--bg)", padding: "72px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="eyebrow">Estimate your project</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 2.8vw, 38px)", color: "var(--navy)" }}>
              Instant <em style={{ color: "var(--navy-mid)" }}>Quote Calculator</em>
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-mid)", maxWidth: 480, margin: "10px auto 0" }}>
              Adjust the sliders to get a ballpark estimate. Submit the form below for a precise quote.
            </p>
          </div>
          <QuoteCalculator />
        </div>
      </section>

      {/* ── COVERAGE + CITIES ── */}
      <section className="section" id="coverage">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
            <div>
              <span className="eyebrow">Coverage</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", color: "var(--navy)", marginTop: 12, marginBottom: 18 }}>
                Nationwide Reach,<br /><em style={{ color: "var(--navy-mid)" }}>Local Expertise</em>
              </h2>
              <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.7, marginBottom: 28 }}>
                Headquartered in Plano, Texas, we deploy field teams across the entire United States, Puerto Rico, and Canada. {COMPANY.tagline}.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                {["Texas","Florida","California","New York","Illinois","Georgia","North Carolina","Arizona","Colorado","Washington","Nevada","Tennessee","Ohio","Pennsylvania","Michigan","+ 35 more states"].map(tag => (
                  <span key={tag} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 100, fontSize: 12, fontWeight: 600, color: "var(--text-mid)", padding: "5px 14px" }}>{tag}</span>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="#quote" className="btn btn-primary btn-lg" style={{ width: "fit-content" }}>Get a Quote for Your Location</a>
                <a href={COMPANY.phoneHref} className="btn btn-outline btn-lg" style={{ width: "fit-content" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  Call {COMPANY.phone}
                </a>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>Our 10 major markets</div>
              <CitiesGrid />
            </div>
          </div>
          <style>{`@media(max-width:900px){#coverage>.container>div{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" id="faq" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="eyebrow">FAQ</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", color: "var(--navy)" }}>
              Common <em style={{ color: "var(--navy-mid)" }}>Questions</em>
            </h2>
          </div>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {FAQS.map((faq, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                <summary style={{ padding: "22px 0", cursor: "pointer", fontSize: 16, fontWeight: 600, color: "var(--navy)", listStyle: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                  {faq.q}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--text-muted)" }}><polyline points="6 9 12 15 18 9"/></svg>
                </summary>
                <div style={{ paddingBottom: 22, fontSize: 15, lineHeight: 1.7, color: "var(--text-mid)" }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL QUOTE FORM ── */}
      <section className="section" id="quote" style={{ background: "var(--navy)" }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <span className="eyebrow" style={{ color: "#3b7de8" }}>Get started</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 42px)", color: "white", marginTop: 12 }}>
              Request Your <em style={{ color: "#c5d0df" }}>Free Quote</em>
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.52)", maxWidth: 540, lineHeight: 1.7, marginTop: 10 }}>
              Tell us about your project and we respond within 2 business hours with a clear cost range and next steps.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 48, alignItems: "start" }}>
            <div style={{ background: "white", borderRadius: 8, padding: 36 }}>
              <QuoteForm source="homepage" />
            </div>

            {/* Sidebar */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 8, padding: 32, color: "white" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, marginBottom: 24 }}>What to expect</h3>
              {[
                { n: "1", title: "Quick review", body: "We look at your project type, location, and square footage to confirm scope." },
                { n: "2", title: "Follow-up call or email", body: "A team member reaches out within 2 hours to discuss pricing and timeline." },
                { n: "3", title: "Survey scheduled", body: "Once confirmed, we schedule your on-site survey within 48 hours." },
                { n: "4", title: "Drawings delivered", body: "Clean DWG and PDF files sent via Dropbox, ready to use immediately." },
              ].map(step => (
                <div key={step.n} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--navy-mid)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{step.n}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 3 }}>{step.title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{step.body}</div>
                  </div>
                </div>
              ))}

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, marginTop: 8 }}>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", marginBottom: 8 }}>Prefer to reach us directly?</div>
                <a href={COMPANY.phoneHref} style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 22, color: "#c5d0df", textDecoration: "none", marginBottom: 6 }}>{COMPANY.phone}</a>
                <a href={`mailto:${COMPANY.email}`} style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", textDecoration: "none" }}>{COMPANY.email}</a>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){#quote>.container>div:last-child{grid-template-columns:1fr!important}}`}</style>
      </section>
    </>
  );
}

function MiniQuoteCard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div className="field-group">
          <label className="field-label">Name</label>
          <input className="field-input" placeholder="John Smith" readOnly onFocus={e => { e.currentTarget.removeAttribute("readOnly"); }} />
        </div>
        <div className="field-group">
          <label className="field-label">Email</label>
          <input className="field-input" type="email" placeholder="john@co.com" readOnly onFocus={e => { e.currentTarget.removeAttribute("readOnly"); }} />
        </div>
      </div>
      <div className="field-group">
        <label className="field-label">Project type</label>
        <select className="field-input" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7e96' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", paddingRight: 36 }}>
          <option value="">Select a service...</option>
          <option>Commercial As-Built Survey</option>
          <option>Residential Survey</option>
          <option>Scan-to-CAD</option>
          <option>Matterport 3D Tour</option>
          <option>Multi-site Rollout</option>
          <option>ADA Survey</option>
          <option>Lease Area Verification</option>
        </select>
      </div>
      <div className="field-group">
        <label className="field-label">Project location</label>
        <input className="field-input" placeholder="City, State" readOnly onFocus={e => { e.currentTarget.removeAttribute("readOnly"); }} />
      </div>
      <a href="#quote" style={{ display: "block", textAlign: "center", background: "var(--navy-mid)", color: "white", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, padding: "13px", borderRadius: 4, textDecoration: "none", marginTop: 4 }}>
        Get My Free Quote →
      </a>
      <p style={{ textAlign: "center", fontSize: 12, color: "var(--text-muted)" }}>
        Or call <a href="tel:9723427070" style={{ color: "var(--blue)", fontWeight: 600 }}>972-342-7070</a>
      </p>
    </div>
  );
}
