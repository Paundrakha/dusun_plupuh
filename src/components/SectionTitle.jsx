"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl mb-14`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.25em] text-xs md:text-sm font-semibold text-tosca-600 mb-3"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 dark:text-white leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-ink-500 dark:text-ink-300 text-base md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
