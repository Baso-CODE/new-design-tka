import Image from "next/image";

const Gallery = () => {
  return (
    <div className="bg-white  h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-310 px-2 ">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center md:gap-6 lg:gap-14">
            <h2 className="text-3xl font-bold text-[#1e3a8a] font-title lg:text-4xl ">
              Gallery
            </h2>

            <p className="hidden max-w-screen-sm text-gray-700 font-desc font-medium md:block">
              Lihatlah bagaimana kami merangkul teknologi dan inovasi, Setiap
              gambar mewakili aspek unik dari pengalaman pendidikan dan kegiatan
              komunitas kami. Bagaimana kami membuat pembelajaran interaktif dan
              menyenangkan!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* Image 1 */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <Image
              src="/images/gallery-belajar/gallery-offline-1.webp"
              loading="lazy"
              width={1000}
              height={1000}
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Offline
            </span>
          </a>

          {/* Image 2 */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <Image
              src="/images/gallery-belajar/gallery-offline-2.webp"
              loading="lazy"
              width={1000}
              height={1000}
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Offline
            </span>
          </a>

          {/* Image 3 */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <Image
              src="/images/gallery-belajar/gallery-online-3.webp"
              loading="lazy"
              width={1000}
              height={1000}
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Online
            </span>
          </a>

          {/* Image 4 */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <Image
              src="/images/gallery-belajar/gallery-online-4.webp"
              loading="lazy"
              width={1000}
              height={1000}
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Online
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
