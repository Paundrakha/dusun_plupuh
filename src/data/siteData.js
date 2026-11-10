import { ringkasan } from "./kependudukan";

const imgJagad = "/images/jagad.jpeg";
const imgMinggupon = "/images/minggupon.jpeg";
const imgGotong = "/images/gotong.jpeg";
const imgPosyandu = "/images/posyandu.jpeg";
const imgPkk = "/images/pkk.jpeg";
const imgKarang = "/images/karang.jpeg";
const imgkkn = "/images/kkn.jpeg";
const imgKarang1 = "/images/karang1.jpeg";
const imgKarang2 = "/images/karang2.jpeg";
const imgtarian3 = "/images/tarian3.jpeg";
const imgtarian2 = "/images/tarian2.jpeg";
const imgPosyandu2 = "/images/posyandu2.jpeg";
const imgPosyandu3 = "/images/posyandu3.jpeg";
const imgsesepuh = "/images/sesepuh.jpeg";
const imggamelan = "/images/gamelan.jpeg";
const imgtujuh2 = "/images/tujuh2.jpeg";
const imgPanti = "/images/Panti.jpeg";
const imgmakanan5 = "/images/makanan5.jpeg";
const imgmakanan6 = "/images/makanan6.jpeg";
const imgmakanan7 = "/images/makanan7.jpeg";
const imgmakanan3 = "/images/makanan3.jpeg";
const imgmusahwara = "/images/musahwara.jpeg";
const imgsenam1 = "/images/senam1.jpeg";
const imgsenam2 = "/images/senam2.jpeg";
const imgtujuh3 = "/images/tujuh3.jpeg";
const imgpak = "/images/pak.jpeg";
const imglomba2 = "/images/lomba2.jpeg";
const imglomba1 = "/images/lomba1.jpeg";
const imglomba3 = "/images/lomba3.jpeg";
const imgtpa = "/images/tpa.jpeg";
const imgpuspa = "/images/puspa.jpeg";
const imgkwt = "/images/kwt.jpeg";
const imgkwt1 = "/images/kwt1.jpeg";
const imgposyandu1 = "/images/posyandu1.jpeg";
const imgbalita1 = "/images/balita1.jpeg";
const imgbalita = "/images/balita.jpeg";
const imgular = "/images/ular.jpeg";
const imgsapi = "/images/sapi.jpeg";
const imgmercu1 = "/images/mercu1.jpeg";
const imgmercu2 = "/images/mercu2.jpeg";
const imgmercu3 = "/images/mercu3.jpeg";
const imgsenam = "/images/senam.jpeg";
const imgsapi2 = "/images/sapi2.jpeg";
const imghadia = "/images/hadia.jpeg";
const imgmahasiswa = "/images/mahasiswa.jpeg";
const imgta3 = "/images/ta3.jpeg";


const imgWisata1 = "/images/wisata1.jpeg";
const imgWisata2 = "/images/wisata2.jpeg";
const imgWisata3 = "/images/wisata3.jpeg";
const imgWisata4 = "/images/wisata4.jpeg";


export const siteInfo = {
  name: "Padukuhan Plupuh",
  tagline: "Padukuhan Berbudaya di Lereng Merapi, Rumah Wisata Konservasi Bambu Nusantara",
  address: "Plupuh, Wukirsari, Kec. Cangkringan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55583",
  plusCode: "9C4V+XQ7 Plupuh, Wukirsari, Kec. Cangkringan, Kabupaten Sleman, DIY 55583",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=9C4V%2BXQ7+Plupuh,+Wukirsari,+Kec.+Cangkringan,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta+55583&output=embed",
  mapsDirectionUrl:
    "https://www.google.com/maps/search/?api=1&query=Padukuhan+Plupuh%2C+Wukirsari%2C+Cangkringan%2C+Sleman%2C+Yogyakarta&utm_source=chatgpt.com",
  phone: "+62 813-3768-6088", // placeholder — ganti dengan nomor kontak resmi padukuhan
  whatsapp: "+62 813-3768-6088", // placeholder
  instagram: "https://instagram.com/wisata_desa_jagadbambu_",
  tiktok: "https://tiktok.com/@wisata_konservasi_bambu_plupuh", 
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Profil", href: "/#profil" },
  { label: "Potensi", href: "/#potensi" },
  { label: "Wisata", href: "/#wisata" },
  { label: "Berita", href: "/#berita" },
  { label: "Galeri", href: "/#galeri" },
  { label: "Statistik", href: "/statistik" },
  { label: "Lokasi", href: "/#lokasi" },
  { label: "Kontak", href: "/#kontak" },
];

