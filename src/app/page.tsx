import AboutStats from "@/components/sections/AboutStats";
import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServiceGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <AboutStats />
      <WhyChooseUs />
    </>
  );
}
