"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import useCounter from "@/hooks/useCounter";
import { statistikData } from "@/data/siteData";

function StatCard({ item, index }) {
  const { ref, value } = useCounter(item.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center border border-white/15"
    >
      <p className="text-4xl md:text-5xl font-extrabold text-white">
        {value}
        <span className="text-tosca-200">{item.suffix}</span>
      </p>
      <p className="text-tosca-100/90 text-sm md:text-base mt-2 font-medium">{item.label}</p>
    </motion.div>
  );
}

export default function Statistik() {
  return (
    <section className="relative py-24 bg-mountain-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
      <div className="container-app relative z-10">
        <div className="text-center mb-14">
          <span className="uppercase tracking-[0.25em] text-xs md:text-sm font-semibold text-tosca-100">
            Data Padukuhan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Plupuh dalam Angka</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {statistikData.map((item, i) => (
            <StatCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/statistik"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-white text-tosca-700 font-semibold text-sm md:text-base hover:bg-tosca-50 transition-colors"
          >
            Lihat Statistik Kependudukan Lengkap
          </Link>
        </div>
      </div>
    </section>
  );
}
