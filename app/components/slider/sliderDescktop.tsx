"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { dummyContactCsData } from "../data/contactCs.dummyData";

interface CarouselItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function SliderDesktop() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { activeCs, rotateCs } = useCsRotation(
    dummyContactCsData,
    "single",
    "slider_rotation",
  );

  if (!activeCs || activeCs.length === 0) return null;

  const activeContact = activeCs[0];

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";

  const dynamicHref = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace(
    "+",
    "",
  )}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} ${baseUrl}, Saya ingin tanya program belajar OSN yang ada di Edumatrix. Apa saja jenis program belajar dan pilihan paket`,
  )}`;

  const items: CarouselItem[] = [
    {
      src: "/images/slider/descktop-1.webp",
      alt: "Bimbingan belajar OSN terbaik untuk membantu anak Anda meraih prestasi dalam Olimpiade Sains Nasional.",
      width: 4015,
      height: 2101,
    },
    {
      src: "/images/slider/descktop-2.webp",
      alt: "Persiapan Olimpiade Sains Nasional dengan tutor berpengalaman yang siap membantu anak Anda memahami materi OSN secara mendalam.",
      width: 4015,
      height: 2101,
    },
    {
      src: "/images/slider/descktop-3.webp",
      alt: "Program belajar intensif dan terstruktur untuk Olimpiade Sains Nasional, dirancang khusus untuk meningkatkan kemampuan akademis anak Anda.",
      width: 4015,
      height: 2101,
    },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const link = dynamicHref;

    rotateCs();

    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <section className="relative hidden w-full overflow-hidden bg-white py-4 md:block">
      {/* BACKGROUND AMBIENT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-80
          w-80
          rounded-full
          bg-[#4DA3FF]/8
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-[#FAAE17]/7
          blur-3xl
        "
      />

      <div className="relative z-10 container mx-auto px-2">
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-[#056fcb]/10
            bg-white
            p-2
            shadow-[0_18px_46px_rgba(4,57,125,0.10)]
          ">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            loop
            navigation={{
              prevEl: ".slider-glass-prev",
              nextEl: ".slider-glass-next",
            }}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className="rounded-[22px]">
            {items.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <SwiperSlide key={idx}>
                  <a
                    href={dynamicHref}
                    tabIndex={isActive ? 0 : -1}
                    aria-hidden={!isActive}
                    aria-label={`Konsultasi OSN via WhatsApp dengan ${
                      activeContact.nama_cs
                    } - Slide ${idx + 1}`}
                    onClick={handleClick}
                    className="group block cursor-pointer">
                    <div className="relative overflow-hidden rounded-[22px]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        className="
                          h-full
                          w-full
                          object-contain
                          transition-transform
                          duration-700
                          group-hover:scale-[1.006]
                        "
                        priority={idx === 0}
                      />
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <button
            type="button"
            aria-label="Slide sebelumnya"
            className="
    slider-glass-prev
    group/nav

    absolute
    left-5
    top-1/2
    z-50

    flex
    h-12
    w-12
    -translate-y-1/2
    items-center
    justify-center

    overflow-hidden
    rounded-full

    border
    border-white/55

    text-white

    shadow-[0_8px_24px_rgba(0,20,60,0.22),0_2px_8px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-1px_0_rgba(0,40,100,0.08)]

    backdrop-blur-[26px]
    backdrop-saturate-[200%]

    transition-all
    duration-300

    hover:scale-105
    hover:border-white/75

    active:scale-95
  "
            style={{
              background: [
                "radial-gradient(circle at 32% 18%, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.18) 28%, transparent 55%)",
                "linear-gradient(145deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.18) 48%, rgba(255,255,255,0.10) 100%)",
                "rgba(170,215,255,0.20)",
              ].join(", "),
            }}>
            {/* INNER GLASS RIM */}
            <span
              aria-hidden="true"
              className="
      pointer-events-none
      absolute
      inset-[1px]

      rounded-full

      border
      border-white/25
    "
            />

            {/* TOP SPECULAR HIGHLIGHT */}
            <span
              aria-hidden="true"
              className="
      pointer-events-none
      absolute
      left-[18%]
      right-[18%]
      top-[2px]

      h-[38%]

      rounded-[999px_999px_70%_70%]

      bg-linear-to-b
      from-white/85
      via-white/30
      to-transparent

      blur-[0.2px]
    "
            />

            {/* BOTTOM REFRACTION */}
            <span
              aria-hidden="true"
              className="
      pointer-events-none
      absolute
      -bottom-2
      left-1/2

      h-6
      w-9

      -translate-x-1/2

      rounded-full

      bg-[#3ba7ff]/25
      blur-lg
    "
            />

            {/* SIDE REFLECTION */}
            <span
              aria-hidden="true"
              className="
      pointer-events-none
      absolute
      -left-2
      top-2

      h-7
      w-4

      rotate-[20deg]
      rounded-full

      bg-white/30
      blur-md
    "
            />

            <ChevronLeft
              size={25}
              strokeWidth={2.5}
              className="
      relative
      z-10

      text-white

      drop-shadow-[0_1px_4px_rgba(0,30,80,0.45)]

      transition-transform
      duration-300

      group-hover/nav:-translate-x-0.5
    "
            />
          </button>

          <button
            type="button"
            aria-label="Slide berikutnya"
            className="
    slider-glass-next
    group/nav

    absolute
    right-5
    top-1/2
    z-50

    flex
    h-12
    w-12
    -translate-y-1/2
    items-center
    justify-center

    overflow-hidden
    rounded-full

    border
    border-white/55

    text-white

    shadow-[0_8px_24px_rgba(0,20,60,0.22),0_2px_8px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-1px_0_rgba(0,40,100,0.08)]

    backdrop-blur-[26px]
    backdrop-saturate-[200%]

    transition-all
    duration-300

    hover:scale-105
    hover:border-white/75

    active:scale-95
  "
            style={{
              background: [
                "radial-gradient(circle at 32% 18%, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.18) 28%, transparent 55%)",
                "linear-gradient(145deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.18) 48%, rgba(255,255,255,0.10) 100%)",
                "rgba(170,215,255,0.20)",
              ].join(", "),
            }}>
            {/* INNER GLASS RIM */}
            <span
              aria-hidden="true"
              className="
      pointer-events-none
      absolute
      inset-[1px]

      rounded-full

      border
      border-white/25
    "
            />

            {/* TOP SPECULAR HIGHLIGHT */}
            <span
              aria-hidden="true"
              className="
      pointer-events-none
      absolute
      left-[18%]
      right-[18%]
      top-[2px]

      h-[38%]

      rounded-[999px_999px_70%_70%]

      bg-linear-to-b
      from-white/85
      via-white/30
      to-transparent

      blur-[0.2px]
    "
            />

            {/* BOTTOM REFRACTION */}
            <span
              aria-hidden="true"
              className="
      pointer-events-none
      absolute
      -bottom-2
      left-1/2

      h-6
      w-9

      -translate-x-1/2

      rounded-full

      bg-[#3ba7ff]/25
      blur-lg
    "
            />

            {/* SIDE REFLECTION */}
            <span
              aria-hidden="true"
              className="
      pointer-events-none
      absolute
      -left-2
      top-2

      h-7
      w-4

      rotate-[20deg]
      rounded-full

      bg-white/30
      blur-md
    "
            />

            <ChevronRight
              size={25}
              strokeWidth={2.5}
              className="
      relative
      z-10

      text-white

      drop-shadow-[0_1px_4px_rgba(0,30,80,0.45)]

      transition-transform
      duration-300

      group-hover/nav:translate-x-0.5
    "
            />
          </button>
        </div>
      </div>
    </section>
  );
}
