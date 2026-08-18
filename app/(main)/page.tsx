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
import ImpactStatisticsOSN from "../components/statisticOSNEdumatrix/statisticOSNEDM";
import YouTubeShortEmbed from "../components/YouTubeShortEmbed";

const ogImage = "https://les-tka.bimbeledumatrix.com/images/images-cta.webp";
const canonicalUrl = "https://les-tka.bimbeledumatrix.com/";
const pageTitle = "📚 Les Privat Olimpiade • OSN IMO ISO Unggulan | Edumatrix";
const pageDescription =
  "Kursus Les Privat Olimpiade Terbaik ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Peraih Lisensi OSN ✔️ Garansi REPORT CARD ✍️ Daftar? Segera kunjungi situs kami...";
const pageKeywords =
  "bimbel OSN, les privat OSN, Olimpiade Sains Nasional, IMO, JISMO, KSN, bimbingan belajar OSN SD, OSN SMP, OSN SMA, persiapan olimpiade, guru olimpiade, materi olimpiade, Edumatrix Indonesia";

export const metadata: Metadata = {
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
    siteName: pageTitle,
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
      {/* <SliderMobile />
      <SliderDescktop /> */}
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
