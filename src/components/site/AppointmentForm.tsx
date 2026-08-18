import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CLINIC, departments, doctors } from "@/data/clinic";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid phone number"),
  department: z.string().min(1, "Select a department"),
  date: z.string().min(1, "Choose a preferred date"),
  doctor: z.string().max(80).optional(),
  message: z.string().trim().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

export function AppointmentForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", department: "", date: "", doctor: "", message: "" },
  });

  const onSubmit = (values: FormValues) => {
    const text = [
      "New appointment request — Medica Polyclinic",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Department: ${values.department}`,
      `Preferred date: ${values.date}`,
      values.doctor ? `Doctor: ${values.doctor}` : "",
      values.message ? `Message: ${values.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
    reset();
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="surface-card flex h-full flex-col items-center justify-center rounded-3xl p-10 text-center"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 14 }}
          className="flex size-16 items-center justify-center rounded-full bg-secondary/15 text-secondary"
        >
          <CheckCircle2 className="size-9" />
        </motion.span>
        <h3 className="mt-6 text-2xl">Request sent</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thank you. Our reception will confirm your appointment shortly. For anything urgent,
          call {CLINIC.phone}.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSent(false)}>
          Book another appointment
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="surface-card rounded-3xl p-6 sm:p-8" noValidate>
      <h3 className="text-2xl">Book an appointment</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill the form and we will confirm your slot on call or WhatsApp.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Patient name</Label>
          <Input id="name" placeholder="Full name" {...register("name")} />
          {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" inputMode="tel" placeholder="10-digit mobile" {...register("phone")} />
          {errors.phone ? <p className="text-xs text-destructive">{errors.phone.message}</p> : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="department">Department</Label>
          <select
            id="department"
            {...register("department")}
            className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <option value="">Select department</option>
            {departments.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
          {errors.department ? (
            <p className="text-xs text-destructive">{errors.department.message}</p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="date">Preferred date</Label>
          <Input id="date" type="date" {...register("date")} />
          {errors.date ? <p className="text-xs text-destructive">{errors.date.message}</p> : null}
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="doctor">Doctor (optional)</Label>
          <select
            id="doctor"
            {...register("doctor")}
            className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <option value="">Any available doctor</option>
            {doctors.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name} — {d.specialization}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="message">Message (optional)</Label>
          <Textarea id="message" rows={4} placeholder="Describe your concern" {...register("message")} />
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
        <Send /> Request appointment
      </Button>
    </form>
  );
}
