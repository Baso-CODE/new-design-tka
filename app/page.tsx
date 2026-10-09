import { Metadata } from "next";
import Accordion from "./components/faq/Accordion";
import AsalSekolahSiswaEdumatrix from "./components/home/asalSekolahSiswaEdumatrix";
import Contact from "./components/home/contact";
import Gallery from "./components/home/gallery";
import GoldenTicketSection from "./components/home/goldenTicket";
import Hero from "./components/home/hero";
import JumlahSiswa from "./components/home/jumlahSiswa";
import ListKota from "./components/home/lisKota";
import MengapaHarusEdumatrix from "./components/home/mengapaHarusEdumatrix";
import PaketBelajarTKA from "./components/home/paketBelajarOSN";
import Pengajar from "./components/home/pengajar";
import Program from "./components/home/programBelajar";
import SuccessStoryGrid from "./components/home/successStoryGrid";
import TestimoniGrid from "./components/home/testimoniNotSlider";
import TKAPreparation from "./components/home/tkaPreparation";
import MediaMassa from "./components/mediaMassa/mediaMassa";
import PilihanMetode from "./components/pilihanMetode";
import SliderDesktop from "./components/slider/sliderDescktop";
import SliderMobile from "./components/slider/sliderMobile";
import ImpactStatisticsOSN from "./components/statisticOSNEdumatrix/statisticOSNEDM";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com"
).replace(/\/+$/, "");

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

const pageTitle = `Bimbel TKA SD SMP SMA & Les Privat Online Offline | ${siteName}`;
const pageDescription =
  "Persiapkan Tes Kemampuan Akademik (TKA) SD, SMP, dan SMA bersama Edumatrix. Tersedia bimbel dan les privat online maupun tatap muka. Konsultasikan program belajar.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "bimbel TKA",
    "les privat TKA",
    "bimbel TKA SD",
    "bimbel TKA SMP",
    "bimbel TKA SMA",
    "les TKA online",
    "bimbel TKA online",
    "persiapan Tes Kemampuan Akademik",
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    siteName,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: `${baseUrl}/images/tka/hero-tka.webp`,
        width: 1200,
        height: 630,
        alt: `Bimbel dan Les Privat TKA ${siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${baseUrl}/images/tka/hero-tka.webp`],
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <JumlahSiswa />
      <Program />
      <TKAPreparation />
      <PaketBelajarTKA />
      <SliderMobile />
      <SliderDesktop />
      {/* <YouTubeShortEmbed /> */}
      {/* 
      <TingkatPendidikan /> */}
      <PilihanMetode />
      <MengapaHarusEdumatrix />
      <Pengajar />
      <Gallery />
      <SuccessStoryGrid />
      <TestimoniGrid />
      <GoldenTicketSection />
      <AsalSekolahSiswaEdumatrix />
      <ListKota />
      {/* <SekolahSiswa /> */}

      <ImpactStatisticsOSN />
      <Accordion />
      {/* <Promo /> */}
      <Contact />
      <MediaMassa />
      {/* <FomoTicker /> */}
    </div>
  );
}
