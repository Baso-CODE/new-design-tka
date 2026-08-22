import { cardsLearningMethod } from "../data/learningMethods";
import { TiltCard } from "./tiltCard";

const LearningMethod = async () => {
  return (
    <section className="bg-white flex justify-center mt-12 items-center">
      <div className="max-w-310 px-2">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 font-title text-[#133B79]">
              Learning Method
            </h1>

            <div className="flex justify-center" data-aos="fade-up">
              <p className="text-sm md:text-base font-bold text-gray-800 mb-8 mx-auto max-w-3xl text-center">
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
                return (
                  <div key={index}>
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
