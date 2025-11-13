import Hero from "./components/home/hero";
import JumlahSiswa from "./components/home/jumlahSiswa";
import ListSiswa from "./components/home/listSiswa";
import PaketBelajarOSN from "./components/home/paketBelajarOSN";
import Program from "./components/home/programBelajar";
import TingkatPendidikan from "./components/home/tingkatPendidikan";
import SliderDescktop from "./components/slider/sliderDescktop";
import SliderMobile from "./components/slider/sliderMobile";
import YouTubeShortEmbed from "./components/YouTubeShortEmbed";

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
    </>
  );
}
