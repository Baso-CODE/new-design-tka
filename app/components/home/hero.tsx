import Image from "next/image";
import { dummyContactCsData } from "../data/contactCs.dummyData";
import HeroCTAClient from "./heroCTAClient";

export default function Hero() {
  return (
    <section className="relative bg-[#04397D] flex flex-col items-center justify-start overflow-hidden pt-28 pb-16 md:py-32">
      {/* Layer Background (Gedung Sketch / Overlay) */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-none">
        <Image
          src="/images/tka/bg-overlay.webp"
          alt="Latar belakang gedung"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 px-4 lg:px-8 text-white w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* 1. Logo Edumatrix di Bagian Atas */}
        <div className="mb-6 md:mb-8 flex items-center justify-center">
          <Image
            src="/images/logo.webp" // Sesuaikan path logo Anda jika berbeda
            alt="Edumatrix Indonesia Logo"
            width={160}
            height={45}
            className="object-contain h-10 md:h-12 w-auto"
            priority
          />
        </div>

        {/* 2. Judul Utama (Responsive Layout untuk Mobile & Desktop) */}
        <div className="text-center max-w-4xl mx-auto mb-8 px-2">
          <h1 className="text-[24px] sm:text-[28px] md:text-[38px] lg:text-[42px] font-bold leading-tight md:leading-snug font-title">
            Lebih Siap Jadi Juara <br />
            Tes Kemampuan Akademik <br />
            <span className="text-[#faae17]">
              Tembus SMP–SMA Unggulan & PTN Impian
            </span>{" "}
            bersama
          </h1>

          {/* Badge / Kotak Nama Brand di Bawah Judul (Seperti di Mobile Mockup) */}
          <div className="mt-4 inline-block bg-[#072452] border border-blue-500/40 px-6 py-2.5 rounded-full shadow-lg">
            <span className="text-white text-xl md:text-3xl font-extrabold tracking-wide">
              Edumatrix Indonesia
            </span>
          </div>
        </div>

        {/* 3. Layout Utama: Ilustrasi Karakter & Konten Card Bawah */}
        <div className="w-full flex flex-col items-center gap-6">
          {/* Gambar Karakter / Siswa Hero */}
          <div className="relative w-full max-w-2xl aspect-16/10 md:aspect-2/1 flex justify-center">
            <Image
              loading="eager"
              src="/images/tka/hero-tka.webp"
              alt="Siswa berprestasi bimbingan belajar TKA Edumatrix"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain object-center"
              priority
              fetchPriority="high"
            />
          </div>

          {/* 4. Card Putih di Bagian Bawah (Deskripsi & CTA Konsultasi) */}
          <div className="w-full max-w-3xl bg-white text-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col gap-6 -mt-10 z-10">
            <p className="text-[#314b8a] text-sm font-medium md:text-base leading-relaxed text-center font-desc">
              Bimbel pendampingan belajar dan persiapan ujian tingkat SD, SMP,
              dan SMA terbaik dan terlengkap untuk mencetak siswa berprestasi.
              Mempersiapkan generasi juara dengan program Pendalaman Materi,
              Penguasaan TKA (Saintek & Soshum), Latihan Soal HOTS, Try Out
              Berkala, dan Evaluasi Belajar untuk meraih nilai maksimal di
              sekolah hingga tembus Kampus Impian!
            </p>

            {/* Tombol CTA / Konsultasi */}
            <div className="w-full flex justify-center">
              <HeroCTAClient contacts={dummyContactCsData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
