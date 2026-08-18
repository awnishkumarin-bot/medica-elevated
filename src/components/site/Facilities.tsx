import { Reveal, SectionHeading } from "./Reveal";
import { images } from "@/data/clinic";

const items = [
  { src: images.signboard, title: "Easy to find", desc: "Right at Kurji More on the main road.", alt: "Medica Polyclinic signboard at Kurji More" },
  { src: images.waiting, title: "Reception & waiting area", desc: "Comfortable, ventilated seating for patients.", alt: "Reception corridor with seating" },
  { src: images.equipment, title: "Consultation room", desc: "Equipped examination and consultation setup.", alt: "Ophthalmology consultation room" },
  { src: images.eyeTips, title: "Health awareness", desc: "Patient education across the clinic.", alt: "Eye health awareness poster" },
  { src: images.doctorsBoard1, title: "Friendly staff", desc: "Guidance from arrival to follow-up.", alt: "Doctors information board" },
  { src: images.opening, title: "Hygienic environment", desc: "Cleaned and sanitised through the day.", alt: "Medica Polyclinic opening announcement" },
];

export function Facilities() {
  return (
    <section id="facilities" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Facilities"
          title="Built for comfort and confidence"
          subtitle="Every corner of Medica Polyclinic is arranged to make your visit calm, quick and safe."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <figure className="group relative h-72 overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.25_0.08_262/0.92),transparent_60%)]" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <h3 className="text-lg">{it.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/85">{it.desc}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
