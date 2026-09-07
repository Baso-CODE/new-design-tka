"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import { ContactCs } from "@/app/types/contact.type";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

interface Props {
  contacts: ContactCs[];
}

export default function PaketBelajarOSNClient({ contacts }: Props) {
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "single",
    "paket_belajar_rotation",
  );

  if (!activeCs || activeCs.length === 0) return null;
  const activeContact = activeCs[0];

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";

  // Buat link dinamis berdasarkan nama CS yang sedang aktif dan base URL dari env
  const waLinkPriority = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace("+", "")}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} ${baseUrl} saya ingin Daftar Paket JUARA TKA. Bagaimana penjelasan detail programnya?`,
  )}`;

  const waLinkDeluxe = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace("+", "")}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} ${baseUrl} saya ingin Daftar Paket MASTER TKA. Bagaimana penjelasan detail programnya?`,
  )}`;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    e.preventDefault();
    rotateCs(); // Rotasi ke CS berikutnya dan simpan ke localStorage

    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 50);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
      {/* =========================================================
      KARTU 1 — JUARA TKA
  ========================================================= */}
      <div
        className="
      group
      relative
      flex
      flex-col
      justify-between
      overflow-hidden
      rounded-[32px]

      border
      border-white/25

      shadow-[0_22px_55px_rgba(1,48,117,0.32),0_8px_24px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.32)]

      transition-all
      duration-500
      ease-out

      hover:-translate-y-1
      hover:shadow-[0_28px_65px_rgba(1,70,170,0.38),0_10px_28px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.42)]
    "
        style={{
          background:
            "linear-gradient(155deg, #033c95 0%, #045bb3 48%, #0570cc 100%)",
        }}>
        {/* LIQUID GLASS HIGHLIGHT */}
        <div
          aria-hidden="true"
          className="
        pointer-events-none
        absolute
        inset-0
        z-0
        bg-[linear-gradient(145deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.04)_30%,transparent_55%)]
      "
        />

        {/* TOP REFLECTION */}
        <div
          aria-hidden="true"
          className="
        pointer-events-none
        absolute
        inset-x-8
        top-0
        z-30
        h-px
        bg-linear-to-r
        from-transparent
        via-white/80
        to-transparent
      "
        />

        {/* LIGHT REFRACTION */}
        <div
          aria-hidden="true"
          className="
        pointer-events-none
        absolute
        -left-16
        -top-20
        z-0
        h-40
        w-72
        rotate-[-12deg]
        rounded-full
        bg-white/12
        blur-3xl
      "
        />

        {/* BLUE REFRACTION */}
        <div
          aria-hidden="true"
          className="
        pointer-events-none
        absolute
        -bottom-24
        -right-16
        z-0
        h-52
        w-64
        rounded-full
        bg-[#1696ff]/30
        blur-3xl
      "
        />

        {/* INNER EDGE */}
        <div
          aria-hidden="true"
          className="
        pointer-events-none
        absolute
        inset-[1px]
        z-20
        rounded-[31px]
        border
        border-white/[0.06]
      "
        />

        <div className="relative z-10">
          {/* HEADER IMAGE */}
          <div className="relative w-full h-55 md:h-62.5 overflow-hidden bg-[#0d2247]">
            <Image
              src="/images/tka/bg-paket-belajar.webp"
              alt="Background Ornamen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="
            object-cover
            object-center
            transition-transform
            duration-700
            group-hover:scale-[1.025]
          "
              priority
            />

            {/* GLASS OVERLAY */}
            <div
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            inset-0
            z-10
            bg-linear-to-b
            from-white/8
            via-transparent
            to-[#033c95]/15
          "
            />

            {/* SPECULAR IMAGE REFLECTION */}
            <div
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            -left-[20%]
            -top-[45%]
            z-20
            h-[85%]
            w-[65%]
            rotate-[-15deg]
            rounded-full
            bg-white/10
            blur-3xl
          "
            />

            <div className="absolute inset-0 z-20 flex items-end justify-between px-2 md:px-4">
              <div className="relative w-full h-full">
                <Image
                  src="/images/tka/paket-juara-tka.webp"
                  alt="Juara TKA"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                object-contain
                object-bottom
                transition-transform
                duration-500
                group-hover:scale-[1.015]
              "
                  priority
                />
              </div>
            </div>
          </div>

          {/* TITLE BAR */}
          <div
            className="
          relative
          overflow-hidden

          border-y
          border-white/15

          bg-[#03295c]/90

          py-3

          text-center
          font-title
          text-lg
          font-bold
          tracking-wide
          text-white

          shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,0,0,0.15)]

          backdrop-blur-[14px]

          md:text-xl
        ">
            <div
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            inset-x-[15%]
            top-0
            h-px
            bg-linear-to-r
            from-transparent
            via-white/55
            to-transparent
          "
            />

            <span className="relative z-10">Benefit yang didapat</span>
          </div>

          {/* BENEFITS */}
          <div className="p-6 md:p-8 font-desc">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {[
                "Program Private 1 on 1",
                "Free Recording jika Online",
                "Try Out",
                "Jadwal Belajar Fleksibel",
                "Durasi Belajar 90 Menit",
                "Bisa Request Tutor",
                "Sistem Belajar Online / Offline",
                "Progress Report Berkala",
                "Free Pendaftaran",
              ].map((item, i) => (
                <div
                  className="flex items-start text-white text-sm group/item"
                  key={i}>
                  <div
                    className="
                  mr-2
                  mt-0.5
                  flex
                  h-[18px]
                  w-[18px]
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/70

                  bg-white

                  text-[#04397D]

                  shadow-[0_3px_8px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,1)]

                  transition-transform
                  duration-300

                  group-hover/item:scale-110
                ">
                    <FaCheck size={9} className="stroke-3" />
                  </div>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="relative z-10 p-6 md:p-8 pt-0 md:pt-0">
          <Link
            href={waLinkPriority}
            onClick={(e) => handleClick(e, waLinkPriority)}
            target="_blank"
            aria-label="Tanya Paket melalui WhatsApp"
            rel="noopener noreferrer"
            className="
          group/button
          relative

          flex
          h-12
          w-full
          items-center
          justify-center

          overflow-hidden
          rounded-full

          border
          border-white/70

          bg-white

          font-desc
          text-sm
          font-extrabold
          tracking-wider
          text-[#04397D]
          uppercase

          shadow-[0_8px_22px_rgba(0,25,80,0.22),inset_0_1px_0_rgba(255,255,255,1)]

          transition-all
          duration-300

          hover:scale-[1.015]
          hover:bg-[#f5faff]
          hover:shadow-[0_12px_30px_rgba(0,35,100,0.28)]

          active:scale-[0.985]
        ">
            <span
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            left-[12%]
            right-[12%]
            top-0
            h-[45%]
            rounded-b-[80%]
            bg-linear-to-b
            from-white
            to-transparent
          "
            />

            <span
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            -bottom-6
            right-[10%]
            h-10
            w-24
            rounded-full
            bg-[#4DA3FF]/12
            blur-xl
          "
            />

            <span className="relative z-10">Tanya Paket</span>
          </Link>
        </div>
      </div>

      {/* =========================================================
      KARTU 2 — MASTER TKA
  ========================================================= */}
      <div
        className="
      group
      relative
      flex
      flex-col
      justify-between
      overflow-hidden
      rounded-[32px]

      border
      border-white/25

      shadow-[0_22px_55px_rgba(115,0,34,0.32),0_8px_24px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.32)]

      transition-all
      duration-500
      ease-out

      hover:-translate-y-1
      hover:shadow-[0_28px_65px_rgba(170,0,55,0.38),0_10px_28px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.42)]
    "
        style={{
          background:
            "linear-gradient(155deg, #830026 0%, #ad0038 48%, #d9044d 100%)",
        }}>
        {/* LIQUID GLASS HIGHLIGHT */}
        <div
          aria-hidden="true"
          className="
        pointer-events-none
        absolute
        inset-0
        z-0
        bg-[linear-gradient(145deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.04)_30%,transparent_55%)]
      "
        />

        {/* TOP REFLECTION */}
        <div
          aria-hidden="true"
          className="
        pointer-events-none
        absolute
        inset-x-8
        top-0
        z-30
        h-px
        bg-linear-to-r
        from-transparent
        via-white/80
        to-transparent
      "
        />

        {/* LIGHT REFRACTION */}
        <div
          aria-hidden="true"
          className="
        pointer-events-none
        absolute
        -left-16
        -top-20
        z-0
        h-40
        w-72
        rotate-[-12deg]
        rounded-full
        bg-white/12
        blur-3xl
      "
        />

        {/* RED REFRACTION */}
        <div
          aria-hidden="true"
          className="
        pointer-events-none
        absolute
        -bottom-24
        -right-16
        z-0
        h-52
        w-64
        rounded-full
        bg-[#ff286b]/28
        blur-3xl
      "
        />

        {/* INNER EDGE */}
        <div
          aria-hidden="true"
          className="
        pointer-events-none
        absolute
        inset-[1px]
        z-20
        rounded-[31px]
        border
        border-white/[0.06]
      "
        />

        <div className="relative z-10">
          {/* HEADER IMAGE */}
          <div className="relative w-full h-55 md:h-62.5 overflow-hidden bg-[#0d2247]">
            <Image
              src="/images/tka/bg-paket-belajar.webp"
              alt="Background Ornamen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="
            object-cover
            object-center
            transition-transform
            duration-700
            group-hover:scale-[1.025]
          "
              priority
            />

            <div
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            inset-0
            z-10
            bg-linear-to-b
            from-white/8
            via-transparent
            to-[#830026]/15
          "
            />

            <div
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            -left-[20%]
            -top-[45%]
            z-20
            h-[85%]
            w-[65%]
            rotate-[-15deg]
            rounded-full
            bg-white/10
            blur-3xl
          "
            />

            <div className="absolute inset-0 z-20 flex items-end justify-between px-2 md:px-4">
              <div className="relative w-full h-full">
                <Image
                  src="/images/tka/paket-master-tka.webp"
                  alt="Master TKA"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                object-contain
                object-bottom
                transition-transform
                duration-500
                group-hover:scale-[1.015]
              "
                  priority
                />
              </div>
            </div>
          </div>

          {/* TITLE BAR */}
          <div
            className="
          relative
          overflow-hidden

          border-y
          border-white/15

          bg-[#66001d]/90

          py-3

          text-center
          font-title
          text-lg
          font-bold
          tracking-wide
          text-white

          shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(0,0,0,0.15)]

          backdrop-blur-[14px]

          md:text-xl
        ">
            <div
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            inset-x-[15%]
            top-0
            h-px
            bg-linear-to-r
            from-transparent
            via-white/55
            to-transparent
          "
            />

            <span className="relative z-10">Benefit yang didapat</span>
          </div>

          {/* BENEFITS */}
          <div className="p-6 md:p-8 font-desc">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {[
                "Program Private 1 on 1",
                "Free Recording jika Online",
                "Try Out",
                "Jadwal Belajar Fleksibel",
                "Durasi Belajar 120 Menit",
                "Bisa Request Tutor",
                "Sistem Belajar Online / Offline",
                "Progress Report Berkala",
                "Free Pendaftaran",
              ].map((item, i) => (
                <div
                  className="flex items-start text-white text-sm group/item"
                  key={i}>
                  <div
                    className="
                  mr-2
                  mt-0.5
                  flex
                  h-[18px]
                  w-[18px]
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/70

                  bg-white

                  text-[#830026]

                  shadow-[0_3px_8px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,1)]

                  transition-transform
                  duration-300

                  group-hover/item:scale-110
                ">
                    <FaCheck size={9} className="stroke-3" />
                  </div>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="relative z-10 p-6 md:p-8 pt-0 md:pt-0">
          <Link
            href={waLinkDeluxe}
            onClick={(e) => handleClick(e, waLinkDeluxe)}
            target="_blank"
            aria-label="Tanya Paket melalui WhatsApp"
            rel="noopener noreferrer"
            className="
          group/button
          relative

          flex
          h-12
          w-full
          items-center
          justify-center

          overflow-hidden
          rounded-full

          border
          border-white/70

          bg-white

          font-desc
          text-sm
          font-extrabold
          tracking-wider
          text-[#830026]
          uppercase

          shadow-[0_8px_22px_rgba(90,0,30,0.22),inset_0_1px_0_rgba(255,255,255,1)]

          transition-all
          duration-300

          hover:scale-[1.015]
          hover:bg-[#fff6f8]
          hover:shadow-[0_12px_30px_rgba(120,0,40,0.28)]

          active:scale-[0.985]
        ">
            <span
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            left-[12%]
            right-[12%]
            top-0
            h-[45%]
            rounded-b-[80%]
            bg-linear-to-b
            from-white
            to-transparent
          "
            />

            <span
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            -bottom-6
            right-[10%]
            h-10
            w-24
            rounded-full
            bg-[#ff286b]/10
            blur-xl
          "
            />

            <span className="relative z-10">Tanya Paket</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
