"use client";

import { motion } from "framer-motion";
import { formatAngka, formatPersen } from "@/lib/format";

/**
 * Grafik batang horizontal untuk kategori dengan label panjang
 * (pendidikan, pekerjaan). Nilai & persentase selalu ditulis sebagai teks,
 * jadi informasi tidak bergantung pada warna saja.
 */
export default function HorizontalBars({ items, total, color = "#1c847d", label }) {
  const max = Math.max(...items.map((i) => i.jumlah), 1);

  return (
    <ul className="space-y-3.5" aria-label={label}>
      {items.map((item, i) => (
        <li key={item.label}>
          <div className="flex items-baseline justify-between gap-3 mb-1.5 text-sm">
            <span className="text-ink-700 dark:text-ink-200 font-medium">{item.label}</span>
            <span className="shrink-0 tabular-nums text-ink-900 dark:text-white font-semibold">
              {formatAngka(item.jumlah)}
              <span className="ml-2 text-xs font-normal text-ink-400">{formatPersen(item.jumlah, total)}</span>
            </span>
          </div>
          <div className="h-2.5 rounded-full bg-ink-100 dark:bg-ink-700 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              whileInView={{ width: `${(item.jumlah / max) * 100}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.04, ease: "easeOut" }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
