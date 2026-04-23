import AnimatedDiv from "@/components/ui/AnimatedDiv";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      {/* gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-dark/40 via-transparent to-secondary/10" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
        <AnimatedDiv>
          <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Ready to Scale Your Business?
          </h2>
          <p className="font-body mx-auto mt-5 max-w-xl text-lg text-white/65">
            Partner with Nexcall and unlock a dedicated team of call center professionals
            ready to grow alongside your business.
          </p>
          <div className="mt-10">
            <Button variant="secondary" size="lg" href="/contact">
              Get Started Today
            </Button>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
