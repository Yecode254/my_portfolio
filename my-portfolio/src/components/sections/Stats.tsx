import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { STATS } from "@/constants/portfolio";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-card rounded-3xl p-10 md:p-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-bold text-4xl md:text-5xl gradient-text">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
