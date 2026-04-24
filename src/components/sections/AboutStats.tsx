"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Building2 } from "lucide-react";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { stats } from "@/lib/constants";

function parseStatValue(raw: string): { num: number; suffix: string; decimals: number } {
  const match = raw.match(/^(\d+\.?\d*)(.*)/);
  if (!match) return { num: 0, suffix: "", decimals: 0 };
  return {
    num: parseFloat(match[1]),
    suffix: match[2],
    decimals: match[1].includes(".") ? 1 : 0,
  };
}

function CountUp({ target, suffix, decimals }: { target: number; suffix: string; decimals: number }) {
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
      setDisplay(
        decimals > 0
          ? (eased * target).toFixed(decimals)
          : String(Math.round(eased * target)),
      );
      if (progress < 1) rafId = requestAnimationFrame(tick);
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

export default function AboutStats() {
  return (
    <SectionWrapper id="about" bg="light">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left: heading + paragraph + 2×2 stat cards */}
        <AnimatedDiv direction="left">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Who We Are
          </h2>
          <p className="font-body mt-5 leading-relaxed text-dark/65">
            Nexcall is a full-service call center solutions provider built for businesses
            that demand performance. With over a decade of operational experience and a
            dedicated team of professionals, we deliver exceptional customer experiences
            at scale — 24 hours a day, every day.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((stat) => {
              const { num, suffix, decimals } = parseStatValue(stat.value);
              return (
                <div
                  key={stat.label}
                  className="rounded-xl bg-primary/5 px-4 py-5 text-center"
                >
                  <div className="font-heading text-4xl font-bold text-primary">
                    <CountUp target={num} suffix={suffix} decimals={decimals} />
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-widest text-dark/50">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedDiv>

        {/* Right: gradient image placeholder */}
        <AnimatedDiv direction="right" delay={0.12}>
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15">
            <Building2 className="size-12 text-primary/30" />
          </div>
        </AnimatedDiv>
      </div>
    </SectionWrapper>
  );
}
