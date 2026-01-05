import classNames from "classnames";
import { cardsLearningMethod } from "../data/learningMethods";
import { TiltCard } from "./tiltCard";

const LearningMethod = async () => {
  return (
    <section className="bg-white flex justify-center mt-12 items-center">
      <div className="max-w-310 px-6">
        <div className="w-full">
          <div className="text-center">
            <h1
              className="text-[32px] md:text-[48px] lg:text-[64px] font-bold mb-8 font-title text-[#133B79]"
              data-aos="fade-down">
              Learning Method
            </h1>

            <div className="flex justify-center" data-aos="fade-up">
              <p className="text-lg font-bold text-[#131a7999] mb-8 mx-auto max-w-3xl text-center">
                Metode Belajar yang digunakan yaitu personal one on one (1 siswa
                1 mentor) dan juga tersedia Small Class. Program belajar
                didesain secara sistematis, terstruktur, terukur dan teruji.
                Pembelajaran Tematik berdasar Statistik Soal yang diujikan.
                Fokus menerapkan Pola Sukses yang sudah proven. Pastikan pilih
                partner terbaik untuk kesuksesan dan masa depanmu, EDUMATRIX
                Indonesia!
              </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
              {cardsLearningMethod.map((card, index) => {
                const animation = classNames({
                  "fade-right": index < 2,
                  "fade-left": index >= 2,
                });

                const delay = index === 0 || index === 3 ? 700 : 0;

                return (
                  <div key={index} data-aos={animation} data-aos-delay={delay}>
                    <TiltCard
                      img={card.img}
                      title={card.title}
                      description={card.description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningMethod;
