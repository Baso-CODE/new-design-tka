import Image from "next/image";

// Structure Data Gambar (Bisa dengan mudah ditambah/diubah di sini)
const galleryData = {
  offline: [
    {
      id: 1,
      src: "/images/gallery-belajar/gallery-offline-1.webp",
      alt: "Bimbingan Offline TKA Edumatrix",
      title: "Bimbingan Tatap Muka Eksklusif",
    },
    {
      id: 2,
      src: "/images/gallery-belajar/gallery-offline-2.webp",
      alt: "Suasana Kelas Offline TKA",
      title: "Diskusi & Pembahasan Soal TKA",
    },
    // Tambah foto offline baru di sini jika ada
  ],
  online: [
    {
      id: 3,
      src: "/images/gallery-belajar/gallery-online-3.webp",
      alt: "Bimbingan Interaktif Online TKA",
      title: "Kelas Online Live Interaktif",
    },
    {
      id: 4,
      src: "/images/gallery-belajar/gallery-online-4.webp",
      alt: "Sesi Belajar Online TKA Edumatrix",
      title: "Pendampingan Private Online",
    },
    // Tambah foto online baru di sini jika ada
  ],
};

const Gallery = () => {
  return (
    <div className="bg-slate-50 h-full py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-310 px-4">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#133B79] bg-blue-100 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-desc">
            Dokumentasi Kegiatan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133B79] font-title mt-3 mb-4">
            Galeri Belajar TKA Edumatrix
          </h2>
          <p className="text-gray-600 font-desc text-sm sm:text-base leading-relaxed">
            Dokumentasi lengkap proses bimbingan belajar TKA (Tes Kemampuan
            Akademik) secara Tatap Muka (Offline) maupun Online Interaktif.
          </p>
        </div>

        {/* SECTION 1: BAGIAN ATAS - OFFLINE */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-3">
            <div className="w-3 h-8 bg-[#133B79] rounded-full"></div>
            <h3 className="text-2xl font-bold text-[#133B79] font-title">
              Kelas Offline (Tatap Muka)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryData.offline.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                {/* Container Gambar (object-contain agar gambar utuh/tidak terpotong) */}
                <div className="relative w-full h-65 sm:h-80 bg-gray-900 flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.src}
                    loading="lazy"
                    width={1000}
                    height={1000}
                    alt={item.alt}
                    className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Title Card */}
                <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
                  <span className="font-title font-semibold text-gray-800 text-base sm:text-lg">
                    {item.title}
                  </span>
                  <span className="bg-blue-50 text-[#133B79] text-xs px-3 py-1 rounded-full font-medium">
                    Offline
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: BAGIAN BAWAH - ONLINE */}
        <div>
          <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-3">
            <div className="w-3 h-8 bg-orange-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-[#133B79] font-title">
              Kelas Online (Interaktif)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryData.online.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                {/* Container Gambar (object-contain agar gambar utuh/tidak terpotong) */}
                <div className="relative w-full h-65 sm:h-80 bg-gray-900 flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.src}
                    loading="lazy"
                    width={1000}
                    height={1000}
                    alt={item.alt}
                    className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Title Card */}
                <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
                  <span className="font-title font-semibold text-gray-800 text-base sm:text-lg">
                    {item.title}
                  </span>
                  <span className="bg-sky-50 text-orange-600 text-xs px-3 py-1 rounded-full font-medium">
                    Online
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
