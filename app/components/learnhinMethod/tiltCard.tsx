"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

interface TiltCardProps {
  img: string;
  title: string;
  description: string;
}

export const TiltCard = ({ img, title, description }: TiltCardProps) => {
  return (
    <Tilt className="bg-[#F6FAFF] shadow-md rounded-lg p-6 text-center">
      <Image
        src={img}
        width={120}
        height={120}
        alt={title}
        className="mx-auto mb-4"
      />
      <h3 className="text-lg sm:text-xl font-bold mb-2 font-title uppercase text-[#133B79]">
        {title}
      </h3>
      <p className="text-gray-700 font-desc text-sm sm:text-base font-normal leading-5">
        {description}
      </p>
    </Tilt>
  );
};
