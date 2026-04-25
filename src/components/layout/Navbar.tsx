"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContactModal } from "@/components/ui/ContactModal";

const NAV = [
  { label: "Home", id: "hero" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("hero");
  const { openModal } = useContactModal();

  useEffect(() => {
    const onScroll = () => {
      const scrollMid = window.scrollY + window.innerHeight * 0.35;
      let current = NAV[0].id;
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollMid) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dark/10 bg-light/95 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Nexcall"
            width={160}
            height={145}
            className="h-8 w-auto lg:h-10"
            priority
          />
        </a>

        {/* Desktop nav links — hidden on mobile */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map(({ label, id }) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className={`text-sm font-medium transition-colors ${
                  activeId === id ? "text-dark" : "text-dark/60 hover:text-dark"
                }`}
              >
                {label}
              </a>
              {activeId === id && (
                <motion.span
                  layoutId="desktop-nav-indicator"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-secondary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* CTA — always visible, primary mobile action */}
        <button
          type="button"
          onClick={() => openModal()}
          className="inline-flex items-center justify-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-dark transition-colors hover:bg-secondary/90 sm:px-5 sm:py-2.5"
        >
          Get Started
        </button>
      </nav>
    </header>
  );
}
