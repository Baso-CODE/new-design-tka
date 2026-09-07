export default function JumlahSiswa() {
  return (
    <section
      className="
        relative
        flex
        w-full
        justify-center
        overflow-hidden
        bg-white
        px-4
        py-12
        md:py-20
      ">
      {/* BACKGROUND BLUE REFRACTION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-80
          w-80
          rounded-full
          bg-[#2082e6]/6
          blur-3xl
        "
      />

      {/* BACKGROUND GOLD REFRACTION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-28
          h-80
          w-80
          rounded-full
          bg-[#FFC107]/8
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* ANGKA UTAMA */}
        <div className="relative mb-8 md:mb-12">
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-24
              w-52
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#E53855]/8
              blur-3xl
            "
          />

          <h2
            className="
              relative
              z-10
              mb-2
              font-title
              text-[48px]
              font-extrabold
              leading-none
              tracking-tight
              text-[#E53855]

              drop-shadow-[0_5px_14px_rgba(229,56,85,0.12)]

              sm:text-[64px]
              md:text-[80px]
            ">
            1000++
          </h2>

          <p
            className="
              relative
              z-10
              text-sm
              font-medium
              tracking-wide
              text-slate-700
              sm:text-base
              md:text-xl
            ">
            Alumni Edumatrix Indonesia{" "}
            <span className="font-bold text-[#04397D]">Berhasil Juara TKA</span>
          </p>
        </div>

        {/* LIQUID GLASS STATISTICS CARD */}
        <div
          className="
            group
            relative
            w-full
            overflow-hidden

            rounded-[26px]

            border
            border-white/45

            px-4
            py-6

            shadow-[0_18px_45px_rgba(150,105,0,0.20),0_6px_18px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-1px_0_rgba(125,80,0,0.10)]

            backdrop-blur-[22px]
            backdrop-saturate-[185%]

            transition-all
            duration-500

            hover:-translate-y-1
            hover:shadow-[0_24px_55px_rgba(150,105,0,0.25),0_8px_20px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.82)]

            md:rounded-[32px]
            md:px-12
            md:py-10
          "
          style={{
            background: [
              "linear-gradient(150deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.02) 58%)",
              "radial-gradient(circle at 10% -10%, rgba(255,255,255,0.50) 0%, transparent 35%)",
              "radial-gradient(circle at 90% 120%, rgba(255,235,120,0.34) 0%, transparent 40%)",
              "linear-gradient(135deg, #FFD43B 0%, #FFC107 52%, #EFB300 100%)",
            ].join(", "),
          }}>
          {/* TOP SPECULAR EDGE */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-[8%]
              top-0
              z-30
              h-px
              bg-linear-to-r
              from-transparent
              via-white/95
              to-transparent
            "
          />

          {/* LARGE TOP REFLECTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-[10%]
              -top-[70%]
              z-0
              h-[130%]
              w-[55%]
              rotate-[-12deg]
              rounded-full
              bg-white/25
              blur-3xl
            "
          />

          {/* GOLD LOWER REFRACTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-20
              right-[4%]
              z-0
              h-40
              w-72
              rounded-full
              bg-[#fff1a3]/35
              blur-3xl
            "
          />

          {/* BLUE REFRACTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-20
              -left-12
              z-0
              h-36
              w-44
              rounded-full
              bg-[#4DA3FF]/10
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
              rounded-[25px]
              border
              border-white/15
              md:rounded-[31px]
            "
          />

          <div className="relative z-10 flex w-full items-stretch justify-between">
            {/* ITEM 1 */}
            <div
              className="
                group/item
                flex
                flex-1
                flex-col
                items-center
                justify-center
                px-1
              ">
              <span
                className="
                  text-[22px]
                  font-extrabold
                  leading-tight
                  text-[#04397D]

                  drop-shadow-[0_2px_5px_rgba(4,57,125,0.10)]

                  transition-transform
                  duration-300

                  group-hover/item:scale-105

                  sm:text-[36px]
                  md:text-[48px]
                ">
                91%
              </span>

              <span
                className="
                  mt-1
                  text-[10px]
                  font-bold
                  tracking-wide
                  text-[#04397D]
                  uppercase
                  sm:text-xs
                  sm:tracking-wider
                  md:text-base
                ">
                Tingkat Kelulusan
              </span>
            </div>

            {/* GLASS DIVIDER */}
            <div
              className="
                relative
                mx-1
                h-auto
                min-h-12
                w-px
                shrink-0
                self-stretch
                overflow-hidden
                rounded-full

                bg-white/45

                shadow-[0_0_8px_rgba(255,255,255,0.25)]

                sm:mx-2
                md:mx-4
              ">
              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-x-0
                  top-[10%]
                  h-[35%]
                  bg-white
                  opacity-70
                  blur-[1px]
                "
              />
            </div>

            {/* ITEM 2 */}
            <div
              className="
                group/item
                flex
                flex-1
                flex-col
                items-center
                justify-center
                px-1
              ">
              <span
                className="
                  text-[22px]
                  font-extrabold
                  leading-tight
                  text-[#04397D]

                  drop-shadow-[0_2px_5px_rgba(4,57,125,0.10)]

                  transition-transform
                  duration-300

                  group-hover/item:scale-105

                  sm:text-[36px]
                  md:text-[48px]
                ">
                38
              </span>

              <span
                className="
                  mt-1
                  text-[10px]
                  font-bold
                  tracking-wide
                  text-[#04397D]
                  uppercase
                  sm:text-xs
                  sm:tracking-wider
                  md:text-base
                ">
                Provinsi
              </span>
            </div>

            {/* GLASS DIVIDER */}
            <div
              className="
                relative
                mx-1
                h-auto
                min-h-12
                w-px
                shrink-0
                self-stretch
                overflow-hidden
                rounded-full

                bg-white/45

                shadow-[0_0_8px_rgba(255,255,255,0.25)]

                sm:mx-2
                md:mx-4
              ">
              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-x-0
                  top-[10%]
                  h-[35%]
                  bg-white
                  opacity-70
                  blur-[1px]
                "
              />
            </div>

            {/* ITEM 3 */}
            <div
              className="
                group/item
                flex
                flex-1
                flex-col
                items-center
                justify-center
                px-1
              ">
              <span
                className="
                  text-[22px]
                  font-extrabold
                  leading-tight
                  text-[#04397D]

                  drop-shadow-[0_2px_5px_rgba(4,57,125,0.10)]

                  transition-transform
                  duration-300

                  group-hover/item:scale-105

                  sm:text-[36px]
                  md:text-[48px]
                ">
                98%
              </span>

              <span
                className="
                  mt-1
                  text-[10px]
                  font-bold
                  tracking-wide
                  text-[#04397D]
                  uppercase
                  sm:text-xs
                  sm:tracking-wider
                  md:text-base
                ">
                Tingkat Kepuasan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
