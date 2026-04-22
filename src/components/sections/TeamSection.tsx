"use client";

import { motion } from "framer-motion";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionWrapper from "@/components/ui/SectionWrapper";

const team = [
  { name: "Alex Johnson", role: "Chief Executive Officer" },
  { name: "Sarah Mitchell", role: "Chief Operations Officer" },
  { name: "David Chen", role: "Head of Client Success" },
  { name: "Maria Lopez", role: "Director of Operations" },
];

export default function TeamSection() {
  return (
    <SectionWrapper bg="light">
      <AnimatedDiv>
        <SectionHeading
          title="Our Leadership"
          subtitle="Meet the people behind Nexcall's results-driven culture."
        />
      </AnimatedDiv>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <AnimatedDiv key={member.name} delay={index * 0.1}>
            <motion.div
              className="rounded-2xl bg-white p-6 text-center shadow-sm"
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.09)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {/* Avatar placeholder */}
              <div className="mx-auto h-20 w-20 rounded-full bg-primary/10" />
              <h3 className="font-heading mt-4 text-base font-semibold text-dark">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-dark/55">{member.role}</p>
            </motion.div>
          </AnimatedDiv>
        ))}
      </div>
    </SectionWrapper>
  );
}
