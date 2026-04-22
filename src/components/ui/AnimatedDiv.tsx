"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}

const initialOffset = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: -24 },
  right: { x: 24 },
};

export default function AnimatedDiv({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
}: AnimatedDivProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...initialOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
