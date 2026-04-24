"use client";

import {
  BriefcaseBusiness,
  Building2,
  Megaphone,
  PhoneIncoming,
  PhoneOutgoing,
  UserRoundPlus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { services } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  PhoneIncoming,
  PhoneOutgoing,
  UserRoundPlus,
  Megaphone,
  Building2,
  BriefcaseBusiness,
};

export default function ServiceGrid() {
  return (
    <SectionWrapper bg="light" id="services">
      <AnimatedDiv>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive call center solutions tailored to your business needs"
        />
      </AnimatedDiv>

      <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <AnimatedDiv key={service.id} delay={index * 0.1} duration={0.5} className="h-full">
              <Card
                icon={Icon}
                title={service.title}
                description={service.description}
                className="h-full"
              />
            </AnimatedDiv>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
