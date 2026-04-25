import Image from "next/image";
import { Briefcase, Camera, MapPin, Phone, Users, X as XIcon } from "lucide-react";
import { navLinks, services, siteConfig } from "@/lib/constants";

const socialLinks = [
  { label: "Facebook", href: siteConfig.socialLinks.facebook, icon: Users },
  { label: "LinkedIn", href: siteConfig.socialLinks.linkedin, icon: Briefcase },
  { label: "Instagram", href: siteConfig.socialLinks.instagram, icon: Camera },
  { label: "X", href: siteConfig.socialLinks.x, icon: XIcon },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#hero" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Nexcall"
                width={53}
                height={48}
                className="h-10 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-light/75">
              Professional call center solutions delivering inbound, outbound, and
              back-office services for businesses worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-light/75">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-secondary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-light/75">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="transition-colors hover:text-secondary">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-light/75">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-secondary" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-secondary">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-secondary"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full border border-light/20 p-2 text-light/80 transition-colors hover:border-secondary hover:text-secondary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-light/10">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 text-center text-sm text-light/65 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Nexcall. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
