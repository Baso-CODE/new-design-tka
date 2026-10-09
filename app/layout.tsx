import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import { GoogleAnalytics } from "@next/third-parties/google";
import FloatingCTA from "./components/floatingCTA";
import FooterEduMatrix from "./components/footerEdumatrix";
import BottomNavigationBarTKA from "./components/navbar/BottomNavigationBarOSN";
import { navLinks } from "./components/navbar/NavLink";
import ResponsiveNav from "./components/navbar/ResponsiveNav";
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
  process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `Bimbel & Les Privat TKA SD SMP SMA | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description:
    "Bimbel dan les privat Tes Kemampuan Akademik (TKA) untuk SD, SMP, dan SMA. Pilihan belajar online dan tatap muka dengan pendampingan tutor.",
  verification: {
    google: "-qNN7ezuQ_P3U58abDzZCeBdTV5HFVoGKQAJkdAgq9A",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
        <ResponsiveNav />
        <main>{children}</main>
        <FloatingCTA />
        <BottomNavigationBarTKA navLinksData={navLinks} />
        <FooterEduMatrix />
        <GoogleAnalytics gaId="G-CBBM7ZS7D7" />
      </body>
    </html>
  );
}
