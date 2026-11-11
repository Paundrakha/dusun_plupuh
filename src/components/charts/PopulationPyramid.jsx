"use client";

import { motion } from "framer-motion";
import { formatAngka } from "@/lib/format";

export const COLOR_LAKI = "#1c847d";
export const COLOR_PEREMPUAN = "#fd7213";

/**
 * Piramida penduduk: laki-laki di kiri, perempuan di kanan,
 * kelompok umur tertua di atas. Setiap batang diberi angka.
 */
function MobileBar({ label, value, color, max, delay }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-4 shrink-0 text-[11px] font-semibold text-ink-400">{label}</span>
      <div className="flex-1 h-4 rounded-full bg-ink-100 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${(value / max) * 100}%` }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay, ease: "easeOut" }}
        />
      </div>
      <span className="w-9 shrink-0 text-right text-xs tabular-nums font-semibold text-ink-700">
        {formatAngka(value)}
      </span>
    </div>
  );
}

// Tampilan ponsel: piramida terlalu sempit, jadi tiap kelompok umur ditampilkan
// sebagai dua batang bertumpuk (L / P) selebar penuh.
function MobileList({ data, max }) {
  return (
    <div className="space-y-4">
      {data.map((row, i) => (
        <div key={row.label}>
          <div className="flex items-baseline justify-between mb-1.5">
            <span className="text-sm font-semibold text-ink-800">{row.label} tahun</span>
            <span className="text-xs text-ink-400 tabular-nums">{formatAngka(row.laki + row.perempuan)} jiwa</span>
          </div>
          <div className="space-y-1.5">
            <MobileBar label="L" value={row.laki} color={COLOR_LAKI} max={max} delay={i * 0.03} />
            <MobileBar label="P" value={row.perempuan} color={COLOR_PEREMPUAN} max={max} delay={i * 0.03} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PopulationPyramid({ data }) {
  const max = Math.max(...data.flatMap((d) => [d.laki, d.perempuan]), 1);
  const rows = [...data].reverse(); // tertua di atas

  return (
    <div role="img" aria-label="Piramida penduduk menurut kelompok umur dan jenis kelamin">
      <div className="flex justify-center gap-6 mb-5 text-sm">
        <span className="flex items-center gap-2 text-ink-700">
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLOR_LAKI }} /> Laki-laki
        </span>
        <span className="flex items-center gap-2 text-ink-700">
          <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLOR_PEREMPUAN }} /> Perempuan
        </span>
      </div>

      <div className="sm:hidden">
        <MobileList data={data} max={max} />
      </div>

      <div className="hidden sm:block space-y-1.5">
        {rows.map((row, i) => (
          <div key={row.label} className="grid grid-cols-[1fr_3.5rem_1fr] sm:grid-cols-[1fr_4.5rem_1fr] items-center gap-2">
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs tabular-nums font-medium text-ink-600">{formatAngka(row.laki)}</span>
              <motion.div
                className="h-5 sm:h-6 rounded-l-md"
                style={{ backgroundColor: COLOR_LAKI }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(row.laki / max) * 78}%` }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.03, ease: "easeOut" }}
              />
            </div>
            <span className="text-center text-xs font-semibold text-ink-500">{row.label}</span>
            <div className="flex items-center gap-2">
              <motion.div
                className="h-5 sm:h-6 rounded-r-md"
                style={{ backgroundColor: COLOR_PEREMPUAN }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(row.perempuan / max) * 78}%` }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.03, ease: "easeOut" }}
              />
              <span className="text-xs tabular-nums font-medium text-ink-600">{formatAngka(row.perempuan)}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="hidden sm:block text-center text-xs text-ink-400 mt-4">Kelompok umur (tahun)</p>
    </div>
  );
}
