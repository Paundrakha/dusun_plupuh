# Website Profil Padukuhan Plupuh (Next.js)

Hasil refaktor dari Vite + React Router ke **Next.js (App Router)**. Tetap statis, tanpa backend, siap deploy ke Vercel.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Langkah wajib sebelum jalan

1. **Salin foto**: pindahkan isi `src/assets/images/*` dari proyek lama ke `public/images/` (nama file harus sama persis).
   Foto yang belum ada otomatis diganti `public/placeholder.svg`.
2. **Isi data kependudukan resmi** di `src/data/kependudukan.js`, lalu ubah `meta.dataResmi` menjadi `true`.

## Struktur

- `src/app/page.jsx` — beranda (semua section lama)
- `src/app/statistik/page.jsx` — halaman **Statistik Kependudukan**
- `src/components/charts/` — grafik (piramida umur, batang horizontal, donat), tanpa library tambahan
- `src/components/statistik/KependudukanDashboard.jsx` — susunan halaman statistik
- `src/data/kependudukan.js` — data penduduk; total & rasio dihitung otomatis
- `src/data/siteData.js` — konten situs lainnya

## Statistik yang ditampilkan

Jumlah penduduk, kepala keluarga, laki-laki, perempuan, komposisi jenis kelamin,
kelompok umur (piramida), pendidikan, pekerjaan, agama, dan status perkawinan.
Di mode development, ketidaksesuaian total antar kategori ditampilkan sebagai peringatan.
