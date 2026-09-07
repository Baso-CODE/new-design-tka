"use client";

import { schools } from "@/app/components/data/school";
import { useMemo, useState } from "react";

const AsalSekolahSiswaEdumatrix = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => schools.filter((s) => s.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 px-4 font-title"
      style={{
        background: "linear-gradient(to bottom, #0571cd 0%, #033790 100%)",
      }}>
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Asal Sekolah Siswa <span className="text-[#fac61f]">Edumatrix</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-blue-100 font-desc text-sm sm:text-base max-w-xl mx-auto opacity-90">
            Bergabung bersama siswa dari ratusan sekolah terbaik di seluruh
            Indonesia.
          </p>
        </div>

        {/* Stats + Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Count Pill */}
          <div
            className="
        relative
        flex
        items-center
        gap-2
        overflow-hidden

        rounded-full
        border
        border-white/30

        bg-white/12

        px-5
        py-2.5

        text-white

        shadow-[0_8px_24px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.05)]

        backdrop-blur-[20px]
        backdrop-saturate-[180%]
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
          via-white/70
          to-transparent
        "
            />

            <span
              aria-hidden="true"
              className="
          pointer-events-none
          absolute
          -bottom-4
          right-4
          h-8
          w-20
          rounded-full
          bg-cyan-400/15
          blur-xl
        "
            />

            <span
              className="
          relative
          z-10
          h-2
          w-2
          shrink-0
          rounded-full
          bg-cyan-300
          shadow-[0_0_10px_rgba(103,232,249,0.8)]
          animate-pulse
        "
            />

            <span className="relative z-10 text-sm text-white/90">
              Menampilkan{" "}
              <strong className="text-cyan-300">{filtered.length}</strong>
              <span className="text-white font-bold">
                /{schools.length}
              </span>{" "}
              sekolah
            </span>
          </div>

          {/* Search */}
          <div
            className="
        group
        relative
        w-full
        overflow-hidden
        rounded-full

        border
        border-white/35

        bg-white/78

        shadow-[0_8px_24px_rgba(0,25,80,0.16),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(0,60,140,0.06)]

        backdrop-blur-[20px]
        backdrop-saturate-[180%]

        transition-all
        duration-300

        focus-within:border-white/60
        focus-within:bg-white/90
        focus-within:shadow-[0_10px_28px_rgba(0,60,160,0.22),0_0_0_3px_rgba(96,165,250,0.16),inset_0_1px_0_rgba(255,255,255,1)]

        sm:w-72
      ">
            <span
              aria-hidden="true"
              className="
          pointer-events-none
          absolute
          left-[10%]
          right-[10%]
          top-0
          z-10
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
          -bottom-4
          right-6
          h-8
          w-20
          rounded-full
          bg-[#4DA3FF]/12
          blur-xl
        "
            />

            <svg
              className="
          pointer-events-none
          absolute
          left-3.5
          top-1/2
          z-20
          h-4
          w-4
          -translate-y-1/2
          text-[#316aa7]
        "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Cari sekolah..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="
          relative
          z-10
          w-full

          bg-transparent

          py-2.5
          pl-10
          pr-10

          text-sm
          font-medium
          text-[#183b61]

          placeholder:text-[#63809e]

          outline-none
        "
            />

            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Hapus pencarian"
                className="
            absolute
            right-2
            top-1/2
            z-20

            flex
            h-7
            w-7
            -translate-y-1/2
            items-center
            justify-center

            rounded-full

            border
            border-white/40

            bg-white/50

            text-[#53718e]

            shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]

            backdrop-blur-md

            transition-all
            duration-200

            hover:bg-white/80
            hover:text-[#164e86]
            active:scale-90
          ">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* School List Liquid Glass Card */}
        <div
          className="
      relative
      overflow-hidden
      rounded-[32px]

      border
      border-white/35

      bg-white/82

      shadow-[0_24px_60px_rgba(0,35,90,0.22),0_8px_24px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(0,60,140,0.05)]

      backdrop-blur-[28px]
      backdrop-saturate-[185%]
    ">
          {/* TOP SPECULAR REFLECTION */}
          <span
            aria-hidden="true"
            className="
        pointer-events-none
        absolute
        inset-x-10
        top-0
        z-30
        h-px
        bg-linear-to-r
        from-transparent
        via-white
        to-transparent
      "
          />

          {/* LEFT REFLECTION */}
          <span
            aria-hidden="true"
            className="
        pointer-events-none
        absolute
        -left-20
        -top-24
        z-0
        h-52
        w-80
        rotate-[-15deg]
        rounded-full
        bg-white/55
        blur-3xl
      "
          />

          {/* BLUE REFRACTION */}
          <span
            aria-hidden="true"
            className="
        pointer-events-none
        absolute
        -bottom-28
        -right-20
        z-0
        h-56
        w-72
        rounded-full
        bg-[#4DA3FF]/12
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
        rounded-[31px]
        border
        border-white/40
      "
          />

          <div className="relative z-10 overflow-y-auto max-h-120 p-4 sm:p-6 custom-scrollbar">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
                {filtered.map((school, index) => (
                  <div
                    key={index}
                    className="
                group
                relative
                flex
                items-center
                gap-2.5

                overflow-hidden
                rounded-xl

                border
                border-transparent

                px-3
                py-2.5

                transition-all
                duration-300

                hover:border-white/70
                hover:bg-white/65
                hover:shadow-[0_5px_16px_rgba(0,60,140,0.10),inset_0_1px_0_rgba(255,255,255,0.9)]

                hover:backdrop-blur-xl
              ">
                    {/* ITEM REFLECTION */}
                    <span
                      aria-hidden="true"
                      className="
                  pointer-events-none
                  absolute
                  left-[12%]
                  right-[12%]
                  top-0
                  h-px

                  bg-linear-to-r
                  from-transparent
                  via-white
                  to-transparent

                  opacity-0
                  transition-opacity
                  duration-300

                  group-hover:opacity-80
                "
                    />

                    {/* DOT */}
                    <span
                      className="
                  relative
                  z-10

                  h-2
                  w-2
                  shrink-0

                  rounded-full

                  bg-[#2082e6]

                  shadow-[0_0_0_3px_rgba(32,130,230,0.10)]

                  transition-all
                  duration-300

                  group-hover:scale-125
                  group-hover:bg-[#056fcb]
                  group-hover:shadow-[0_0_0_4px_rgba(32,130,230,0.13),0_0_10px_rgba(32,130,230,0.25)]
                "
                    />

                    <span
                      className="
                  relative
                  z-10

                  text-sm
                  font-medium
                  leading-snug
                  text-[#334e68]

                  transition-colors
                  duration-300

                  group-hover:text-[#033790]
                ">
                      {school}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                {/* EMPTY ICON GLASS */}
                <div
                  className="
              relative
              mb-4

              flex
              h-14
              w-14
              items-center
              justify-center

              overflow-hidden
              rounded-2xl

              border
              border-white/70

              bg-white/60

              text-[#7b97b5]

              shadow-[0_8px_20px_rgba(0,50,120,0.10),inset_0_1px_0_rgba(255,255,255,1)]

              backdrop-blur-xl
            ">
                  <span
                    aria-hidden="true"
                    className="
                pointer-events-none
                absolute
                inset-x-2
                top-0
                h-[45%]
                rounded-b-[70%]
                bg-linear-to-b
                from-white
                to-transparent
              "
                  />

                  <svg
                    className="relative z-10 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                    />
                  </svg>
                </div>

                <p className="text-[#56718d] text-sm">
                  Tidak ada sekolah dengan nama{" "}
                  <strong className="text-[#173f67]">
                    &ldquo;{query}&rdquo;
                  </strong>
                </p>

                <button
                  onClick={() => setQuery("")}
                  className="
              relative
              mt-4
              overflow-hidden

              rounded-full

              border
              border-[#2082e6]/15

              bg-[#2082e6]/10

              px-4
              py-2

              text-xs
              font-semibold
              text-[#056fcb]

              shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]

              backdrop-blur-md

              transition-all
              duration-300

              hover:bg-[#2082e6]/15
              hover:text-[#034f98]

              active:scale-95
            ">
                  Reset pencarian
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

AsalSekolahSiswaEdumatrix.displayName = "AsalSekolahSiswaEdumatrix";
export default AsalSekolahSiswaEdumatrix;
