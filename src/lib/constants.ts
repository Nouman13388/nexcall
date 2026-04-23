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
  tagline: "Tagline placeholder for professional call center excellence.",
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
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
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
    description: "Placeholder text describing customer-centric service delivery.",
  },
  {
    title: "Operational Excellence",
    description: "Placeholder text describing reliable and measurable performance.",
  },
  {
    title: "Data-Driven Decisions",
    description: "Placeholder text describing analytics-backed optimization.",
  },
  {
    title: "Trusted Partnership",
    description: "Placeholder text describing long-term collaborative growth.",
  },
];