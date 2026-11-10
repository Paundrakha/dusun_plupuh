"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "@/components/SafeImage";
import SectionTitle from "@/components/SectionTitle";
import { beritaData } from "@/data/siteData";

const kategoriList = ["Semua", ...new Set(beritaData.map((b) => b.kategori))];

export default function Berita() {
  const [activeKategori, setActiveKategori] = useState("Semua");

  const filtered =
    activeKategori === "Semua"
      ? beritaData
      : beritaData.filter((b) => b.kategori === activeKategori);

  return (
    <section
      id="berita"
      className="py-24 md:py-32 bg-white dark:bg-ink-900 transition-colors duration-300"
    >
      <div className="container-app">
        <SectionTitle
          eyebrow="Informasi Terkini"
          title="Berita & Kegiatan"
          subtitle="Rangkuman kegiatan dan dinamika masyarakat Padukuhan Plupuh dari waktu ke waktu."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {kategoriList.map((kat) => (
            <button
              key={kat}
              onClick={() => setActiveKategori(kat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeKategori === kat
                  ? "bg-tosca-600 text-white shadow-soft"
                  : "bg-tosca-50 dark:bg-ink-800 text-ink-600 dark:text-ink-200 hover:bg-tosca-100 dark:hover:bg-ink-700"
              }`}
            >
              {kat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-ink-800 rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-shadow duration-300 border border-ink-100/60 dark:border-ink-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <SafeImage
                    src={item.foto}
                    alt={item.judul}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />

                  <span className="absolute top-4 left-4 bg-tosca-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.kategori}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-ink-400 dark:text-ink-400 text-xs mb-2">
                    {item.tanggal}
                  </p>

                  <h3 className="font-bold text-ink-900 dark:text-white text-lg leading-snug mb-2">
                    {item.judul}
                  </h3>

                  <p className="text-ink-500 dark:text-ink-300 text-sm leading-relaxed">
                    {item.ringkasan}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}