import type { HTMLAttributes, ReactNode } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function SectionWrapper({ children, ...props }: SectionWrapperProps) {
  return <section {...props}>{children}</section>;
}