import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Quote, Star } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const reviews = [
  {
    text: "Cooperative and understanding doctors and staff. They spend time to understand the issue and then suggest the best treatment.",
    name: "Google Review",
  },
  {
    text: "Well cooperative doctors and staff. Hygienic environment. Doctors have lot of patience.",
    name: "Google Review",
  },
  { text: "Dr. Kalpana Jha is very understanding and friendly.", name: "Google Review" },
];

function RatingCounter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1200, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{n.toFixed(decimals)}</span>;
}

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Patient reviews"
          title="Families in Patna trust Medica"
          subtitle="What patients say after visiting our clinic."
        />

        <Reveal>
          <div className="surface-card mx-auto mt-12 flex max-w-md flex-col items-center rounded-3xl p-8 text-center">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <p className="mt-4 font-display text-5xl text-foreground">
              <RatingCounter value={4.9} decimals={1} /> / 5
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Based on <RatingCounter value={17} /> Google Reviews
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.text} delay={i * 0.08}>
              <figure className="surface-card h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1.5">
                <Quote className="size-8 text-primary/25" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-1 text-xs font-medium text-muted-foreground">
                  <Star className="size-4 fill-accent text-accent" /> {r.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
