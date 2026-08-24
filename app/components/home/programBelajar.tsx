import { getDataProgramDummy } from "@/app/lib/getDummyDataRequest/getProgramDummy.request";
import {
  BookOpen,
  GraduationCap,
  Lightbulb,
  Send,
  Target,
  Users,
} from "lucide-react";

// Array ikon dari lucide-react sesuai urutan fitur
const icons = [
  <GraduationCap
    key="1"
    size={40}
    className="text-[#04397D]"
    strokeWidth={1.5}
  />,
  <Users key="2" size={40} className="text-[#04397D]" strokeWidth={1.5} />,
  <Lightbulb key="3" size={40} className="text-[#04397D]" strokeWidth={1.5} />,
  <Target key="4" size={40} className="text-[#04397D]" strokeWidth={1.5} />,
  <BookOpen key="5" size={40} className="text-[#04397D]" strokeWidth={1.5} />,
  <Send key="6" size={40} className="text-[#04397D]" strokeWidth={1.5} />,
];

// Warna badge judul yang bervariasi mirip contoh gambar
const badgeColors = [
  "bg-[#E53855]", // Merah
  "bg-[#FFC107] text-slate-900", // Kuning
  "bg-[#04397D]", // Biru
  "bg-[#04397D]", // Biru
  "bg-[#10B981]", // Hijau
  "bg-[#A855F7]", // Ungu
];

// const animations = [
//   "fade-down-right",
//   "fade-down",
//   "fade-down-left",
//   "fade-up-right",
//   "fade-up",
//   "fade-up-left",
// ];

export default async function Program() {
  const programData = await getDataProgramDummy();

  return (
    <section className="bg-[#04397D] flex justify-center py-10 md:py-20 items-center font-title">
      <div className="max-w-7xl px-4 md:px-8 w-full">
        <div className="container mx-auto">
          {/* Judul Section */}
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-[32px] md:text-[42px] font-bold font-title text-center text-white">
              Fitur Program
            </h2>
          </div>

          {/* Grid Card: 2 Kolom di Mobile, 3 Kolom di Desktop/Laptop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {programData.map((item, index) => {
              const badgeColorClass = badgeColors[index % badgeColors.length];

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-4 sm:p-4 md:p-8 text-slate-800 shadow-xl flex flex-col items-center text-center justify-between transition-transform duration-300 hover:-translate-y-1">
                  <div className="w-full flex flex-col items-center">
                    {/* 1. Icon Utama di Bagian Atas */}
                    <div className="mb-2 sm:mb-6 p-3 sm:p-4 rounded-2xl bg-blue-50/60 flex items-center justify-center">
                      {icons[index % icons.length]}
                    </div>

                    {/* 2. Badge Judul Fitur */}
                    <div
                      className={`w-full py-2 px-2 sm:px-4 rounded-full mb-2 sm:mb-3 text-white font-bold text-xs sm:text-base md:text-lg shadow-sm ${badgeColorClass}`}>
                      <h3>{item.judul_fitur}</h3>
                    </div>

                    {/* 3. Deskripsi */}
                    <p className="text-[11px] sm:text-xs md:text-sm font-desc leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fallback jika data kosong */}
          {programData.length === 0 && (
            <p className="text-center text-white/80 mt-8 font-desc">
              Data asli tidak tersedia. Menampilkan konten placeholder.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
