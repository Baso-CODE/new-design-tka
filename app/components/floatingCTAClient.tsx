"use client";

import { ContactCs } from "@/app/types/contact.type";
import Image from "next/image";
import { useCsRotation } from "../helper/useCsRotation";

interface Props {
  contacts: ContactCs[];
}

export default function FloatingCTAClient({ contacts }: Props) {
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "single",
    "floating_rotation",
  );

  if (!activeCs || activeCs.length === 0) return null;

  const activeContact = activeCs[0];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const currentLink = activeContact.link_cta;

    rotateCs();

    setTimeout(() => {
      window.open(currentLink, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <div
      className="
        fixed
        md:bottom-[7%]
        bottom-[14%]
        right-[3%]
        md:right-[4%]
        z-[1000]
        flex
        items-center
        gap-3
      ">
      {/* LIQUID GLASS CHAT BUBBLE */}
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[22px]

          border
          border-white/40

          bg-white/35

          px-4
          py-2.5

          text-xs
          font-semibold
          tracking-[-0.01em]
          text-slate-800

          shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(255,255,255,0.15)]

          backdrop-blur-[20px]
          backdrop-saturate-[180%]

          transition-all
          duration-500

          hover:bg-white/45

          md:px-5
          md:py-3
          md:text-sm
        ">
        {/* TOP GLASS REFLECTION */}
        <span
          className="
            pointer-events-none
            absolute
            inset-x-3
            top-0
            h-px
            bg-linear-to-r
            from-transparent
            via-white/90
            to-transparent
          "
        />

        {/* SOFT LIGHT / REFRACTION */}
        <span
          className="
            pointer-events-none
            absolute
            -left-5
            -top-7
            h-14
            w-24
            rotate-[-15deg]
            rounded-full
            bg-white/40
            blur-xl
          "
        />

        {/* SUBTLE BOTTOM REFLECTION */}
        <span
          className="
            pointer-events-none
            absolute
            -bottom-7
            right-0
            h-12
            w-20
            rounded-full
            bg-[#25D366]/10
            blur-2xl
          "
        />

        {/* TEXT */}
        <span className="relative z-10">Klik untuk Konsultasi</span>

        {/* GLASS ARROW */}
        <span
          className="
            absolute
            -right-[5px]
            top-1/2
            h-3
            w-3
            -translate-y-1/2
            rotate-45

            border-r
            border-t
            border-white/40

            bg-white/35
            backdrop-blur-xl
          "
        />
      </div>

      {/* LIQUID GLASS WHATSAPP BUTTON */}
      <a
        href={activeContact.link_cta}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Matrix Tutoring"
        onClick={handleClick}
        className="
          group
          relative

          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center

          overflow-hidden

          rounded-full

          border
          border-white/50

          bg-white/30

          shadow-[0_10px_35px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(255,255,255,0.15)]

          backdrop-blur-[24px]
          backdrop-saturate-[200%]

          transition-all
          duration-500
          ease-out

          hover:scale-110
          hover:bg-white/40
          hover:shadow-[0_14px_40px_rgba(0,0,0,0.22),0_0_30px_rgba(37,211,102,0.15),inset_0_1px_1px_rgba(255,255,255,0.95)]

          active:scale-95

          md:h-[64px]
          md:w-[64px]
        ">
        {/* LIQUID GLASS INNER LAYER */}
        <span
          className="
            pointer-events-none
            absolute
            inset-[3px]

            rounded-full

            border
            border-white/25

            bg-linear-to-br
            from-white/30
            via-white/5
            to-white/10
          "
        />

        {/* TOP SPECULAR HIGHLIGHT */}
        <span
          className="
            pointer-events-none
            absolute
            left-[18%]
            top-[8%]

            h-[30%]
            w-[55%]

            -rotate-12

            rounded-full

            bg-white/70

            blur-[5px]

            transition-all
            duration-500

            group-hover:left-[24%]
            group-hover:top-[12%]
          "
        />

        {/* GLASS REFRACTION */}
        <span
          className="
            pointer-events-none
            absolute
            -bottom-[25%]
            -right-[10%]
            h-[65%]
            w-[65%]
            rounded-full
            bg-[#25D366]/25
            blur-[14px]
            transition-all
            duration-500
            group-hover:bg-[#25D366]/35
          "
        />

        {/* SECONDARY LIGHT */}
        <span
          className="
            pointer-events-none
            absolute
            -left-[20%]
            top-[40%]
            h-10
            w-10
            rounded-full
            bg-white/30
            blur-xl
          "
        />

        {/* SOFT PULSE */}
        <span
          className="
            pointer-events-none
            absolute
            inset-0

            rounded-full

            border
            border-[#25D366]/30

            animate-ping

            [animation-duration:2.5s]
          "
        />

        {/* WHATSAPP ICON GLASS PLATE */}
        <span
          className="
            relative
            z-20

            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            bg-white/35

            shadow-[0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]

            backdrop-blur-md

            transition-all
            duration-300

            group-hover:scale-105

            md:h-11
            md:w-11
          ">
          <Image
            src="/images/icon-wa.svg"
            alt="Chat WhatsApp Matrix Tutoring"
            width={40}
            height={40}
            className="
              h-7
              w-7
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)]
              md:h-8
              md:w-8
            "
            priority
          />
        </span>
      </a>
    </div>
  );
}
