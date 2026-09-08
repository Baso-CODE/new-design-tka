import { dummyContactCsData } from "../data/contactCs.dummyData";
import PaketBelajarOSNClient from "./paketBelajarOSNClient";

const PaketBelajarTKA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20">
      {/* SOFT BACKGROUND DECORATION */}
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
          top-[30%]
          h-96
          w-96
          rounded-full
          bg-[#FAAE17]/7
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-52
          left-1/3
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#056fcb]/5
          blur-3xl
        "
      />

      <div className="relative z-10 container mx-auto flex items-center justify-center px-2 font-title lg:px-0">
        <div className="w-full">
          {/* =====================================================
              HEADER
          ===================================================== */}
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            {/* SMALL ACCENT */}
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#faae17]/60 sm:w-12" />

              <span className="font-desc text-xs font-bold tracking-[0.18em] text-[#056fcb] uppercase sm:text-sm">
                Pilihan Program
              </span>

              <span className="h-px w-8 bg-[#faae17]/60 sm:w-12" />
            </div>

            <h2
              className="
                mb-3
                font-title
                text-2xl
                font-extrabold
                leading-tight
                text-[#133b79]

                md:text-3xl
                lg:text-4xl
              ">
              Paket Pilihan yang{" "}
              <span className="relative inline-block text-[#faae17]">
                Tersedia
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-1
                    left-1/2
                    h-1
                    w-[75%]
                    -translate-x-1/2
                    rounded-full
                    bg-[#faae17]/20
                    blur-[1px]
                  "
                />
              </span>
            </h2>

            <p
              className="
                mx-auto
                max-w-xl

                font-desc
                text-sm
                font-medium
                leading-relaxed
                text-[#52677c]

                md:text-base
              ">
              Pilih program terbaik sesuai kebutuhanmu. Semua dirancang untuk
              bantu kamu{" "}
              <span className="font-bold text-[#133b79]">
                Menjadi Juara TKA.
              </span>
            </p>
          </div>

          {/* =====================================================
              PACKAGE CARDS
          ===================================================== */}
          <div className="relative">
            {/* DECORATION BEHIND BLUE CARD */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-16
                top-[20%]
                h-72
                w-72
                rounded-full
                bg-[#056fcb]/7
                blur-3xl
              "
            />

            {/* DECORATION BEHIND RED CARD */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-16
                bottom-[10%]
                h-72
                w-72
                rounded-full
                bg-[#d9044d]/6
                blur-3xl
              "
            />

            <div className="relative z-10">
              <PaketBelajarOSNClient contacts={dummyContactCsData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaketBelajarTKA;
