export function StatsStrip() {
  const stats = [
    { label: "In business since", value: "2004" },
    { label: "Coverage", value: "50 states + PR + Canada" },
    { label: "Laser accuracy", value: "+/- 1/32 inch" },
    { label: "Deliverables", value: "DWG, PDF, Dropbox" },
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
