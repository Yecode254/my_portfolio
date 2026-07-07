import { motion } from "framer-motion";
import { EXPERIENCES } from "@/constants/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          center
          eyebrow="MY JOURNEY"
          title={<>Experience <span className="gradient-text">Timeline</span></>}
        />

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand/40 to-transparent" />
          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.05 }}
                  className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-10 items-start ${left ? "" : "md:[direction:rtl]"}`}
                >
                  <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 h-4 w-4 rounded-full bg-brand ring-4 ring-background shadow-[0_0_20px_rgba(255,107,0,0.6)]" />
                  <div className={`${left ? "md:pr-10 md:text-right" : "md:pl-10 md:[direction:ltr]"} md:col-start-${left ? "1" : "2"}`}>
                    <div className="glass-card rounded-2xl p-6 hover-glow">
                      <p className="text-xs font-semibold tracking-widest text-brand">{exp.period}</p>
                      <h3 className="mt-2 font-display font-semibold text-lg">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground/80">{exp.org}</p>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
