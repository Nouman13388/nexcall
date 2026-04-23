import { Building2 } from "lucide-react";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function CompanyIntro() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Image placeholder */}
        <AnimatedDiv direction="left">
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15">
            <Building2 className="size-12 text-primary/30" />
          </div>
        </AnimatedDiv>

        {/* Text */}
        <AnimatedDiv direction="right" delay={0.12}>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Who We Are
          </h2>
          <p className="font-body mt-5 leading-relaxed text-dark/65">
            Nexcall is a full-service call center solutions provider built for businesses
            that demand performance. Founded on the belief that every customer interaction
            is an opportunity, we equip our clients with the talent, technology, and
            processes to deliver exceptional experiences at scale.
          </p>
          <p className="font-body mt-4 leading-relaxed text-dark/65">
            With over a decade of operational experience and a team of dedicated
            professionals, we partner with companies across industries to handle their
            inbound support, outbound sales, and back-office needs — reliably and
            consistently, 24 hours a day.
          </p>
        </AnimatedDiv>
      </div>
    </SectionWrapper>
  );
}
