import { Eye, Gauge, Glasses, Microscope, MonitorSmartphone, UserRoundCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { images } from "@/data/clinic";

const features = [
  { icon: Eye, title: "Advanced Eye Examination", desc: "Detailed slit-lamp examination of the anterior eye." },
  { icon: MonitorSmartphone, title: "Digital Vision Testing", desc: "LED chart based digital acuity assessment." },
  { icon: Microscope, title: "Computerized Check-up", desc: "Auto-refractometer for precise power readings." },
  { icon: Gauge, title: "Vision Assessment", desc: "Complete refraction with trial lens set." },
  { icon: UserRoundCheck, title: "Specialist Consultation", desc: "Guided by an MS Ophthalmology gold medalist." },
  { icon: Glasses, title: "High Precision Machines", desc: "Maintained, calibrated ophthalmic equipment." },
];

export function EyeCare() {
  return (
    <section id="eye-care" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={images.equipment}
              alt="Slit lamp, auto refractometer and digital vision chart in the eye examination room"
              loading="lazy"
              decoding="async"
              className="max-h-[560px] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Eye care facility"
              title="A dedicated ophthalmology suite"
              subtitle="Our eye department combines precision machines with an experienced specialist so vision problems are detected early and treated accurately."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.06}>
                  <div className="surface-card h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                    <f.icon className="size-5 text-secondary" />
                    <h3 className="mt-3 text-base">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="surface-card mt-14 grid items-center gap-8 overflow-hidden rounded-3xl p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h3 className="text-2xl">Protect your eyes before it gets too late</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Regular eye check-ups detect serious problems early — including diabetes-related
                changes. Rest your eyes, stay hydrated, wear sunglasses outdoors and schedule a
                yearly examination with our eye specialist.
              </p>
            </div>
            <img
              src={images.eyeTips}
              alt="Eye care awareness poster listing eight tips to keep your eyes healthy"
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
