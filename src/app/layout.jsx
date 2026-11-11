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

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={poppins.variable}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
