import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 bg-mountain-gradient">
      <p className="text-tosca-100 font-semibold tracking-[0.25em] text-sm uppercase">Error 404</p>
      <h1 className="text-white font-extrabold text-4xl md:text-6xl mt-3">Halaman tidak ditemukan</h1>
      <p className="text-white/80 mt-4 max-w-md">
        Halaman yang Anda cari tidak ada atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex px-7 py-3.5 rounded-full bg-white text-tosca-700 font-semibold hover:bg-tosca-50 transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
}
