import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/constants/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          center
          eyebrow="MY STACK"
          title={<>Skills & <span className="gradient-text">Tooling</span></>}
          description="A curated toolkit I use every day to design, build and ship production-grade software."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map(({ title, icon: Icon, skills }, gi) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="glass-card rounded-3xl p-6 hover-glow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-brand/10 text-brand border border-brand/20">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-semibold text-lg">{title}</h3>
              </div>
              <ul className="space-y-4">
                {skills.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground/90">{s.name}</span>
                      <span className="text-muted-foreground text-xs">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-brand)" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
