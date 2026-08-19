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

  const dynamicLink = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace(
    "+",
    "",
  )}&text=${encodeURIComponent(
    `Halo Kak ${activeContact.nama_cs} https://les-tka.bimbeledumatrix.com/, Saya ingin tanya program bimbingan belajar TKA (Tes Kemampuan Akademik) di ${kotaName}. Apa saja pilihan paket dan fasilitasnya?`,
  )}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    rotateCs();

    setTimeout(() => {
      window.open(dynamicLink, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <section className="relative bg-[#04397D] flex items-center justify-center overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        <Image
          src="/images/tka/bg-overlay.webp"
          alt="Latar belakang gedung"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 px-4 lg:px-8 text-white w-full max-w-350 mx-auto">
        {/* Menggunakan lg:items-stretch agar kolom kiri & kanan memiliki tinggi yang sama maksimalnya */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 lg:gap-4">
          {/* Bagian Kiri: Typografi & CTA */}
          <div className="lg:w-[45%] flex flex-col justify-center gap-6 pl-0 lg:pl-10 pb-8 lg:pb-0">
            <h1 className="text-[28px] md:text-[32px] lg:text-[38px] font-bold leading-snug font-title uppercase">
              BIMBEL & LES PRIVAT TKA SD SMP SMA DI{" "}
              <br className="hidden lg:block" />
              <span className="text-[#faae17]">{kotaName}</span> TERBAIK #1
            </h1>

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

            <div className="w-full mt-2">
              <Link
                href={dynamicLink}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Daftar Sekarang via WhatsApp dengan ${activeContact.nama_cs}`}
                className="group relative inline-flex w-full md:w-fit h-14 items-center justify-center rounded-full bg-[#F68507] py-1 pl-6 pr-14 font-medium text-neutral-50 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="z-10 pr-2 font-bold whitespace-nowrap">
                  Daftar Sekarang
                </span>
                <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-[#04397d] transition-[width] group-hover:w-[calc(100%-8px)]">
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

          {/* Bagian Kanan: Gambar Karakter/Siswa didorong mentok ke bawah (items-end) */}
          <div className="lg:w-[55%] flex justify-center lg:justify-end items-end w-full">
            <div className="relative w-full aspect-4/3 lg:aspect-5/4">
              <Image
                loading="eager"
                src="/images/tka/hero-tka.webp"
                alt={`Bimbingan Belajar TKA di ${kotaName}`}
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
