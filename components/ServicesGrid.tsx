"use client";
import { SERVICES } from "@/lib/data";

const ICON_PATHS: Record<string, string> = {
  architectural:  "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
  "scan-to-cad":  "M16 18l6-6-6-6 M8 6L2 12l6 6",
  matterport:     "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z",
  structural:     "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10",
  ada:            "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100-8 4 4 0 000 8",
  lease:          "M12 1v22 M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
};

export function ServicesGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
      {SERVICES.map((s, idx) => (
        <div
          key={s.id}
          style={{ background: "white", padding: "32px 28px", transition: "background 0.15s", cursor: "default" }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--bg)")}
          onMouseLeave={e => (e.currentTarget.style.background = "white")}
        >
          <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--silver)", marginBottom: 14 }}>
            {String(idx + 1).padStart(2, "0")}
          </div>
          <svg style={{ width: 36, height: 36, color: "var(--navy-mid)", marginBottom: 14 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d={ICON_PATHS[s.id]} />
          </svg>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, color: "var(--navy)", marginBottom: 10, lineHeight: 1.25 }}>{s.title}</h3>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-mid)" }}>{s.desc}</p>
          <a href="#quote" style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 16, fontSize: 13, fontWeight: 600, color: "var(--blue)", textDecoration: "none" }}>
            Get a quote →
          </a>
        </div>
      ))}
      <style>{`@media(max-width:800px){.services-grid-inner{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
