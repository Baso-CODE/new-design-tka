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
      className="
        group
        relative
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden

        rounded-[28px]

        border
        border-white/35

        bg-white/80

        p-4
        text-center

        shadow-[0_18px_45px_rgba(0,45,105,0.16),0_5px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(15,71,135,0.05)]

        backdrop-blur-[24px]
        backdrop-saturate-[185%]

        transition-all
        duration-500
        ease-out

        hover:-translate-y-1
        hover:scale-[1.025]
        hover:border-white/55
        hover:bg-white/88

        hover:shadow-[0_24px_55px_rgba(0,65,145,0.22),0_8px_20px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,1)]

        sm:p-6
      ">
      {/* TOP SPECULAR REFLECTION */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-[12%]
          top-0
          z-30
          h-px
          bg-linear-to-r
          from-transparent
          via-white
          to-transparent
        "
      />

      {/* SOFT LIGHT REFLECTION */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-12
          -top-16
          z-0
          h-32
          w-44
          rotate-[-15deg]
          rounded-full
          bg-white/70
          blur-3xl
        "
      />

      {/* BLUE REFRACTION */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-16
          -right-12
          z-0
          h-36
          w-40
          rounded-full
          bg-[#4DA3FF]/15
          blur-3xl
        "
      />

      {/* INNER GLASS EDGE */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-[1px]
          z-20
          rounded-[27px]
          border
          border-white/35
        "
      />

      {/* IMAGE GLASS PLATE */}
      <div
        className="
          relative
          z-10
          mb-3

          flex
          h-24
          w-24
          items-center
          justify-center

          overflow-hidden
          rounded-[24px]

          border
          border-white/45

          bg-white/45

          shadow-[0_8px_22px_rgba(0,55,120,0.10),inset_0_1px_0_rgba(255,255,255,0.9)]

          backdrop-blur-xl

          transition-all
          duration-500

          group-hover:scale-[1.04]
          group-hover:bg-white/58

          sm:mb-4
          sm:h-36
          sm:w-36
          sm:rounded-[30px]
        ">
        {/* IMAGE TOP REFLECTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[10%]
            right-[10%]
            top-0
            z-20
            h-[42%]
            rounded-b-[70%]
            bg-linear-to-b
            from-white/65
            to-transparent
          "
        />

        {/* IMAGE BLUE REFRACTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-6
            right-0
            h-16
            w-20
            rounded-full
            bg-[#4DA3FF]/15
            blur-xl
          "
        />

        <Image
          src={stat.image}
          alt={stat.alt}
          width={150}
          height={150}
          loading="lazy"
          className="
            relative
            z-10
            h-auto
            w-full
            object-contain
            transition-transform
            duration-500
            group-hover:scale-[1.04]
          "
        />
      </div>

      {/* NUMBER */}
      <p
        className="
          relative
          z-10

          mb-1

          text-3xl
          font-extrabold
          tracking-tight
          text-[#0f4787]

          drop-shadow-[0_2px_6px_rgba(15,71,135,0.10)]

          transition-all
          duration-300

          group-hover:text-[#0b5aac]

          sm:mb-2
          sm:text-5xl
        ">
        {animatedValue}
      </p>

      {/* UNIT */}
      <div
        className="
          relative
          z-10
          overflow-hidden

          rounded-full

          border
          border-[#0f4787]/8

          bg-[#0f4787]/6

          px-4
          py-1.5

          shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]

          backdrop-blur-md
        ">
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-[15%]
            top-0
            h-px
            bg-linear-to-r
            from-transparent
            via-white
            to-transparent
          "
        />

        <p
          className="
            relative
            z-10
            font-title
            text-sm
            font-medium
            leading-snug
            text-[#51677f]

            transition-colors
            duration-300

            group-hover:text-[#294d72]

            sm:text-lg
          ">
          {stat.unit}
        </p>
      </div>
    </div>
  );
};

export default StatCardOSN;
