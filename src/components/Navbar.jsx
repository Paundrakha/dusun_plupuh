"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { GiWheat } from "react-icons/gi";
import { navLinks, siteInfo } from "@/data/siteData";

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-card py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container-app flex items-center justify-between">
          <Link href="/#home" className="flex items-center gap-2.5">
            <span
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-500 ${
                scrolled ? "bg-tosca-600" : "bg-white/20 border border-white/40"
              }`}
            >
              <GiWheat className="text-white text-xl" />
            </span>
            <span className={`font-bold text-lg tracking-tight transition-colors duration-500 ${scrolled ? "text-ink-900" : "text-white"}`}>
              {siteInfo.name}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 group ${
                  scrolled ? "text-ink-700 hover:text-tosca-600" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-tosca-600" : "bg-white"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <Link
            href="/#kontak"
            className={`hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-tosca-600 text-white hover:bg-tosca-700"
                : "bg-white/15 text-white border border-white/40 hover:bg-white/25"
            }`}
          >
            Hubungi Kami
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden text-2xl transition-colors duration-300 ${scrolled ? "text-ink-900" : "text-white"}`}
              aria-label="Buka menu"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-tosca-900/70 backdrop-blur-xl lg:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center px-6 py-6">
              <span className="text-white font-bold text-lg">{siteInfo.name}</span>
              <button onClick={() => setMenuOpen(false)} className="text-white text-3xl" aria-label="Tutup menu">
                <HiX />
              </button>
            </div>
            <motion.nav
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                closed: {},
              }}
              className="flex flex-col items-center gap-5 mt-8 pb-12"
            >
              {navLinks.map((link) => (
                <MotionLink
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                  className="text-white text-2xl font-semibold hover:text-tosca-200 transition-colors"
                >
                  {link.label}
                </MotionLink>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
