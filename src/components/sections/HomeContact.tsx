import AnimatedDiv from "@/components/ui/AnimatedDiv";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";

export default function HomeContact() {
  return (
    <SectionWrapper id="contact" bg="light">
      <AnimatedDiv className="mb-10 text-center lg:mb-12">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl">
          Get in Touch
        </h2>
        <p className="font-body mt-3 text-dark/60">
          Have a question or ready to get started? We&rsquo;d love to hear from you.
        </p>
      </AnimatedDiv>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
        {/* Info sidebar — first in HTML = top on mobile */}
        <div className="lg:order-last">
          <ContactInfo />
        </div>

        {/* Form — second in HTML, pulled left on desktop */}
        <div className="lg:order-first">
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
