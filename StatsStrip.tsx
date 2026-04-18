"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/utils";

export function RoiCalculator() {
  const [visitors, setVisitors] = useState(500);
  const [conversionRate, setConversionRate] = useState(5);
  const [closeRate, setCloseRate] = useState(30);
  const [avgProjectValue, setAvgProjectValue] = useState(5000);

  const result = useMemo(() => {
    const leads = visitors * (conversionRate / 100);
    const deals = leads * (closeRate / 100);
    const monthlyRevenue = deals * avgProjectValue;
    return { leads, deals, monthlyRevenue };
  }, [visitors, conversionRate, closeRate, avgProjectValue]);

  return (
    <div className="card">
      <div className="text-lg font-semibold text-slate-950">Revenue impact calculator</div>
      <p className="mt-2 text-slate-600">Estimate monthly lead volume and revenue based on site traffic, conversion rates, and average project value.</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <label className="label">Monthly visitors</label>
          <input className="input" type="number" value={visitors} onChange={(e) => setVisitors(Number(e.target.value || 0))} />
        </div>
        <div>
          <label className="label">Conversion rate (%)</label>
          <input className="input" type="number" value={conversionRate} onChange={(e) => setConversionRate(Number(e.target.value || 0))} />
        </div>
        <div>
          <label className="label">Close rate (%)</label>
          <input className="input" type="number" value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value || 0))} />
        </div>
        <div>
          <label className="label">Average project value ($)</label>
          <input className="input" type="number" value={avgProjectValue} onChange={(e) => setAvgProjectValue(Number(e.target.value || 0))} />
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-brand-50 p-5">
          <div className="text-sm text-brand-700">Projected leads</div>
          <div className="mt-1 text-2xl font-semibold">{result.leads.toFixed(0)}</div>
        </div>
        <div className="rounded-2xl bg-brand-50 p-5">
          <div className="text-sm text-brand-700">Projected deals</div>
          <div className="mt-1 text-2xl font-semibold">{result.deals.toFixed(0)}</div>
        </div>
        <div className="rounded-2xl bg-brand-50 p-5">
          <div className="text-sm text-brand-700">Projected monthly revenue</div>
          <div className="mt-1 text-2xl font-semibold">{formatCurrency(result.monthlyRevenue)}</div>
        </div>
      </div>
    </div>
  );
}
