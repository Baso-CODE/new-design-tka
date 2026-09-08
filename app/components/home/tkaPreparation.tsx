import { Check, ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function TKAPreparation() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
      ">
      {/* AMBIENT BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-96
          w-96
          rounded-full
          bg-[#4DA3FF]/7
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-96
          w-96
          rounded-full
          bg-[#FAAE17]/6
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-350 p-4 py-10 font-title">
        <div className="flex flex-col gap-8">
          {/* =========================================================
              SECTION ATAS
          ========================================================= */}
          <div>
            <h2 className="mb-8 text-center text-2xl font-bold text-[#0b2b6b] md:text-[32px]">
              Kenapa Persiapan TKA itu <br className="hidden sm:block" />
              <span className="italic">“Sangat Penting”</span>?
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {[
                {
                  img: "/images/preperation/university.png",
                  alt: "Icon PTN",
                  title: "Mengamankan Kuota PTN Favorit",
                  desc: "Hasil TKA menjadi salah satu faktor perhitungan dalam seleksi SNBP.",
                },
                {
                  img: "/images/preperation/open-book.png",
                  alt: "Icon Validasi Rapor",
                  title: "Validasi Rapor",
                  desc: "TKA menjadi standar nasional penilaian yang objektif.",
                },
                {
                  img: "/images/preperation/connection.png",
                  alt: "Icon Persiapan Masa Depan",
                  title: "Persiapan Masa Depan",
                  desc: "Hasil TKA dapat digunakan juga sebagai keperluan seleksi akademik lainnya.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-4
                    overflow-hidden

                    rounded-[28px]

                    border
                    border-white/30

                    p-5
                    text-white

                    shadow-[0_18px_42px_rgba(0,55,130,0.22),0_5px_14px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.38)]

                    backdrop-blur-[20px]
                    backdrop-saturate-[180%]

                    transition-all
                    duration-500
                    ease-out

                    hover:-translate-y-1
                    hover:scale-[1.01]
                    hover:border-white/45

                    hover:shadow-[0_26px_55px_rgba(0,65,150,0.28),0_8px_20px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.50)]

                    md:p-6
                  "
                  style={{
                    background: [
                      "linear-gradient(150deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 32%, transparent 58%)",
                      "radial-gradient(circle at 12% -20%, rgba(255,255,255,0.22), transparent 38%)",
                      "linear-gradient(145deg, #0867d5 0%, #056fcb 50%, #044f9f 100%)",
                    ].join(", "),
                  }}>
                  {/* TOP SPECULAR */}
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
                      via-white/85
                      to-transparent
                    "
                  />

                  {/* BLUE REFRACTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-12
                      -right-8
                      h-28
                      w-32
                      rounded-full
                      bg-[#4DA3FF]/18
                      blur-2xl
                    "
                  />

                  {/* ICON GLASS */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-20
                      w-20
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden

                      rounded-[20px]

                      border
                      border-white/60

                      bg-white/82

                      shadow-[0_8px_20px_rgba(0,30,80,0.12),inset_0_1px_0_rgba(255,255,255,1)]

                      backdrop-blur-xl

                      transition-transform
                      duration-500

                      group-hover:scale-[1.04]
                    ">
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-x-[10%]
                        top-0
                        h-[45%]
                        rounded-b-[75%]
                        bg-linear-to-b
                        from-white
                        to-transparent
                      "
                    />

                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={60}
                      height={60}
                      className="relative z-10 object-contain"
                    />
                  </div>

                  <div className="relative z-10 flex flex-col gap-1">
                    <h3 className="text-base font-bold leading-tight md:text-lg">
                      {item.title}
                    </h3>

                    <p className="font-desc text-xs leading-relaxed text-white/88 md:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
              SECTION BAWAH
          ========================================================= */}
          <div
            className="
              relative
              mt-2
              flex
              w-full
              flex-col
              items-stretch
              overflow-hidden

              rounded-[32px]

              border
              border-[#014aac]/20

              bg-white/75

              shadow-[0_22px_55px_rgba(0,50,120,0.16),0_7px_20px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.95)]

              backdrop-blur-[24px]
              backdrop-saturate-[180%]

              md:flex-row
            ">
            {/* TOP GLASS EDGE */}
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
                via-white
                to-transparent
              "
            />

            {/* LEFT PANEL */}
            <div
              className="
                relative
                z-10
                flex
                min-h-45
                w-full
                flex-row
                items-center
                overflow-hidden

                md:min-h-75
                md:w-[45%]
              "
              style={{
                background: [
                  "linear-gradient(150deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 35%, transparent 60%)",
                  "radial-gradient(circle at 15% -20%, rgba(255,255,255,0.20), transparent 38%)",
                  "linear-gradient(145deg, #014aac 0%, #056fcb 58%, #033790 100%)",
                ].join(", "),
              }}>
              {/* REFRACTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -right-8
                  h-36
                  w-40
                  rounded-full
                  bg-[#4DA3FF]/18
                  blur-3xl
                "
              />

              {/* IMAGE */}
              <div className="relative order-1 h-36 w-[45%] self-end md:absolute md:bottom-0 md:h-[120%] md:w-[50%] md:self-auto">
                <Image
                  src="/images/tka/tka-preparation.webp"
                  alt="Persiapan Siswa TKA"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain object-bottom"
                  priority
                />
              </div>

              {/* TEXT */}
              <div className="relative z-10 order-2 ml-auto flex w-[55%] flex-col gap-3 p-5 text-right md:w-[50%] md:gap-4 md:py-8 md:pr-10 md:text-left">
                <h3 className="text-lg font-bold leading-tight text-white sm:text-xl md:text-[28px]">
                  Apa yang harus disiapkan untuk hadapi{" "}
                  <span className="text-[#faae17]">TKA?</span>
                </h3>

                <div className="hidden flex-row md:flex">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="text-[#faae17]">
                      <ChevronsRight size={44} strokeWidth={2.5} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CHECKLIST */}
            <div
              className="
                relative
                z-10
                flex
                w-full
                flex-col
                justify-center
                gap-4

                bg-white/72

                p-6

                backdrop-blur-[22px]
                backdrop-saturate-[180%]

                md:w-[55%]
                md:p-10
              ">
              {/* WHITE REFLECTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-10
                  -top-16
                  h-32
                  w-48
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
                  -bottom-12
                  -right-8
                  h-32
                  w-40
                  rounded-full
                  bg-[#4DA3FF]/8
                  blur-3xl
                "
              />

              {[
                "Latihan soal berbasis logika dan pemahaman (bukan cuman hafalan)",
                "Pilih mata pelajaran tambahan yang sesuai dengan jurusan atau minat kamu",
                "Atur waktu belajar dengan baik",
                "Latihan dengan tipe soal HOTS (soal yang mengasah nalar dan berpikir tingkat tinggi)",
              ].map((text, index) => (
                <div
                  key={index}
                  className="
                    group
                    relative
                    z-10
                    flex
                    items-start
                    gap-3.5

                    rounded-[18px]

                    border
                    border-[#014aac]/8

                    bg-white/45

                    px-3
                    py-3

                    shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:border-[#014aac]/16
                    hover:bg-white/65
                  ">
                  {/* CHECK GLASS */}
                  <div
                    className="
                      mt-0.5
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-white/45

                      bg-[#65a30d]

                      text-white

                      shadow-[0_5px_12px_rgba(101,163,13,0.20),inset_0_1px_0_rgba(255,255,255,0.35)]

                      transition-transform
                      duration-300

                      group-hover:scale-110
                    ">
                    <Check size={14} strokeWidth={3} />
                  </div>

                  <p className="text-[14px] font-medium leading-snug text-[#0b2b6b] md:text-[18px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
