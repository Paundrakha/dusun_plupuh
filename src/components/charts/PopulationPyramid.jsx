"use client";

import { motion } from "framer-motion";
import { formatAngka } from "@/lib/format";

export const COLOR_LAKI = "#1c847d";
export const COLOR_PEREMPUAN = "#fd7213";

/**
 * Piramida penduduk: laki-laki di kiri, perempuan di kanan,
 * kelompok umur tertua di atas. Setiap batang diberi angka.
 */
export default function PopulationPyramid({ data }) {
  const max = Math.max(...data.flatMap((d) => [d.laki, d.perempuan]), 1);
  const rows = [...data].reverse(); // tertua di atas

  return (
    <div role="img" aria-label="Piramida penduduk menurut kelompok umur dan jenis kelamin">
      <div className="flex justify-center gap-6 mb-5 text-sm">
        <span className="flex items-center gap-2 text-ink-700 dark:text-ink-200">
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLOR_LAKI }} /> Laki-laki
        </span>
        <span className="flex items-center gap-2 text-ink-700 dark:text-ink-200">
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLOR_PEREMPUAN }} /> Perempuan
        </span>
      </div>

      <div className="space-y-1.5">
        {rows.map((row, i) => (
          <div key={row.label} className="grid grid-cols-[1fr_3.5rem_1fr] sm:grid-cols-[1fr_4.5rem_1fr] items-center gap-2">
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs tabular-nums font-medium text-ink-600 dark:text-ink-200">{formatAngka(row.laki)}</span>
              <motion.div
                className="h-5 sm:h-6 rounded-l-md"
                style={{ backgroundColor: COLOR_LAKI }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(row.laki / max) * 78}%` }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.03, ease: "easeOut" }}
              />
            </div>
            <span className="text-center text-xs font-semibold text-ink-500 dark:text-ink-300">{row.label}</span>
            <div className="flex items-center gap-2">
              <motion.div
                className="h-5 sm:h-6 rounded-r-md"
                style={{ backgroundColor: COLOR_PEREMPUAN }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(row.perempuan / max) * 78}%` }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.03, ease: "easeOut" }}
              />
              <span className="text-xs tabular-nums font-medium text-ink-600 dark:text-ink-200">{formatAngka(row.perempuan)}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-ink-400 mt-4">Kelompok umur (tahun)</p>
    </div>
  );
}
