"use client";

import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { navLinks, siteInfo } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white pt-16 pb-8">
      <div className="container-app grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="mb-4">
            <span className="font-bold text-lg">{siteInfo.name}</span>
          </div>
          <p className="text-ink-300 text-sm max-w-sm leading-relaxed">
            Media informasi resmi Padukuhan Plupuh — padukuhan asri di lereng Gunung Merapi
            dengan masyarakat yang guyub dan potensi pertanian, UMKM, serta wisata yang terus berkembang.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { Icon: FaInstagram, href: siteInfo.instagram, label: "Instagram Jagad Bambu" },
              { Icon: FaTiktok, href: siteInfo.tiktok, label: "TikTok Jagad Bambu" },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                aria-label={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-tosca-600 transition-colors duration-300"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Navigasi Cepat</h4>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-ink-300 hover:text-tosca-300 text-sm transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Alamat</h4>
          <p className="text-ink-300 text-sm leading-relaxed">{siteInfo.address}</p>
        </div>
      </div>

      <div className="container-app border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-ink-400 text-xs text-center md:text-left">
          © {new Date().getFullYear()} {siteInfo.name}. Dibuat sebagai program kerja KKN.
        </p>
        <p className="text-ink-400 text-xs">Dikembangkan dengan 💚 untuk Digital Village</p>
      </div>
    </footer>
  );
}
