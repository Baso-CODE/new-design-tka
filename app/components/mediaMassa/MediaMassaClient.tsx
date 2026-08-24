"use client";

import { MediaImage } from "@/app/lib/media/getMediaImages";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface Props {
  images: MediaImage[];
}

export default function MediaMassaClient({ images }: Props) {
  return (
    <div className="bg-[#033a94] relative">
      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-[#033a94] via-transparent to-[#033a94]" />

      {/* Title */}
      <div className="text-center py-4">
        <h2 className="text-white md:text-2xl lg:text-3xl font-bold font-title">
          Telah Diliput oleh:
        </h2>
      </div>

      {/* Marquee Arah Kiri */}
      <div className="overflow-hidden whitespace-nowrap py-4">
        <Marquee direction="left" speed={50} gradient={false}>
          {images.map((img, i) => (
            <div key={i} className="mx-6 flex items-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={140}
                height={70}
                loading="lazy"
                className="h-17.5 w-auto rounded-md object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Marquee Arah Kanan */}
      <div className="overflow-hidden whitespace-nowrap py-4">
        <Marquee direction="right" speed={50} gradient={false}>
          {images.map((img, i) => (
            <div key={i} className="mx-6 flex items-center">
              <Image
                src={img.src}
                alt={img.alt}
                width={140}
                loading="lazy"
                height={70}
                className="h-17.5 w-auto rounded-md object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
