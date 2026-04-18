"use client";
import { useState } from "react";

function fmt(n: number) { return "$" + Math.round(n).toLocaleString(); }

export function QuoteCalculator() {
  const [sqft, setSqft] = useState(5000);
  const [rate, setRate] = useState(40);
  const [levels, setLevels] = useState(2);

  const base = sqft * (rate / 100) * levels;
  const low = base * 0.85;
  const high = base * 1.15;

  const SliderLabel = ({ children }: { children: React.ReactNode }) => (
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>{children}</div>
  );

  const BigVal = ({ children }: { children: React.ReactNode }) => (
    <div style={{ fontFamily: "var(--font-display)", fontSize: 30, color: "var(--navy)", marginTop: 8, lineHeight: 1 }}>{children}</div>
  );

  const sliderStyle = {
    WebkitAppearance: "none" as const, appearance: "none" as const,
    width: "100%", height: 4, background: "var(--border)", borderRadius: 2, outline: "none", cursor: "pointer",
  };

  return (
    <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
      {/* Header */}
      <div style={{ background: "var(--navy)", padding: "24px 32px" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "white", marginBottom: 4 }}>Project Cost Estimator</h3>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>Adjust sliders to estimate your as-built survey cost</p>
      </div>

      {/* Controls */}
      <div style={{ padding: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, marginBottom: 28 }}>
          <div>
            <SliderLabel>Square footage</SliderLabel>
            <input type="range" style={sliderStyle} min={500} max={50000} step={500} value={sqft} onChange={e => setSqft(+e.target.value)} />
            <BigVal>{sqft.toLocaleString()} sq ft</BigVal>
          </div>
          <div>
            <SliderLabel>Rate per sq ft</SliderLabel>
            <input type="range" style={sliderStyle} min={20} max={80} step={5} value={rate} onChange={e => setRate(+e.target.value)} />
            <BigVal>${"0." + rate} / sq ft</BigVal>
          </div>
          <div>
            <SliderLabel>Number of levels</SliderLabel>
            <input type="range" style={sliderStyle} min={1} max={10} step={1} value={levels} onChange={e => setLevels(+e.target.value)} />
            <BigVal>{levels} {levels === 1 ? "level" : "levels"}</BigVal>
          </div>
        </div>

        {/* Result */}
        <div style={{ background: "var(--bg)", border: "1.5px solid var(--border)", borderRadius: 6, padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 24, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--blue)", marginBottom: 4 }}>Estimated Low</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 34, color: "var(--navy)" }}>{fmt(low)}</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--navy-mid)", marginBottom: 4 }}>Estimated High</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 34, color: "var(--navy)" }}>{fmt(high)}</div>
          </div>
          <a href="#quote" className="btn btn-primary btn-lg">Get Exact Quote →</a>
        </div>
        <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 12 }}>
          Estimates are indicative ranges only. Final pricing depends on project complexity, access, and specific deliverables required.
        </p>
      </div>

      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none; width: 20px; height: 20px;
          border-radius: 50%; background: var(--navy-mid);
          border: 3px solid white; box-shadow: 0 0 0 2px var(--navy-mid); cursor: pointer;
        }
        @media (max-width: 700px) {
          .calc-grid { grid-template-columns: 1fr !important; }
          .calc-result-grid { grid-template-columns: 1fr 1fr !important; flex-wrap: wrap; }
        }
      `}</style>
    </div>
  );
}
