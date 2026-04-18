"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/utils";

const rateMap: Record<string, { low: number; high: number }> = {
  commercial: { low: 0.35, high: 0.8 },
  residential: { low: 0.2, high: 0.45 },
  retail: { low: 0.4, high: 0.85 },
  multiSite: { low: 0.38, high: 0.75 }
};

export function QuoteCalculator() {
  const [projectType, setProjectType] = useState<keyof typeof rateMap>("commercial");
  const [squareFeet, setSquareFeet] = useState(5000);

  const estimate = useMemo(() => {
    const rates = rateMap[projectType];
    return {
      low: squareFeet * rates.low,
      high: squareFeet * rates.high
    };
  }, [projectType, squareFeet]);

  return (
    <div className="card">
      <div className="text-lg font-semibold text-slate-950">Instant estimate range</div>
      <p className="mt-2 text-slate-600">Use these ranges as a starting point. Final pricing depends on scope, complexity, site count, and deliverables.</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <label className="label">Project type</label>
          <select className="input" value={projectType} onChange={(e) => setProjectType(e.target.value as keyof typeof rateMap)}>
            <option value="commercial">Commercial</option>
            <option value="residential">Residential</option>
            <option value="retail">Retail / hospitality</option>
            <option value="multiSite">Multi-site rollout</option>
          </select>
        </div>
        <div>
          <label className="label">Estimated square feet</label>
          <input className="input" type="number" min={100} step={100} value={squareFeet} onChange={(e) => setSquareFeet(Number(e.target.value || 0))} />
        </div>
      </div>
      <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
        <div className="text-sm uppercase tracking-[0.2em] text-brand-200">Estimated range</div>
        <div className="mt-3 text-3xl font-semibold">{formatCurrency(estimate.low)} – {formatCurrency(estimate.high)}</div>
        <p className="mt-3 text-sm leading-6 text-slate-300">An estimated range helps you plan before submitting a detailed quote request.</p>
      </div>
    </div>
  );
}
