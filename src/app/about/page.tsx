import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import CTABanner from "@/components/sections/CTABanner";
import CompanyIntro from "@/components/sections/CompanyIntro";
import CoreValues from "@/components/sections/CoreValues";
import MissionVision from "@/components/sections/MissionVision";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "About Us | Nexcall",
  description: "Learn about Nexcall — our mission, values, and the team behind our world-class call center solutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyIntro />
      <MissionVision />
      <CoreValues />
      <TeamSection />
      <CTABanner />
    </>
  );
}
