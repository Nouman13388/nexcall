"use client";

import { Award, Heart, Shield, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { values } from "@/lib/constants";

const valueIcons: LucideIcon[] = [Heart, Award, TrendingUp, Shield];

export default function WhyChooseUs() {
  return (
    <SectionWrapper bg="light" id="why-us">
      <AnimatedDiv>
        <SectionHeading
          title="Why Choose Nexcall"
          subtitle="Everything you need from a call center partner — reliability, scale, and results."
        />
      </AnimatedDiv>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {values.map((value, index) => {
          const Icon = valueIcons[index];
          return (
            <AnimatedDiv key={value.title} delay={index * 0.12} direction="up">
              <motion.div
                className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-sm"
                whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.09)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-dark">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-dark/60">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedDiv>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
