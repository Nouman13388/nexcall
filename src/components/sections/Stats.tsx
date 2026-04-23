"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { stats } from "@/lib/constants";

function parseStatValue(raw: string): { num: number; suffix: string; decimals: number } {
  const match = raw.match(/^(\d+\.?\d*)(.*)/);
  if (!match) return { num: 0, suffix: "", decimals: 0 };
  const num = parseFloat(match[1]);
  const suffix = match[2];
  const decimals = match[1].includes(".") ? 1 : 0;
  return { num, suffix, decimals };
}

interface CountUpProps {
  target: number;
  suffix: string;
  decimals: number;
}

function CountUp({ target, suffix, decimals }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(decimals > 0 ? "0.0" : "0");

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const start = Date.now();
    let rafId: number;

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setDisplay(decimals > 0 ? current.toFixed(decimals) : String(Math.round(current)));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, target, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <SectionWrapper bg="dark">
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 text-center lg:grid-cols-4">
        {stats.map((stat, index) => {
          const { num, suffix, decimals } = parseStatValue(stat.value);
          return (
            <AnimatedDiv key={stat.label} delay={index * 0.1}>
              <div className="font-heading text-5xl font-bold text-white sm:text-6xl">
                <CountUp target={num} suffix={suffix} decimals={decimals} />
              </div>
              <p className="mt-3 text-sm uppercase tracking-widest text-white/50">
                {stat.label}
              </p>
            </AnimatedDiv>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
