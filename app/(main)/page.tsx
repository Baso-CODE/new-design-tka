import { Metadata } from "next";
import Accordion from "../components/faq/Accordion";
import FomoTicker from "../components/fomoTicker";
import AsalSekolahSiswaEdumatrix from "../components/home/asalSekolahSiswaEdumatrix";
import Contact from "../components/home/contact";
import Gallery from "../components/home/gallery";
import Hero from "../components/home/hero";
import JumlahSiswa from "../components/home/jumlahSiswa";
import ListKota from "../components/home/lisKota";
import MengapaHarusEdumatrix from "../components/home/mengapaHarusEdumatrix";
import PaketBelajarOSN from "../components/home/paketBelajarOSN";
import Pengajar from "../components/home/pengajar";
import Pilihan from "../components/home/pilihan";
import Program from "../components/home/programBelajar";
import SekolahSiswa from "../components/home/sekolahSiswa";
import TingkatPendidikan from "../components/home/tingkatPendidikan";
import TKAPreparation from "../components/home/tkaPreparation";
import MediaMassa from "../components/mediaMassa/mediaMassa";
import Promo from "../components/promo";
import SliderDesktop from "../components/slider/sliderDescktop";
import SliderMobile from "../components/slider/sliderMobile";
import ImpactStatisticsOSN from "../components/statisticOSNEdumatrix/statisticOSNEDM";
import YouTubeShortEmbed from "../components/YouTubeShortEmbed";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

const ogImage = `${baseUrl}/images/tka/hero-tka.webp`;
const canonicalUrl = `${baseUrl}/`;
const pageTitle = `📚 Bimbel & Les Privat TKA SD SMP SMA Terbaik | ${siteName}`;
const pageDescription =
  "Kursus Les Privat TKA Terbaik, Dibimbing GURU BERPENGALAMAN, Persiapan TKA SD, SMP & SMA, Laporan Progres Belajar ✍️ Daftar? Segera kunjungi situs kami...";
const pageKeywords = `bimbel TKA, les privat TKA, Tes Kemampuan Akademik, bimbingan belajar TKA SD, TKA SMP, TKA SMA, persiapan TKA, masuk sekolah unggulan, guru privat TKA, materi TKA, ${siteName}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: pageTitle,

  description: pageDescription,

  keywords: pageKeywords,

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: siteName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage],
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <JumlahSiswa />
      <TKAPreparation />
      <Program />
      <YouTubeShortEmbed />
      <PaketBelajarOSN />
      <SliderMobile />
      <SliderDesktop />
      <TingkatPendidikan />
      <Pilihan />
      <MengapaHarusEdumatrix />
      <Pengajar />
      <Gallery />
      <AsalSekolahSiswaEdumatrix />
      <SekolahSiswa />
      <ListKota />
      <ImpactStatisticsOSN />
      <Accordion />
      <Promo />
      <Contact />
      <MediaMassa />
      <FomoTicker />
    </div>
  );
}
