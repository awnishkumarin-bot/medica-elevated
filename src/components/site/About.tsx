import { CheckCircle2, HeartHandshake, ShieldCheck, Sparkles, Users, Wallet } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { images } from "@/data/clinic";

const points = [
  "OPD consultation from experienced specialists of Patna",
  "Modern infrastructure with clean, hygienic rooms",
  "Affordable consultation for every family",
  "Patient-first approach and professional staff",
];

const reasons = [
  { icon: Users, title: "Experienced Specialists", desc: "Gold medalist and senior consultants across six departments." },
  { icon: HeartHandshake, title: "Patient-Centered Care", desc: "Doctors take time to listen before suggesting treatment." },
  { icon: Sparkles, title: "Modern Infrastructure", desc: "Well-equipped consultation rooms and diagnostic setup." },
  { icon: Wallet, title: "Affordable Consultation", desc: "Transparent, family-friendly consultation charges." },
  { icon: CheckCircle2, title: "Minimal Waiting Time", desc: "Organised appointment flow keeps queues short." },
  { icon: ShieldCheck, title: "Clean Environment", desc: "High hygiene standards maintained through the day." },
];

export function About() {
  return (
    <>
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <img
                src={images.banner}
                alt="Medica Polyclinic — your partner in health"
                loading="lazy"
                decoding="async"
                className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
              />
              <img
                src={images.waiting}
                alt="Reception corridor and patient seating at Medica Polyclinic"
                loading="lazy"
                decoding="async"
                className="absolute -bottom-10 right-4 hidden h-48 w-40 rounded-2xl border-4 border-card object-cover shadow-[var(--shadow-lift)] sm:block"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About us"
              title="A trusted neighbourhood polyclinic in Kurji More, Patna"
              subtitle="Medica Polyclinic is run by specialised doctors of Patna, bringing multi-department OPD care close to home — with the comfort, hygiene and precision families expect from a premium healthcare institution."
            />
            <ul className="mt-8 grid gap-4">
              {points.map((p, i) => (
                <Reveal key={p} delay={i * 0.08}>
                  <li className="flex items-start gap-3 text-sm text-foreground sm:text-base">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-secondary" />
                    <span>{p}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why choose Medica"
            title="Premium care, built around the patient"
            subtitle="Everything at Medica Polyclinic is designed for confidence — from the doctors you meet to the equipment they use."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <article className="surface-card group h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <r.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
