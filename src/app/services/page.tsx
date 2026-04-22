import type { Metadata } from "next";
import CTABanner from "@/components/sections/CTABanner";
import PageHero from "@/components/sections/PageHero";
import ServicesDetail from "@/components/sections/ServicesDetail";

export const metadata: Metadata = {
  title: "Our Services | Nexcall",
  description: "Explore Nexcall's full range of call center solutions — inbound support, outbound sales, lead generation, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive call center solutions built to drive results at any scale."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesDetail />
      <CTABanner />
    </>
  );
}
