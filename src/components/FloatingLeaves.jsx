"use client";

import { motion } from "framer-motion";
import { GiMapleLeaf } from "react-icons/gi";

const leaves = [
  { top: "15%", left: "8%", size: 28, delay: 0, duration: 7, rotate: 15 },
  { top: "65%", left: "5%", size: 20, delay: 1.2, duration: 9, rotate: -20 },
  { top: "25%", left: "92%", size: 24, delay: 0.6, duration: 8, rotate: 25 },
  { top: "75%", left: "88%", size: 18, delay: 2, duration: 6.5, rotate: -10 },
  { top: "45%", left: "50%", size: 16, delay: 1.6, duration: 10, rotate: 40 },
];

export default function FloatingLeaves({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute text-forest-400/50"
          style={{ top: leaf.top, left: leaf.left }}
          initial={{ y: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: [0, -22, 0],
            rotate: [0, leaf.rotate, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <GiMapleLeaf size={leaf.size} />
        </motion.div>
      ))}
    </div>
  );
}
