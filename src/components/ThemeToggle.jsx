"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle({ theme, toggleTheme, scrolled }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Ganti tema gelap/terang"
      className={`relative w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-300 ${
        scrolled
          ? "bg-tosca-50 dark:bg-ink-800 text-ink-700 dark:text-tosca-200 hover:bg-tosca-100 dark:hover:bg-ink-700"
          : "bg-white/15 border border-white/40 text-white hover:bg-white/25"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.25 }}
          className="text-lg"
        >
          {isDark ? <HiMoon /> : <HiSun />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
