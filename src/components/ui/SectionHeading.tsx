interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <header>
      <h2 className="font-heading text-2xl">{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}