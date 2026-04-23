import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Megaphone,
  PhoneIncoming,
  PhoneOutgoing,
  UserRoundPlus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
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

export default function ServicesDetail() {
  return (
    <SectionWrapper bg="light">
      <div className="divide-y divide-dark/10">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          const isFlipped = index % 2 === 1;

          return (
            <div key={service.id} className="py-16 first:pt-0 last:pb-0">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                {/* Icon column — pushed to the right on flipped rows */}
                <AnimatedDiv
                  direction={isFlipped ? "right" : "left"}
                  className={isFlipped ? "lg:order-last" : ""}
                >
                  <div className="flex justify-center">
                    <div className="flex h-40 w-40 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-16" />
                    </div>
                  </div>
                </AnimatedDiv>

                {/* Text column */}
                <AnimatedDiv direction={isFlipped ? "left" : "right"} delay={0.12}>
                  <h3 className="font-heading text-2xl font-bold text-dark sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="font-body mt-4 leading-relaxed text-dark/65">
                    {service.description}
                  </p>
                  <p className="font-body mt-3 leading-relaxed text-dark/65">
                    Placeholder second line providing additional detail about this service
                    and its key deliverables for your business.
                  </p>
                  <p className="font-body mt-3 leading-relaxed text-dark/65">
                    Placeholder third line covering performance outcomes, SLAs, and
                    seamless integration with your existing workflows.
                  </p>
                  <Link
                    href="#"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-secondary/75"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </Link>
                </AnimatedDiv>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
