export function StatsStrip() {
  const stats = [
    { label: "Coverage", value: "50 states + PR + Canada" },
    { label: "Founded", value: "2004" },
    { label: "Core deliverables", value: "DWG, PDF, Dropbox" },
    { label: "Positioning", value: "Nationwide as-built intelligence" }
  ];
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-shell grid gap-4 py-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-slate-200 px-5 py-4">
            <div className="text-sm font-medium text-slate-500">{s.label}</div>
            <div className="mt-1 font-semibold text-slate-950">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
