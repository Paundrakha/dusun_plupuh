"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { formatAngka, formatPersen } from "@/lib/format";

export const DONUT_COLORS = ["#1c847d", "#fd7213", "#4c9639", "#78d9cc", "#ffb670", "#767d80"];

const SIZE = 200;
const STROKE = 30;
const R = (SIZE - STROKE) / 2;
const C = 2 * Math.PI * R;
const GAP = 2; // celah antar segmen (satuan panjang keliling)

/**
 * Grafik donat + legenda. Legenda memuat label, jumlah, dan persentase,
 * sehingga segmen kecil (mis. 1 orang) tetap terbaca.
 */
export default function DonutChart({ items, total, centerLabel = "Total", label }) {
  const [active, setActive] = useState(null);
  const shown = items.filter((i) => i.jumlah > 0);

  // posisi awal tiap segmen (akumulatif)
  let acc = 0;
  const segments = shown.map((item) => {
    const length = (item.jumlah / total) * C;
    const seg = { ...item, start: acc, length };
    acc += length;
    return seg;
  });

  const colorOf = (itemLabel) => DONUT_COLORS[items.findIndex((i) => i.label === itemLabel) % DONUT_COLORS.length];
  const activeItem = items.find((i) => i.label === active);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8">
      <div className="relative w-48 h-48 shrink-0">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full h-full -rotate-90" role="img" aria-label={label}>
          <circle cx={SIZE / 2} cy={SIZE / 2} r={R} fill="none" strokeWidth={STROKE} className="stroke-ink-100 dark:stroke-ink-700" />
          {segments.map((seg, i) => {
            const dash = Math.max(seg.length - (segments.length > 1 ? GAP : 0), 0.5);
            const dim = active && active !== seg.label;
            return (
              <motion.circle
                key={seg.label}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={R}
                fill="none"
                stroke={colorOf(seg.label)}
                strokeWidth={active === seg.label ? STROKE + 4 : STROKE}
                strokeDashoffset={-seg.start}
                initial={{ strokeDasharray: `0 ${C}` }}
                whileInView={{ strokeDasharray: `${dash} ${C - dash}` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
                style={{ opacity: dim ? 0.3 : 1, transition: "opacity 0.2s, stroke-width 0.2s" }}
                onMouseEnter={() => setActive(seg.label)}
                onMouseLeave={() => setActive(null)}
              >
                <title>{`${seg.label}: ${formatAngka(seg.jumlah)} (${formatPersen(seg.jumlah, total)})`}</title>
              </motion.circle>
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 pointer-events-none">
          <span className="text-2xl font-extrabold tabular-nums text-ink-900 dark:text-white">
            {formatAngka(activeItem ? activeItem.jumlah : total)}
          </span>
          <span className="text-[11px] leading-tight text-ink-500 dark:text-ink-300 mt-0.5">
            {activeItem ? activeItem.label : centerLabel}
          </span>
        </div>
      </div>

      <ul className="w-full space-y-2.5">
        {items.map((item) => (
          <li
            key={item.label}
            onMouseEnter={() => item.jumlah > 0 && setActive(item.label)}
            onMouseLeave={() => setActive(null)}
            className={`flex items-center gap-3 text-sm transition-opacity ${
              active && active !== item.label ? "opacity-40" : "opacity-100"
            }`}
          >
            <span className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: colorOf(item.label) }} />
            <span className="flex-1 text-ink-700 dark:text-ink-200">{item.label}</span>
            <span className="tabular-nums font-semibold text-ink-900 dark:text-white">{formatAngka(item.jumlah)}</span>
            <span className="w-14 text-right tabular-nums text-xs text-ink-400">{formatPersen(item.jumlah, total)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
