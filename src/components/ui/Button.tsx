"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}

const MotionLink = motion(Link);

const sizeClasses = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

const variantClasses = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "bg-secondary text-dark hover:bg-secondary/80",
  outline: "border border-primary text-primary bg-transparent hover:bg-primary/5",
};

const motionConfig = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring" as const, stiffness: 400, damping: 17 },
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-semibold transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <MotionLink href={href} target={target} rel={rel} className={classes} {...motionConfig}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button className={classes} {...motionConfig} {...props}>
      {children}
    </motion.button>
  );
}
