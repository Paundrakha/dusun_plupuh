"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import { siteInfo } from "@/data/siteData";

const contactCards = [
  {
    Icon: FaPhoneAlt,
    label: "Telepon",
    value: siteInfo.phone,
    href: `tel:${siteInfo.phone.replace(/\s|-/g, "")}`,
  },
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    value: siteInfo.phone,
    href: `https://wa.me/${siteInfo.whatsapp}`,
  },
  {
    Icon: FaInstagram,
    label: "Instagram Wisata Bambu",
    value: "@wisata_desa_jagadbambu_",
    href: siteInfo.instagram,
  },
  {
    Icon: FaTiktok,
    label: "TikTok Wisata Bambu",
    value: "@wisata_konservasi_bambu_plupuh",
    href: siteInfo.tiktok,
  },
];

export default function Kontak() {
  return (
    <section
      id="kontak"
      className="py-24 md:py-32 bg-white transition-colors duration-300"
    >
      <div className="container-app">
        <SectionTitle
          eyebrow="Hubungi Kami"
          title="Mari Terhubung"
          subtitle="Kami senang mendengar pertanyaan, masukan, atau kerja sama dari Anda."
        />

        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 bg-section-gradient rounded-2xl p-5 shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-card shrink-0">
                <card.Icon className="text-tosca-600 text-lg" />
              </div>

              <div>
                <p className="text-xs text-ink-400">
                  {card.label}
                </p>
                <p className="font-semibold text-ink-900 text-sm">
                  {card.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}