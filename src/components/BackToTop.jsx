"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -4 }}
          onClick={scrollTop}
          aria-label="Kembali ke atas"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-tosca-600 text-white shadow-soft flex items-center justify-center hover:bg-tosca-700 transition-colors"
        >
          <HiArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
