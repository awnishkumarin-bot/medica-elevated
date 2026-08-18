import { useEffect, useState } from "react";
import { Menu, Phone, Stethoscope, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/data/clinic";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Departments", href: "#departments" },
  { label: "Facilities", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = links
        .map((l) => {
          const el = document.querySelector(l.href);
          if (!el) return null;
          const top = el.getBoundingClientRect().top;
          return { href: l.href, top };
        })
        .filter((x): x is { href: string; top: number } => x !== null)
        .filter((x) => x.top <= 140)
        .pop();
      if (current) setActive(current.href);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <Stethoscope className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold text-foreground">
              MEDICA POLYCLINIC
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              We care for you
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  active === l.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300",
                    active === l.href ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="sm">
            <a href={`tel:${CLINIC.tel}`}>
              <Phone /> {CLINIC.phone}
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#appointment">Book Appointment</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full">
                <a href="#appointment" onClick={() => setOpen(false)}>
                  Book Appointment
                </a>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
