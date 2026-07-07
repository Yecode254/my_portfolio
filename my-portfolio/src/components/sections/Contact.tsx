import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, Send, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SOCIALS } from "@/constants/portfolio";

interface FormValues { name: string; email: string; subject: string; message: string; }

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));
    console.log("Contact form:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  const info = [
    { icon: Mail, label: "Email", value: "eddyyego2006@gmail.com", href: SOCIALS.email },
    { icon: Phone, label: "Phone", value: "+254 714 699 645", href: SOCIALS.phone },
    { icon: MapPin, label: "Location", value: "Kenya" },
    { icon: Sparkles, label: "Availability", value: "Available for Freelance" },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          center
          eyebrow="GET IN TOUCH"
          title={<>Let's build something <span className="gradient-text">extraordinary.</span></>}
          description="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            {info.map(({ icon: Icon, label, value, href }) => {
              const Comp = (href ? "a" : "div") as "a" | "div";
              return (
                <Comp
                  key={label}
                  {...(href ? { href } : {})}
                  className="flex items-center gap-5 glass-card rounded-2xl p-5 hover-glow"
                >
                  <div className="h-12 w-12 shrink-0 rounded-2xl grid place-items-center bg-brand/10 text-brand border border-brand/20">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">{label}</div>
                    <div className="mt-0.5 font-medium truncate">{value}</div>
                  </div>
                </Comp>
              );
            })}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-3xl p-8 space-y-5 relative overflow-hidden">
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 grid place-items-center bg-background/90 backdrop-blur-md z-10"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12 }}
                      className="mx-auto h-16 w-16 rounded-full bg-brand grid place-items-center text-primary-foreground mb-4"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold">Message sent!</h3>
                    <p className="text-sm text-muted-foreground mt-2">I'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <Field label="Name" error={errors.name?.message}>
              <input
                {...register("name", { required: "Name is required", minLength: { value: 2, message: "Too short" } })}
                className="input"
                placeholder="Your full name"
              />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                })}
                className="input"
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Subject" error={errors.subject?.message}>
              <input
                {...register("subject", { required: "Subject is required" })}
                className="input"
                placeholder="What's this about?"
              />
            </Field>
            <Field label="Message" error={errors.message?.message}>
              <textarea
                rows={5}
                {...register("message", { required: "Message is required", minLength: { value: 10, message: "At least 10 characters" } })}
                className="input resize-none"
                placeholder="Tell me about your project..."
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand text-primary-foreground px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : <>Send Message <Send size={16} /></>}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          color: white;
          transition: all 0.3s;
          outline: none;
        }
        .input::placeholder { color: rgba(255,255,255,0.35); }
        .input:focus {
          border-color: rgba(255,107,0,0.6);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 0 0 4px rgba(255,107,0,0.1);
        }
      `}</style>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-2 block">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
