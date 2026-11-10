"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { FaCompass, FaImages } from "react-icons/fa";
import Button from "@/components/Button";
import FloatingLeaves from "@/components/FloatingLeaves";
import { siteInfo } from "@/data/siteData";

// Dimuat secara lazy & hanya di sisi klien (ssr: false) karena React Three Fiber cukup berat untuk initial bundle.
const Decor3D = dynamic(() => import("@/components/Decor3D"), { ssr: false });

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1768593049340-6e50351b4b2f?w=1600&q=80"
          alt="Hutan bambu di Padukuhan Plupuh"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </motion.div>

      <Decor3D className="absolute inset-0 w-full h-full opacity-70 hidden md:block" />
      <FloatingLeaves />

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="uppercase tracking-[0.3em] text-xs md:text-sm text-tosca-100 font-semibold mb-5"
        >
          Kalurahan Wukirsari · Kapanewon Cangkringan · Sleman
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-white font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl"
        >
          Selamat Datang di{" "}
          <span className="text-tosca-200">{siteInfo.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-white/85 text-base md:text-xl mt-6 max-w-2xl"
        >
          {siteInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Button href="#profil" variant="primary" icon={FaCompass}>
            Jelajahi Padukuhan
          </Button>
          <Button href="#galeri" variant="ghost" icon={FaImages}>
            Lihat Galeri
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#profil"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.6 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white text-2xl"
        aria-label="Gulir ke bawah"
      >
        <HiOutlineArrowNarrowDown />
      </motion.a>
    </section>
  );
}
