import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function TransformationOSN() {
  return (
    <section className="w-full py-16 md:py-24 px-[5%] md:px-[10%] bg-white dark:bg-slate-900 transition-colors duration-300 font-poppins">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#03397d] dark:text-white mb-4 leading-tight font-title">
            Transformasi Belajar Olimpiade Sains
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto font-desc leading-normal px-4">
            Kami memahami tantangan persiapan OSN. Dari kebingungan mencari
            arah, menjadi persiapan matang yang penuh percaya diri.
          </p>
        </div>

        {/* TRANSFORMATION CONTAINER */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-10">
          {/* LEFT: BEFORE */}
          <div className="flex-1 w-full flex flex-col items-center text-center group">
            {/* Image Wrapper */}
            <div className="w-full mb-6">
              <Image
                src="/images/solusi/before.webp"
                alt="Siswa bingung materi OSN"
                width={500}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Text Content */}
            <h3 className="text-xl font-bold text-gray-700 dark:text-slate-200 mb-2 font-title">
              Belajar Tanpa Arah
            </h3>
            <p className="text-gray-600 dark:text-slate-300 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-medium font-desc">
              &quot;Materi OSN terasa asing, bingung harus mulai dari mana, dan
              sering terjebak saat mengerjakan soal non-rutin.&quot;
            </p>
          </div>

          <div className="flex items-center justify-center shrink-0 z-20 md:mt-[15%]">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center shadow-sm">
              <ArrowDown className="md:hidden w-6 h-6 text-blue-600 dark:text-blue-400 animate-bounce" />
              <ArrowRight className="hidden md:block w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          {/* RIGHT: AFTER */}
          <div className="flex-1 w-full flex flex-col items-center text-center group">
            {/* Image Wrapper */}
            <div className="w-full  mb-6 ">
              <Image
                src="/images/solusi/after.webp"
                alt="Siswa percaya diri juara OSN EduMatrix"
                width={500}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Text Content */}
            <h3 className="text-xl font-bold text-[#00549e] dark:text-blue-400 mb-2 font-title">
              Terarah & Siap Juara
            </h3>
            <p className="text-gray-600 dark:text-slate-300 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-medium font-desc">
              &quot;Menguasai konsep fundamental, paham strategi pengerjaan
              soal, dan mental siap berkompetisi di tingkat Nasional.&quot;
            </p>
          </div>
        </div>

        {/* OPTIONAL BOTTOM TEXT */}
        <div className="mt-16 text-center border-t border-gray-100 dark:border-slate-800 pt-8">
          <p className="text-sm text-gray-500 dark:text-slate-500 italic">
            *Ilustrasi perjalanan siswa bimbingan Olimpiade Sains by EduMatrix
            Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}
