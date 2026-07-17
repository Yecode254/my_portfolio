import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SOCIALS } from "@/constants/portfolio";

export function Contact() {
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

        <div className="mx-auto mt-16 max-w-2xl space-y-4">
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
      </div>
    </section>
  );
}
