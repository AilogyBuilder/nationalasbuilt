"use client";
import Link from "next/link";
import { CITIES } from "@/lib/data";

export function CitiesGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      {CITIES.map(c => (
        <Link
          key={c.slug}
          href={`/cities/${c.slug}`}
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 18px", background: "white", border: "1px solid var(--border)",
            borderRadius: 6, textDecoration: "none", transition: "border-color 0.15s, transform 0.15s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--navy-mid)"; e.currentTarget.style.transform = "translateX(2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateX(0)"; }}
        >
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)" }}>{c.name}, {c.state}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{c.metro}</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--silver)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      ))}
    </div>
  );
}
