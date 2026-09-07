import Image from "next/image";

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
    title: "Suasana Belajar Nyaman ",
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

const GalleryCard = ({
  item,
  className = "",
}: {
  item: (typeof allGalleryItems)[number];
  className?: string;
}) => {
  const isOffline = item.type === "offline";

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]

        border
        border-white/40

        bg-[#0d2247]

        shadow-[0_16px_38px_rgba(15,35,70,0.16),0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.35)]

        transition-all
        duration-500
        ease-out

        hover:-translate-y-1
        hover:scale-[1.01]
        hover:border-white/55

        hover:shadow-[0_24px_50px_rgba(15,55,110,0.24),0_8px_20px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.5)]

        ${className}
      `}>
      {/* IMAGE */}
      <Image
        src={item.src}
        loading="lazy"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={item.alt}
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.055]
        "
      />

      {/* DARK GRADIENT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-linear-to-t
          from-black/75
          via-black/10
          to-black/5
        "
      />

      {/* LIQUID GLASS TOP REFLECTION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[15%]
          -top-[30%]
          z-10

          h-[65%]
          w-[65%]

          rotate-[-14deg]
          rounded-full

          bg-white/12
          blur-3xl

          transition-all
          duration-700

          group-hover:translate-x-6
          group-hover:bg-white/16
        "
      />

      {/* SUBTLE BLUE REFRACTION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-16
          -right-12
          z-10

          h-40
          w-52

          rounded-full

          bg-[#4DA3FF]/15
          blur-3xl
        "
      />

      {/* TOP SPECULAR EDGE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-[8%]
          top-0
          z-30
          h-px

          bg-linear-to-r
          from-transparent
          via-white/85
          to-transparent
        "
      />

      {/* INNER GLASS EDGE */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-[1px]
          z-30

          rounded-[27px]

          border
          border-white/10
        "
      />

      {/* TYPE BADGE */}
      <div className="absolute right-4 top-4 z-30">
        <span
          className={`
            relative
            flex
            items-center
            gap-1.5

            overflow-hidden

            rounded-full

            border
            px-3
            py-1.5

            text-[10px]
            font-bold
            text-white

            shadow-[0_6px_18px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.45)]

            backdrop-blur-[18px]
            backdrop-saturate-[180%]

            ${
              isOffline
                ? `
                  border-white/30
                  bg-[#04397d]/75
                `
                : `
                  border-orange-200/40
                  bg-orange-500/80
                `
            }
          `}>
          {/* BADGE LIGHT */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-[15%]
              top-0
              h-px
              bg-linear-to-r
              from-transparent
              via-white/90
              to-transparent
            "
          />

          {/* STATUS DOT */}
          <span
            className={`
              relative
              z-10
              h-1.5
              w-1.5
              rounded-full

              ${
                isOffline
                  ? "bg-cyan-300 shadow-[0_0_7px_rgba(103,232,249,0.9)]"
                  : "bg-yellow-200 shadow-[0_0_7px_rgba(254,240,138,0.9)]"
              }
            `}
          />

          <span className="relative z-10">
            {isOffline ? "Offline" : "Online"}
          </span>
        </span>
      </div>

      {/* TITLE GLASS PANEL */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-3 sm:p-4">
        <div
          className="
            relative
            overflow-hidden

            rounded-[18px]

            border
            border-white/20

            bg-black/20

            px-4
            py-3

            shadow-[0_8px_22px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.20)]

            backdrop-blur-[18px]
            backdrop-saturate-[160%]

            transition-all
            duration-300

            group-hover:bg-black/25
            group-hover:border-white/30
          ">
          {/* TITLE PANEL SPECULAR */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-[10%]
              top-0
              h-px
              bg-linear-to-r
              from-transparent
              via-white/60
              to-transparent
            "
          />

          {/* TITLE PANEL REFRACTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-5
              right-[5%]
              h-10
              w-24
              rounded-full
              bg-[#4DA3FF]/10
              blur-xl
            "
          />

          <p
            className="
              relative
              z-10

              font-title
              text-base
              font-semibold
              leading-snug
              text-white

              drop-shadow-[0_2px_5px_rgba(0,0,0,0.40)]

              sm:text-lg
            ">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-white

        px-4
        py-16

        sm:py-20
        lg:py-24
      ">
      {/* BACKGROUND REFRACTION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-28

          h-96
          w-96

          rounded-full

          bg-[#2082e6]/6
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-40

          h-96
          w-96

          rounded-full

          bg-[#FAAE17]/5
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-310">
        {/* HEADER */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          {/* LIQUID GLASS EYEBROW */}
          <div
            className="
              relative
              mb-5
              inline-flex
              items-center
              justify-center

              overflow-hidden
              rounded-full

              border
              border-[#033790]/10

              bg-[#033790]/5

              px-4
              py-1.5

              shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]

              backdrop-blur-xl
            ">
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-[15%]
                top-0
                h-px
                bg-linear-to-r
                from-transparent
                via-white
                to-transparent
              "
            />

            <span className="relative z-10 text-xs font-bold tracking-wider text-[#056fcb] uppercase">
              Aktivitas Belajar
            </span>
          </div>

          <h2 className="mb-4 font-title text-3xl font-extrabold leading-tight text-[#033790] md:text-4xl">
            Gallery
          </h2>

          <p className="font-desc text-sm leading-relaxed text-slate-600 sm:text-base">
            Lihatlah bagaimana kami merangkul teknologi dan inovasi. Setiap
            gambar mewakili aspek unik dari pengalaman pendidikan dan kegiatan
            komunitas kami. Bagaimana kami membuat pembelajaran interaktif dan
            menyenangkan!
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* ITEM 1 */}
          {allGalleryItems[0] && (
            <GalleryCard
              item={allGalleryItems[0]}
              className="
                h-64
                sm:h-80
                lg:h-96
                md:col-span-3
              "
            />
          )}

          {/* ITEM 2 */}
          {allGalleryItems[1] && (
            <GalleryCard
              item={allGalleryItems[1]}
              className="
                h-72
                sm:h-80
                md:col-span-2
              "
            />
          )}

          {/* ITEM 3 */}
          {allGalleryItems[2] && (
            <GalleryCard
              item={allGalleryItems[2]}
              className="
                h-72
                sm:h-80
                md:col-span-1
              "
            />
          )}

          {/* ITEM 4 - 6 */}
          {allGalleryItems.slice(3, 6).map((item) => (
            <GalleryCard key={item.id} item={item} className="h-64 sm:h-72" />
          ))}

          {/* ITEM 7 */}
          {allGalleryItems[6] && (
            <GalleryCard
              item={allGalleryItems[6]}
              className="
                h-64
                sm:h-80
                md:col-span-3
              "
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
