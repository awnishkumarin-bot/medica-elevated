import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  { title: "Book Appointment", desc: "Call, WhatsApp or fill the form on this page." },
  { title: "Visit Clinic", desc: "Reach Kurji More and check in at reception." },
  { title: "Consult Specialist", desc: "Meet the right doctor for your concern." },
  { title: "Diagnosis", desc: "Examination and required investigations." },
  { title: "Treatment", desc: "A clear, affordable treatment plan." },
  { title: "Follow-up", desc: "Review visits until you recover fully." },
];

export function Process() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Your visit, step by step"
          subtitle="A simple, transparent process from your first call to your final follow-up."
        />
        <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <li className="surface-card relative h-full rounded-3xl p-7">
                <span className="flex size-11 items-center justify-center rounded-full bg-[var(--gradient-brand)] font-display text-sm text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
