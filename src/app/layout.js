import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ==================== GLOBAL COMPONENTS IMPORT START ====================
import HoverCursor from "@/app/components/Mouse/HoverCursor";
import Preloader from "@/app/components/PageLoader/PageLoader";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/Footer/footer";
import BackToTop from "@/app/components/BackToTop/BackToTop";
import ScrollHandler from "@/app/components/ScrollHandler"; 
// ==================== GLOBAL COMPONENTS IMPORT END ====================

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BusinessToWeb — We Build Websites That Grow Your Business",
  description:
    "Modern, high-converting websites for professional businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {/* ==================== LAYOUT UI & COMPONENTS START ==================== */}
        
        {/* Refresh ya page change hone par top par le jaane ke liye */}
        <ScrollHandler />

        {/* Page loading animation */}
        <Preloader />

        {/* Top Navigation Bar */}
        <Navbar />

        {/* Yahan par aapka current page render hoga */}
        {children}

        {/* Custom Mouse Cursor */}
        <HoverCursor />

        {/* Footer Section */}
        <Footer />

        {/* Scroll to Top Button */}
        <BackToTop />

        {/* ==================== LAYOUT UI & COMPONENTS END ==================== */}
      </body>
    </html>
  );
}