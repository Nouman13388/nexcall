import { Fragment } from "react";
import Link from "next/link";
import AnimatedDiv from "@/components/ui/AnimatedDiv";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-dark py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/50 via-dark to-dark" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <AnimatedDiv duration={0.5}>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              {breadcrumbs.map((crumb, index) => (
                <Fragment key={crumb.label}>
                  {index > 0 && <li aria-hidden="true">/</li>}
                  <li>
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition-colors hover:text-white/80">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-white/80">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                </Fragment>
              ))}
            </ol>
          </nav>

          <h1 className="font-heading text-5xl font-bold text-white sm:text-6xl">{title}</h1>
          {subtitle && (
            <p className="font-body mt-4 max-w-xl text-lg text-white/55">{subtitle}</p>
          )}
        </AnimatedDiv>
      </div>
    </section>
  );
}
