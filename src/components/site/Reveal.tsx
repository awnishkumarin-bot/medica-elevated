import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base text-muted-foreground">{subtitle}</p> : null}
    </Reveal>
  );
}
