"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    // Smooth scroll untuk tautan anchor pada halaman yang sama.
    // Mendukung "#profil" maupun "/#profil" (tautan Navbar/Footer memakai bentuk ini
    // agar tetap berfungsi dari halaman lain, mis. /statistik).
    const handleAnchorClick = (e) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = e.target.closest?.("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const path = href.slice(0, hashIndex);
      const id = href.slice(hashIndex);
      const samePage = path === "" || path === window.location.pathname;
      if (!samePage || id.length <= 1) return;

      const target = document.querySelector(id);
      if (target) {
        // Fase capture + stopPropagation agar next/link tidak ikut menavigasi/melompat.
        e.preventDefault();
        e.stopPropagation();
        lenis.scrollTo(target, { offset: -80 });
        window.history.pushState(null, "", `${window.location.pathname}${id}`);
      }
    };
    document.addEventListener("click", handleAnchorClick, true);

    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
