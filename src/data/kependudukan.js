// =========================================================
// DATA KEPENDUDUKAN PADUKUHAN PLUPUH
//
// Sumber: "Rekapitulasi Data Kependudukan Padukuhan Plupuh",
// Kalurahan Wukirsari, per tanggal 2 September 2025
// (file Rekapitulasi_Data_Kependudukan_Plupuh.xlsx).
//
// Setiap baris ditulis sebagai row(label, laki-laki, perempuan)
// agar mudah dicocokkan dengan spreadsheet.
// =========================================================

export const meta = {
  periode: "per 2 September 2025",
  sumber: "Rekapitulasi Data Kependudukan Kalurahan Wukirsari",
  dataResmi: true, // jika false, halaman menampilkan catatan "data contoh"
};

const row = (label, laki, perempuan) => ({ label, laki, perempuan, jumlah: laki + perempuan });
const sum = (arr, key = "jumlah") => arr.reduce((acc, item) => acc + item[key], 0);

// ---------- Ringkasan ----------
export const jumlahLaki = 301;
export const jumlahPerempuan = 315;
export const jumlahPenduduk = jumlahLaki + jumlahPerempuan; // 616

// Kepala Keluarga: 169 laki-laki + 45 perempuan
export const kkLaki = 169;
export const kkPerempuan = 45;
export const jumlahKK = kkLaki + kkPerempuan; // 214

// ---------- Kelompok umur ("Penggolongan Menurut Usia 1") ----------
export const kelompokUmur = [
  row("0–6", 23, 21),
  row("7–12", 32, 24),
  row("13–18", 38, 43),
  row("19–24", 25, 23),
  row("25–55", 132, 139),
  row("56–79", 49, 55),
  row("80+", 2, 8),
];

// ---------- Tingkat pendidikan ----------
export const pendidikan = [
  row("Belum / Tidak Sekolah", 35, 37),
  row("Belum Tamat SD", 42, 41),
  row("Lulus SD", 27, 50),
  row("Lulus SLTP", 41, 41),
  row("Lulus SLTA", 122, 105),
  row("Lulus D1 / D2", 5, 2),
  row("Lulus D3", 2, 7),
  row("Lulus S1", 26, 30),
  row("Strata II (S2)", 0, 1),
  row("Strata III (S3)", 0, 0),
];

// ---------- Jenis pekerjaan (hanya yang jumlahnya > 0) ----------
export const pekerjaanLengkap = [
  row("Pelajar / Mahasiswa", 75, 74),
  row("Mengurus Rumah Tangga", 0, 95),
  row("Belum / Tidak Bekerja", 42, 44),
  row("Karyawan Swasta", 46, 25),
  row("Buruh Harian Lepas", 42, 11),
  row("Petani / Pekebun", 20, 22),
  row("Wiraswasta", 28, 12),
  row("Pegawai Negeri Sipil (PNS)", 11, 8),
  row("Kepolisian RI (Polri)", 9, 2),
  row("Pensiunan", 7, 3),
  row("Buruh Tani / Perkebunan", 3, 6),
  row("Guru", 1, 6),
  row("Karyawan Honorer", 3, 2),
  row("Sopir", 4, 0),
  row("Pedagang", 2, 1),
  row("Perangkat Desa", 1, 0),
  row("Tentara Nasional Indonesia (TNI)", 1, 0),
  row("Tukang Batu", 1, 0),
  row("Tukang Kayu", 1, 0),
  row("Karyawan BUMN", 1, 0),
  row("Pengacara", 0, 1),
  row("Peneliti", 0, 1),
];

// Grafik hanya menampilkan 10 pekerjaan terbanyak; sisanya digabung ke "Lainnya".
const TOP_PEKERJAAN = 10;
const urut = [...pekerjaanLengkap].sort((a, b) => b.jumlah - a.jumlah);
const sisa = urut.slice(TOP_PEKERJAAN);
export const pekerjaan = [
  ...urut.slice(0, TOP_PEKERJAAN),
  { label: `Lainnya (${sisa.length} jenis)`, jumlah: sum(sisa) },
];

// ---------- Agama ----------
export const agama = [
  row("Islam", 301, 315),
  row("Katolik", 0, 0),
  row("Kristen", 0, 0),
  row("Hindu", 0, 0),
  row("Buddha", 0, 0),
  row("Konghucu", 0, 0),
  row("Kepercayaan", 0, 0),
];

// ---------- Status perkawinan ----------
// Kawin = Kawin (46/49) + Kawin Tercatat (101/101) + Kawin Belum Tercatat (6/6)
// Cerai Hidup = "Cerai Tercatat" pada spreadsheet
export const statusPerkawinan = [
  row("Kawin", 46 + 101 + 6, 49 + 101 + 6),
  row("Belum Kawin", 135, 123),
  row("Cerai Mati", 8, 27),
  row("Cerai Hidup", 4, 9),
];

// ---------- Nilai turunan ----------
export const ringkasan = {
  jumlahPenduduk,
  jumlahKK,
  kkLaki,
  kkPerempuan,
  jumlahLaki,
  jumlahPerempuan,
  rasioJenisKelamin: Math.round((jumlahLaki / jumlahPerempuan) * 100), // laki-laki per 100 perempuan
  rataAnggotaKK: Math.round((jumlahPenduduk / jumlahKK) * 10) / 10,
};

// Selisih (total kategori − jumlah penduduk) yang memang sudah ada di spreadsheet sumber.
// Selisih lain di luar daftar ini akan dilaporkan sebagai peringatan (mode development).
const SELISIH_SUMBER = {
  "kelompok umur": -2,
  pendidikan: -2,
  pekerjaan: -5,
  "status perkawinan": -1,
  agama: 0,
};

// Mengembalikan daftar pesan; array kosong berarti tidak ada ketidaksesuaian baru.
export function cekKonsistensi() {
  const masalah = [];
  const kategori = {
    "kelompok umur": kelompokUmur,
    pendidikan,
    pekerjaan: pekerjaanLengkap,
    agama,
    "status perkawinan": statusPerkawinan,
  };
  for (const [nama, data] of Object.entries(kategori)) {
    const selisih = sum(data) - jumlahPenduduk;
    if (selisih !== SELISIH_SUMBER[nama]) {
      masalah.push(`Total ${nama} (${sum(data)}) berbeda ${selisih} dari jumlah penduduk (${jumlahPenduduk}).`);
    }
  }
  if (jumlahKK > jumlahPenduduk) masalah.push("Jumlah KK tidak boleh lebih besar dari jumlah penduduk.");
  return masalah;
}

// Jumlah total tiap kategori (dipakai untuk menghitung persentase di grafik).
export const totalKategori = {
  kelompokUmur: sum(kelompokUmur),
  pendidikan: sum(pendidikan),
  pekerjaan: sum(pekerjaanLengkap),
  agama: sum(agama),
  statusPerkawinan: sum(statusPerkawinan),
};
