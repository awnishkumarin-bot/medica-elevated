import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { gallery, type GalleryCategory } from "@/data/clinic";
import { cn } from "@/lib/utils";

const filters: Array<GalleryCategory | "All"> = [
  "All",
  "Clinic",
  "Equipment",
  "Doctors",
  "Facilities",
  "Reception",
];

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const items = gallery.filter((g) => filter === "All" || g.category === filter);

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside Medica Polyclinic"
          subtitle="Real photographs of our clinic, equipment and specialist team."
        />

        <Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          <AnimatePresence mode="popLayout">
            {items.map((img, i) => (
              <motion.button
                key={img.src + img.alt}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightbox(gallery.indexOf(img))}
                className="group relative block w-full break-inside-avoid overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]"
                aria-label={`View larger: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-primary/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="size-8 text-primary-foreground" />
                </span>
                <span className="sr-only">{i + 1}</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close preview"
              className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full bg-card text-foreground"
            >
              <X className="size-5" />
            </button>
            <motion.img
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              className="max-h-[88vh] max-w-full rounded-2xl object-contain"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
