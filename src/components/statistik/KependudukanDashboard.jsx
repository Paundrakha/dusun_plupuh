"use client";

import { motion } from "framer-motion";
import { FaUsers, FaHome, FaMale, FaFemale, FaInfoCircle } from "react-icons/fa";
import useCounter from "@/hooks/useCounter";
import HorizontalBars from "@/components/charts/HorizontalBars";
import DonutChart from "@/components/charts/DonutChart";
import PopulationPyramid, { COLOR_LAKI, COLOR_PEREMPUAN } from "@/components/charts/PopulationPyramid";
import { formatAngka, formatPersen } from "@/lib/format";
import {
  meta,
  ringkasan,
  kelompokUmur,
  pendidikan,
  pekerjaan,
  agama,
  statusPerkawinan,
  cekKonsistensi,
  totalKategori,
} from "@/data/kependudukan";

const { jumlahPenduduk, jumlahKK, jumlahLaki, jumlahPerempuan } = ringkasan;

function SummaryCard({ icon: Icon, label, value, note, accent, index }) {
  const { ref, value: counted } = useCounter(value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white dark:bg-ink-800 rounded-2xl p-6 shadow-card border border-ink-100/60 dark:border-ink-700"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
        style={{ backgroundColor: accent }}
      >
        <Icon className="text-lg" />
      </div>
      <p className="text-3xl md:text-4xl font-extrabold tabular-nums text-ink-900 dark:text-white">
        {formatAngka(counted)}
      </p>
      <p className="text-sm font-medium text-ink-600 dark:text-ink-200 mt-1">{label}</p>
      {note && <p className="text-xs text-ink-400 mt-1">{note}</p>}
    </motion.div>
  );
}

function Panel({ title, subtitle, children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-ink-800 rounded-3xl p-5 md:p-8 shadow-card border border-ink-100/60 dark:border-ink-700 ${className}`}
    >
      <h2 className="text-xl font-bold text-ink-900 dark:text-white">{title}</h2>
      {subtitle && <p className="text-sm text-ink-500 dark:text-ink-300 mt-1 mb-6">{subtitle}</p>}
      {!subtitle && <div className="mb-6" />}
      {children}
    </motion.section>
  );
}

export default function KependudukanDashboard() {
  const masalah = process.env.NODE_ENV !== "production" ? cekKonsistensi() : [];

  return (
    <div className="container-app py-14 md:py-20 space-y-8">
      {!meta.dataResmi && (
        <div className="flex gap-3 rounded-2xl border border-harvest-200 bg-harvest-50 dark:bg-harvest-900/20 dark:border-harvest-800 p-4 text-sm text-harvest-800 dark:text-harvest-200">
          <FaInfoCircle className="mt-0.5 shrink-0" />
          <p>
            Angka pada halaman ini masih <strong>data contoh</strong> dan belum bersumber dari data resmi padukuhan.
          </p>
        </div>
      )}

      {masalah.length > 0 && (
        <div className="rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          <p className="font-semibold mb-1">Data kependudukan tidak konsisten (hanya tampil di mode development):</p>
          <ul className="list-disc pl-5">
            {masalah.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Ringkasan */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <SummaryCard index={0} icon={FaUsers} label="Jumlah Penduduk" value={jumlahPenduduk} note="jiwa" accent="#1a6a66" />
        <SummaryCard
          index={1}
          icon={FaHome}
          label="Kepala Keluarga"
          value={jumlahKK}
          note={`${ringkasan.kkLaki} laki-laki · ${ringkasan.kkPerempuan} perempuan`}
          accent="#4c9639"
        />
        <SummaryCard
          index={2}
          icon={FaMale}
          label="Laki-laki"
          value={jumlahLaki}
          note={formatPersen(jumlahLaki, jumlahPenduduk)}
          accent={COLOR_LAKI}
        />
        <SummaryCard
          index={3}
          icon={FaFemale}
          label="Perempuan"
          value={jumlahPerempuan}
          note={formatPersen(jumlahPerempuan, jumlahPenduduk)}
          accent={COLOR_PEREMPUAN}
        />
      </div>

      {/* Komposisi jenis kelamin */}
      <Panel
        title="Komposisi Jenis Kelamin"
        subtitle={`Rasio jenis kelamin: ${ringkasan.rasioJenisKelamin} laki-laki per 100 perempuan.`}
      >
        <div
          className="flex h-8 rounded-full overflow-hidden"
          role="img"
          aria-label={`Laki-laki ${jumlahLaki}, perempuan ${jumlahPerempuan}`}
        >
          <motion.div
            className="h-full flex items-center justify-start pl-4 text-xs font-semibold text-white"
            style={{ backgroundColor: COLOR_LAKI }}
            initial={{ width: 0 }}
            whileInView={{ width: `${(jumlahLaki / jumlahPenduduk) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {formatPersen(jumlahLaki, jumlahPenduduk)}
          </motion.div>
          <motion.div
            className="h-full flex items-center justify-end pr-4 text-xs font-semibold text-white"
            style={{ backgroundColor: COLOR_PEREMPUAN }}
            initial={{ width: 0 }}
            whileInView={{ width: `${(jumlahPerempuan / jumlahPenduduk) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {formatPersen(jumlahPerempuan, jumlahPenduduk)}
          </motion.div>
        </div>
        <div className="flex justify-between mt-3 text-sm text-ink-600 dark:text-ink-200">
          <span>Laki-laki · {formatAngka(jumlahLaki)}</span>
          <span>Perempuan · {formatAngka(jumlahPerempuan)}</span>
        </div>
      </Panel>

      {/* Kelompok umur */}
      <Panel title="Berdasarkan Kelompok Umur" subtitle="Jumlah penduduk menurut kelompok umur, dipisahkan menurut jenis kelamin.">
        <PopulationPyramid data={kelompokUmur} />
      </Panel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Panel title="Berdasarkan Pendidikan" subtitle="Pendidikan terakhir yang ditamatkan.">
          <HorizontalBars items={pendidikan} total={totalKategori.pendidikan} color="#1c847d" label="Penduduk menurut pendidikan" />
        </Panel>
        <Panel title="Berdasarkan Pekerjaan" subtitle="10 pekerjaan terbanyak; jenis lainnya digabung.">
          <HorizontalBars items={pekerjaan} total={totalKategori.pekerjaan} color="#fd7213" label="Penduduk menurut pekerjaan" />
        </Panel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Panel title="Berdasarkan Agama" subtitle="Penduduk menurut agama yang dianut.">
          <DonutChart items={agama} total={totalKategori.agama} centerLabel="Penduduk" label="Penduduk menurut agama" />
        </Panel>
        <Panel title="Berdasarkan Status Perkawinan" subtitle="Penduduk menurut status perkawinan.">
          <DonutChart
            items={statusPerkawinan}
            total={totalKategori.statusPerkawinan}
            centerLabel="Penduduk"
            label="Penduduk menurut status perkawinan"
          />
        </Panel>
      </div>

      <p className="text-center text-xs text-ink-400">
        {meta.sumber}, {meta.periode}. Persentase dihitung dari jumlah data pada tiap kategori; selisih kecil antar
        kategori berasal dari data sumber.
      </p>
    </div>
  );
}
