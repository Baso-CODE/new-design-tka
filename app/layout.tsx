import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Poppins,
  Roboto,
  Oswald,
  Honk,
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";
import BottomNavigationBarOSN from "./components/navbar/BottomNavigationBarOSN";
import { navLinks } from "./components/navbar/NavLink";
import ResponsiveNav from "./components/navbar/ResponsiveNav";

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

export const metadata: Metadata = {
  title: "Edumatrix Indonesia",
  description: "Pusat bimbingan belajar dan les privat berkualitas.",
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
        <ResponsiveNav />
        {children}
        <BottomNavigationBarOSN navLinksData={navLinks} />
      </body>
    </html>
  );
}
