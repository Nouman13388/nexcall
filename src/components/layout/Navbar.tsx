"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";

function isActivePath(currentPath: string, href: string) {
  if (href === "/") {
    return currentPath === "/";
  }

  return currentPath.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        hasScrolled
          ? "bg-light/85 border-dark/10 border-b backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading text-2xl font-semibold text-primary">
          {siteConfig.companyName}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-primary" : "text-dark/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-light transition-colors hover:bg-primary/90"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-dark md:hidden"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close menu overlay"
              className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-light px-6 pb-8 pt-24"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
            >
              <ul className="space-y-5">
                {navLinks.map((link) => {
                  const active = isActivePath(pathname, link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`text-lg font-medium ${active ? "text-primary" : "text-dark/80"}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-light"
              >
                Get Started
              </Link>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}