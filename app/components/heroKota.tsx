"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import { ContactCs } from "@/app/types/contact.type";
import Image from "next/image";
import Link from "next/link";

interface HeroKotaProps {
  kotaName: string;
  fotoKota: string;
  contacts: ContactCs[]; // Menerima data kontak
}

export default function HeroKota({
  kotaName,
  fotoKota,
  contacts,
}: HeroKotaProps) {
  // Gunakan hook single rotation dengan storageKey unik untuk HeroKota
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "single",
    "hero_kota_rotation",
  );

  if (!activeCs || activeCs.length === 0) return null;
  const activeContact = activeCs[0];

  // Buat link dinamis dengan nama CS yang aktif
  const dynamicLink = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace(
    "+",
    "",
  )}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} https://les-tka.bimbeledumatrix.com/, Saya ingin tanya program belajar OSN di ${kotaName} yang ada di Edumatrix Indonesia. Apa saja jenis program belajar dan pilihan paket.`,
  )}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    rotateCs(); // Lakukan rotasi CS dan simpan ke localStorage

    setTimeout(() => {
      window.open(dynamicLink, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <section className="relative bg-[#04397D] flex items-center justify-center">
      <div className="py-16 px-2 mt-16 text-white max-w-310 lg:min-h-[70vh] xl:min-h-[73vh]">
        <div className="flex flex-col lg:flex-row gap-14">
          {/* ===== TEXT SECTION ===== */}
          <div className="lg:w-1/2">
            <h1 className="text-[38px] uppercase font-bold leading-10 font-title mb-8">
              BIMBEL & LES PRIVAT OSN KSN IMO SD SMP SMA Di{" "}
              <span className="text-[#faae17]">{kotaName}</span> TERBAIK #1
            </h1>

            <p className="mb-4 font-desc text-[1rem] leading-4.75 font-medium">
              Edumatrix hadir di{" "}
              <span className="text-[#faae17] font-extrabold uppercase">
                {kotaName}
              </span>{" "}
              sebagai bimbingan belajar dan les privat terbaik untuk persiapan
              <strong> Olimpiade Sains Nasional (OSN)</strong> dan kompetisi
              akademik tingkat nasional maupun internasional. Program kami
              dirancang khusus untuk membantu siswa{" "}
              <strong>SD, SMP, dan SMA</strong> agar lebih percaya diri,
              berpikir kritis, dan siap menghadapi tantangan OSN di bidang{" "}
              matematika, fisika, kimia, biologi, komputer, dan ekonomi . Dengan
              pengajar profesional dan metode belajar interaktif, Edumatrix
              memastikan siswa di{" "}
              <span className="text-[#faae17] font-extrabold uppercase">
                {kotaName}
              </span>{" "}
              mendapatkan <strong>pendampingan intensif</strong> agar dapat
              meraih prestasi terbaik dan menjadi juara OSN maupun olimpiade
              sains tingkat dunia.
            </p>

            {/* CTA */}
            <Link
              href={dynamicLink}
              onClick={handleClick}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Daftar Sekarang via WhatsApp dengan ${activeContact.nama_cs}`}
              className="group relative inline-flex w-full md:w-[50%] lg:w-[40%] 
                h-14 items-center justify-center rounded-full bg-[#F68507] 
                py-1 pl-6 pr-14 font-medium text-neutral-50 cursor-pointer">
              <span className="z-10 pr-2 font-bold">
                Daftar Sekarang ({activeContact.nama_cs})
              </span>
              <div
                className="absolute right-1 inline-flex h-12 w-12 items-center justify-end 
                rounded-full bg-[#04397d] transition-[width] group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-neutral-50">
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 
                      3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 
                      12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 
                      12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 
                      8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 
                      7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 
                      3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* ===== IMAGE ===== */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              src={fotoKota}
              alt={`Les privat OSN di ${kotaName}`}
              width={700}
              height={450}
              className="w-full h-auto rounded-md"
              priority
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute -bottom-px xl:-bottom-22.5 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,176C672,181,768,235,864,229.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160V320H0Z"></path>
        </svg>
      </div>
    </section>
  );
}
