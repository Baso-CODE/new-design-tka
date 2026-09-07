import { getDataKotaDummy } from "@/app/lib/getDummyDataRequest/getKotaDummy.request";
import Image from "next/image";
import Link from "next/link";

export default async function ListKota() {
  const kotaList = await getDataKotaDummy();

  return (
    <section
      className="relative pb-24 pt-16 sm:py-20 lg:py-24 font-title overflow-hidden"
      style={{
        // Disamakan persis agar menyatu mulus dengan warna dasar komponen Asal Sekolah di atasnya (#033790)
        background: "linear-gradient(to bottom, #033790 0%, #0571cd 100%)",
      }}>
      <div className="container mx-auto items-center max-w-310 px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-lg mb-4">
            Jangkauan Kami di Seluruh{" "}
            <span className="text-[#fac61f]">Indonesia</span>
          </h2>
          <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl mx-auto">
            Temukan bimbingan TKA terbaik di kota Anda. Kami hadir di berbagai
            kota besar untuk mendukung impian akademismu!
          </p>
        </div>

        <div className="relative w-full max-w-310 mx-auto mb-16 md:mb-5 overflow-hidden rounded-2xl">
          <Image
            src="/images/nusantara-preview-indonesia.webp"
            alt="Peta Jangkauan Edumatrix Indonesia"
            width={2000}
            height={1200}
            className="w-full h-auto object-cover"
            priority
            loading="eager"
          />
        </div>

        {kotaList.length === 0 ? (
          <div
            className="
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-white/25
      bg-white/10
      p-8
      text-center
      text-xl
      text-white
      shadow-[0_18px_45px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.28)]
      backdrop-blur-[24px]
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

            <span className="relative z-10">
              Tidak ada kota yang tersedia saat ini.
            </span>
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
            {/* LIQUID GLASS HEADER */}
            <div
              className="
        relative
        mb-8
        inline-flex
        items-center
        justify-center
        overflow-hidden

        rounded-full

        border
        border-white/45

        bg-white/75

        px-7
        py-2.5

        text-sm
        font-bold
        text-[#033790]

        shadow-[0_8px_24px_rgba(0,40,100,0.18),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(0,60,140,0.06)]

        backdrop-blur-[18px]
        backdrop-saturate-[180%]

        sm:text-base
      ">
              <span
                aria-hidden="true"
                className="
          pointer-events-none
          absolute
          left-[14%]
          right-[14%]
          top-0
          h-[48%]
          rounded-b-[70%]
          bg-linear-to-b
          from-white/90
          to-transparent
        "
              />

              <span
                aria-hidden="true"
                className="
          pointer-events-none
          absolute
          -bottom-4
          right-[15%]
          h-8
          w-20
          rounded-full
          bg-[#4DA3FF]/15
          blur-xl
        "
              />

              <span className="relative z-10">Pilih Kotamu</span>
            </div>

            {/* GRID KOTA */}
            <ul className="grid grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full md:mb-12">
              {kotaList.map((kota) => (
                <li key={kota.slug} className="w-full">
                  <Link
                    href={`/bimbel-tka-di-kota/${kota.slug}`}
                    className="
              group
              relative

              flex
              h-11
              w-full
              items-center
              justify-center

              overflow-hidden
              rounded-full

              border
              border-white/30

              bg-[#2082e6]/82

              px-3

              text-center
              text-xs
              font-semibold
              text-white

              shadow-[0_8px_20px_rgba(0,64,145,0.22),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,50,120,0.10)]

              backdrop-blur-[16px]
              backdrop-saturate-[180%]

              transition-all
              duration-300
              ease-out

              hover:-translate-y-0.5
              hover:scale-[1.02]
              hover:border-white/45
              hover:bg-[#2082e6]/92

              hover:shadow-[0_12px_26px_rgba(0,70,170,0.30),inset_0_1px_0_rgba(255,255,255,0.45)]

              active:translate-y-0
              active:scale-[0.98]

              sm:h-12
              sm:text-sm
            ">
                    {/* TOP GLASS REFLECTION */}
                    <span
                      aria-hidden="true"
                      className="
                pointer-events-none
                absolute
                left-[12%]
                right-[12%]
                top-0

                h-[42%]

                rounded-b-[70%]

                bg-linear-to-b
                from-white/25
                to-transparent

                transition-opacity
                duration-300

                group-hover:from-white/35
              "
                    />

                    {/* BLUE REFRACTION */}
                    <span
                      aria-hidden="true"
                      className="
                pointer-events-none
                absolute

                -bottom-4
                right-[8%]

                h-8
                w-14

                rounded-full

                bg-[#7cc4ff]/20
                blur-lg

                transition-all
                duration-300

                group-hover:bg-[#7cc4ff]/30
              "
                    />

                    {/* INNER GLASS EDGE */}
                    <span
                      aria-hidden="true"
                      className="
                pointer-events-none
                absolute
                inset-[1px]

                rounded-full

                border
                border-white/[0.08]
              "
                    />

                    <span className="relative z-10 truncate">
                      {kota.nama_kota}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Gelombang / Wave di Bagian Bawah */}
      <div className="absolute -mb-px bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-24 sm:h-32 lg:h-48"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M0,15 C400,200 800,-80 1200,120 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
