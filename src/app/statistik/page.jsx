import KependudukanDashboard from "@/components/statistik/KependudukanDashboard";

export const metadata = {
  title: "Statistik Kependudukan",
  description:
    "Statistik kependudukan Padukuhan Plupuh: jumlah penduduk, kepala keluarga, jenis kelamin, kelompok umur, pendidikan, pekerjaan, agama, dan status perkawinan.",
};

export default function StatistikPage() {
  return (
    <>
      <header className="relative bg-mountain-gradient pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%)]" />
        <div className="container-app relative z-10 text-center">
          <span className="uppercase tracking-[0.25em] text-xs md:text-sm font-semibold text-tosca-100">
            Data Padukuhan
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-3">Statistik Kependudukan</h1>
          <p className="text-tosca-100/90 mt-4 max-w-2xl mx-auto">
            Gambaran jumlah dan komposisi penduduk Padukuhan Plupuh.
          </p>
        </div>
      </header>
      <div className="bg-section-gradient transition-colors duration-300">
        <KependudukanDashboard />
      </div>
    </>
  );
}
