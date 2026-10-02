import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ==================== GLOBAL COMPONENTS IMPORT START ====================
import HoverCursor from "@/app/components/Mouse/HoverCursor";
import Preloader from "@/app/components/PageLoader/PageLoader";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/Footer/footer";
import BackToTop from "@/app/components/BackToTop/BackToTop";
import ScrollHandler from "@/app/components/ScrollHandler"; 
import ContactPopup from "@/app/components/Popup/ContactPopup";
// ==================== GLOBAL COMPONENTS IMPORT END ====================

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://businesstoweb-five.vercel.app";

// ==================== ADVANCED TOP-RANKING SEO METADATA ====================
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BusinessToWeb — Web Design & Next.js Development Agency",
    template: "%s | BusinessToWeb",
  },
  description:
    "BusinessToWeb is a premier web development agency building fast, responsive, and high-converting Next.js websites for growing businesses and startups.",
  keywords: [
    "BusinessToWeb",
    "Web Development Agency",
    "Custom Website Design",
    "Next.js Development Company",
    "React Web Developer",
    "Business Website Builder",
    "High Converting Websites",
    "SEO Friendly Web Design",
    "E-commerce Website Development",
  ],
  authors: [{ name: "BusinessToWeb Team", url: SITE_URL }],
  creator: "BusinessToWeb",
  publisher: "BusinessToWeb",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "BusinessToWeb — Web Design & Next.js Development Agency",
    description:
      "Transform your business with modern, lightning-fast Next.js websites designed to drive sales and convert leads.",
    url: SITE_URL,
    siteName: "BusinessToWeb",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BusinessToWeb — Web Design & Development Agency",
    description:
      "Get professional, high-performing websites tailored for business growth.",
  },
  verification: {
    google: "oqCL955PO6UozcB_IBX-k4FGqGPhUGPTL8nv3B1Kokc",
  },
};

export default function RootLayout({ children }) {
  // Google Structured Data (Schema.org) for Agency Ranking
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "BusinessToWeb",
    url: SITE_URL,
    description:
      "Professional web development agency offering custom Next.js websites, web design, and digital solutions for modern businesses.",
    serviceType: [
      "Web Design",
      "Web Development",
      "Next.js Development",
      "SEO Optimization",
    ],
    priceRange: "$$",
    sameAs: [],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollHandler />
        <Preloader />
        <Navbar />
        {children}
        <HoverCursor />
        <Footer />
        <BackToTop />
        <ContactPopup />
      </body>
    </html>
  );
}