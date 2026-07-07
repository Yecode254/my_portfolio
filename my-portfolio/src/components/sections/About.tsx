
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import about from "@/assets/about.jpg";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-brand/10 blur-3xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[var(--shadow-card)]">
            <img src={about} alt="Eddy at work" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 glass-card rounded-2xl px-5 py-4 text-sm">
            <div className="text-brand text-2xl font-bold font-display leading-none">3+</div>
            <div className="text-xs text-muted-foreground mt-1">Years of craft</div>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="ABOUT ME"
            title={<>Crafting elegant<br /><span className="gradient-text">digital solutions.</span></>}
          />
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm <span className="text-foreground font-medium">Eddy Yego</span>, a Full
              Stack Developer with a passion for creating elegant digital solutions.
            </p>
            <p>
              I specialize in designing responsive user interfaces using React and Tailwind CSS
              while building scalable backend systems with Django and PostgreSQL.
            </p>
            <p>
              I believe that great software combines functionality, performance and beautiful
              design. Every project I build focuses on user experience, maintainability and
              clean architecture.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/Eddy_Yego_Resume.pdf" download="Eddy_Yego_Resume.pdf" className="inline-flex items-center gap-2 rounded-full bg-brand text-primary-foreground px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] transition-all">
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:border-brand/40 transition-colors">
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
