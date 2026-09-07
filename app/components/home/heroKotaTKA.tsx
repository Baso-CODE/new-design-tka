"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import { ContactCs } from "@/app/types/contact.type";
import Image from "next/image";
import Link from "next/link";

interface HeroKotaProps {
  kotaName: string;
  contacts: ContactCs[];
}

export default function HeroKotaTka({ kotaName, contacts }: HeroKotaProps) {
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "single",
    "hero_kota_tka_rotation",
  );

  if (!activeCs || activeCs.length === 0) return null;
  const activeContact = activeCs[0];

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";

  const dynamicLink = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace(
    "+",
    "",
  )}&text=${encodeURIComponent(
    `Halo Kak ${activeContact.nama_cs} ${baseUrl}/, Saya ingin tanya program bimbingan belajar TKA (Tes Kemampuan Akademik) di ${kotaName}. Bagaimana ketentuan program offline dan apa saja pilihan paket serta fasilitasnya?`,
  )}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    rotateCs();

    setTimeout(() => {
      window.open(dynamicLink, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <section
      className="
    relative
    flex
    flex-col
    items-center
    justify-start
    overflow-hidden
    bg-[#056fcb]
    pt-8
    pb-16
    md:pt-28
    md:pb-24
  ">
      {/* BACKGROUND OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-80 mix-blend-screen">
        <Image
          src="/images/tka/bg-overlay.webp"
          alt="Latar belakang gedung"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* BACKGROUND REFRACTION */}
      <div
        aria-hidden="true"
        className="
      pointer-events-none
      absolute
      -left-48
      top-[8%]
      z-0
      h-[500px]
      w-[500px]
      rounded-full
      bg-[#4DA3FF]/18
      blur-3xl
    "
      />

      <div
        aria-hidden="true"
        className="
      pointer-events-none
      absolute
      -right-48
      bottom-[5%]
      z-0
      h-[520px]
      w-[520px]
      rounded-full
      bg-[#FAC61F]/10
      blur-3xl
    "
      />

      {/* =========================================================
      MOBILE & TABLET
  ========================================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-310 flex-col items-center px-2 text-white md:px-4 lg:hidden">
        {/* LOGO */}
        <div
          className="
        relative
        mb-6
        flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-white/25
        bg-white/12
        px-5
        py-2
        shadow-[0_8px_24px_rgba(0,30,80,0.18),inset_0_1px_0_rgba(255,255,255,0.45)]
        backdrop-blur-[18px]
        backdrop-saturate-[180%]
        md:mb-8
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
          via-white/80
          to-transparent
        "
          />

          <Image
            src="/images/logo.webp"
            alt="Edumatrix Indonesia Logo"
            width={160}
            height={45}
            className="relative z-10 h-10 w-auto object-contain md:h-12"
            priority
          />
        </div>

        {/* TITLE */}
        <div className="mx-auto mb-6 max-w-4xl px-2 text-center">
          <h1 className="font-title text-[24px] font-bold leading-tight uppercase sm:text-[28px] md:text-[38px] md:leading-snug">
            BIMBEL & LES PRIVAT TKA SD SMP SMA DI{" "}
            <br className="hidden sm:block" />
            <span className="text-[#faae17]">{kotaName}</span> TERBAIK #1
          </h1>
        </div>

        {/* SERVICE AVAILABILITY */}
        <div className="mb-6 grid w-full max-w-3xl grid-cols-1 gap-2.5 sm:grid-cols-2">
          {/* ONLINE */}
          <div
            className="
          relative
          flex
          min-h-[62px]
          items-center
          gap-3
          overflow-hidden
          rounded-[18px]
          border
          border-white/30
          bg-white/14
          px-4
          py-3
          shadow-[0_8px_22px_rgba(0,25,70,0.16),inset_0_1px_0_rgba(255,255,255,0.40)]
          backdrop-blur-[18px]
          backdrop-saturate-[180%]
        ">
            <span
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            inset-x-[12%]
            top-0
            h-px
            bg-linear-to-r
            from-transparent
            via-white/70
            to-transparent
          "
            />

            <div
              className="
            relative
            z-10
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-cyan-200/30
            bg-cyan-300/12
            shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]
          ">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)] animate-pulse" />
            </div>

            <div className="relative z-10 min-w-0 text-left">
              <div className="text-xs font-extrabold text-white sm:text-sm">
                🌐 Online
              </div>
              <div className="mt-0.5 text-[11.5px] font-medium leading-snug text-white/90 sm:text-xs">
                Tersedia untuk seluruh Indonesia
              </div>
            </div>
          </div>

          {/* OFFLINE */}
          <div
            className="
          relative
          flex
          min-h-[62px]
          items-center
          gap-3
          overflow-hidden
          rounded-[18px]
          border
          border-[#faae17]/35
          bg-[#faae17]/12
          px-4
          py-3
          shadow-[0_8px_22px_rgba(90,55,0,0.14),inset_0_1px_0_rgba(255,255,255,0.30)]
          backdrop-blur-[18px]
          backdrop-saturate-[180%]
        ">
            <span
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            inset-x-[12%]
            top-0
            h-px
            bg-linear-to-r
            from-transparent
            via-[#ffe798]/70
            to-transparent
          "
            />

            <div
              className="
            relative
            z-10
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#faae17]/35
            bg-[#faae17]/15
          ">
              <span className="h-2.5 w-2.5 rounded-full bg-[#faae17] shadow-[0_0_9px_rgba(250,174,23,0.65)]" />
            </div>

            <div className="relative z-10 min-w-0 text-left">
              <div className="text-xs font-extrabold text-[#ffd66b] sm:text-sm">
                📍 Offline
              </div>

              <div className="mt-0.5 text-[11.5px] font-medium leading-snug text-white/80 sm:text-xs">
                Jabodetabek & Yogyakarta
              </div>

              <div className="mt-0.4 text-[11.5px] leading-snug text-[#ffd66b] sm:text-[11px] font-medium">
                Area lain dapat direquest • estimasi 3 hari
              </div>
            </div>
          </div>
        </div>

        {/* HERO */}
        <div className="flex w-full flex-col items-center gap-6">
          <div className="relative flex aspect-16/10 w-full max-w-2xl justify-center md:aspect-2/1">
            <Image
              loading="eager"
              src="/images/tka/hero-tka.webp"
              alt={`Siswa berprestasi bimbingan belajar TKA di ${kotaName}`}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain object-center"
              priority
              fetchPriority="high"
            />
          </div>

          {/* MOBILE GLASS CARD */}
          <div
            className="
          relative
          z-10
          -mt-10
          flex
          w-full
          max-w-3xl
          flex-col
          gap-6
          overflow-hidden
          rounded-[30px]
          border
          border-white/45
          bg-white/82
          p-6
          text-slate-800
          shadow-[0_24px_60px_rgba(0,25,80,0.24),0_8px_20px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.95)]
          backdrop-blur-[26px]
          backdrop-saturate-[185%]
          md:p-8
        ">
            <span
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            inset-x-[10%]
            top-0
            h-px
            bg-linear-to-r
            from-transparent
            via-white
            to-transparent
          "
            />

            <span
              aria-hidden="true"
              className="
            pointer-events-none
            absolute
            -right-14
            -bottom-14
            h-32
            w-40
            rounded-full
            bg-[#4DA3FF]/12
            blur-3xl
          "
            />

            <p className="relative z-10 text-center font-desc text-sm font-medium leading-relaxed text-[#314b8a] md:text-base">
              Edumatrix hadir di{" "}
              <strong className="uppercase">{kotaName}</strong> sebagai
              bimbingan belajar dan les privat terbaik untuk persiapan{" "}
              <strong>Tes Kemampuan Akademik (TKA)</strong>. Mempersiapkan
              generasi juara dengan program Pendalaman Materi, Penguasaan TKA
              (Saintek & Soshum), Latihan Soal HOTS, Try Out Berkala, dan
              Evaluasi Belajar untuk meraih nilai maksimal di sekolah hingga
              tembus Kampus Impian!
            </p>

            <div className="relative z-10 flex w-full justify-center">
              <Link
                href={dynamicLink}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Daftar Sekarang via WhatsApp dengan ${activeContact.nama_cs}`}
                className="
              group
              relative
              inline-flex
              h-14
              w-full
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-white/45
              bg-[#fac61f]
              py-1
              pl-6
              pr-14
              font-medium
              text-neutral-50
              shadow-[0_10px_26px_rgba(120,80,0,0.22),inset_0_1px_0_rgba(255,255,255,0.55)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_14px_32px_rgba(120,80,0,0.28),inset_0_1px_0_rgba(255,255,255,0.7)]
              md:w-fit
            ">
                <span
                  aria-hidden="true"
                  className="
                pointer-events-none
                absolute
                inset-x-[15%]
                top-0
                h-[40%]
                rounded-b-[80%]
                bg-linear-to-b
                from-white/30
                to-transparent
              "
                />

                <span className="relative z-10 pr-2 font-bold whitespace-nowrap text-white">
                  Daftar Sekarang
                </span>

                <div
                  className="
                absolute
                right-1
                inline-flex
                h-12
                w-12
                items-center
                justify-end
                overflow-hidden
                rounded-full
                border
                border-white/20
                bg-[#056fcb]/90
                shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]
                backdrop-blur-xl
                transition-[width]
                duration-300
                group-hover:w-[calc(100%-8px)]
              ">
                  <div className="mr-3.5 flex items-center justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-neutral-50">
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
      DESKTOP
  ========================================================= */}
      <div className="relative z-10 mx-auto hidden w-full max-w-310 flex-col px-4 text-white lg:flex lg:px-0">
        <div className="mb-10 flex w-full flex-row items-center justify-between">
          {/* LEFT */}
          <div className="flex w-full flex-col items-start gap-6 text-left lg:w-[50%]">
            <h1 className="font-title text-[28px] font-bold leading-snug uppercase md:text-[32px] lg:text-[38px]">
              BIMBEL & LES PRIVAT TKA SD SMP SMA DI{" "}
              <br className="hidden lg:block" />
              <span className="text-[#faae17]">{kotaName}</span> TERBAIK #1
            </h1>

            {/* EASY TO READ SERVICE STATUS */}
            <div className="grid w-full max-w-xl grid-cols-1 gap-2.5 xl:grid-cols-2">
              {/* ONLINE */}
              <div
                className="
              relative
              flex
              min-h-[64px]
              items-center
              gap-3
              overflow-hidden
              rounded-[18px]
              border
              border-white/30
              bg-white/12
              px-4
              py-3
              shadow-[0_8px_22px_rgba(0,25,70,0.16),inset_0_1px_0_rgba(255,255,255,0.38)]
              backdrop-blur-[18px]
              backdrop-saturate-[180%]
            ">
                <span
                  aria-hidden="true"
                  className="
                pointer-events-none
                absolute
                inset-x-[12%]
                top-0
                h-px
                bg-linear-to-r
                from-transparent
                via-white/70
                to-transparent
              "
                />

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-300/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)] animate-pulse" />
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-white">
                    🌐 Online
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-white/90">
                    Seluruh Indonesia
                  </div>
                </div>
              </div>

              {/* OFFLINE */}
              <div
                className="
              relative
              flex
              min-h-[64px]
              items-center
              gap-3
              overflow-hidden
              rounded-[18px]
              border
              border-[#faae17]/35
              bg-[#faae17]/12
              px-4
              py-3
              shadow-[0_8px_22px_rgba(90,55,0,0.14),inset_0_1px_0_rgba(255,255,255,0.30)]
              backdrop-blur-[18px]
              backdrop-saturate-[180%]
            ">
                <span
                  aria-hidden="true"
                  className="
                pointer-events-none
                absolute
                inset-x-[12%]
                top-0
                h-px
                bg-linear-to-r
                from-transparent
                via-[#ffe798]/70
                to-transparent
              "
                />

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#faae17]/30 bg-[#faae17]/15">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#faae17] shadow-[0_0_9px_rgba(250,174,23,0.65)]" />
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-[#ffd66b]">
                    📍 Offline
                  </div>

                  <div className="mt-0.5 text-xs font-medium leading-snug text-white/90">
                    Jabodetabek & Yogyakarta
                  </div>

                  <div className="mt-0.5 text-[12px] leading-snug font-medium text-[#ffd66b]/90">
                    Request area lain • estimasi 3 hari
                  </div>
                </div>
              </div>
            </div>

            <p className="font-desc text-[15px] font-medium leading-relaxed text-gray-100 md:text-[16px]">
              Edumatrix hadir di{" "}
              <span className="font-extrabold uppercase text-[#faae17]">
                {kotaName}
              </span>{" "}
              sebagai bimbingan belajar dan les privat terbaik untuk persiapan{" "}
              <strong>Tes Kemampuan Akademik (TKA)</strong>. Program kami
              dirancang khusus untuk membantu siswa SD, SMP, dan SMA agar lebih
              siap, percaya diri, dan mampu menembus target sekolah unggulan
              impian.
            </p>

            {/* CTA */}
            <div className="flex w-full max-w-md justify-start">
              <Link
                href={dynamicLink}
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Daftar Sekarang via WhatsApp dengan ${activeContact.nama_cs}`}
                className="
              group
              relative
              inline-flex
              h-14
              w-full
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-white/40
              bg-[#fac61f]
              py-1
              pl-6
              pr-14
              font-medium
              text-neutral-50
              shadow-[0_10px_26px_rgba(120,80,0,0.22),inset_0_1px_0_rgba(255,255,255,0.55)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_14px_32px_rgba(120,80,0,0.28),inset_0_1px_0_rgba(255,255,255,0.7)]
            ">
                <span
                  aria-hidden="true"
                  className="
                pointer-events-none
                absolute
                inset-x-[15%]
                top-0
                h-[40%]
                rounded-b-[80%]
                bg-linear-to-b
                from-white/30
                to-transparent
              "
                />

                <span className="relative z-10 pr-2 font-bold">
                  Daftar Sekarang
                </span>

                <div
                  className="
                absolute
                right-1
                inline-flex
                h-12
                w-12
                items-center
                justify-end
                overflow-hidden
                rounded-full
                border
                border-white/20
                bg-[#056fcb]/90
                shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]
                backdrop-blur-xl
                transition-[width]
                duration-300
                group-hover:w-[calc(100%-8px)]
              ">
                  <div className="mr-3.5 flex items-center justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-neutral-50">
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto flex aspect-square w-full max-w-2xl items-center justify-center lg:-mb-28 lg:w-[50%]">
            <Image
              loading="eager"
              src="/images/tka/hero-tka.webp"
              alt={`Siswa berprestasi bimbingan belajar TKA di ${kotaName}`}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain object-center lg:scale-110"
              priority
              fetchPriority="high"
            />
          </div>
        </div>

        {/* BOTTOM GLASS CARD */}
        <div
          className="
        relative
        z-10
        mx-auto
        -mt-10
        w-full
        max-w-full
        overflow-hidden
        rounded-[30px]
        border
        border-white/45
        bg-white/82
        p-8
        text-slate-800
        shadow-[0_24px_60px_rgba(0,25,80,0.24),0_8px_20px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.95)]
        backdrop-blur-[26px]
        backdrop-saturate-[185%]
      ">
          <span
            aria-hidden="true"
            className="
          pointer-events-none
          absolute
          inset-x-[8%]
          top-0
          h-px
          bg-linear-to-r
          from-transparent
          via-white
          to-transparent
        "
          />

          <span
            aria-hidden="true"
            className="
          pointer-events-none
          absolute
          -bottom-16
          right-[5%]
          h-36
          w-56
          rounded-full
          bg-[#4DA3FF]/10
          blur-3xl
        "
          />

          <p className="relative z-10 text-center font-desc text-base font-bold leading-relaxed text-[#314b8a]">
            Edumatrix hadir di <strong className="uppercase">{kotaName}</strong>{" "}
            sebagai bimbingan belajar dan les privat terbaik untuk persiapan{" "}
            <strong>Tes Kemampuan Akademik (TKA)</strong>. Mempersiapkan
            generasi juara dengan program Pendalaman Materi, Penguasaan TKA
            (Saintek & Soshum), Latihan Soal HOTS, Try Out Berkala, dan Evaluasi
            Belajar untuk meraih nilai maksimal di sekolah hingga tembus Kampus
            Impian!
          </p>
        </div>
      </div>
    </section>
  );
}
