import { Check, ChevronsRight } from "lucide-react";
import Image from "next/image";

export default function TKAPreparation() {
  return (
    <section className="w-full bg-[#ffffff]">
      <div className="max-w-350 mx-auto p-4 py-10 font-title">
        <div className="flex flex-col gap-6">
          {/* === SECTION ATAS: Alasan TKA Penting === */}
          <div>
            <h2 className="text-2xl md:text-[32px] font-bold text-[#0b2b6b] text-center mb-8">
              Kenapa Persiapan TKA itu <br className="hidden sm:block" />
              <span className="italic">“Sangat Penting”</span>?
            </h2>

            {/* Grid 3 Card: Mobile vertikal, Desktop 3 kolom menyamping */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {/* Card 1 */}
              <div className="bg-[#0867d5] rounded-3xl p-5 md:p-6 flex items-center gap-4 text-white shadow-md">
                <div className="bg-white p-0 rounded-2xl shrink-0 w-20 h-20 flex items-center justify-center relative shadow-sm">
                  <Image
                    src="/images/preperation/university.png"
                    alt="Icon PTN"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base md:text-lg leading-tight">
                    Mengamankan Kuota PTN Favorit
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed font-desc">
                    Hasil TKA menjadi salah satu faktor perhitungan dalam
                    seleksi snbo
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#0867d5] rounded-3xl p-5 md:p-6 flex items-center gap-4 text-white shadow-md">
                <div className="bg-white p-0 rounded-2xl shrink-0 w-20 h-20 flex items-center justify-center relative shadow-sm">
                  <Image
                    src="/images/preperation/open-book.png"
                    alt="Icon PTN"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base md:text-lg leading-tight">
                    Validasi Rapor
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed font-desc">
                    TKA menjadi standar nasional penilaian yang obejktif
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#0867d5] rounded-3xl p-5 md:p-6 flex items-center gap-4 text-white shadow-md">
                <div className="bg-white p-0 rounded-2xl shrink-0 w-20 h-20 flex items-center justify-center relative shadow-sm">
                  <Image
                    src="/images/preperation/connection.png"
                    alt="Icon PTN"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base md:text-lg leading-tight">
                    Persiapan Masa Depan
                  </h3>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed font-desc">
                    Hasil TKA dapat digunakan juga sebagai keperluan seleksi
                    akademik lainnya
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === SECTION BAWAH: Persiapan Hadapi TKA dengan Border & Card Putih === */}
          <div className="bg-white border-2 border-[#014aac] rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row items-stretch w-full relative mt-2">
            {/* Box Kiri (Gambar & Pertanyaan) */}
            <div className="bg-[#014aac] w-full md:w-[45%] relative md:rounded-tr-3xl min-h-45 md:min-h-75 flex flex-row md:flex-row items-center z-10">
              {/* Gambar Orang: Di mobile di sebelah kiri, di desktop absolute di bawah */}
              <div className="relative md:absolute bottom-0 w-[45%] md:w-[50%] h-36 md:h-[120%] z-0 order-1 md:order-1 self-end md:self-auto">
                <Image
                  src="/images/tka/tka-preparation.webp"
                  alt="Persiapan Siswa TKA"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain object-bottom"
                  priority
                />
              </div>

              {/* Teks Box Kiri */}
              <div className="w-[55%] md:w-[50%] ml-auto p-5 md:py-8 md:pr-10 z-10 flex flex-col gap-3 md:gap-4 order-2 md:order-2 text-right md:text-left">
                <h3 className="text-lg sm:text-xl md:text-[28px] font-bold text-white leading-tight">
                  Apa yang harus disiapkan untuk hadapi{" "}
                  <span className="text-[#faae17]">TKA?</span>
                </h3>
                {/* Chevrons hidden di mobile, tampil di desktop */}
                <div className="hidden md:flex flex-row">
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

            {/* Box Kanan (Checklist list dengan background putih bersih & teks gelap) */}
            <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-center gap-4 z-0 bg-white">
              {[
                "Latihan soal berbasis logika dan pemahaman (bukan cuman hafalan)",
                "Pilih mata pelajaran tambahan yang sesuai dengan jurusan atau minat kamu",
                "Atur waktu belajar dengan baik",
                "Latihan dengan tipe soal HOTS (soal yang mengasah nalar dan berpikir tingkat tinggi)",
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="bg-[#65a30d] rounded-full shrink-0 mt-0.5 p-1 text-white shadow-sm">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <p className="text-[#0b2b6b] text-[14px] md:text-[18px] leading-snug font-medium">
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