export const profilData = {
  sejarah:
    "Padukuhan Plupuh berada di Kalurahan Wukirsari, Kapanewon Cangkringan, di lereng selatan Gunung Merapi. Sejak dahulu Plupuh dikenal sebagai penghasil aneka peralatan rumah tangga berbahan bambu dan batu, dengan rumpun bambu yang tumbuh subur di hampir setiap sudut dusun. Mayoritas warga bekerja sebagai buruh tani, buruh, dan sebagian sebagai pegawai negeri. Nilai gotong royong masih sangat kuat dijaga hingga kini.",
  visi:
    "Menjadikan Padukuhan Plupuh sebagai kawasan yang berbudaya, guyub, dan sejahtera melalui pengembangan wisata konservasi bambu berbasis kearifan lokal dan gotong royong masyarakat.",
  misi: [
    "Mengembangkan Jagad Bambu Nusantara sebagai wisata konservasi sekaligus penggerak ekonomi warga.",
    "Melestarikan gotong royong, budaya Jawa, dan tradisi selapanan Minggu Pon.",
    "Memberdayakan kelompok tani, kelompok wanita tani, dan pelaku UMKM lokal.",
    "Menjaga kesehatan masyarakat melalui posyandu lansia dan balita yang rutin.",
    "Mendukung kegiatan pemuda melalui Karang Taruna serta kepedulian sosial bersama Panti Asuhan Al Hikmah Sejalan.",
  ],
  geografis: {
    letak: "Lereng selatan Gunung Merapi, Kalurahan Wukirsari, Kapanewon Cangkringan, Kabupaten Sleman.",
    luasWilayah: "23 Ha", // placeholder — belum ada data pasti dari survei
    ketinggian: "Kawasan lereng Merapi",
  },
  demografi: {
    jumlahWarga: ringkasan.jumlahPenduduk, // sumber: src/data/kependudukan.js
  },
  timeline: [
    {
      year: "Sejak Dahulu",
      title: "Warisan Kerajinan Bambu & Batu",
      desc: "Plupuh dikenal turun-temurun sebagai penghasil kerajinan rumah tangga berbahan bambu dan batu di lereng Merapi.",
    },
    {
      year: "14 Feb 2026",
      title: "Doa Bersama Warga",
      desc: "Warga Plupuh berkumpul di balai dusun menggelar doa bersama menandai awal pembangunan wisata desa berbasis bambu.",
    },
    {
      year: "15 Feb 2026",
      title: "Peresmian Jagad Bambu Nusantara",
      desc: "Bupati Sleman meresmikan destinasi wisata konservasi bambu Jagad Bambu Nusantara, digagas bersama mahasiswa STIE Pariwisata API Yogyakarta.",
    },
    {
      year: "26 Apr 2026",
      title: "Minggu Pon Pertama",
      desc: "Pasar rakyat selapanan Minggu Pon pertama digelar, menampilkan kuliner, kerajinan, dan pentas seni warga.",
    },
    {
      year: "22 Maret 2026",
      title: "Minggu PON Pertama ",
      desc: "Minggu Pon pertama dilaksanakan di Padukuhan Plupuh, menghadirkan pasar rakyat, kuliner, kerajinan, serta pentas seni dan budaya warga..",
    },
  ],
};

export const statistikData = [
  { id: "warga", label: "Jumlah Warga", value: ringkasan.jumlahPenduduk, suffix: "" },
  { id: "rt", label: "Jumlah RT", value: 4, suffix: "" }, // placeholder — sesuaikan dengan data pasti
  { id: "luas", label: "Luas Wilayah", value: 23, suffix: " Ha" }, // placeholder
  { id: "tani", label: "Kelompok Wanita Tani & PKK", value: 2, suffix: "" },
  { id: "taruna", label: "Karang Taruna (Puspa Taruna)", value: 60, suffix: "" },
];

