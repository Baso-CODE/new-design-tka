"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import { ContactCs } from "@/app/types/contact.type";
import Image from "next/image";
import Link from "next/link";

interface HeroKelurahanProps {
  kelurahanName: string;
  contacts: ContactCs[];
}

export default function HeroKelurahan({
  kelurahanName,
  contacts,
}: HeroKelurahanProps) {
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "single",
    "hero_kelurahan_rotation",
  );

  if (!activeCs || activeCs.length === 0) return null;
  const activeContact = activeCs[0];

  const dynamicLink = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace(
    "+",
    "",
  )}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} https://bimbeledumatrix.com/, Saya ingin tanya program belajar OSN di ${kelurahanName} yang ada di Edumatrix Indonesia. Apa saja jenis program belajar dan pilihan paket.`,
  )}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    rotateCs();

    setTimeout(() => {
      window.open(dynamicLink, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <section className="relative bg-[#04397D] flex items-center justify-center">
      <div className="py-24 px-2 mt-8 text-white max-w-310 lg:min-h-[70vh] xl:min-h-[73vh]">
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="lg:w-1/2">
            <h1 className="text-[36px] uppercase font-bold leading-9 font-title mb-5">
              BIMBEL & LES PRIVAT OSN KSN IMO SD SMP SMA Di{" "}
              <span className="text-[#faae17]">{kelurahanName}</span> Terbaik #1
            </h1>
            <p className="mb-4 font-desc text-[1rem] leading-4.75 font-medium">
              Edumatrix Indonesia merupakan{" "}
              <strong>bimbel OSN (Olimpiade Sains Nasional)</strong> dan{" "}
              <strong>les privat KSN–IMO</strong> terpercaya di{" "}
              <span className="text-[#faae17] font-extrabold uppercase">
                {kelurahanName}
              </span>
              . Kami menghadirkan program pembelajaran komprehensif untuk{" "}
              <strong>siswa SD, SMP, dan SMA</strong> yang ingin berprestasi di
              bidang
              <strong>
                {" "}
                Matematika, Fisika, Kimia, Biologi, Astronomi, dan Informatika
              </strong>
              . Dengan metode belajar yang terstruktur, bimbingan dari{" "}
              <strong>pengajar berpengalaman OSN</strong>, serta materi yang
              selalu diperbarui sesuai kurikulum terbaru, kami membantu
              siswa-siswi di{" "}
              <span className="text-[#faae17] font-extrabold uppercase">
                {kelurahanName}
              </span>{" "}
              untuk <strong>lolos seleksi Olimpiade Sains Nasional</strong> dan
              meraih medali di tingkat provinsi maupun nasional.
            </p>

            <Link
              href={dynamicLink}
              onClick={handleClick}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Daftar Sekarang via WhatsApp dengan ${activeContact.nama_cs}`}
              className="group relative inline-flex w-full md:w-[50%] lg:w-[40%] h-14 items-center justify-center rounded-full bg-[#F68507] py-1 pl-6 pr-14 font-medium text-neutral-50 cursor-pointer">
              <span className="z-10 pr-2 font-bold">
                Daftar Sekarang ({activeContact.nama_cs})
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
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              src="/images/hero-image-kelurahan.webp"
              alt={`Les privat dan bimbingan belajar OSN terbaik di Kelurahan ${kelurahanName}. Edumatrix Indonesia membantu siswa SD, SMP, dan SMA di ${kelurahanName} mempersiapkan diri menghadapi Olimpiade Sains Nasional (OSN) melalui pembelajaran intensif, guru profesional, dan metode belajar yang interaktif.`}
              className="w-full h-full"
              width={1000}
              height={1000}
              priority
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-px xl:-bottom-22.5 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,176C672,181,768,235,864,229.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
