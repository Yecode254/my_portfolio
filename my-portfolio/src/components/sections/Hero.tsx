import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { SOCIAL_LINKS, FLOAT_CARDS } from "@/constants/portfolio";

export function Hero() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".float-card", {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.6,
      });
      gsap.to(".float-card", {
        y: "+=10",
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.4, from: "random" },
      });
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.08,
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    }, cardsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative">
        {/* LEFT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] text-brand mb-6"
          >
            <Sparkles size={14} /> FULL STACK DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Building{" "}
            <span className="gradient-text">Modern</span>
            <br />
            Digital Experiences
            <br />
            That Make <span className="gradient-text">Impact.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 space-y-4 text-muted-foreground max-w-xl leading-relaxed"
          >
            <p>
              I'm <span className="text-foreground font-medium">Eddy Yego</span>, a passionate
              Full Stack Developer who builds premium web applications using{" "}
              <span className="text-foreground">React, TypeScript, Django</span> and{" "}
              <span className="text-foreground">PostgreSQL</span>.
            </p>
            <p>
              I enjoy transforming ideas into fast, scalable and visually stunning digital
              experiences with clean architecture and exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-brand text-primary-foreground px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
            >
              View My Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold hover:border-brand/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-3"
          >
            {SOCIAL_LINKS.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="h-10 w-10 grid place-items-center rounded-full glass text-muted-foreground hover:text-brand hover:border-brand/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div ref={cardsRef} className="relative aspect-square max-w-lg mx-auto w-full">
          <div
            ref={glowRef}
            className="absolute inset-6 rounded-full"
            style={{ background: "var(--gradient-radial-brand)" }}
          />
          <div className="absolute inset-8 rounded-full border-2 border-brand/40" />
          <div className="absolute inset-14 rounded-full overflow-hidden border border-white/10 shadow-[var(--shadow-card)]">
            <img
              src={portrait}
              alt="Eddy Yego, Full Stack Developer"
              width={896}
              height={1152}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating cards */}
          <div className="float-card absolute -top-2 left-0 glass-card rounded-2xl px-4 py-3 text-xs font-medium shadow-[var(--shadow-card)]">
            <span className="text-brand mr-1.5">●</span>{FLOAT_CARDS[0]}
          </div>
          <div className="float-card absolute top-1/3 -right-4 glass-card rounded-2xl px-4 py-3 text-xs font-medium shadow-[var(--shadow-card)]">
            <span className="text-brand mr-1.5">●</span>{FLOAT_CARDS[1]}
          </div>
          <div className="float-card absolute bottom-8 -left-6 glass-card rounded-2xl px-4 py-3 text-xs font-medium shadow-[var(--shadow-card)]">
            <span className="text-brand mr-1.5">●</span>{FLOAT_CARDS[2]}
          </div>
          <div className="float-card absolute -bottom-2 right-6 glass-card rounded-2xl px-4 py-3 text-xs font-medium shadow-[var(--shadow-card)]">
            <span className="text-brand mr-1.5">●</span>{FLOAT_CARDS[3]}
          </div>
        </div>
      </div>
    </section>
  );
}