export const potensiData = [
  {
    id: "pertanian",
    icon: "GiWheat",
    title: "Pertanian",
    desc: "Sebagian besar warga Plupuh bekerja sebagai buruh tani, menggarap lahan pertanian di lereng subur Gunung Merapi.",
  },
  {
    id: "wisata-bambu",
    icon: "FaTree",
    title: "Wisata Konservasi Bambu",
    desc: "Jagad Bambu Nusantara — destinasi wisata konservasi bambu yang diresmikan Bupati Sleman, berfungsi sebagai benteng ekologis sekaligus ruang budaya.",
  },
  {
    id: "umkm",
    icon: "MdStorefront",
    title: "UMKM & Pasar Rakyat",
    desc: "Pasar selapanan Minggu Pon menghadirkan kuliner khas seperti soto rebung, bubur rebung, resoles rebung, serta produk UMKM warga.",
  },
  {
    id: "budaya",
    icon: "GiThreeFriends",
    title: "Budaya & Tradisi Jawa",
    desc: "Busana adat Jawa dan bahasa krama inggil masih dilestarikan warga saat menyambut wisatawan di Jagad Bambu Nusantara.",
  },
  {
    id: "tani-wanita",
    icon: "FaSeedling",
    title: "Kelompok Wanita Tani & PKK",
    desc: "Kelompok wanita Tani membudidayakan talas sebagai makanan, didukung ibu-ibu PKK yang aktif dengan sekitar 50 anggota.",
  },
  {
    id: "sosial",
    icon: "FaHandsHelping",
    title: "Sosial & Kepedulian",
    desc: "Kehadiran Panti Asuhan Al Hikmah Sejalan serta posyandu lansia dan balita rutin mencerminkan kepedulian sosial warga Plupuh.",
  },
];

export const wisataData = {
  nama: "Jagad Bambu Nusantara",
  tagline: "Wisata Konservasi Bambu di Jantung Padukuhan Plupuh",
  deskripsi:
    "Jagad Bambu Nusantara adalah destinasi wisata konservasi bambu yang diresmikan Bupati Sleman pada Februari 2026. Digagas oleh Dosen dan mahasiswa STIE Pariwisata API Yogyakarta bersama warga dan budayawan Sleman, kawasan ini menyulap bagian tengah dusun menjadi pasar UMKM berkarakter bambu, lengkap dengan museum agraris dan kebun bambu. Selain sebagai ruang wisata, bambu di kawasan ini berperan penting untuk konservasi tanah dan air, mencegah erosi, serta menjadi peringatan dini bencana di lereng Merapi.",
  keunikan: [
    {
      title: "Pasar Selapanan Minggu Pon",
      desc: "Digelar setiap 35 hari sekali (pasaran Jawa), diawali senam pagi bersama, dilanjutkan pasar rakyat dengan kuliner khas, kerajinan, dan pentas seni di panggung terbuka.",
    },
    {
      title: "Busana & Bahasa Adat",
      desc: "Pengelola dan warga mengenakan busana adat Jawa serta menyapa wisatawan dengan bahasa , menghadirkan suasana menyambut layaknya tamu hajatan.",
    },
    {
      title: "Kuliner Khas",
      desc: "Soto rebung, bubur rebung, resoles rebung, dan UMKM warga  menjadi sajian favorit yang sering habis terjual sebelum siang.",
    },
    {
      title: "Konservasi Ekologis",
      desc: "Rumpun bambu berfungsi menahan erosi, menyerap air, dan menjaga keseimbangan alam di lereng Gunung Merapi.",
    },
  ],
  images: [
    "https://images.unsplash.com/photo-1768593049340-6e50351b4b2f?w=1000&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSNDQBT4TGKuypYOZniYlV8DeZaiiNnwZmTO2n9Hb1A&s=10",
    "https://www.catrawarta.com/wp-content/uploads/2026/02/Img-20260216-wa0001.jpg",

    imgWisata1,
    imgWisata2,
    imgWisata3,
    imgWisata4,
  ],
};


