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

// ==================== COMPLETE SEO METADATA ====================
export const metadata = {
  title: {
    default: "BusinessToWeb — We Build Websites That Grow Your Business",
    template: "%s | BusinessToWeb",
  },
  description:
    "Get professional, fast, and high-converting websites for your business. Leading web design & development agency for modern businesses.",
  keywords: [
    "BusinessToWeb",
    "Web Design Agency",
    "Website Development",
    "Next.js Developer",
    "Business Websites",
  ],
  openGraph: {
    title: "BusinessToWeb — We Build Websites That Grow Your Business",
    description:
      "Modern, fast, and high-converting websites for professional businesses.",
    siteName: "BusinessToWeb",
    type: "website",
  },
  // Google Search Console Verification
  verification: {
    google: "oqCL955PO6UozcB_IBX-k4FGqGPhUGPTL8nv3B1Kokc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
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