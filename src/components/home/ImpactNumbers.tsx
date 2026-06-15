"use client";

import { useState, useEffect, useRef } from "react";
import {
  Users,
  HeartHandshake,
  School,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS } from "@/lib/constants";

type StatItem = {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  goal: number;
  color: string;
};

const STATS: StatItem[] = [
  { icon: Users,        value: 1000, suffix: "+", label: "Children Reached",          goal: 5000, color: COLORS.gold    },
  { icon: HeartHandshake,  value: 50,   suffix: "",  label: "Widows Supported",          goal: 200,  color: COLORS.ember   },
  { icon: School,       value: 25,   suffix: "+", label: "Schools Impacted",           goal: 100,  color: COLORS.gold    },
  { icon: ShieldCheck,  value: 40,   suffix: "",  label: "Peace Ambassadors Trained",  goal: 150,  color: COLORS.ember   },
  { icon: BookOpen,     value: 600,  suffix: "+", label: "Learning Materials Distributed", goal: 2000, color: COLORS.gold },
];

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [active, target]);

  return (
    <span className="font-mono text-5xl sm:text-6xl font-medium tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function ImpactNumbers() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="arc-section relative py-24 bg-cobalt overflow-hidden"
      aria-label="Impact statistics"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-cobalt-light)_0%,_transparent_70%)] opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="gold-rule mx-auto" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The Work, in Numbers.
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Every figure is a life — touched, changed, lifted.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STATS.map(({ icon: Icon, value, suffix, label, goal, color }) => {
            const pct = Math.min((value / goal) * 100, 100);
            return (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div
                  className="p-3 rounded-full mb-1"
                  style={{ backgroundColor: `${color}20`, color }}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>
                <span style={{ color }}>
                  <CountUp target={value} suffix={suffix} active={inView} />
                </span>
                <p className="text-white/70 text-sm leading-snug">{label}</p>
                {/* Progress bar */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-auto">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: inView ? `${pct}%` : "0%",
                      backgroundColor: color,
                      transitionDelay: "400ms",
                    }}
                  />
                </div>
                <p className="text-white/30 text-xs">
                  {pct.toFixed(0)}% of 2026 goal
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arc divider → cream */}
      <WaveArc fill={COLORS.cream} />
    </section>
  );
}
