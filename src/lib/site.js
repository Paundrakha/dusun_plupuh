// URL publik situs. Atur lewat environment variable NEXT_PUBLIC_SITE_URL
// (mis. di Vercel: Settings → Environment Variables), contoh: https://plupuh.example.id
// Nilai di bawah hanya cadangan; ganti dengan domain asli sebelum deploy.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://padukuhan-plupuh.vercel.app").replace(/\/+$/, "");
