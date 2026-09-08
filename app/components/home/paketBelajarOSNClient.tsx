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

  const waLinkPriority = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace(
    "+",
    "",
  )}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} ${baseUrl} saya ingin Daftar Paket JUARA TKA. Bagaimana penjelasan detail programnya?`,
  )}`;

  const waLinkDeluxe = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace(
    "+",
    "",
  )}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} ${baseUrl} saya ingin Daftar Paket MASTER TKA. Bagaimana penjelasan detail programnya?`,
  )}`;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    e.preventDefault();
    rotateCs();

    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 50);
  };

  const juaraBenefits = [
    "Program Private 1 on 1",
    "Free Recording jika Online",
    "Try Out",
    "Jadwal Belajar Fleksibel",
    "Durasi Belajar 90 Menit",
    "Bisa Request Tutor",
    "Sistem Belajar Online / Offline",
    "Progress Report Berkala",
    "Free Pendaftaran",
  ];

  const masterBenefits = [
    "Program Private 1 on 1",
    "Free Recording jika Online",
    "Try Out",
    "Jadwal Belajar Fleksibel",
    "Durasi Belajar 120 Menit",
    "Bisa Request Tutor",
    "Sistem Belajar Online / Offline",
    "Progress Report Berkala",
    "Free Pendaftaran",
  ];

  return (
    <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:gap-12">
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
          border-white/35

          shadow-[0_24px_58px_rgba(1,48,117,0.34),0_8px_24px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,20,70,0.16)]

          transition-all
          duration-500
          ease-out

          hover:-translate-y-1.5
          hover:scale-[1.008]
          hover:border-white/50
          hover:shadow-[0_30px_70px_rgba(1,70,170,0.42),0_12px_30px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(0,20,70,0.18)]
        "
        style={{
          background: [
            "linear-gradient(145deg, rgba(255,255,255,0.17) 0%, rgba(255,255,255,0.045) 28%, transparent 52%)",
            "radial-gradient(circle at 14% -8%, rgba(255,255,255,0.18) 0%, transparent 34%)",
            "radial-gradient(circle at 100% 100%, rgba(22,150,255,0.26) 0%, transparent 38%)",
            "linear-gradient(155deg, #033c95 0%, #045bb3 48%, #0570cc 100%)",
          ].join(", "),
        }}>
        {/* GLASS SURFACE */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0

            bg-[linear-gradient(145deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.025)_34%,transparent_58%)]
          "
        />

        {/* TOP SPECULAR EDGE */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-[8%]
            top-0
            z-40

            h-px

            bg-linear-to-r
            from-transparent
            via-white/95
            to-transparent
          "
        />

        {/* LARGE WHITE REFLECTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-[28%]
            -top-[13%]
            z-0

            h-[42%]
            w-[80%]

            rotate-[-16deg]
            rounded-full

            bg-white/12
            blur-3xl

            transition-transform
            duration-700

            group-hover:translate-x-10
          "
        />

        {/* BLUE REFRACTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-24
            -right-16
            z-0

            h-56
            w-72

            rounded-full

            bg-[#1696ff]/32
            blur-3xl
          "
        />

        {/* INNER EDGE */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-[1px]
            z-30

            rounded-[31px]

            border
            border-white/[0.08]
          "
        />

        <div className="relative z-10">
          {/* HEADER IMAGE */}
          <div className="relative h-55 w-full overflow-hidden bg-[#0d2247] md:h-62.5">
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

            {/* IMAGE GLASS OVERLAY */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                z-10

                bg-linear-to-b
                from-white/8
                via-transparent
                to-[#033c95]/18
              "
            />

            {/* IMAGE SPECULAR */}
            <span
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

            {/* IMAGE BOTTOM GLOW */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-10

                h-20

                bg-linear-to-t
                from-[#033c95]/30
                to-transparent
              "
            />

            <div className="absolute inset-0 z-20 flex items-end justify-between px-2 md:px-4">
              <div className="relative h-full w-full">
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
              border-white/20

              py-3

              text-center
              font-title
              text-lg
              font-bold
              tracking-wide
              text-white

              shadow-[inset_0_1px_0_rgba(255,255,255,0.20),inset_0_-1px_0_rgba(0,0,0,0.18)]

              backdrop-blur-[18px]
              backdrop-saturate-[180%]

              md:text-xl
            "
            style={{
              background: [
                "linear-gradient(145deg, rgba(255,255,255,0.10), transparent 50%)",
                "rgba(3,41,92,0.92)",
              ].join(", "),
            }}>
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
                via-white/65
                to-transparent
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-[10%]
                -top-[90%]

                h-[140%]
                w-[55%]

                rotate-[-15deg]
                rounded-full

                bg-white/10
                blur-xl
              "
            />

            <span className="relative z-10">Benefit yang didapat</span>
          </div>

          {/* BENEFITS */}
          <div className="p-6 font-desc md:p-8">
            <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              {juaraBenefits.map((item, i) => (
                <div
                  key={i}
                  className="
                    group/item
                    flex
                    items-start

                    rounded-xl

                    px-1
                    py-0.5

                    text-sm
                    text-white
                  ">
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
                      border-white/80

                      bg-white

                      text-[#04397D]

                      shadow-[0_3px_8px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,1)]

                      transition-transform
                      duration-300

                      group-hover/item:scale-110
                    ">
                    <FaCheck size={9} className="stroke-3" />
                  </div>

                  <span className="leading-relaxed text-white/95">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="relative z-10 p-6 pt-0 md:p-8 md:pt-0">
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
              border-white/80

              bg-white/95

              font-desc
              text-sm
              font-extrabold
              tracking-wider
              text-[#04397D]
              uppercase

              shadow-[0_10px_26px_rgba(0,25,80,0.25),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(4,57,125,0.06)]

              backdrop-blur-[18px]
              backdrop-saturate-[180%]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:scale-[1.015]
              hover:bg-white
              hover:shadow-[0_14px_34px_rgba(0,35,100,0.30),inset_0_1px_0_rgba(255,255,255,1)]

              active:translate-y-0
              active:scale-[0.985]
            ">
            {/* BUTTON TOP REFLECTION */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-[10%]
                right-[10%]
                top-0

                h-[48%]

                rounded-b-[80%]

                bg-linear-to-b
                from-white
                to-transparent
              "
            />

            {/* BUTTON BLUE REFRACTION */}
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

                bg-[#4DA3FF]/14
                blur-xl
              "
            />

            {/* BUTTON SHINE */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-[45%]
                top-0

                h-full
                w-[35%]

                skew-x-[-20deg]

                bg-linear-to-r
                from-transparent
                via-white/60
                to-transparent

                opacity-0

                transition-all
                duration-700

                group-hover/button:left-[115%]
                group-hover/button:opacity-100
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
          border-white/35

          shadow-[0_24px_58px_rgba(115,0,34,0.34),0_8px_24px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(65,0,20,0.16)]

          transition-all
          duration-500
          ease-out

          hover:-translate-y-1.5
          hover:scale-[1.008]
          hover:border-white/50
          hover:shadow-[0_30px_70px_rgba(170,0,55,0.42),0_12px_30px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(65,0,20,0.18)]
        "
        style={{
          background: [
            "linear-gradient(145deg, rgba(255,255,255,0.17) 0%, rgba(255,255,255,0.045) 28%, transparent 52%)",
            "radial-gradient(circle at 14% -8%, rgba(255,255,255,0.18) 0%, transparent 34%)",
            "radial-gradient(circle at 100% 100%, rgba(255,40,107,0.24) 0%, transparent 38%)",
            "linear-gradient(155deg, #830026 0%, #ad0038 48%, #d9044d 100%)",
          ].join(", "),
        }}>
        {/* GLASS SURFACE */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0

            bg-[linear-gradient(145deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.025)_34%,transparent_58%)]
          "
        />

        {/* TOP SPECULAR EDGE */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-[8%]
            top-0
            z-40

            h-px

            bg-linear-to-r
            from-transparent
            via-white/95
            to-transparent
          "
        />

        {/* LARGE WHITE REFLECTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-[28%]
            -top-[13%]
            z-0

            h-[42%]
            w-[80%]

            rotate-[-16deg]
            rounded-full

            bg-white/12
            blur-3xl

            transition-transform
            duration-700

            group-hover:translate-x-10
          "
        />

        {/* RED REFRACTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-24
            -right-16
            z-0

            h-56
            w-72

            rounded-full

            bg-[#ff286b]/28
            blur-3xl
          "
        />

        {/* INNER EDGE */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-[1px]
            z-30

            rounded-[31px]

            border
            border-white/[0.08]
          "
        />

        <div className="relative z-10">
          {/* HEADER IMAGE */}
          <div className="relative h-55 w-full overflow-hidden bg-[#0d2247] md:h-62.5">
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

            {/* IMAGE GLASS OVERLAY */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                z-10

                bg-linear-to-b
                from-white/8
                via-transparent
                to-[#830026]/18
              "
            />

            {/* IMAGE SPECULAR */}
            <span
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

            {/* IMAGE BOTTOM GLOW */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-10

                h-20

                bg-linear-to-t
                from-[#830026]/25
                to-transparent
              "
            />

            <div className="absolute inset-0 z-20 flex items-end justify-between px-2 md:px-4">
              <div className="relative h-full w-full">
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
              border-white/20

              py-3

              text-center
              font-title
              text-lg
              font-bold
              tracking-wide
              text-white

              shadow-[inset_0_1px_0_rgba(255,255,255,0.20),inset_0_-1px_0_rgba(0,0,0,0.18)]

              backdrop-blur-[18px]
              backdrop-saturate-[180%]

              md:text-xl
            "
            style={{
              background: [
                "linear-gradient(145deg, rgba(255,255,255,0.10), transparent 50%)",
                "rgba(102,0,29,0.92)",
              ].join(", "),
            }}>
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
                via-white/65
                to-transparent
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-[10%]
                -top-[90%]

                h-[140%]
                w-[55%]

                rotate-[-15deg]
                rounded-full

                bg-white/10
                blur-xl
              "
            />

            <span className="relative z-10">Benefit yang didapat</span>
          </div>

          {/* BENEFITS */}
          <div className="p-6 font-desc md:p-8">
            <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              {masterBenefits.map((item, i) => (
                <div
                  key={i}
                  className="
                    group/item
                    flex
                    items-start

                    rounded-xl

                    px-1
                    py-0.5

                    text-sm
                    text-white
                  ">
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
                      border-white/80

                      bg-white

                      text-[#830026]

                      shadow-[0_3px_8px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,1)]

                      transition-transform
                      duration-300

                      group-hover/item:scale-110
                    ">
                    <FaCheck size={9} className="stroke-3" />
                  </div>

                  <span className="leading-relaxed text-white/95">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="relative z-10 p-6 pt-0 md:p-8 md:pt-0">
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
              border-white/80

              bg-white/95

              font-desc
              text-sm
              font-extrabold
              tracking-wider
              text-[#830026]
              uppercase

              shadow-[0_10px_26px_rgba(90,0,30,0.24),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(131,0,38,0.06)]

              backdrop-blur-[18px]
              backdrop-saturate-[180%]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:scale-[1.015]
              hover:bg-white
              hover:shadow-[0_14px_34px_rgba(120,0,40,0.30),inset_0_1px_0_rgba(255,255,255,1)]

              active:translate-y-0
              active:scale-[0.985]
            ">
            {/* BUTTON TOP REFLECTION */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-[10%]
                right-[10%]
                top-0

                h-[48%]

                rounded-b-[80%]

                bg-linear-to-b
                from-white
                to-transparent
              "
            />

            {/* BUTTON RED REFRACTION */}
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

                bg-[#ff286b]/12
                blur-xl
              "
            />

            {/* BUTTON SHINE */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-[45%]
                top-0

                h-full
                w-[35%]

                skew-x-[-20deg]

                bg-linear-to-r
                from-transparent
                via-white/60
                to-transparent

                opacity-0

                transition-all
                duration-700

                group-hover/button:left-[115%]
                group-hover/button:opacity-100
              "
            />

            <span className="relative z-10">Tanya Paket</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
