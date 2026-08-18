import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Font lokal
const superPencil = localFont({
  src: "./assets/font/Super-Pencil.ttf",
  variable: "--font-super-pencil",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Bimbel & Les Privat TKA SD SMP SMA Terbaik | Edumatrix Indonesia",
  description:
    "Les Privat dan Bimbel Tes Kemampuan Akademik (TKA) untuk SD, SMP & SMA. Dibimbing mentor berpengalaman untuk menembus sekolah unggulan. Konsultasi gratis sekarang!",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://les-tka.bimbeledumatrix.com",
    siteName: "Edumatrix Indonesia",
    title: "Bimbel & Les Privat TKA SD SMP SMA Terbaik | Edumatrix Indonesia",
    description:
      "Les Privat dan Bimbel Tes Kemampuan Akademik (TKA) untuk SD, SMP & SMA. Dibimbing mentor berpengalaman untuk menembus sekolah unggulan. Konsultasi gratis sekarang!",
    images: [
      {
        url: "https://les-tka.bimbeledumatrix.com/images/tka/hero-tka.png",
        width: 1200,
        height: 630,
        alt: "Les Privat TKA Edumatrix Indonesia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bimbel & Les Privat TKA SD SMP SMA Terbaik | Edumatrix Indonesia",
    description:
      "Les Privat dan Bimbel Tes Kemampuan Akademik (TKA) untuk SD, SMP & SMA. Dibimbing mentor berpengalaman untuk menembus sekolah unggulan. Konsultasi gratis sekarang!",
    images: ["https://les-tka.bimbeledumatrix.com/images/tka/hero-tka.png"],
  },

  alternates: {
    canonical: "https://les-tka.bimbeledumatrix.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-W6LLEWHJHV" />
      </body>
    </html>
  );
}
