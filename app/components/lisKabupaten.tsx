import Image from "next/image";
import Link from "next/link";
import { getKotaBySlug } from "../request/kota/getKotaBySlugRequest";
import { GetKotaBySlugResponse } from "../types/kota.types";

interface Props {
  kotaName: string;
  kotaSlug: string;
}

export default async function ListKabupaten({ kotaName, kotaSlug }: Props) {
  const res: GetKotaBySlugResponse = await getKotaBySlug(kotaSlug);
  const kabupatens = res.data.kabupatens ?? [];
  return (
    <div className=" bg-[#04397D]  flex items-center justify-center ">
      <div className="container mx-auto flex flex-col items-center max-w-[1240px] my-6">
        <div className=" relative flex justify-center">
          <Image
            width={1000}
            height={1000}
            loading="eager"
            src="/images/cabang-edumatrix-indonesia.webp"
            alt="Bukti yang menggambarkan cakupan luas Edumatrix Indonesia dalam memberikan layanan bimbingan untuk Olimpiade Sains Nasional (OSN), termasuk program-program di berbagai kota dan kabupaten di seluruh Indonesia. Ini mencerminkan komitmen Edumatrix untuk membantu siswa meraih kesuksesan dalam kompetisi OSN di tingkat daerah maupun nasional."
            className=" w-full h-full mb-8 rounded-md"
          />
          <button className="absolute w-[363px] h-[65px] bg-[#133B79] font-title bottom-1 text-white font-bold py-2 px-4 focus:outline-none  shadow-2xl flex items-center justify-center text-[1.4rem] md:text-[2rem] rounded-xl">
            Lihat Lebih Lanjut
          </button>
        </div>
        <h2 className="text-white text-3xl font-bold my-6  text-center uppercase tracking-wide shadow-md bg-linear-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
          {kotaName}
        </h2>
        <div className=" md:px-0 px-4 w-full">
          <div className="p-4 w-full  bg-[#25538b] bg-opacity-10 backdrop-blur-md rounded-2xl shadow-xl border border-white border-opacity-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Pilih Kabupaten
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
              {kabupatens.map((kabupaten) => (
                <li key={kabupaten.slug || kabupaten.id} className="w-full">
                  <Link
                    href={`/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}/${kabupaten.slug}`}
                    className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden 
                             rounded-lg border border-white border-opacity-20 bg-[#466e9f] bg-opacity-15 px-4 text-white text-xs
                             font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02] whitespace-nowrap  text-ellipsis
                             transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 
                             focus:ring-white focus:ring-opacity-75"
                  >
                    <span className="relative inline-flex overflow-hidden">
                      <div className="absolute origin-bottom transition duration-500 transform-[translateX(-150%)_skewX(33deg)] group-hover:transform-[translateX(0)_skewX(0deg)]">
                        {kabupaten.nama_kota_kabupaten}
                      </div>
                      <div className="transition duration-500 transform-[translateX(0%)_skewX(0deg)] group-hover:transform-[translateX(150%)_skewX(33deg)]">
                        {kabupaten.nama_kota_kabupaten}
                      </div>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
