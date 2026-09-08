import { cardsLearningMethod } from "../data/learningMethods";
import { TiltCard } from "./tiltCard";

const LearningMethod = async () => {
  return (
    <section
      className="
        relative
        mt-12
        flex
        items-center
        justify-center
        overflow-hidden
        bg-white
        py-16
        sm:py-20
      ">
      {/* AMBIENT BLUE LIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-12
          h-96
          w-96
          rounded-full
          bg-[#4DA3FF]/8
          blur-3xl
        "
      />

      {/* AMBIENT GOLD LIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-[#FAAE17]/7
          blur-3xl
        "
      />

      <div className="relative z-10 w-full max-w-310 px-2 sm:px-4">
        <div className="w-full">
          <div className="text-center">
            {/* HEADER GLASS */}
            <div
              className="
                relative
                mx-auto
                mb-10
                max-w-4xl
                overflow-hidden

                rounded-[30px]

                border
                border-[#133B79]/10

                bg-white/70

                px-5
                py-6

                shadow-[0_18px_45px_rgba(19,59,121,0.10),0_5px_14px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.95)]

                backdrop-blur-[22px]
                backdrop-saturate-[180%]

                sm:px-8
                sm:py-8
              ">
              {/* TOP SPECULAR */}
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
                  -left-14
                  -top-20
                  h-40
                  w-52
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
                  -right-10
                  h-40
                  w-52
                  rounded-full
                  bg-[#4DA3FF]/10
                  blur-3xl
                "
              />

              <h1
                className="
                  relative
                  z-10
                  mb-3

                  font-title
                  text-2xl
                  font-bold
                  text-[#133B79]

                  md:text-3xl
                  lg:text-4xl
                ">
                Learning Method
              </h1>

              <div className="relative z-10 flex justify-center">
                <p
                  className="
                    mx-auto
                    max-w-3xl

                    text-center
                    text-sm
                    font-bold
                    leading-relaxed
                    text-gray-700

                    md:text-base
                  ">
                  Metode Belajar yang digunakan yaitu personal one on one (1
                  siswa 1 mentor) dan juga tersedia Small Class. Program belajar
                  didesain secara sistematis, terstruktur, terukur dan teruji.
                  Pembelajaran Tematik berdasar Statistik Soal yang diujikan.
                  Fokus menerapkan Pola Sukses yang sudah proven. Pastikan pilih
                  partner terbaik untuk kesuksesan dan masa depanmu, EDUMATRIX
                  Indonesia!
                </p>
              </div>
            </div>

            {/* GRID */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {cardsLearningMethod.map((card, index) => (
                <div
                  key={index}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]

                    border
                    border-white/55

                    bg-white/72

                    p-2

                    shadow-[0_16px_38px_rgba(19,59,121,0.10),0_5px_14px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.95)]

                    backdrop-blur-[22px]
                    backdrop-saturate-[180%]

                    transition-all
                    duration-500
                    ease-out

                    hover:-translate-y-1
                    hover:scale-[1.015]
                    hover:border-white/75

                    hover:shadow-[0_24px_52px_rgba(19,59,121,0.16),0_8px_20px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)]
                  ">
                  {/* TOP GLASS EDGE */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-x-[10%]
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
                      -left-[30%]
                      -top-[15%]
                      z-10
                      h-[55%]
                      w-[85%]
                      rotate-[-18deg]
                      rounded-full
                      bg-white/28
                      blur-2xl

                      transition-transform
                      duration-700

                      group-hover:translate-x-6
                    "
                  />

                  {/* BLUE REFRACTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-14
                      -right-10
                      z-10
                      h-32
                      w-36
                      rounded-full
                      bg-[#4DA3FF]/12
                      blur-2xl
                    "
                  />

                  {/* INNER EDGE */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-[1px]
                      z-20
                      rounded-[27px]
                      border
                      border-white/30
                    "
                  />

                  <div className="relative z-20">
                    <TiltCard
                      img={card.img}
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningMethod;
