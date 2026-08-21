"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import Image from "next/image";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import CSS Swiper
import "swiper/css";

import { dummyContactCsData } from "../data/contactCs.dummyData";

interface CarouselItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function SliderMobile() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { activeCs, rotateCs } = useCsRotation(
    dummyContactCsData,
    "single",
    "slider_mobile_rotation",
  );

  if (!activeCs || activeCs.length === 0) return null;
  const activeContact = activeCs[0];

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";

  const dynamicHref = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace("+", "")}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} ${baseUrl}, Saya ingin tanya program belajar OSN yang ada di Edumatrix. Apa saja jenis program belajar dan pilihan paket`,
  )}`;

  const items: CarouselItem[] = [
    {
      src: "/images/slider/mobile-1.webp",
      alt: "Bimbingan belajar OSN terbaik untuk membantu anak Anda meraih prestasi dalam Olimpiade Sains Nasional.",
      width: 4015,
      height: 2101,
    },
    {
      src: "/images/slider/mobile-2.webp",
      alt: "Persiapan Olimpiade Sains Nasional dengan tutor berpengalaman yang siap membantu anak Anda memahami materi OSN secara mendalam.",
      width: 4015,
      height: 2101,
    },
    {
      src: "/images/slider/mobile-3.webp",
      alt: "Program belajar intensif dan terstruktur untuk Olimpiade Sains Nasional, dirancang khusus untuk meningkatkan kemampuan akademis anak Anda.",
      width: 4015,
      height: 2101,
    },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    rotateCs();

    setTimeout(() => {
      window.open(dynamicHref, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <div className="w-full block md:hidden">
      <div className="max-w-310 px-2 mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}>
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <SwiperSlide key={idx}>
                <a
                  href={dynamicHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isActive ? 0 : -1}
                  aria-hidden={!isActive}
                  aria-label={`Konsultasi OSN via WhatsApp dengan ${activeContact.nama_cs} - Slide ${idx + 1}`}
                  onClick={handleClick}
                  className="block cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="w-full h-full rounded-lg object-fill"
                    priority={idx === 0}
                  />
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
