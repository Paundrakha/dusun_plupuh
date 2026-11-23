"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  className = "",
  disabled = false,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300";

  const variants = {
    primary: "bg-tosca-600 text-white shadow-soft hover:bg-tosca-700",
    secondary: "bg-white text-tosca-700 border-2 border-white/80 hover:bg-tosca-50",
    outline: "border-2 border-tosca-600 text-tosca-600 hover:bg-tosca-600 hover:text-white",
    ghost: "bg-white/10 text-white border border-white/40 hover:bg-white/20",
  };

  // Rute internal (diawali "/") memakai next/link; hash "#..." dan URL eksternal memakai <a>
  const isInternal = typeof href === "string" && href.startsWith("/");
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
  const Component = isInternal ? Link : href ? "a" : "button";

  // Tombol nonaktif (mis. tautan yang belum tersedia)
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        title="Segera hadir"
        className={`${base} border-2 border-ink-200 text-ink-400 bg-ink-50 cursor-not-allowed select-none ${className}`}
      >
        {children}
        {Icon && <Icon className="text-lg" />}
      </span>
    );
  }

  return (
    <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <Component
        href={href}
        onClick={onClick}
        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
        {Icon && <Icon className="text-lg" />}
      </Component>
    </motion.div>
  );
}
