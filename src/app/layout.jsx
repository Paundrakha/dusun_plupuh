import { Poppins } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "Padukuhan Plupuh | Padukuhan Asri, Modern, dan Guyub",
    template: "%s | Padukuhan Plupuh",
  },
  description:
    "Website profil resmi Padukuhan Plupuh — informasi profil, potensi, statistik kependudukan, berita, galeri, dan kontak padukuhan.",
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Dijalankan sebelum render pertama agar tema gelap langsung terpasang (tanpa kedipan).
const themeInitScript = `(function(){try{var t=localStorage.getItem("plupuh-theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(t==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