export const beritaData = [
  {
    id: 1,
    kategori: "Wisata Bambu",
    judul: "Peresmian Jagad Bambu Nusantara oleh Bupati Sleman",
    tanggal: "15 Februari 2026",
    ringkasan:
      "Bupati Sleman meresmikan destinasi wisata konservasi bambu Jagad Bambu Nusantara di Padukuhan Plupuh, ditandai penandatanganan prasasti dan penanaman bibit bambu bersama warga.",
    foto: imgJagad,
  },
  {
    id: 2,
    kategori: "Wisata Bambu",
    judul: "Minggu Pon: Pasar Rakyat Meriah di Jagad Bambu Nusantara",
    tanggal: "31 Mei 2026",
    ringkasan:
      "Pasar selapanan Minggu Pon kembali digelar dengan sambutan busana adat Jawa, kuliner khas, dan pentas seni yang menarik banyak pengunjung.",
    foto: imgMinggupon,
  },
  {
    id: 3,
    kategori: "Gotong Royong",
    judul: "Gotong Royong Rutin Fokus Rawat Kawasan Wisata Bambu",
    tanggal: "26 Juli 2026",
    ringkasan:
      "Warga bergotong royong setiap minggu, kini difokuskan merawat dan mengembangkan kawasan wisata Jagad Bambu Nusantara.",
    foto: imgGotong,
  },
  {
    id: 4,
    kategori: "Posyandu",
    judul: "Posyandu Lansia dan Balita Digelar Rutin Setiap Bulan",
    tanggal: "15 Juli 2026",
    ringkasan:
      "Kegiatan posyandu lansia dan balita berlangsung rutin setiap tanggal 15, memastikan kesehatan warga terpantau baik.",
    foto: imgPosyandu,
  },
  {
    id: 5,
    kategori: "PKK",
    judul: "Ibu-Ibu PKK Plupuh Aktif Bergerak untuk Padukuhan",
    tanggal: "20 Juli 2026",
    ringkasan:
      "Dengan sekitar 50 anggota aktif, ibu-ibu PKK turut mendukung berbagai kegiatan sosial dan pengembangan wisata bambu di padukuhan.",
    foto: imgPkk,
  },
  {
    id: 6,
    kategori: "Karang Taruna",
    judul: "Karang Taruna Plupuh Puspa Taruna Gencar Gelar Rapat Rutin",
    tanggal: "10 Juli 2026",
    ringkasan:
      "Beranggotakan sekitar 60 pemuda-pemudi, Karang Taruna Plupuh rutin mengadakan rapat dua kali sebulan untuk merancang kegiatan kepemudaan.",
    foto: imgKarang,
  },
];

