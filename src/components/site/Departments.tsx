import { ArrowRight, Baby, Bone, Eye, HeartPulse, Scissors, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { Button } from "@/components/ui/button";
import { departments } from "@/data/clinic";

const icons: Record<string, LucideIcon> = {
  "General Medicine": Stethoscope,
  Ophthalmology: Eye,
  "Obstetrics & Gynaecology": HeartPulse,
  "General Surgery": Scissors,
  Orthopaedics: Bone,
  Paediatrics: Baby,
};

export function Departments() {
  return (
    <section id="departments" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Departments"
          title="Six specialities under one roof"
          subtitle="Consult the right specialist without travelling across the city."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d, i) => {
            const Icon = icons[d.name] ?? Stethoscope;
            return (
              <Reveal key={d.name} delay={i * 0.06}>
                <article className="surface-card group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                  <div className="absolute -right-10 -top-10 size-28 rounded-full bg-secondary/10 transition-transform duration-500 group-hover:scale-150" />
                  <span className="relative flex size-14 items-center justify-center rounded-2xl bg-[var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-soft)]">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="relative mt-6 text-xl">{d.name}</h3>
                  <p className="relative mt-3 text-sm text-muted-foreground">{d.desc}</p>
                  <Button asChild variant="link" className="relative mt-4 h-auto p-0 text-primary">
                    <a href="#appointment">
                      Learn more <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
