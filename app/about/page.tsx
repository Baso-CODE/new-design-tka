import HeroAbout from "@/app/components/about/heroAbout";
import LearningMethod from "@/app/components/learnhinMethod/learningMethod";
import MediaMassa from "@/app/components/mediaMassa/mediaMassa";
import ProfessionalTeam from "@/app/components/profesionalTeam";
import Promo from "@/app/components/promo";
import type { Metadata } from "next";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com"
).replace(/\/+$/, "");

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

const title = `Tentang Kami - Bimbel & Les Privat TKA`;
const description =
  "Kenali Edumatrix Indonesia, penyedia bimbel dan les privat TKA untuk SD, SMP, dan SMA. Pelajari metode belajar serta tim pengajar kami.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${baseUrl}/about`,
    siteName,
    title: `${title} | ${siteName}`,
    description,
    images: [
      {
        url: `${baseUrl}/images/tka/hero-tka.webp`,
        width: 1200,
        height: 630,
        alt: `Tentang ${siteName}`,
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

export default function AboutPage() {
  return (
    <>
      <HeroAbout />
      <LearningMethod />
      <ProfessionalTeam />
      <Promo />
      <MediaMassa />
    </>
  );
}
