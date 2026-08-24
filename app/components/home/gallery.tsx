import Image from "next/image";

// Total 7 item: 4 offline dan 3 online
const allGalleryItems = [
  {
    id: 1,
    src: "/images/gallery-belajar/gallery-offline-1.webp",
    alt: "Bimbingan Offline TKA Edumatrix",
    title: "Bimbingan Tatap Muka Eksklusif",
    type: "offline" as const,
  },
  {
    id: 2,
    src: "/images/gallery-belajar/gallery-offline-2.webp",
    alt: "Suasana Kelas Offline TKA",
    title: "Diskusi & Pembahasan Soal TKA",
    type: "offline" as const,
  },
  {
    id: 3,
    src: "/images/gallery-belajar/gallery-online-1.webp",
    alt: "Bimbingan Interaktif Online TKA",
    title: "Kelas Online Live Interaktif",
    type: "online" as const,
  },
  {
    id: 4,
    src: "/images/gallery-belajar/gallery-offline-3.webp",
    alt: "Suasana Kelas Offline TKA",
    title: "Sesi Latihan Intensif",
    type: "offline" as const,
  },
  {
    id: 5,
    src: "/images/gallery-belajar/gallery-online-2.webp",
    alt: "Sesi Belajar Online TKA Edumatrix",
    title: "Pendampingan Private Online",
    type: "online" as const,
  },
  {
    id: 6,
    src: "/images/gallery-belajar/gallery-offline-4.webp",
    alt: "Fasilitas Belajar Offline TKA",
    title: "Suasana Belajar Nyaman & Kondusif",
    type: "offline" as const,
  },
  {
    id: 7,
    src: "/images/gallery-belajar/gallery-online-3.webp",
    alt: "Sesi Konsultasi Online TKA",
    title: "Konsultasi Materi Via Online",
    type: "online" as const,
  },
];

const Gallery = () => {
  return (
    <section className="bg-[#FFFFFF] py-16 sm:py-20 lg:py-24 px-4">
      <div className="mx-auto max-w-310">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#033790] font-title leading-tight mb-4">
            Gallery
          </h2>
          <p className="text-slate-600 font-desc text-sm sm:text-base leading-relaxed">
            Lihatlah bagaimana kami merangkul teknologi dan inovasi. Setiap
            gambar mewakili aspek unik dari pengalaman pendidikan dan kegiatan
            komunitas kami. Bagaimana kami membuat pembelajaran interaktif dan
            menyenangkan!
          </p>
        </div>

        {/* Custom Grid Layout untuk 7 Item */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Baris 1: Item 1 (Full Width) */}
          {allGalleryItems[0] && (
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 md:col-span-3 h-64 sm:h-80 lg:h-96">
              <Image
                src={allGalleryItems[0].src}
                loading="lazy"
                fill
                alt={allGalleryItems[0].alt}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-bold rounded-xl px-3 py-1.5 backdrop-blur-md border text-white bg-[#04397d]/80 border-[#04397d]">
                  Offline
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-semibold font-title text-base sm:text-lg drop-shadow">
                  {allGalleryItems[0].title}
                </p>
              </div>
            </div>
          )}

          {/* Baris 2: Item 2 (Lebar 2 Kolom) & Item 3 (1 Kolom) */}
          {allGalleryItems[1] && (
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 md:col-span-2 h-72 sm:h-80">
              <Image
                src={allGalleryItems[1].src}
                loading="lazy"
                fill
                alt={allGalleryItems[1].alt}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-bold rounded-xl px-3 py-1.5 backdrop-blur-md border text-white bg-[#04397d]/80 border-[#04397d]">
                  Offline
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-semibold font-title text-base sm:text-lg drop-shadow">
                  {allGalleryItems[1].title}
                </p>
              </div>
            </div>
          )}

          {allGalleryItems[2] && (
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 md:col-span-1 h-72 sm:h-80">
              <Image
                src={allGalleryItems[2].src}
                loading="lazy"
                fill
                alt={allGalleryItems[2].alt}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-bold rounded-xl px-3 py-1.5 backdrop-blur-md border text-white bg-orange-500/80 border-orange-400">
                  Online
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-semibold font-title text-base sm:text-lg drop-shadow">
                  {allGalleryItems[2].title}
                </p>
              </div>
            </div>
          )}

          {/* Baris 3: Item 4, 5, 6 (Grid 3 Kolom seimbang) */}
          {allGalleryItems.slice(3, 6).map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 h-64 sm:h-72">
              <Image
                src={item.src}
                loading="lazy"
                fill
                alt={item.alt}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-4 right-4">
                <span
                  className={`text-[10px] font-bold rounded-xl px-3 py-1.5 backdrop-blur-md border text-white ${
                    item.type === "offline"
                      ? "bg-[#04397d]/80 border-[#04397d]"
                      : "bg-orange-500/80 border-orange-400"
                  }`}>
                  {item.type === "offline" ? "Offline" : "Online"}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-semibold font-title text-base sm:text-lg drop-shadow">
                  {item.title}
                </p>
              </div>
            </div>
          ))}

          {/* Baris 4: Item 7 (Full Width atau Center di bawah) */}
          {allGalleryItems[6] && (
            <div className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 md:col-span-3 h-64 sm:h-80">
              <Image
                src={allGalleryItems[6].src}
                loading="lazy"
                fill
                alt={allGalleryItems[6].alt}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-bold rounded-xl px-3 py-1.5 backdrop-blur-md border text-white bg-orange-500/80 border-orange-400">
                  Online
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-semibold font-title text-base sm:text-lg drop-shadow">
                  {allGalleryItems[6].title}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
