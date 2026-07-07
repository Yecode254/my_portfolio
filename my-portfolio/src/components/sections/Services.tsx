import { motion } from "framer-motion";
import { SERVICES } from "@/constants/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          center
          eyebrow="WHAT I OFFER"
          title={<>Services & <span className="gradient-text">Expertise</span></>}
          description="End-to-end capabilities to design, build and scale your next digital product."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative rounded-3xl p-8 hover-glow overflow-hidden ${
                i === 3 ? "bg-brand text-primary-foreground border border-brand" : "glass-card"
              }`}
            >
              <div className={`h-12 w-12 rounded-2xl grid place-items-center mb-6 border ${
                i === 3 ? "bg-black/10 border-black/20 text-primary-foreground" : "bg-brand/10 text-brand border-brand/20"
              }`}>
                <Icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
              <p className={`text-sm leading-relaxed ${i === 3 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{desc}</p>
              <div className="mt-6 text-xs font-semibold tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
