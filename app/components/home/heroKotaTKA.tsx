"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import { ContactCs } from "@/app/types/contact.type";
import Image from "next/image";
import Link from "next/link";

interface HeroKotaProps {
  kotaName: string;
  contacts: ContactCs[];
}

export default function HeroKotaTka({ kotaName, contacts }: HeroKotaProps) {
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "single",
    "hero_kota_tka_rotation",
  );

  if (!activeCs || activeCs.length === 0) return null;
  const activeContact = activeCs[0];

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";

  const dynamicLink = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace(
    "+",
    "",
  )}&text=${encodeURIComponent(
    `Halo Kak ${activeContact.nama_cs} ${baseUrl}/, Saya ingin tanya program bimbingan belajar TKA (Tes Kemampuan Akademik) di ${kotaName}. Bagaimana ketentuan program offline dan apa saja pilihan paket serta fasilitasnya?`,
  )}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    rotateCs();

    setTimeout(() => {
      window.open(dynamicLink, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
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
      <div className="relative z-10 px-2 md:px-4 text-white w-full max-w-310 mx-auto flex flex-col items-center lg:hidden">
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
          <h1 className="text-[24px] sm:text-[28px] md:text-[38px] font-bold leading-tight md:leading-snug font-title uppercase">
            BIMBEL & LES PRIVAT TKA SD SMP SMA DI{" "}
            <br className="hidden sm:block" />
            <span className="text-[#faae17]">{kotaName}</span> TERBAIK #1
          </h1>
        </div>

        {/* Badge ketersediaan layanan */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
            🌐 Online — Seluruh Indonesia
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#faae17]/15 border border-[#faae17]/30 px-3 py-1.5 text-[11.5px] font-semibold text-[#faae17] text-center">
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
              alt={`Siswa berprestasi bimbingan belajar TKA di ${kotaName}`}
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
              Edumatrix hadir di{" "}
              <strong className="uppercase">{kotaName}</strong> sebagai
              bimbingan belajar dan les privat terbaik untuk persiapan{" "}
              <strong>Tes Kemampuan Akademik (TKA)</strong>. Mempersiapkan
              generasi juara dengan program Pendalaman Materi, Penguasaan TKA
              (Saintek & Soshum), Latihan Soal HOTS, Try Out Berkala, dan
              Evaluasi Belajar untuk meraih nilai maksimal di sekolah hingga
              tembus Kampus Impian!
            </p>

            {/* Tombol CTA / Konsultasi (Di dalam card untuk Mobile) */}
            <div className="w-full flex justify-center">
              <Link
                href={dynamicLink}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Daftar Sekarang via WhatsApp dengan ${activeContact.nama_cs}`}
                className="group relative inline-flex w-full md:w-fit h-14 items-center justify-center rounded-full bg-[#fac61f] py-1 pl-6 pr-14 font-medium text-neutral-50 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="z-10 pr-2 font-bold whitespace-nowrap text-[#ffffff]">
                  Daftar Sekarang
                </span>
                <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-[#056fcb] transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="mr-3.5 flex items-center justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-neutral-50">
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </Link>
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
            <h1 className="text-[28px] md:text-[32px] lg:text-[38px] font-bold leading-snug font-title uppercase">
              BIMBEL & LES PRIVAT TKA SD SMP SMA DI{" "}
              <br className="hidden lg:block" />
              <span className="text-[#faae17]">{kotaName}</span> TERBAIK #1
            </h1>
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

            {/* Paragraf Deskripsi di Kiri Desktop */}
            <p className="font-desc text-[15px] md:text-[16px] leading-relaxed font-medium text-gray-100">
              Edumatrix hadir di{" "}
              <span className="text-[#faae17] font-extrabold uppercase">
                {kotaName}
              </span>{" "}
              sebagai bimbingan belajar dan les privat terbaik untuk persiapan{" "}
              <strong>Tes Kemampuan Akademik (TKA)</strong>. Program kami
              dirancang khusus untuk membantu siswa SD, SMP, dan SMA agar lebih
              siap, percaya diri, dan mampu menembus target sekolah unggulan
              impian.
            </p>

            {/* Tombol CTA / Konsultasi dipindah ke bawah teks (kiri pada desktop) */}
            <div className="w-full max-w-md flex justify-start">
              <Link
                href={dynamicLink}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Daftar Sekarang via WhatsApp dengan ${activeContact.nama_cs}`}
                className="group relative inline-flex  w-full h-14 items-center justify-center rounded-full bg-[#fac61f] py-1 pl-6 pr-14 font-medium text-neutral-50 cursor-pointer">
                <span className="z-10 pr-2 font-bold"> Daftar Sekarang</span>
                <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-[#056fcb] transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="mr-3.5 flex items-center justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-neutral-50">
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Gambar Karakter / Siswa Hero */}
          <div className="w-full lg:w-[50%] relative aspect-square max-w-2xl mx-auto flex justify-center items-center lg:-mb-28">
            <Image
              loading="eager"
              src="/images/tka/hero-tka.webp"
              alt={`Siswa berprestasi bimbingan belajar TKA di ${kotaName}`}
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
            Edumatrix hadir di <strong className="uppercase">{kotaName}</strong>{" "}
            sebagai bimbingan belajar dan les privat terbaik untuk persiapan{" "}
            <strong>Tes Kemampuan Akademik (TKA)</strong>. Mempersiapkan
            generasi juara dengan program Pendalaman Materi, Penguasaan TKA
            (Saintek & Soshum), Latihan Soal HOTS, Try Out Berkala, dan Evaluasi
            Belajar untuk meraih nilai maksimal di sekolah hingga tembus Kampus
            Impian!
          </p>
        </div>
      </div>
    </section>
  );
}
