"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function Card({ icon: Icon, title, description, className = "" }: CardProps) {
  return (
    <motion.div
      className={`rounded-2xl bg-white p-6 shadow-sm ${className}`}
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-6" />
      </div>
      <h3 className="font-heading mb-2 text-lg font-semibold text-dark">{title}</h3>
      <p className="text-sm leading-relaxed text-dark/60">{description}</p>
    </motion.div>
  );
}
