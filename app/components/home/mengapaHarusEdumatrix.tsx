import { Check } from "lucide-react";

const MengapaHarusEdumatrix = () => {
  const listAlasan = [
    "Pengajar Top 10 PTN dari UI, UGM, ITB, IPB, UNDIP, UNAIR, UNS, ITS, dan PT Terbaik lainnya",
    "Tutor adalah pengajar dengan IP tinggi dan berpengalaman",
    "Tutor Edumatrix bisa menjadi Positive Role Model bagi siswa",
    "Presensi Edumatrix untuk monitoring perkembangan prestasi siswa",
    "Kurikulum Personal, sesuai dengan kebutuhan siswa",
    "Evaluasi Progress Belajar secara Berkala",
    "Kemudahan dalam pembayaran (via transfer)",
    "CS dan Tim Support yang responsif dan solutif",
    "Matrix berorientasi pada Pelayanan Terbaik",
    "GRATIS Biaya Pendaftaran + Ada PROMO setiap hari",
  ];

  return (
    <div
      className="relative flex items-center justify-center py-20 px-4"
      style={{
        background: "linear-gradient(to bottom, #033c95 0%, #0570cc 100%)",
      }}>
      <div className="text-white max-w-310 container mx-auto flex flex-col items-center">
        <div className="w-full lg:w-234.75">
          {/* Judul Utama */}
          <h2 className="lg:text-[35px] text-[22px] sm:text-[26px] md:text-[30px] font-title font-bold md:mb-10 mb-6 text-center">
            Mengapa Harus <span className="text-[#fac61f]">Edumatrix?</span>
          </h2>

          {/* Looping List Alasan dengan Ikon Berlatar Kuning */}
          <ul className="list-none space-y-4">
            {listAlasan.map((item, index) => (
              <li
                key={index}
                className="flex items-start sm:items-center gap-3.5">
                <div className="bg-[#fac61f] text-[#033c95] rounded-full p-1 shrink-0 mt-0.5 sm:mt-0 flex items-center justify-center shadow-sm">
                  <Check size={16} strokeWidth={3.5} />
                </div>
                <span className="font-semibold font-desc text-[14px] sm:text-[15px] opacity-95 hover:opacity-100 leading-snug sm:leading-normal">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MengapaHarusEdumatrix;
