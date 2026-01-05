import { getDataKotaDummy } from "@/app/lib/getDummyDataRequest/getKotaDummy.request";
import Image from "next/image";
import Link from "next/link";

export default async function ListKota() {
  const kotaList = await getDataKotaDummy();

  return (
    <section className="bg-linear-to-br from-[#0a3977] to-[#104a8b] py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto items-center max-w-310">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-lg mb-4">
            Jangkauan Kami di Seluruh Indonesia
          </h2>
          <p className="text-lg sm:text-xl text-white opacity-90 max-w-3xl mx-auto">
            Temukan bimbingan OSN terbaik di kota Anda. Kami hadir di berbagai
            kota besar untuk mendukung impian akademismu!
          </p>
        </div>

        <div className="relative w-full max-w-310 mx-auto mb-16 overflow-hidden rounded-2xl">
          <Image
            src="/images/nusantara-preview-kota-indonesia.webp"
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
          <div className="md:px-0 px-4 w-full">
            <div className="p-4 bg-[#25538b] bg-opacity-10 backdrop-blur-md rounded-2xl shadow-xl border border-white border-opacity-20">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
                Pilih Kotamu
              </h3>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
                {kotaList.map((kota) => (
                  <li key={kota.slug} className="w-full">
                    <Link
                      href={`/bimbel-osn-imo-jismo-iso-ksn-di-kota/${kota.slug}`}
                      className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden 
                      rounded-lg border border-white border-opacity-20 bg-[#466e9f] bg-opacity-15 px-4 text-white text-xs
                      font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02] whitespace-nowrap text-ellipsis
                      transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 
                      focus:ring-white focus:ring-opacity-75">
                      <span className="relative inline-flex overflow-hidden">
                        <div className="absolute origin-bottom transition duration-500 transform-[translateX(-150%)_skewX(33deg)] group-hover:transform-[translateX(0)_skewX(0deg)]">
                          {kota.nama_kota}
                        </div>
                        <div className="transition duration-500 transform-[translateX(0%)_skewX(0deg)] group-hover:transform-[translateX(150%)_skewX(33deg)]">
                          {kota.nama_kota}
                        </div>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
