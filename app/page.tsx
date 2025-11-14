import { Metadata } from "next";
import Gallery from "./components/home/gallery";
import Hero from "./components/home/hero";
import JumlahSiswa from "./components/home/jumlahSiswa";
import ListSiswa from "./components/home/listSiswa";
import MengapaHarusEdumatrix from "./components/home/mengapaHarusEdumatrix";
import PaketBelajarOSN from "./components/home/paketBelajarOSN";
import Pengajar from "./components/home/pengajar";
import Pilihan from "./components/home/pilihan";
import Program from "./components/home/programBelajar";
import TingkatPendidikan from "./components/home/tingkatPendidikan";
import SliderDescktop from "./components/slider/sliderDescktop";
import SliderMobile from "./components/slider/sliderMobile";
import YouTubeShortEmbed from "./components/YouTubeShortEmbed";
import SuccessStorySlider from "./components/home/successStorySlider";
import GoldenTicketShowcase from "./components/goldenTicket";
import AsalSekolahSiswaEdumatrix from "./components/home/asalSekolahSiswaEdumatrix";
import SekolahSiswa from "./components/home/sekolahSiswa";
import ListKota from "./components/home/lisKota";
const ogImage =
  "https://olimpiade.edumatrix-indonesia.com/images/images-cta.webp";
const canonicalUrl = "https://olimpiade.edumatrix-indonesia.com/";
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
    <>
      <Hero />
      <JumlahSiswa />
      <ListSiswa />
      <Program />
      <YouTubeShortEmbed />
      <PaketBelajarOSN />
      <SliderMobile />
      <SliderDescktop />
      <TingkatPendidikan />
      <Pilihan />
      <MengapaHarusEdumatrix />
      <Pengajar />
      <Gallery />
      <SuccessStorySlider />
      <GoldenTicketShowcase />
      <AsalSekolahSiswaEdumatrix />
      <SekolahSiswa />
      <ListKota />
    </>
  );
}
