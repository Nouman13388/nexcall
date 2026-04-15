"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type AnimatedDivProps = HTMLMotionProps<"div">;

export default function AnimatedDiv({ children, ...props }: AnimatedDivProps) {
  return <motion.div {...props}>{children}</motion.div>;
}