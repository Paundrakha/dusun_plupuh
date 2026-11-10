"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaMountain, FaHome, FaCompass } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import { profilData } from "@/data/siteData";

const infoCards = [
  { icon: FaMapMarkerAlt, label: "Letak Geografis", value: profilData.geografis.letak },
  { icon: FaMountain, label: "Kawasan", value: profilData.geografis.ketinggian },
  { icon: FaCompass, label: "Luas Wilayah", value: profilData.geografis.luasWilayah },
  { icon: FaHome, label: "Jumlah Warga", value: `${profilData.demografi.jumlahWarga} Warga` },
];

export default function Profil() {
  return (
    <section id="profil" className="relative py-24 md:py-32 bg-white dark:bg-ink-900 overflow-hidden transition-colors duration-300">
      <div className="container-app">
        <SectionTitle
          eyebrow="Mengenal Kami"
          title="Profil Padukuhan Plupuh"
          subtitle="Padukuhan yang tumbuh dari akar pertanian, dijaga oleh kebersamaan, dan terus melangkah menuju kemajuan."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-ink-900 dark:text-white mb-3">Sejarah Singkat</h3>
              <p className="text-ink-500 dark:text-ink-300 leading-relaxed">{profilData.sejarah}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink-900 dark:text-white mb-3">Visi</h3>
              <p className="text-ink-500 dark:text-ink-300 leading-relaxed">{profilData.visi}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink-900 dark:text-white mb-3">Misi</h3>
              <ul className="space-y-2">
                {profilData.misi.map((item, i) => (
                  <li key={i} className="flex gap-3 text-ink-500 dark:text-ink-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-tosca-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-tosca-50 rounded-2xl p-5 shadow-card"
                >
                  <card.icon className="text-tosca-600 text-xl mb-3" />
                  <p className="text-xs text-ink-400 mb-1">{card.label}</p>
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">{card.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold text-ink-900 dark:text-white mb-8">Perjalanan Padukuhan</h3>
            <div className="relative pl-8 border-l-2 border-tosca-200 space-y-10">
              {profilData.timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[2.35rem] top-0 w-4 h-4 rounded-full bg-tosca-600 ring-4 ring-tosca-100" />
                  <span className="text-tosca-600 font-bold text-sm">{item.year}</span>
                  <h4 className="text-lg font-semibold text-ink-900 dark:text-white mt-1">{item.title}</h4>
                  <p className="text-ink-500 dark:text-ink-300 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 bg-section-gradient dark:bg-ink-800 rounded-2xl p-6 shadow-card">
              <h4 className="font-semibold text-ink-900 dark:text-white mb-3">Fokus Pengembangan Saat Ini</h4>
              <p className="text-ink-500 dark:text-ink-300 text-sm leading-relaxed">
                Padukuhan Plupuh kini berfokus mengembangkan{" "}
                <span className="font-semibold text-tosca-600 dark:text-tosca-300">Jagad Bambu Nusantara</span> —
                wisata konservasi bambu yang menjadi penggerak ekonomi warga sekaligus benteng ekologis
                di lereng Gunung Merapi.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
