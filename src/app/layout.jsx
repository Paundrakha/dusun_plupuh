import { Poppins } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Padukuhan Plupuh Wukirsari | Cangkringan, Sleman",
    template: "%s | Padukuhan Plupuh",
  },
  description:
    "Website informasi Padukuhan Plupuh, Kalurahan Wukirsari, Kapanewon Cangkringan, Kabupaten Sleman. Temukan profil, potensi wilayah, kegiatan masyarakat, dan wisata Jagad Bambu.",
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
