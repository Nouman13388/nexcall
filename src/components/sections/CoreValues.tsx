"use client";

import { Award, Heart, Shield, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { values } from "@/lib/constants";

const valueIcons: LucideIcon[] = [Heart, Award, TrendingUp, Shield];

export default function CoreValues() {
  return (
    <SectionWrapper>
      <AnimatedDiv>
        <SectionHeading
          title="Our Core Values"
          subtitle="The principles that shape every decision, every team, and every interaction."
        />
      </AnimatedDiv>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {values.map((value, index) => {
          const Icon = valueIcons[index];
          return (
            <AnimatedDiv key={value.title} delay={index * 0.1}>
              <Card
                icon={Icon}
                title={value.title}
                description={value.description}
                className="h-full"
              />
            </AnimatedDiv>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
