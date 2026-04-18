import { services } from "@/lib/site";
import { Section } from "./Section";

export function ServicesGrid() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Everything you need to document a building"
      subtitle="From a single floor plan to a full multi-discipline survey package, we deliver accurate, permit-ready documentation for any project type."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="card">
            <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
            <p className="mt-3 text-slate-600 leading-7">{service.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
