"use client";

import { motion } from "framer-motion";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import Button from "@/components/ui/Button";
import { useContactModal } from "@/components/ui/ContactModal";
import { siteConfig } from "@/lib/constants";

export default function Hero() {
  const { openModal } = useContactModal();

  return (
    <section id="hero" className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-dark lg:min-h-[70vh]">
      {/* Diagonal gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/50 via-dark to-dark" />

      {/* Teal glow — top right */}
      <motion.div
        className="pointer-events-none absolute right-[10%] top-[15%] h-[520px] w-[520px] rounded-full bg-secondary/20 blur-[140px]"
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Primary glow — bottom left */}
      <motion.div
        className="pointer-events-none absolute bottom-[15%] left-[8%] h-[420px] w-[420px] rounded-full bg-primary/50 blur-[120px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <AnimatedDiv delay={0} duration={0.6}>
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/75 backdrop-blur-sm">
              Professional Call Center Solutions
            </span>
          </div>
        </AnimatedDiv>

        {/* Headline */}
        <AnimatedDiv delay={0.15} duration={0.6}>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            {siteConfig.companyName}
            <br />
            <span className="text-secondary">Your Growth, Our Mission</span>
          </h1>
        </AnimatedDiv>

        {/* Subtitle */}
        <AnimatedDiv delay={0.3} duration={0.6}>
          <p className="font-body mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
            Delivering world-class inbound and outbound call center services that drive
            conversions, build loyalty, and accelerate your business — 24/7, at any scale.
          </p>
        </AnimatedDiv>

        {/* CTAs */}
        <AnimatedDiv delay={0.45} duration={0.6}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="primary"
              size="lg"
              className="!bg-secondary !text-dark hover:!bg-secondary/90"
              onClick={() => openModal()}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#services"
              className="!border-white/30 !text-white hover:!bg-white/10"
            >
              Our Services
            </Button>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
