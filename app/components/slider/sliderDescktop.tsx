"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { dummyContactCsData } from "../data/contactCs.dummyData";

interface CarouselItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function SliderDesktop() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Pengambilan data langsung di dalam komponen menggunakan dummyContactCsData
  const { activeCs, rotateCs } = useCsRotation(
    dummyContactCsData,
    "single",
    "slider_rotation",
  );

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (!activeCs || activeCs.length === 0) return null;
  const activeContact = activeCs[0];

  const dynamicHref = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace("+", "")}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} https://les-tka.bimbeledumatrix.com, Saya ingin tanya program belajar OSN yang ada di Edumatrix. Apa saja jenis program belajar dan pilihan paket`,
  )}`;

  const items: CarouselItem[] = [
    {
      src: "/images/carousel/carousel-OSN_WEB-descktop.webp",
      alt: "Bimbingan belajar OSN terbaik untuk membantu anak Anda meraih prestasi dalam Olimpiade Sains Nasional.",
      width: 4015,
      height: 2101,
    },
    {
      src: "/images/carousel/carousel-OSN_WEB2-descktop.webp",
      alt: "Persiapan Olimpiade Sains Nasional dengan tutor berpengalaman yang siap membantu anak Anda memahami materi OSN secara mendalam.",
      width: 4015,
      height: 2101,
    },
    {
      src: "/images/carousel/carousel-OSN_WEB3-descktop.webp",
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
    <div className="w-full md:block hidden">
      <div className="container mx-auto">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2600}
          arrows
          ssr
          beforeChange={(nextSlide) => setActiveIndex(nextSlide)}>
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <Link
                href={dynamicHref}
                key={idx}
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
                  className="w-full h-full object-contain rounded-lg"
                  priority={idx === 0}
                />
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
