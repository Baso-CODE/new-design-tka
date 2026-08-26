import Image from "next/image";
import { dummyContactCsData } from "../data/contactCs.dummyData";
import HeroCTAClient from "./heroCTAClient";

export default function Hero() {
  return (
    // Background dan Padding responsif (biru gelap di mobile, biru terang di desktop)
    <section className="relative bg-[#056fcb] lg:bg-[#056fcb] flex flex-col items-center justify-start overflow-hidden pt-8 pb-16 md:pt-28 md:pb-24">
      {/* --- LAYER BACKGROUND OVERLAY (Dipakai Bersama) --- */}
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

      {/* ========================================================================= */}
      {/* 1. TAMPILAN MOBILE & TABLET (Tampil sampai ukuran md, hilang di lg/desktop) */}
      {/* ========================================================================= */}
      <div className="relative z-10 px-2 md:px-4 text-white w-full max-w-6xl mx-auto flex flex-col items-center lg:hidden">
        {/* Logo Edumatrix di Bagian Atas */}
        <div className="mb-6 md:mb-8 flex items-center justify-center">
          <Image
            src="/images/logo.webp"
            alt="Edumatrix Indonesia Logo"
            width={160}
            height={45}
            className="object-contain h-10 md:h-12 w-auto"
            priority
          />
        </div>

        {/* Judul Utama */}
        <div className="text-center max-w-4xl mx-auto mb-6 px-2">
          <h1 className="text-[24px] sm:text-[28px] md:text-[38px] font-bold leading-tight md:leading-snug font-title">
            Lebih Siap Jadi Juara <br />
            Tes Kemampuan Akademik <br />
            <span className="text-[#faae17]">
              Tembus SMP–SMA Unggulan & PTN Impian
            </span>{" "}
            bersama
          </h1>

          {/* Badge / Kotak Nama Brand di Bawah Judul */}
          {/* <div className="mt-4 inline-block bg-[#072452] border border-blue-500/40 px-6 py-2.5 rounded-full shadow-lg">
            <span className="text-white text-xl md:text-3xl font-extrabold tracking-wide">
              Edumatrix Indonesia
            </span>
          </div> */}
        </div>

        {/* Badge ketersediaan layanan */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
            🌐 Online — Seluruh Indonesia
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#faae17]/15 border border-[#faae17]/30 px-3.5 py-1.5 text-[11.5px] font-semibold text-[#faae17] text-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#faae17] shrink-0" />
            📍 Offline — Jabodetabek, Yogyakarta & Request Area Lain (Estimasi 3
            Hari)
          </span>
        </div>

        {/* Layout Utama: Ilustrasi Karakter & Konten Card Bawah */}
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

          {/* Card Putih di Bagian Bawah (Deskripsi & CTA Konsultasi) */}
          <div className="w-full max-w-3xl bg-white text-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col gap-6 -mt-10 z-10">
            <p className="text-[#314b8a] text-sm font-medium md:text-base leading-relaxed text-center font-desc">
              Bimbel pendampingan belajar dan persiapan ujian tingkat SD, SMP,
              dan SMA terbaik dan terlengkap untuk mencetak siswa berprestasi.
              Mempersiapkan generasi juara dengan program Pendalaman Materi,
              Penguasaan TKA (Saintek & Soshum), Latihan Soal HOTS, Try Out
              Berkala, dan Evaluasi Belajar untuk meraih nilai maksimal di
              sekolah hingga tembus Kampus Impian!
            </p>

            {/* Tombol CTA / Konsultasi (Di dalam card untuk Mobile) */}
            <div className="w-full flex justify-center">
              <HeroCTAClient contacts={dummyContactCsData} />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TAMPILAN DESKTOP (Hilang di ukuran kecil, tampil di lg/desktop ke atas) */}
      {/* ========================================================================= */}
      <div className="relative z-10 px-4 lg:px-0 text-white w-full max-w-310 mx-auto hidden lg:flex flex-col">
        {/* Layout Utama: Kiri (Teks + CTA) & Kanan (Gambar Hero) */}
        <div className="w-full flex flex-row items-center justify-between mb-10">
          {/* Kolom Kiri: Teks & Tombol */}
          <div className="w-full lg:w-[50%] flex flex-col items-start text-left gap-6">
            <h1 className="text-3xl font-bold leading-snug font-title">
              Lebih Siap Jadi Juara <br />
              Tes Kemampuan Akademik <br />
              <span className="text-[#faae17]">
                Tembus SMP–SMA Unggulan & <br /> PTN Impian
              </span>{" "}
              bersama <br />
              Edumatrix Indonesia
            </h1>

            {/* Badge ketersediaan layanan */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                🌐 Online — Seluruh Indonesia
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#faae17]/15 border border-[#faae17]/30 px-3.5 py-1.5 text-xs font-semibold text-[#faae17]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#faae17] shrink-0" />
                📍 Offline — Jabodetabek, Yogyakarta & Request Area Lain
                (Estimasi 3 Hari)
              </span>
            </div>

            {/* Tombol CTA / Konsultasi dipindah ke bawah teks (kiri pada desktop) */}
            <div className="w-full max-w-md flex justify-start pt-2">
              <HeroCTAClient contacts={dummyContactCsData} />
            </div>
          </div>

          {/* Kolom Kanan: Gambar Karakter / Siswa Hero */}
          <div className="w-full lg:w-[50%] relative aspect-square max-w-2xl mx-auto flex justify-center items-center lg:-mb-28">
            <Image
              loading="eager"
              src="/images/tka/hero-tka.webp"
              alt="Siswa berprestasi bimbingan belajar TKA Edumatrix"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain object-center lg:scale-110"
              priority
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Card Putih di Bagian Paling Bawah (Deskripsi) */}
        <div className="w-full bg-white text-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 mx-auto max-w-full lg:-mt-10">
          <p className="text-[#314b8a] text-base font-bold leading-relaxed text-center font-desc">
            Bimbel pendampingan belajar dan persiapan ujian tingkat SD, SMP, dan
            SMA terbaik dan terlengkap untuk mencetak siswa berprestasi.
            Mempersiapkan generasi juara dengan program Pendalaman Materi,
            Penguasaan TKA (Saintek & Soshum), Latihan Soal HOTS, Try Out
            Berkala, dan Evaluasi Belajar untuk meraih nilai maksimal di sekolah
            hingga tembus Kampus Impian!
          </p>
        </div>
      </div>
    </section>
  );
}
