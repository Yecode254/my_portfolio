import { motion } from "framer-motion";
import { HIGHLIGHTS } from "@/constants/portfolio";

export function Highlights() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {HIGHLIGHTS.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-3xl glass-card p-6 hover-glow overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "var(--gradient-radial-brand)" }}
            />
            <div className="relative">
              <div className="h-12 w-12 rounded-2xl grid place-items-center bg-brand/10 text-brand border border-brand/20 mb-5">
                <Icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
