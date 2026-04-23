import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import PageHero from "@/components/sections/PageHero";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Nexcall team. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a question or ready to get started? We'd love to hear from you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <SectionWrapper bg="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
          {/* Info sidebar — first in HTML so it appears at top on mobile */}
          <div className="lg:order-last">
            <ContactInfo />
          </div>

          {/* Form — second in HTML, pulled to the left column on desktop */}
          <div className="lg:order-first">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  );
}
