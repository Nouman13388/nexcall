import CTABanner from "@/components/sections/CTABanner";
import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServiceGrid";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <Stats />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
