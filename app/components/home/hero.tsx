import Image from "next/image";
import { dummyContactCsData } from "../data/contactCs.dummyData";
import HeroCTAClient from "./heroCTAClient";

export default function Hero() {
  return (
    <section className="relative bg-[#04397D] flex items-center justify-center">
      <div className="py-24 px-4 lg:px-0 mt-10 text-white max-w-310 lg:min-h-[70vh] xl:min-h-[74vh]">
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="lg:w-1/2 ">
            <h1 className="text-[40px] uppercase font-bold leading-10 font-title">
              Butuh persiapan lebih
            </h1>

            <h2
              aria-hidden="true"
              className="uppercase text-[40px] font-bold font-title text-[#faae17] mb-4">
              untuk OSN
            </h2>
            <p className=" mb-8 font-desc text-[14px] md:text-[16px] leading-4.75 font-bold">
              Edumatrix Indonesia bangga mendukung generasi muda Indonesia dalam
              meraih prestasi di Olimpiade Sains Nasional. Program kami
              dirancang untuk mempersiapkan siswa dengan pengetahuan mendalam
              dan keterampilan analitis yang tajam, memastikan mereka siap
              menghadapi tantangan kompetisi sains terbesar di tanah air.
              <br />
              Melalui bimbingan intensif dan metode belajar yang inovatif, kami
              membantu setiap peserta mencapai potensi maksimalnya, mengukir
              prestasi gemilang, dan membawa nama harum bagi sekolah dan bangsa.
              Bersama Edumatrix Indonesia, jadilah bagian dari perjalanan menuju
              puncak prestasi di OSN!
            </p>

            {/* Panggil Client Component untuk tombol CTA */}
            <HeroCTAClient contacts={dummyContactCsData} />
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              loading="eager"
              src="/images/image-preview-landing-page.webp"
              alt="Bimbingan belajar les privat untuk persiapan OSN dan peningkatan prestasi akademik siswa SD SMP SMA"
              width={1200}
              height={1200}
              priority
              fetchPriority="high"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-px xl:-bottom-10 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,224L24,229.3C48,235,96,245,144,234.7C192,224,240,192,288,186.7C336,181,384,203,432,224C480,245,528,267,576,272C624,277,672,267,720,245.3C768,224,816,192,864,186.7C912,181,960,203,1008,208C1056,213,1104,203,1152,186.7C1200,171,1248,149,1296,154.7C1344,160,1392,192,1416,208L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
