import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "light" | "dark" | "transparent";
}

const bgClasses = {
  light: "bg-light",
  dark: "bg-dark text-light",
  transparent: "bg-transparent",
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  bg = "transparent",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 ${bgClasses[bg]} ${className}`}>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
