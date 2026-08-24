import Image from "next/image";
import Link from "next/link";
import { getKotaBySlug } from "../request/kota/getKotaBySlugRequest";
import { GetKotaBySlugResponse } from "../types/kota.types";

interface Props {
  kotaName: string;
  kotaSlug: string;
}

export default async function ListKabupaten({ kotaName, kotaSlug }: Props) {
  let kabupatens: GetKotaBySlugResponse["data"]["kabupatens"] = [];

  // Fetch aman tanpa risiko error SSR
  try {
    const res = await getKotaBySlug(kotaSlug);
    kabupatens = res?.data?.kabupatens ?? [];
  } catch (err) {
    console.error("Error fetch kabupaten:", err);
    kabupatens = []; // Fallback
  }

  return (
    <section
      className="relative pb-24 pt-16 sm:py-20 lg:py-24 font-title overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #033790 0%, #056cc7 100%)",
      }}>
      <div className="container mx-auto items-center max-w-310 px-4 relative z-10">
        {/* Header Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-lg mb-4">
            Cakupan Wilayah Bimbingan TKA di{" "}
            <span className="text-[#fac61f] uppercase">{kotaName}</span>
          </h2>
          <p className="text-base sm:text-lg text-white opacity-90 max-w-3xl mx-auto">
            Temukan wilayah kabupaten terdekat Anda di {kotaName} untuk
            mendapatkan layanan bimbingan belajar terbaik.
          </p>
        </div>

        {/* Banner Image (Tanpa tombol absolute menumpuk, dibuat bersih) */}
        <div className="relative w-full max-w-310 mx-auto mb-12 overflow-hidden ">
          <Image
            src="/images/nusantara-preview-indonesia.webp"
            alt={`Cakupan layanan Edumatrix di ${kotaName} dan sekitarnya.`}
            width={1000}
            height={1000}
            priority
            loading="eager"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* List Kabupaten Container */}
        {kabupatens.length === 0 ? (
          <div className="text-center text-white text-xl p-8">
            Kabupaten belum tersedia atau sedang terjadi gangguan data.
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            {/* Pill Header "Pilih Kabupaten" */}
            <div className="inline-block bg-white text-[#033790] font-bold text-sm sm:text-base px-6 py-2 rounded-full shadow-lg mb-8">
              Pilih Kabupaten
            </div>

            {/* Grid Tombol Kapsul (3 Kolom seperti style ListKota) */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full md:mb-12">
              {kabupatens.map((kabupaten) => (
                <li key={kabupaten.slug || kabupaten.id} className="w-full">
                  <Link
                    href={`/bimbel-tka-di-kota/${kotaSlug}/${kabupaten.slug}`}
                    className="flex h-11 sm:h-12 w-full items-center justify-center 
                    rounded-full bg-[#2082e6] hover:bg-[#1b70c4] px-4 text-white text-xs sm:text-sm
                    font-medium shadow-md hover:shadow-lg transform hover:scale-[1.02] 
                    whitespace-nowrap text-ellipsis overflow-hidden transition-all duration-200 text-center">
                    {kabupaten.nama_kota_kabupaten}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Gelombang / Wave di Bagian Bawah */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-20 sm:h-32 lg:h-48"
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
