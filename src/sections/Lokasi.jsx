"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import { siteInfo } from "@/data/siteData";

export default function Lokasi() {
  return (
    <section id="lokasi" className="py-24 md:py-32 bg-section-gradient transition-colors duration-300">
      <div className="container-app">
        <SectionTitle
          eyebrow="Kunjungi Kami"
          title="Lokasi Padukuhan"
          subtitle="Temukan lokasi Padukuhan Plupuh dan dapatkan petunjuk arah menuju kawasan kami."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-3xl shadow-card overflow-hidden"
        >
          <div className="lg:col-span-2 h-80 lg:h-auto">
            <iframe
              title="Lokasi Padukuhan Plupuh"
              src={siteInfo.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <FaMapMarkerAlt className="text-tosca-600 text-3xl mb-4" />
            <h3 className="font-bold text-ink-900 text-xl mb-3">Alamat Lengkap</h3>
            <p className="text-ink-500 leading-relaxed mb-2">{siteInfo.address}</p>
            <p className="text-ink-400 text-xs mb-6">Plus code: {siteInfo.plusCode}</p>
            <a
              href={siteInfo.mapsDirectionUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 justify-center bg-tosca-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-tosca-700 transition-colors"
            >
              <FaDirections /> Petunjuk Arah
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
