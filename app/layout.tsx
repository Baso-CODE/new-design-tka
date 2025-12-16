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

import FooterEduMatrix from "./components/footerEdumatrix";
import BottomNavigationBarOSN from "./components/navbar/BottomNavigationBarOSN";
import { navLinks } from "./components/navbar/NavLink";
import ResponsiveNav from "./components/navbar/ResponsiveNav";
import "./globals.css";
import Script from "next/script";
import FloatingCTA from "./components/floatingCTA";

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
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Les Privat Olimpiade • OSN IMO ISO Unggulan | Edumatrix",
  description:
    "Kursus Les Privat Olimpiade Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Peraih Lisensi OSN ✔️ Garansi REPORT CARD ✍️ Daftar? Segera kunjungi situs kami...",
  verification: {
    google: "Cv9Bh_f2VODnu2TvfhGjaLfiwcD2r3pX9HbdbUanEBo",
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://edukids.co.id",
    siteName: "Bimbel Alfa Privat",
    title: "Les Privat Olimpiade • OSN IMO ISO Unggulan | Edumatrix",
    description:
      "Kursus Les Privat Olimpiade Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Peraih Lisensi OSN ✔️ Garansi REPORT CARD ✍️ Daftar? Segera kunjungi situs kami...",
    images: [
      {
        url: "https://edukids.co.id/images/image-cta-footer.webp",
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
      "Kursus Les Privat Olimpiade Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Peraih Lisensi OSN ✔️ Garansi REPORT CARD ✍️ Daftar? Segera kunjungi situs kami...",
    images: ["https://edukids.co.id/images/image-cta-footer.webp"],
  },

  alternates: {
    canonical: "https://edukids.co.id",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${roboto.variable} ${oswald.variable} ${honk.variable} ${superPencil.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-70MQQHELFM"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-70MQQHELFM');
          `}
        </Script>
        <ResponsiveNav />
        {children}
        <FloatingCTA />
        <BottomNavigationBarOSN navLinksData={navLinks} />
        <FooterEduMatrix />
      </body>
    </html>
  );
}
