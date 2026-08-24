import Image from "next/image";

const Pilihan = () => {
  return (
    <div className="flex justify-center bg-[#ffffff]">
      <section className="relative mt-20 lg:mt-0">
        {/* Background Image Container */}
        <div className="relative w-full h-full">
          <Image
            loading="lazy"
            src="/images/background-belajar-offline-online-edumatrix.webp"
            alt="pilihan"
            className="w-full h-full object-cover"
            width="4096"
            height="1570"
          />
        </div>

        {/* Overlay Content */}
        {/* Hapus 'items-center', ganti jadi flex biasa agar height anak elemen bisa diatur manual */}
        <div className="absolute inset-0 w-full flex justify-between">
          {/* KOLOM KIRI (GAMBAR) */}
          {/* Tambahkan h-full, flex, justify-end (untuk ke bawah), items-start (untuk ke kiri) */}
          <div className="w-[50%] h-full flex flex-col justify-end items-start">
            <div className="relative shrink-0">
              <Image
                loading="lazy"
                src="/images/pilihan-belajar-offline-atau-offline.webp"
                alt="Student"
                // Hapus margin negatif jika ingin benar-benar rata bawah
                className="h-auto object-contain 
                  w-47.5 
                  tb:w-[270px] 
                  sm:w-72.5 
                  md:w-82.5 
                  lg:w-100 
                  xl:w-150 
                  2xl:w-175"
                width="1290"
                height="1204"
              />
            </div>
          </div>

          {/* KOLOM KANAN (TEXT & BUTTON) */}
          {/* Tambahkan h-full flex flex-col justify-center agar text tetap di tengah vertikal */}
          <div className="w-[50%] h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-white hidden md:flex xl:mb-11.25 lg:mb-8.75 text-center justify-center font-bold md:text-[25px] lg:text-[35px] xl:text-[40px] xl:w-122.75 xl:h-14.75 lg:w-100 lg:h-12.5">
                Pilih Metode Belajarmu
              </h2>
              <div className="flex flex-col gap-2 sm:gap-2 lg:gap-4">
                <div className="bg-[#09A76D] uppercase font-title font-bold text-sm sm:text-lg md:text-xl lg:text-[40px] xl:text-[48px] text-white py-2 px-4 sm:py-3 sm:px-6 rounded-xl lg:rounded-3xl w-30 sm:w-60 lg:w-90 lg:h-17.5 xl:w-105 xl:h-23 flex justify-center items-center">
                  Online
                </div>
                <div className="bg-[#C41926] uppercase font-title font-bold text-sm sm:text-lg md:text-xl lg:text-[40px] xl:text-[48px] text-white py-2 px-4 sm:py-3 sm:px-6 rounded-xl lg:rounded-3xl w-30 sm:w-60 lg:w-90 lg:h-17.5 xl:w-105 xl:h-23 flex justify-center items-center">
                  Offline
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer line (optional) */}
        {/* <div className="absolute w-full bg-[#04397D]"></div> */}
      </section>
    </div>
  );
};

export default Pilihan;
