import Image from "next/image";
import { getDataPromoDummy } from "../lib/getDummyDataRequest/getPromoDummy.request";

export default async function Promo() {
  const promos = await getDataPromoDummy();

  const isEmpty = promos.length === 0;

  return (
    <div className="bg-linear-to-b from-[#056dc9] via-[#044ea8] to-[#033790] text-white flex flex-col items-center justify-center py-12">
      <div className="flex flex-col gap-8 max-w-310 w-full px-2 rounded-lg">
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 justify-center items-center">
          {isEmpty ? (
            <Image
              src="/images/follback-banner-promo.png"
              alt="Promo tidak tersedia"
              width={1031}
              loading="lazy"
              height={600}
              className="w-auto max-w-full xl:max-w-257.75 h-auto rounded-lg shadow-xl"
            />
          ) : (
            promos.map((item) => (
              <div
                key={item.id}
                className="rounded-lg shadow-2xl overflow-hidden">
                <Image
                  src={`${item.image}`}
                  alt={item.title}
                  width={1031}
                  height={600}
                  className="w-auto max-w-full xl:max-w-257.75 h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
