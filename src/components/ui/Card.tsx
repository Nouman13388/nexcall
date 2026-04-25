"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  className?: string;
  onClick?: () => void;
}

export default function Card({ icon: Icon, title, description, className = "", onClick }: CardProps) {
  return (
    <motion.div
      className={`group rounded-2xl bg-white p-5 shadow-sm ${onClick ? "cursor-pointer" : ""} ${className}`}
      onClick={onClick}
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <h3 className="font-heading text-base font-semibold text-dark">{title}</h3>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-dark/60">{description}</p>
      ) : (
        <div className="mt-3 flex items-center gap-1 text-xs font-medium text-dark/40 transition-colors group-hover:text-secondary">
          <span>Learn More</span>
          <ArrowRight className="size-3" />
        </div>
      )}
    </motion.div>
  );
}
