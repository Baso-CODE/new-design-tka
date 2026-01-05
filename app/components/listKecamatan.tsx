import Image from "next/image";
import Link from "next/link";

import { getKabupatenBySlug } from "../request/kabupaten/getKabupatenBySlugRequest";

interface Props {
  kabupatenName: string;
  kabupatenSlug: string;
  kotaSlug: string;
}

export default async function ListKecamatan({
  kabupatenName,
  kabupatenSlug,
  kotaSlug,
}: Props) {
  const kabupaten = await getKabupatenBySlug(kabupatenSlug);

  const kecamatans = kabupaten.kecamatans ?? [];

  return (
    <div className=" bg-[#04397D]  flex items-center justify-center ">
      <div className="container mx-auto flex flex-col items-center max-w-310 my-6">
        <div className=" relative flex justify-center">
          <Image
            width={1000}
            height={1000}
            loading="eager"
            src="/images/cabang-edumatrix-indonesia.webp"
            alt="gambar"
            className=" w-full h-full mb-8 rounded-md"
          />
          <button className="absolute w-[363px] h-[65px] bg-[#133B79] font-title bottom-1 text-white font-bold py-2 px-4 shadow-2xl flex items-center justify-center text-[1.4rem] md:text-[2rem] rounded-xl">
            Lihat Lebih Lanjut
          </button>
        </div>

        <h2 className="text-white text-3xl font-bold my-6 text-center uppercase tracking-wide bg-linear-to-r from-blue-400 to-indigo-500 p-2 rounded-lg">
          {kabupatenName}
        </h2>

        <div className=" md:px-0 px-4 w-full">
          <div className="p-4 w-full bg-[#25538b] bg-opacity-10 backdrop-blur-md rounded-2xl shadow-xl border border-white border-opacity-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              Pilih Kecamatan
            </h3>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
              {kecamatans.map((kec) => (
                <li key={kec.slug} className="w-full">
                  <Link
                    href={`/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kotaSlug}/${kabupatenSlug}/${kec.slug}`}
                    className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden 
                             rounded-lg border border-white border-opacity-20 bg-[#466e9f] bg-opacity-15 px-4 text-white text-xs
                             font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02] whitespace-nowrap text-ellipsis
                             transition-all duration-300 ease-in-out">
                    {kec.nama_kecamatan}
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
