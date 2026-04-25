import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageTransition from "@/components/ui/PageTransition";
import { ContactModalProvider } from "@/components/ui/ContactModal";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nexcall",
    default: "Nexcall | Professional Call Center Solutions",
  },
  description:
    "Nexcall delivers world-class inbound and outbound call center services that drive conversions, build loyalty, and accelerate your business — 24/7, at any scale.",
  openGraph: {
    title: "Nexcall | Professional Call Center Solutions",
    description:
      "Nexcall delivers world-class inbound and outbound call center services that drive conversions, build loyalty, and accelerate your business — 24/7, at any scale.",
    url: "https://nexcall.com",
    siteName: "Nexcall",
    images: [
      {
        url: "https://nexcall.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexcall — Professional Call Center Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexcall | Professional Call Center Solutions",
    description:
      "Nexcall delivers world-class inbound and outbound call center services that drive conversions, build loyalty, and accelerate your business — 24/7, at any scale.",
    images: ["https://nexcall.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-light text-dark font-body">
        <ContactModalProvider>
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
