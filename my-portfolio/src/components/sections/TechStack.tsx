import { motion } from "framer-motion";
import { TECH_STACK } from "@/constants/portfolio";

export function TechStack() {
  return (
    <section className="relative py-16 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold tracking-[0.3em] text-muted-foreground mb-8">
          POWERED BY MODERN TECHNOLOGIES
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {TECH_STACK.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="font-display font-semibold text-lg text-muted-foreground hover:text-brand transition-colors cursor-default"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
