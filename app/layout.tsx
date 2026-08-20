import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// Font lokal
const superPencil = localFont({
  src: "./assets/font/Super-Pencil.ttf",
  variable: "--font-super-pencil",
  display: "swap",
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com/";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `Bimbel & Les Privat TKA SD SMP SMA Terbaik | ${siteName}`,
  description:
    "Les Privat dan Bimbel Tes Kemampuan Akademik (TKA) untuk SD, SMP & SMA. Dibimbing mentor berpengalaman untuk menembus sekolah unggulan. Konsultasi gratis sekarang!",
  verification: {
    google: "-qNN7ezuQ_P3U58abDzZCeBdTV5HFVoGKQAJkdAgq9A",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    siteName: siteName,
    title: `Bimbel & Les Privat TKA SD SMP SMA Terbaik | ${siteName}`,
    description:
      "Les Privat dan Bimbel Tes Kemampuan Akademik (TKA) untuk SD, SMP & SMA. Dibimbing mentor berpengalaman untuk menembus sekolah unggulan. Konsultasi gratis sekarang!",
    images: [
      {
        url: `${baseUrl}/images/tka/hero-tka.webp`,
        width: 1200,
        height: 630,
        alt: `Les Privat TKA ${siteName}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Bimbel & Les Privat TKA SD SMP SMA Terbaik | ${siteName}`,
    description:
      "Les Privat dan Bimbel Tes Kemampuan Akademik (TKA) untuk SD, SMP & SMA. Dibimbing mentor berpengalaman untuk menembus sekolah unggulan. Konsultasi gratis sekarang!",
    images: [`${baseUrl}/images/tka/hero-tka.webp`],
  },

  alternates: {
    canonical: baseUrl,
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
        className={`${poppins.variable} ${superPencil.variable} font-sans antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-CBBM7ZS7D7" />
      </body>
    </html>
  );
}
