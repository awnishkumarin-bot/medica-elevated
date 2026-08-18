import { CalendarDays, GraduationCap, Stethoscope } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/clinic";

function initials(name: string) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export function Doctors() {
  return (
    <section id="doctors" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our doctors"
          title="Specialists you can trust"
          subtitle="Senior consultants from PMCH, DMCH, ANMMCH and JLNMCH — available for OPD consultation at Kurji More."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.05}>
              <article className="surface-card flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-[var(--gradient-brand)] font-display text-xl text-primary-foreground">
                  {initials(d.name)}
                </div>
                <h3 className="mt-5 text-lg">{d.name}</h3>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                  <Stethoscope className="size-4" /> {d.specialization}
                </p>
                <p className="mt-3 flex items-start gap-2 text-xs text-muted-foreground">
                  <GraduationCap className="mt-0.5 size-4 shrink-0" />
                  {d.qualification}
                </p>
                <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <CalendarDays className="size-4 shrink-0" />
                  {d.days} · {d.experience}
                </p>
                <Button asChild size="sm" variant="outline" className="mt-5 w-full">
                  <a href="#appointment">Book Appointment</a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
