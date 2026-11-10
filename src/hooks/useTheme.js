"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "plupuh-theme";

// Di server tema tidak diketahui, jadi state awal selalu "light" agar HTML server
// dan klien sama (tidak ada hydration mismatch). Kelas "dark" pada <html> sudah
// dipasang lebih awal oleh skrip di layout.jsx, sehingga tidak ada kedipan warna.
export default function useTheme() {
  const [theme, setTheme] = useState("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let initial = "light";
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "dark" || stored === "light") {
        initial = stored;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        initial = "dark";
      }
    } catch {
      // localStorage bisa tidak tersedia (mode privat); pakai default.
    }
    setTheme(initial);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // abaikan
    }
  }, [theme, ready]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
