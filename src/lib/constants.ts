export interface SiteContactInfo {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
}

export interface SiteSocialLinks {
  facebook: string;
  linkedin: string;
  instagram: string;
  x: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  contact: SiteContactInfo;
  socialLinks: SiteSocialLinks;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface CompanyValue {
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  companyName: "Nexcall",
  tagline: "The Experts You Can Count On",
  contact: {
    phone: "+00 000 000 0000",
    email: "hello@nexcall.example",
    address: "Address placeholder, City, Country",
    whatsapp: "+00 000 000 0000",
  },
  socialLinks: {
    facebook: "https://facebook.com/placeholder",
    linkedin: "https://linkedin.com/company/placeholder",
    instagram: "https://instagram.com/placeholder",
    x: "https://x.com/placeholder",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export const services: Service[] = [
  {
    id: "inbound-calls",
    title: "Inbound Calls",
    description:
      "Round-the-clock multilingual support with first-call resolution targets and seamless omnichannel handling across phone, chat, and email — keeping your customers heard and satisfied at every touchpoint.",
    icon: "PhoneIncoming",
  },
  {
    id: "outbound-sales",
    title: "Outbound Sales",
    description:
      "Scripted, brand-aligned sales campaigns built for conversion. Our trained agents accelerate pipeline velocity, handle objections with confidence, and turn cold lists into closed revenue.",
    icon: "PhoneOutgoing",
  },
  {
    id: "lead-generation",
    title: "Lead Generation",
    description:
      "Precision-targeted prospect outreach integrated directly with your CRM. We qualify leads, book appointments, and deliver sales-ready contacts so your team focuses on closing, not chasing.",
    icon: "UserRoundPlus",
  },
  {
    id: "telemarketing",
    title: "Telemarketing",
    description:
      "Market surveys, product promotions, appointment booking, and structured data collection — executed by skilled agents who represent your brand professionally on every call.",
    icon: "Megaphone",
  },
  {
    id: "b2b-outreach",
    title: "B2B Outreach",
    description:
      "Strategic engagement with decision-makers through account-based calling programs. We research, reach, and nurture the right contacts — generating qualified meetings that move deals forward.",
    icon: "Building2",
  },
  {
    id: "back-office-support",
    title: "Back Office Support",
    description:
      "Scalable back-office operations covering data entry, document processing, order management, and quality audits — freeing your core team to focus on growth while we handle the details.",
    icon: "BriefcaseBusiness",
  },
];

export const stats: Stat[] = [
  { label: "Agents", value: "500+" },
  { label: "Years", value: "10+" },
  { label: "Calls", value: "50M+" },
  { label: "Uptime", value: "99.9%" },
];

export const values: CompanyValue[] = [
  {
    title: "Client First",
    description:
      "Every decision we make starts with your customers. We tailor scripts, workflows, and KPIs to your brand voice.",
  },
  {
    title: "Operational Excellence",
    description:
      "ISO-compliant processes, real-time monitoring, and 99.9% uptime SLAs keep your operations running smoothly.",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Live dashboards, call analytics, and performance reporting give you full visibility into every campaign.",
  },
  {
    title: "Trusted Partnership",
    description:
      "We grow with you — flexible scaling, dedicated account managers, and transparent pricing with no hidden fees.",
  },
];