"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import useLenis from "@/hooks/useLenis";

export default function MainLayout({ children }) {
  useLenis();

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}
