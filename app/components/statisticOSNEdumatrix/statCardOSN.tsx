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
    cardRef
  );

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center 
      transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <Image
        src={stat.image}
        alt={stat.alt}
        width={150}
        height={150}
        className="w-36 h-auto mb-4 object-fill"
      />

      <p className="text-5xl font-bold text-[#0f4787] mb-2">{animatedValue}</p>

      <p className="text-lg font-medium text-gray-600 font-title">
        {stat.unit}
      </p>
    </div>
  );
};

export default StatCardOSN;
