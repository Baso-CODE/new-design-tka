"use client";

import Image from "next/image";
import { useRef } from "react";
import { useCountingAnimation } from "./useCountingAnimation";

export interface StatItem {
  id: number;
  value: number;
  unit: string;
  image: string;
  alt: string;
}

interface StatCardProps {
  stat: StatItem;
}

const StatCardOSN = ({ stat }: StatCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const animatedValue = useCountingAnimation(
    stat.value,
    2000,
    0,
    false,
    cardRef,
  );

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center text-center 
      transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Ukuran gambar disesuaikan: w-24 (di mobile) dan w-36 (di sm ke atas) */}
      <div className="w-24 h-24 sm:w-36 sm:h-36 relative mb-3 sm:mb-4 flex items-center justify-center">
        <Image
          src={stat.image}
          alt={stat.alt}
          width={150}
          height={150}
          loading="lazy"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Ukuran angka disesuaikan: text-3xl (di mobile) dan text-5xl (di sm ke atas) */}
      <p className="text-3xl sm:text-5xl font-extrabold text-[#0f4787] mb-1 sm:mb-2">
        {animatedValue}
      </p>

      {/* Ukuran teks unit disesuaikan: text-sm (di mobile) dan text-lg (di sm ke atas) */}
      <p className="text-sm sm:text-lg font-medium text-gray-600 font-title leading-snug">
        {stat.unit}
      </p>
    </div>
  );
};

export default StatCardOSN;
