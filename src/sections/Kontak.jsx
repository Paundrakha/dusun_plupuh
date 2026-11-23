"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import { sosialMediaData } from "@/data/siteData";

const platformIcon = { Instagram: FaInstagram, TikTok: FaTiktok };

function AkunCard({ akun, index }) {
  const Icon = platformIcon[akun.platform];
  const aktif = Boolean(akun.url);

  const isi = (
    <>
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-card shrink-0">
        <Icon className="text-tosca-600 text-lg" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-ink-400">{akun.platform}</p>
        <p className="font-semibold text-ink-900 text-sm truncate">
          {aktif ? akun.handle || akun.url : "Segera hadir"}
        </p>
      </div>
    </>
  );

  const props = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4, delay: index * 0.08 },
    className: "flex items-center gap-4 bg-section-gradient rounded-2xl p-5 shadow-card",
  };

  return aktif ? (
    <motion.a href={akun.url} target="_blank" rel="noreferrer" whileHover={{ y: -4 }} {...props}>
      {isi}
    </motion.a>
  ) : (
    <motion.div aria-disabled="true" {...props} className={`${props.className} opacity-60`}>
      {isi}
    </motion.div>
  );
}

export default function Kontak() {
  return (
    <section id="sosial-media" className="py-24 md:py-32 bg-white transition-colors duration-300">
      <div className="container-app">
        <SectionTitle
          eyebrow="Ikuti Kami"
          title="Sosial Media"
          subtitle="Ikuti kabar terbaru dari wisata Jagad Bambu Nusantara dan Karang Taruna Plupuh."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {sosialMediaData.map((grup) => (
            <div key={grup.id}>
              <h3 className="font-bold text-lg text-ink-900">{grup.nama}</h3>
              <p className="text-sm text-ink-500 mt-1 mb-5">{grup.desc}</p>
              <div className="space-y-4">
                {grup.akun.map((akun, i) => (
                  <AkunCard key={akun.platform} akun={akun} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
