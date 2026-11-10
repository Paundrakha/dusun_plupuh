"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import SafeImage from "@/components/SafeImage";
import SectionTitle from "@/components/SectionTitle";
import { galeriData } from "@/data/siteData";

const kategoriList = ["Semua", ...new Set(galeriData.map((g) => g.kategori))];

const JUMLAH_BARIS = 3;
const MIN_ITEM_PER_BARIS = 8;

// Satu baris yang bergerak terus-menerus. Isi diduplikasi dua kali sehingga loop mulus
// (animasi bergeser tepat -50%).
function MarqueeRow({ items, reverse, onSelect }) {
  const repeat = Math.max(1, Math.ceil(MIN_ITEM_PER_BARIS / items.length));
  const half = Array.from({ length: repeat }, () => items).flat();
  const track = [...half, ...half];
  const duration = Math.max(half.length * 5, 25); // detik per putaran; makin banyak foto, makin lambat

  return (
    <div className="marquee-mask overflow-hidden group/row">
      <div
        className="flex w-max animate-marquee group-hover/row:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {track.map((item, i) => (
          <button
            key={`${item.id}-${i}`}
            type="button"
            onClick={() => onSelect(item.index)}
            aria-hidden={i >= half.length ? true : undefined}
            tabIndex={i >= half.length ? -1 : 0}
            className="relative shrink-0 mr-4 md:mr-5 w-56 h-40 md:w-80 md:h-56 rounded-2xl overflow-hidden cursor-pointer group shadow-card"
          >
            <SafeImage
              src={item.src}
              alt={i >= half.length ? "" : item.caption}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-medium text-left">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Galeri() {
  const [activeKategori, setActiveKategori] = useState("Semua");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeKategori === "Semua" ? galeriData : galeriData.filter((g) => g.kategori === activeKategori);

  // bagi foto ke beberapa baris secara bergiliran; simpan indeks aslinya untuk lightbox
  const jumlahBaris = Math.min(JUMLAH_BARIS, filtered.length);
  const rows = Array.from({ length: jumlahBaris }, (_, r) =>
    filtered.map((item, index) => ({ ...item, index })).filter((_, i) => i % jumlahBaris === r)
  );

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % filtered.length);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <section id="galeri" className="py-24 md:py-32 bg-section-gradient dark:bg-ink-800 transition-colors duration-300">
      <div className="container-app">
        <SectionTitle
          eyebrow="Dokumentasi"
          title="Galeri Padukuhan"
          subtitle="Momen keindahan alam, kegiatan warga, dan dokumentasi program KKN di Padukuhan Plupuh."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {kategoriList.map((kat) => (
            <button
              key={kat}
              onClick={() => setActiveKategori(kat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeKategori === kat
                  ? "bg-tosca-600 text-white shadow-soft"
                  : "bg-white dark:bg-ink-900 text-ink-600 dark:text-ink-200 hover:bg-tosca-100 dark:hover:bg-ink-700"
              }`}
            >
              {kat}
            </button>
          ))}
        </div>
      </div>

      {/* Galeri berjalan: baris bergantian ke kiri / kanan, berhenti saat di-hover */}
      <div className="space-y-4 md:space-y-5">
        {rows.map((row, r) => (
          <MarqueeRow key={`${activeKategori}-${r}`} items={row} reverse={r % 2 === 1} onSelect={openLightbox} />
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center px-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white text-3xl hover:text-tosca-300 transition-colors"
              aria-label="Tutup"
            >
              <HiX />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 text-white text-3xl hover:text-tosca-300 transition-colors"
              aria-label="Sebelumnya"
            >
              <HiChevronLeft />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].caption}
              className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 text-white text-3xl hover:text-tosca-300 transition-colors"
              aria-label="Berikutnya"
            >
              <HiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
