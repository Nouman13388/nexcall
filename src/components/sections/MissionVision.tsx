"use client";

import { Eye, Target } from "lucide-react";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import Card from "@/components/ui/Card";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function MissionVision() {
  return (
    <SectionWrapper bg="dark">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <AnimatedDiv direction="left">
          <Card
            icon={Target}
            title="Our Mission"
            description="To empower businesses with world-class call center solutions that drive measurable growth, strengthen customer relationships, and deliver consistent results — every call, every time."
            className="h-full"
          />
        </AnimatedDiv>

        <AnimatedDiv direction="right" delay={0.12}>
          <Card
            icon={Eye}
            title="Our Vision"
            description="To be the most trusted call center partner globally — recognised for our people, our performance, and our unwavering commitment to the success of every client we serve."
            className="h-full"
          />
        </AnimatedDiv>
      </div>
    </SectionWrapper>
  );
}
