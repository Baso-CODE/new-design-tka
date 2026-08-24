export default function JumlahSiswa() {
  return (
    <section className="w-full py-12 md:py-20 px-4 bg-white flex justify-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Angka Utama & Subteks */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-[48px] sm:text-[64px] md:text-[80px] font-extrabold text-[#E53855] tracking-tight leading-none mb-2 font-title">
            1000++
          </h2>
          <p className="text-slate-700 text-sm sm:text-base md:text-xl font-medium tracking-wide">
            Alumni Edumatrix Indonesia{" "}
            <span className="font-bold text-[#04397D]">Berhasil Juara TKA</span>
          </p>
        </div>

        {/* Kotak Kuning Statistik */}
        <div className="w-full bg-[#FFC107] rounded-2xl md:rounded-3xl py-6 px-4 md:py-10 md:px-12 shadow-md">
          <div className="flex justify-between items-center w-full">
            {/* Item 1: Tingkat Kelulusan */}
            <div className="flex-1 flex flex-col items-center px-1">
              <span className="text-[22px] sm:text-[36px] md:text-[48px] font-extrabold text-[#04397D] leading-tight">
                91%
              </span>
              <span className="text-[11px] sm:text-xs md:text-base font-bold text-[#04397D] mt-1 uppercase tracking-wider">
                Tingkat Kelulusan
              </span>
            </div>

            {/* Garis Pemisah 1 */}
            <div className="h-10 sm:h-14 md:h-16 w-[2px] md:w-[3px] bg-white rounded-full shrink-0" />

            {/* Item 2: Provinsi */}
            <div className="flex-1 flex flex-col items-center px-1">
              <span className="text-[22px] sm:text-[36px] md:text-[48px] font-extrabold text-[#04397D] leading-tight">
                38
              </span>
              <span className="text-[11px] sm:text-xs md:text-base font-bold text-[#04397D] mt-1 uppercase tracking-wider">
                Provinsi
              </span>
            </div>

            {/* Garis Pemisah 2 */}
            <div className="h-10 sm:h-14 md:h-16 w-[2px] md:w-[3px] bg-white rounded-full shrink-0" />

            {/* Item 3: Tingkat Kepuasan */}
            <div className="flex-1 flex flex-col items-center px-1">
              <span className="text-[22px] sm:text-[36px] md:text-[48px] font-extrabold text-[#04397D] leading-tight">
                98%
              </span>
              <span className="text-[11px] sm:text-xs md:text-base font-bold text-[#04397D] mt-1 uppercase tracking-wider">
                Tingkat Kepuasan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
