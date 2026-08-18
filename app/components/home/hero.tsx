import Image from "next/image";
import { dummyContactCsData } from "../data/contactCs.dummyData";
import HeroCTAClient from "./heroCTAClient";

export default function Hero() {
  return (
    <section className="relative bg-[#04397D] flex items-center justify-center overflow-hidden pt-28 md:pt-28">
      {/* Layer Background (Gedung Sketch) */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        <Image
          src="/images/tka/bg-overlay.png"
          alt="Latar belakang gedung"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 px-4 lg:px-8 text-white w-full max-w-350 mx-auto">
        {/* PERUBAHAN 1: Gunakan lg:items-stretch agar kolom kiri & kanan memiliki tinggi yang sama maksimalnya */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-4">
          {/* Bagian Kiri: Typografi & CTA */}
          {/* PERUBAHAN 2: Tambahkan justify-center agar teks tetap di tengah vertikal, dan pb-8 untuk jarak di versi mobile */}
          <div className="lg:w-[45%] flex flex-col justify-center gap-6 pl-0 lg:pl-10 pb-8 lg:pb-0">
            <h1 className="text-[28px] md:text-[26px] lg:text-[32px] font-bold leading-snug font-title">
              Lebih Siap Jadi Juara Tes <br className="hidden md:block" />
              Kemampuan Akademik, <span className="text-[#faae17]">
                Tembus
              </span>{" "}
              <br className="hidden md:block" />
              <span className="text-[#faae17]">
                SMP-SMA Unggulan
              </span> bersama <br className="hidden md:block" />
              Edumatrix Indonesia&quot;
            </h1>

            <p className="font-desc text-[15px] md:text-[17px] leading-relaxed">
              Mulai Persiapan lebih awal untuk hasil yang terbaik!
            </p>

            {/* Tombol CTA */}
            <div className="w-full mt-2">
              <HeroCTAClient contacts={dummyContactCsData} />
            </div>
          </div>

          {/* Bagian Kanan: Gambar Karakter/Siswa */}
          {/* PERUBAHAN 3: Ubah items-center menjadi items-end agar kontainer gambar didorong mentok ke bawah */}
          <div className="lg:w-[55%] flex justify-center lg:justify-end items-end w-full">
            <div className="relative w-full aspect-4/3 lg:aspect-5/4">
              <Image
                loading="eager"
                src="/images/tka/hero-tka.png"
                alt="Siswa berprestasi bimbingan belajar TKA Edumatrix"
                fill
                className="object-cover lg:object-contain object-bottom lg:object-bottom-right"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
