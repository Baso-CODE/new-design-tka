import { getDataKotaDummy } from "@/app/lib/getDummyDataRequest/getKotaDummy.request";
import Image from "next/image";
import Link from "next/link";

export default async function ListKota() {
  const kotaList = await getDataKotaDummy();

  return (
    <section
      className="relative pb-24 pt-16 sm:py-20 lg:py-24 font-title overflow-hidden"
      style={{
        // Disamakan persis agar menyatu mulus dengan warna dasar komponen Asal Sekolah di atasnya (#033790)
        background: "linear-gradient(to bottom, #033790 0%, #0571cd 100%)",
      }}>
      <div className="container mx-auto items-center max-w-310 px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-lg mb-4">
            Jangkauan Kami di Seluruh{" "}
            <span className="text-[#fac61f]">Indonesia</span>
          </h2>
          <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl mx-auto">
            Temukan bimbingan TKA terbaik di kota Anda. Kami hadir di berbagai
            kota besar untuk mendukung impian akademismu!
          </p>
        </div>

        <div className="relative w-full max-w-310 mx-auto mb-16 md:mb-5 overflow-hidden rounded-2xl">
          <Image
            src="/images/nusantara-preview-indonesia.webp"
            alt="Peta Jangkauan Edumatrix Indonesia"
            width={2000}
            height={1200}
            className="w-full h-auto object-cover"
            priority
            loading="eager"
          />
        </div>

        {kotaList.length === 0 ? (
          <div className="text-center text-white text-xl p-8">
            Tidak ada kota yang tersedia saat ini.
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
            {/* Pill Header "Pilih Kotamu" */}
            <div className="inline-block bg-white text-[#033790] font-bold text-sm sm:text-base px-6 py-2 rounded-full shadow-lg mb-8 ">
              Pilih Kotamu
            </div>

            {/* Grid 3 Kolom Tombol Kapsul */}
            <ul className="grid grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full md:mb-12">
              {kotaList.map((kota) => (
                <li key={kota.slug} className="w-full">
                  <Link
                    href={`/bimbel-tka-di-kota/${kota.slug}`}
                    className="flex h-11 sm:h-12 w-full items-center justify-center 
                    rounded-full bg-[#2082e6] hover:bg-[#1b70c4] px-3 text-white text-xs sm:text-sm
                    font-medium shadow-md hover:shadow-lg transform hover:scale-[1.02] 
                    whitespace-nowrap text-ellipsis overflow-hidden transition-all duration-200 text-center">
                    {kota.nama_kota}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Gelombang / Wave di Bagian Bawah */}
      <div className="absolute -mb-px bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-24 sm:h-32 lg:h-48"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M0,15 C400,200 800,-80 1200,120 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
