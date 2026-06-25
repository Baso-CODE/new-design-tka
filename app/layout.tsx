import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Honk,
  Oswald,
  Poppins,
  Roboto,
} from "next/font/google";
import localFont from "next/font/local";

import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

// Font Google
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const honk = Honk({
  variable: "--font-honk",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Font lokal
const superPencil = localFont({
  src: "./assets/font/Super-Pencil.ttf",
  variable: "--font-super-pencil",
  display: "swap",
});

// export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Les Privat Olimpiade • OSN IMO ISO Unggulan | Edumatrix",
  description:
    "Les Privat Olimpiade OSN untuk SD–SMA. Dibimbing guru berpengalaman & peraih prestasi nasional. Belajar terarah, progres terpantau. Konsultasi gratis sekarang.",
  verification: {
    google: "Cv9Bh_f2VODnu2TvfhGjaLfiwcD2r3pX9HbdbUanEBo",
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bimbeledumatrix.com",
    siteName: "Bimbel Alfa Privat",
    title: "Les Privat Olimpiade • OSN IMO ISO Unggulan | Edumatrix",
    description:
      "Les Privat Olimpiade OSN untuk SD–SMA. Dibimbing guru berpengalaman & peraih prestasi nasional. Belajar terarah, progres terpantau. Konsultasi gratis sekarang.",
    images: [
      {
        url: "https://bimbeledumatrix.com/images/images-cta.webp",
        width: 1200,
        height: 630,
        alt: "Les Privat Alfa Privat",
      },
    ],
  },

  // TWITTER META
  twitter: {
    card: "summary_large_image",
    site: "@alfaprivat",
    title: "Les Privat Olimpiade • OSN IMO ISO Unggulan | Edumatrix",
    description:
      "Les Privat Olimpiade OSN untuk SD–SMA. Dibimbing guru berpengalaman & peraih prestasi nasional. Belajar terarah, progres terpantau. Konsultasi gratis sekarang.",
    images: ["https://bimbeledumatrix.com/images/images-cta.webp"],
  },

  alternates: {
    canonical: "https://bimbeledumatrix.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${roboto.variable} ${oswald.variable} ${honk.variable} ${superPencil.variable} antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-70MQQHELFM" />
    </html>
  );
}
