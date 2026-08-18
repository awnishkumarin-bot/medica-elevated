import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowDown, CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC, heroSlides } from "@/data/clinic";

const stats = [
  { value: 8, suffix: "+", label: "Specialist Doctors" },
  { value: 6, suffix: "", label: "Departments" },
  { value: 100, suffix: "%", label: "Modern Equipment" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1200, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {heroSlides.map((slide, i) => (
        <motion.img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fetchPriority={i === 0 ? "high" : "low"}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 -z-20 size-full object-cover"
          initial={false}
          animate={{ opacity: index === i ? 1 : 0, scale: index === i ? 1.06 : 1 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 6.5, ease: "linear" } }}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,oklch(0.28_0.12_262/0.94)_0%,oklch(0.3_0.12_262/0.82)_45%,oklch(0.45_0.1_200/0.65)_100%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
            Kurji More, Patna — 800010
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
            MEDICA POLYCLINIC
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
            Trusted healthcare by experienced specialist doctors — modern diagnostics, gentle care
            and affordable consultation, right at Kurji More, Patna.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#appointment">
                <CalendarCheck /> Book Appointment
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={`tel:${CLINIC.tel}`}>
                <Phone /> Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a
                href={`https://wa.me/${CLINIC.whatsapp}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <MessageCircle /> WhatsApp
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl px-4 py-4"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-2xl text-primary-foreground sm:text-3xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="mt-1 block text-xs font-medium text-primary-foreground/80">
                    {s.label}
                  </span>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="glass-card flex size-11 items-center justify-center rounded-full text-primary-foreground"
        >
          <ArrowDown className="size-5" />
        </motion.a>
      </div>
    </section>
  );
}
