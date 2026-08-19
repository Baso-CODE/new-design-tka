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
    <div className="bg-[#04397D] flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center max-w-310 my-6">
        {/* Banner image + CTA */}
        <div className="relative flex justify-center">
          <Image
            width={1000}
            height={1000}
            loading="eager"
            src="/images/cabang-edumatrix-indonesia.webp"
            alt="Cakupan layanan Edumatrix di berbagai kota dan kabupaten Indonesia."
            className="w-full h-full mb-8 rounded-md"
          />

          <button className="absolute w-90.75 h-16.25 bg-[#133B79] font-title bottom-1 text-white font-bold py-2 px-4 shadow-2xl flex items-center justify-center text-[1.4rem] md:text-[2rem] rounded-xl">
            Lihat Lebih Lanjut
          </button>
        </div>

        {/* Kota Name */}
        <h2 className="text-white text-3xl font-bold my-6 text-center uppercase tracking-wide shadow-md bg-lineart-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
          {kotaName}
        </h2>

        {/* List Kabupaten */}
        <div className="w-full md:px-0 px-4">
          <div className="p-4 w-full bg-[#25538b] bg-opacity-10 backdrop-blur-md rounded-2xl shadow-xl border border-white border-opacity-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Pilih Kabupaten
            </h3>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
              {kabupatens.length > 0 ? (
                kabupatens.map((kabupaten) => (
                  <li key={kabupaten.slug || kabupaten.id} className="w-full">
                    <Link
                      href={`/bimbel-tka-di-kota/${kotaSlug}/${kabupaten.slug}`}
                      className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden 
                                 rounded-lg border border-white border-opacity-20 bg-[#466e9f] bg-opacity-15 px-4 
                                 text-white text-xs font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02]
                                 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 
                                 focus:ring-white focus:ring-opacity-75 whitespace-nowrap">
                      <span className="relative inline-flex overflow-hidden">
                        <span
                          className="absolute origin-bottom transition duration-500 
                                          translate-x-[-150%] group-hover:translate-x-0 group-hover:skew-x-0 skew-x-33">
                          {kabupaten.nama_kota_kabupaten}
                        </span>

                        <span
                          className="transition duration-500 
                                          group-hover:translate-x-[150%] group-hover:skew-x-33">
                          {kabupaten.nama_kota_kabupaten}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))
              ) : (
                <li className="col-span-full text-center text-white opacity-70 py-6">
                  Kabupaten belum tersedia atau sedang terjadi gangguan data.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
