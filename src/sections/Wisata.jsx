"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaMapMarkedAlt } from "react-icons/fa";
import SafeImage from "@/components/SafeImage";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { wisataData, siteInfo } from "@/data/siteData";

export default function Wisata() {
  return (
    <section id="wisata" className="py-24 md:py-32 bg-white dark:bg-ink-900 transition-colors duration-300">
      <div className="container-app">
        <SectionTitle
          eyebrow="Fokus Pengembangan"
          title={wisataData.nama}
          subtitle={wisataData.tagline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-ink-500 dark:text-ink-300 leading-relaxed mb-8">{wisataData.deskripsi}</p>
            <div className="flex flex-wrap gap-4">
              <Button href={siteInfo.instagram} variant="outline" icon={FaInstagram}>
                Instagram
              </Button>
              <Button href={siteInfo.tiktok} variant="outline" icon={FaTiktok}>
                TikTok
              </Button>
              <Button href="#lokasi" variant="primary" icon={FaMapMarkedAlt}>
                Lihat Lokasi
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            <SafeImage
              src={wisataData.images[0]}
              alt="Jagad Bambu Nusantara"
              className="rounded-2xl object-cover w-full h-56 col-span-2 shadow-card"
              loading="lazy"
            />
            <SafeImage
              src={wisataData.images[1]}
              alt="Kebun bambu Plupuh"
              className="rounded-2xl object-cover w-full h-40 shadow-card"
              loading="lazy"
            />
            <SafeImage
              src={wisataData.images[2]}
              alt="Pasar Minggu Pon"
              className="rounded-2xl object-cover w-full h-40 shadow-card"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wisataData.keunikan.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-section-gradient dark:bg-ink-800 rounded-2xl p-6 shadow-card"
            >
              <h3 className="font-bold text-ink-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-ink-500 dark:text-ink-300 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-ink-400 dark:text-ink-400 text-xs mt-10">
          {/* Foto ilustrasi hutan bambu di atas bersifat sementara — ganti dengan foto asli dari akun sosial media Jagad Bambu Nusantara. */}
        </p>
      </div>
    </section>
  );
}
