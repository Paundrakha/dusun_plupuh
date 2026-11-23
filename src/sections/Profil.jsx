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

function SubHeading({ children }) {
  return (
    <h3 className="flex items-center gap-3 text-xl font-bold text-ink-900 mb-4">
      <span className="w-1.5 h-6 rounded-full bg-tosca-500" />
      {children}
    </h3>
  );
}

export default function Profil() {
  return (
    <section id="profil" className="relative py-24 md:py-32 bg-white overflow-hidden transition-colors duration-300">
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
              <SubHeading>Sejarah Singkat</SubHeading>
              <div className="space-y-3 text-ink-600 leading-7">
                {profilData.sejarah.map((paragraf, i) => (
                  <p key={i}>{paragraf}</p>
                ))}
              </div>
            </div>

            <div>
              <SubHeading>Visi</SubHeading>
              <blockquote className="rounded-2xl bg-tosca-50 border-l-4 border-tosca-500 px-5 py-4 text-ink-700 leading-7">
                {profilData.visi}
              </blockquote>
            </div>

            <div>
              <SubHeading>Misi</SubHeading>
              <ol className="space-y-3">
                {profilData.misi.map((item, i) => (
                  <li key={i} className="flex gap-4 text-ink-600 leading-7">
                    <span className="mt-0.5 w-7 h-7 shrink-0 rounded-full bg-tosca-600 text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
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
                  <p className="text-sm font-semibold text-ink-900">{card.value}</p>
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
            <SubHeading>Perjalanan Padukuhan</SubHeading>
            <div className="relative mt-8 pl-8 border-l-2 border-tosca-200 space-y-10">
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
                  <h4 className="text-lg font-semibold text-ink-900 mt-1">{item.title}</h4>
                  <p className="text-ink-600 text-sm mt-1.5 leading-6">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 bg-section-gradient rounded-2xl p-6 shadow-card">
              <h4 className="font-semibold text-ink-900 mb-3">Fokus Pengembangan Saat Ini</h4>
              <p className="text-ink-600 text-sm leading-6">
                Padukuhan Plupuh kini berfokus mengembangkan{" "}
                <span className="font-semibold text-tosca-600">Jagad Bambu Nusantara</span> —
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
