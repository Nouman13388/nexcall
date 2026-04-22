import PageHero from "@/components/sections/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      title="About Us"
      subtitle="Learn who we are, what drives us, and why businesses trust Nexcall."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    />
  );
}
