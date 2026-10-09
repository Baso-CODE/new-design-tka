import AllContactCS from "./components/allContactCS";
import HeroContactCS from "./components/heroContactCs";

import type { Metadata } from "next";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com"
).replace(/\/+$/, "");

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

const title = "Hubungi Kami - Konsultasi Bimbel TKA";
const description =
  "Hubungi tim Edumatrix Indonesia untuk konsultasi program bimbel dan les privat TKA SD, SMP, dan SMA. Dapatkan informasi kelas, jadwal, dan pendaftaran.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${baseUrl}/contact`,
    siteName,
    title: `${title} | ${siteName}`,
    description,
    images: [
      {
        url: `${baseUrl}/images/tka/hero-tka.webp`,
        width: 1200,
        height: 630,
        alt: `Hubungi ${siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
    images: [`${baseUrl}/images/tka/hero-tka.webp`],
  },
};

const ContactPage = () => {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-linear-to-b
        from-[#056dc9]
        via-[#0453a8]
        to-[#033790]
      ">
      {/* BACKGROUND LIQUID REFRACTIONS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-52
          top-[10%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#4DA3FF]/18
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-52
          top-[38%]
          h-[540px]
          w-[540px]
          rounded-full
          bg-[#168cff]/14
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-60
          left-[20%]
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#FAAE17]/8
          blur-3xl
        "
      />

      {/* SOFT TOP LIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-48
          w-[75%]
          -translate-x-1/2
          rounded-full
          bg-white/5
          blur-3xl
        "
      />

      <div className="relative z-10">
        <HeroContactCS />
        <AllContactCS />
      </div>
    </main>
  );
};

export default ContactPage;
