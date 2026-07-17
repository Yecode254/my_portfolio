import { motion } from "framer-motion";
import { Clock3, Code2, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/constants/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          center
          eyebrow="SELECTED WORK"
          title={<>Featured <span className="gradient-text">Projects</span></>}
          description="A snapshot of the products I've designed, built and shipped end-to-end."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group glass-card rounded-3xl overflow-hidden hover-glow flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="font-display font-semibold text-xl group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>

                <div>
                  <div className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <div className="text-[11px] font-semibold tracking-widest text-muted-foreground uppercase mb-3">
                    Links
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium hover:border-brand/40 hover:text-brand transition-colors"
                    >
                      <Code2 size={14} /> GitHub
                    </a>
                    {p.demo ? (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-brand/90 text-primary-foreground px-4 py-2 text-xs font-semibold hover:bg-brand transition-colors"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-muted-foreground">
                        <Clock3 size={14} /> {p.demoStatus}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
