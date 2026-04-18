import { services } from "@/lib/site";
import { Section } from "./Section";

export function ServicesGrid() {
  return (
    <Section
      id="services"
      eyebrow="Service stack"
      title="Built for real-world preconstruction, renovation, and compliance needs"
      subtitle="The live site already shows strong technical breadth. This version reframes those services around buyer outcomes so the site converts better."
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
