"use client";

import Link from "next/link";
import AnimatedDiv from "@/components/ui/AnimatedDiv";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-dark py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/50 via-dark to-dark" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <AnimatedDiv duration={0.5}>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="transition-colors hover:text-white/80">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/80">About Us</li>
            </ol>
          </nav>

          <h1 className="font-heading text-5xl font-bold text-white sm:text-6xl">
            About Us
          </h1>
          <p className="font-body mt-4 max-w-xl text-lg text-white/55">
            Learn who we are, what drives us, and why businesses trust Nexcall.
          </p>
        </AnimatedDiv>
      </div>
    </section>
  );
}
