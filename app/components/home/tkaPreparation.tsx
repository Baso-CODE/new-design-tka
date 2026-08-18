import { BookOpen, Check, ChevronsRight, Landmark, Users } from "lucide-react";
import Image from "next/image";

export default function TKAPreparation() {
  return (
    <section className="w-full max-w-350 mx-auto p-4 py-10 font-title">
      {/* Container Utama */}
      <div className="bg-[#0b2b6b] rounded-3xl overflow-hidden shadow-xl flex flex-col">
        {/* === SECTION ATAS: Alasan TKA Penting === */}
        <div className="p-8 md:p-10">
          <h2 className="text-2xl md:text-[28px] font-bold text-white text-center mb-8">
            Kenapa Persiapan TKA itu sangat Penting?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-5 flex items-start gap-4">
              <div className="text-blue-700 bg-blue-50 p-3 rounded-xl shrink-0">
                <Landmark size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#0b2b6b] font-bold text-[14px] md:text-base leading-tight">
                  Mengamankan Kuota PTN Favorit
                </h3>
                <p className="text-gray-500 text-[12px] md:text-[14px] leading-relaxed">
                  Hasil TKA menjadi salah satu faktor perhitungan dalam seleksi
                  SNBP
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-5 flex items-start gap-4">
              <div className="text-blue-700 bg-blue-50 p-3 rounded-xl shrink-0">
                <BookOpen size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#0b2b6b] font-bold text-[14px] md:text-base leading-tight">
                  Validasi Rapor
                </h3>
                <p className="text-gray-500 text-[12px] md:text-[14px] leading-relaxed">
                  TKA jadi standar nasional penilaian yang objektif
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-5 flex items-start gap-4">
              <div className="text-blue-700 bg-blue-50 p-3 rounded-xl shrink-0">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-[#0b2b6b] font-bold text-[14px] md:text-base leading-tight">
                  Persiapan Masa Depan
                </h3>
                <p className="text-gray-500 text-[12px] md:text-[14px] leading-relaxed">
                  Hasil TKA dapat digunakan juga sebagai keperluan seleksi
                  akademik lainnya
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === SECTION BAWAH: Persiapan Hadapi TKA === */}
        <div className="flex flex-col md:flex-row items-stretch w-full relative">
          {/* Box Kiri (Gambar & Pertanyaan) */}
          <div className="bg-[#12418e] w-full md:w-[45%] relative md:rounded-tr-3xl min-h-80 md:min-h-75 flex flex-col md:flex-row items-center z-10">
            {/* Gambar Orang: Di mobile berada di bawah teks (relative/h-64), di desktop absolute */}
            <div className="relative md:absolute bottom-0 w-full md:w-[50%] h-64 md:h-[120%] z-0 order-2 md:order-1">
              <Image
                src="/images/tka/tka-preparation.png"
                alt="Persiapan Siswa TKA"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Teks Box Kiri */}
            <div className="w-full md:w-[50%] ml-auto p-8 md:py-8 md:pr-10 z-10 flex flex-col gap-4 order-1 md:order-2">
              <h3 className="text-2xl md:text-[28px] font-bold text-white leading-tight">
                Apa yang harus disiapkan untuk hadapi TKA?
              </h3>
              <div className="flex flex-row">
                <div className="text-[#faae17]">
                  <ChevronsRight size={44} strokeWidth={2.5} />
                </div>
                <div className="text-[#faae17]">
                  <ChevronsRight size={44} strokeWidth={2.5} />
                </div>
                <div className="text-[#faae17]">
                  <ChevronsRight size={44} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Box Kanan (Checklist list) */}
          <div className="w-full md:w-[55%] p-8 md:p-10 flex flex-col justify-center gap-4 z-0">
            {[
              "Latihan soal berbasis logika dan pemahaman (bukan cuman hafalan)",
              "Pilih mapel tambahan yang sesuai dengan jurusan atau minat kamu",
              "Atur waktu belajar dengan baik",
              "Latihan dengan tipe soal HOTS (soal yang mengasah nalar dan berpikir tingkat tinggi)",
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-[#22c55e] rounded shrink-0 mt-0.5 p-0.5 text-white">
                  <Check size={16} strokeWidth={3} />
                </div>
                <p className="text-white text-[14px] md:text-[18px] leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
