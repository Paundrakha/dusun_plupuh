"use client";

import { motion } from "framer-motion";
import { GiWheat, GiThreeFriends } from "react-icons/gi";
import { MdStorefront } from "react-icons/md";
import { FaTree, FaSeedling, FaHandsHelping } from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle";
import { potensiData } from "@/data/siteData";

const iconMap = {
  GiWheat,
  FaTree,
  MdStorefront,
  GiThreeFriends,
  FaSeedling,
  FaHandsHelping,
};

export default function Potensi() {
  return (
    <section id="potensi" className="py-24 md:py-32 bg-section-gradient transition-colors duration-300">
      <div className="container-app">
        <SectionTitle
          eyebrow="Kekuatan Kami"
          title="Potensi Padukuhan Plupuh"
          subtitle="Beragam potensi lokal yang menjadi fondasi ekonomi dan identitas masyarakat Plupuh."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {potensiData.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-tosca-300 via-tosca-100 to-harvest-200 hover:from-tosca-500 hover:to-harvest-400 transition-all duration-300"
              >
                <div className="bg-white rounded-2xl p-7 h-full">
                  <div className="w-14 h-14 rounded-xl bg-tosca-50 flex items-center justify-center mb-5 group-hover:bg-tosca-100 transition-colors duration-300">
                    <Icon className="text-tosca-600 text-2xl" />
                  </div>
                  <h3 className="font-bold text-lg text-ink-900 mb-2">{item.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
