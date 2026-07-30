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
  metadataBase: new URL("https://www.nexcalltech.com"),
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
    url: "https://www.nexcalltech.com",
    siteName: "Nexcall",
    images: [
      {
        url: "https://www.nexcalltech.com/og-image.png",
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
    images: ["https://www.nexcalltech.com/og-image.png"],
  },
};

// Flip back to false to bring the site back online.
const MAINTENANCE_MODE = true;

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
        {MAINTENANCE_MODE ? (
          <main className="flex-1 flex items-center justify-center text-center px-6 py-20">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                We&rsquo;ll be back shortly
              </h1>
              <p className="text-dark/60">
                Nexcall is temporarily down for maintenance.
              </p>
            </div>
          </main>
        ) : (
          <ContactModalProvider>
            <Navbar />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </ContactModalProvider>
        )}
      </body>
    </html>
  );
}
