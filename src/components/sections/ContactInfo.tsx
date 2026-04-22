import { Briefcase, Camera, Mail, MapPin, MessageCircle, Phone, Users, X as XIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const contactDetails: ContactDetail[] = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: siteConfig.contact.address,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.whatsapp,
    href: `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`,
  },
];

const socialLinks = [
  { icon: Users, href: siteConfig.socialLinks.facebook, label: "Facebook" },
  { icon: Briefcase, href: siteConfig.socialLinks.linkedin, label: "LinkedIn" },
  { icon: Camera, href: siteConfig.socialLinks.instagram, label: "Instagram" },
  { icon: XIcon, href: siteConfig.socialLinks.x, label: "X" },
];

export default function ContactInfo() {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-dark">Get in Touch</h2>
      <p className="font-body mt-2 text-sm text-dark/55">
        Reach out through any channel below — we respond within one business day.
      </p>

      {/* Contact details */}
      <ul className="mt-8 space-y-6">
        {contactDetails.map(({ icon: Icon, label, value, href }) => (
          <li key={label} className="flex items-start gap-4">
            <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-dark/40">
                {label}
              </p>
              {href ? (
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-0.5 block text-sm text-dark transition-colors hover:text-primary"
                >
                  {value}
                </Link>
              ) : (
                <p className="mt-0.5 text-sm text-dark">{value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Social links */}
      <div className="mt-8 border-t border-dark/10 pt-8">
        <p className="text-xs font-medium uppercase tracking-widest text-dark/40">Follow Us</p>
        <div className="mt-4 flex gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-dark/15 text-dark/50 transition-colors hover:border-primary hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div className="mt-8 flex h-48 items-center justify-center rounded-2xl bg-dark/8 text-sm text-dark/35">
        {/* Replace with <iframe src="https://maps.google.com/..." /> when ready */}
        Map
      </div>
    </div>
  );
}
