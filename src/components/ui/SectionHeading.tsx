interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <header className={`${alignClass} ${className}`}>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-dark sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="font-body mt-4 text-base leading-relaxed text-dark/60">{subtitle}</p>
      ) : null}
    </header>
  );
}