export const galeriData = [
  { id: 1, kategori: "Wisata Bambu", src: imgJagad, caption: " Jagad Bambu Nusantara" },
  { id: 2, kategori: "Pasar Minggu Pon", src: imgMinggupon, caption: "Tarian Tradisional Minggu Pon" },
  { id: 3, kategori: "Kegiatan Warga", src: imgGotong, caption: "Gotong royong warga" },
  { id: 4, kategori: "Kegiatan Warga", src: imgPosyandu, caption: "Posyandu lansia dan balita" },
  { id: 5, kategori: "Kegiatan Warga", src: imgPkk, caption: "Kegiatan ibu-ibu PKK" },
  { id: 6, kategori: "Kegiatan Warga", src: imgKarang, caption: "Puspa Taruna (Karang Taruna)" },
  { id: 7, kategori: "Kegiatan Warga", src: imgkkn, caption: "Mahasiswa KKN & Puspa Taruna" },
  { id: 8, kategori: "Kegiatan Warga", src: imgKarang1, caption: "Puspa Taruna" },
  { id: 9, kategori: "Kegiatan Warga", src: imgKarang2, caption: "Puspa Taruna" },
  { id: 10, kategori: "Wisata Bambu", src: imgtarian3, caption: "Tarian Tradisional Minggu Pon" },
  { id: 11, kategori: "Wisata Bambu", src: imgtarian2, caption: "Tarian Tradisional Minggu Pon" },
  { id: 12, kategori: "Kegiatan Warga", src: imgPosyandu2, caption: "Posyandu lansia" },
  { id: 13, kategori: "Kegiatan Warga", src: imgPosyandu3, caption: "Posyandu Balita" },
  { id: 14, kategori: "Kegiatan Warga", src: imgsesepuh, caption: "Sesepuh Desa" },
  { id: 15, kategori: "Kegiatan Warga", src: imggamelan, caption: "Musik Tradisional " },
  { id: 16, kategori: "Kegiatan Warga", src: imgtujuh2, caption: "Mahasiswa/i KKN UNISA & UMBY" },
  { id: 17, kategori: "Kegiatan Warga", src: imgPanti, caption: "Panti Asuhan Al-Hikmah Sejalan" },
  { id: 18, kategori: "Kegiatan Warga", src: imgmakanan5, caption: "Makana & snack" },
  { id: 19, kategori: "Kegiatan Warga", src: imgmakanan6, caption: "Makana & snack" },
  { id: 20, kategori: "Kegiatan Warga", src: imgmakanan7, caption: "Makana & snack" },
  { id: 21, kategori: "Kegiatan Warga", src: imgmakanan3, caption: "Makana & snack" },
  { id: 22, kategori: "Kegiatan Warga", src: imgmusahwara, caption: "Musyawarah" },
  { id: 23, kategori: "Kegiatan Warga", src: imgsenam1, caption: "Senam PagI" },
  { id: 24, kategori: "Kegiatan Warga", src: imgsenam2, caption: "Senam Pagi" },
  { id: 25, kategori: "Kegiatan Warga", src: imgtujuh3, caption: "" },
  { id: 26, kategori: "Kegiatan Warga", src: imgpak, caption: "Foto Bersama Pak Dukuh" },
  { id: 27, kategori: "Kegiatan Warga", src: imglomba2, caption: "Lomba 17 Agustus" },
  { id: 28, kategori: "Kegiatan Warga", src: imglomba1, caption: "Lomba 17 Agustus" },
  { id: 29, kategori: "Kegiatan Warga", src: imglomba3, caption: "Lomba 17 Agustus" },
  { id: 30, kategori: "Kegiatan Warga", src: imgtpa, caption: "TPA AL-Jannah" },
  { id: 31, kategori: "Kegiatan Warga", src: imgpuspa, caption: "Puspa Taruna & Mahhasiswa/i Plupuh" },
  { id: 32, kategori: "Kegiatan Warga", src: imgkwt, caption: "Kelompok Wanita TAni (KWT)" },
  { id: 33, kategori: "Kegiatan Warga", src: imgkwt1, caption: "Kelompok Wanita TAni (KWT)" },
  { id: 34, kategori: "Kegiatan Warga", src: imgposyandu1, caption: "Posyandu Lansia" },
  { id: 35, kategori: "Kegiatan Warga", src: imgbalita1, caption: "Posyandu Balita" },
  { id: 36, kategori: "Kegiatan Warga", src: imgbalita, caption: "Posyandu Balita" },
  { id: 37, kategori: "Kegiatan Warga", src: imgular, caption: "" },
  { id: 38, kategori: "Kegiatan Warga", src: imgsapi, caption: "Gerobak Sapi" },
  { id: 39, kategori: "Kegiatan Warga", src: imgmercu1, caption: "Mahasiswa/i KKN UMBY" },
  { id: 40, kategori: "Kegiatan Warga", src: imgmercu2, caption: "Mahasiswa/i KKN UMBY" },
  { id: 41, kategori: "Kegiatan Warga", src: imgmercu3, caption: "Mahasiswa/i KKN UMBY" },
  { id: 42, kategori: "Kegiatan Warga", src: imgsenam, caption: "Senam Bersama Ibu-ibu" },
  { id: 43, kategori: "Kegiatan Warga", src: imgsapi2, caption: "Gerobak Sapi" },
  { id: 44, kategori: "Kegiatan Warga", src: imghadia, caption: "" },
  { id: 45, kategori: "Kegiatan Warga", src: imgmahasiswa, caption: "Mahasiswa/i KKN UNISA " },
    { id: 46, kategori: "Kegiatan Warga", src: imgta3, caption: "Makanan & snack" },
];