"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroKabupatenProps {
  KabupatenName: string;
  linkCta: string;
}

export default function HeroKabupaten({
  KabupatenName,
  linkCta,
}: HeroKabupatenProps) {
  return (
    <section className="relative bg-[#04397D] flex items-center justify-center">
      <div className="py-24 px-2 mt-8 text-white max-w-[1240px]  lg:h-[80vh] xl:h-screen ">
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="lg:w-1/2">
            <h1
              className="text-[36px] uppercase font-bold leading-10 font-title mb-7"
              data-aos="fade-down"
            >
              BIMBEL & LES PRIVAT OSN KSN IMO SD SMP SMA Di{" "}
              <span className="text-[#faae17] ">{KabupatenName}</span> TERBAIK
              #1
            </h1>

            <p
              className="mb-6 font-desc text-[1rem] leading-[19px] font-medium"
              data-aos="fade-right"
            >
              Edumatrix Indonesia adalah{" "}
              <strong>bimbel OSN (Olimpiade Sains Nasional)</strong> terbaik di{" "}
              <span className="text-[#faae17] font-extrabold uppercase">
                {KabupatenName}
              </span>
              , yang berfokus pada <strong>les privat OSN, KSN, dan IMO</strong>{" "}
              untuk jenjang SD, SMP, hingga SMA. Program pembelajaran kami
              dirancang khusus untuk membantu siswa
              <strong>lolos seleksi Olimpiade Sains Nasional</strong> dan meraih
              medali emas di tingkat provinsi maupun nasional. Dengan bimbingan
              intensif dari <strong>pengajar berpengalaman</strong> dan modul
              yang sesuai kurikulum OSN terbaru, Edumatrix memastikan setiap
              siswa di{" "}
              <span className="text-[#faae17] font-extrabold uppercase">
                {KabupatenName}
              </span>{" "}
              mendapatkan pendampingan terbaik untuk menguasai bidang{" "}
              <strong>
                Matematika, Fisika, Kimia, Biologi, Astronomi, dan Informatika
              </strong>
              .
            </p>
            <Link
              data-aos="fade-up"
              href={linkCta}
              className="group relative inline-flex w-full md:w-[50%] lg:w-[40%] h-14 items-center justify-center rounded-full bg-[#F68507] py-1 pl-6 pr-14 font-medium text-neutral-50"
            >
              <span className="z-10 pr-2"> Daftar Sekarang</span>
              <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-[#04397d] transition-[width] group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-neutral-50"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div
            className="lg:w-1/2 flex justify-center items-center"
            data-aos="fade-left"
          >
            <Image
              width={1000}
              height={1000}
              src="/images/hero-image-kabupaten-page.webp"
              alt={`Les privat dan bimbingan belajar OSN terbaik di ${KabupatenName}. Edumatrix Indonesia membantu siswa SD, SMP, dan SMA meraih prestasi Olimpiade Sains Nasional (OSN) dengan pengajar profesional dan metode belajar interaktif di ${KabupatenName}.`}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-px xl:bottom-[-90px]  left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,176C672,181,768,235,864,229.3C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
