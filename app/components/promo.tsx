import Image from "next/image";
import { getAllPromoIsDeleted } from "../request/promo/getAllIsDeletedPromo";
import { imageUrlClient } from "../utils/imageUrlClient";

export default async function Promo() {
  const promos = await getAllPromoIsDeleted();

  const isEmpty = promos.length === 0;

  return (
    <div className="bg-[#04397D] text-white flex flex-col items-center justify-center py-8">
      <div className="flex flex-col gap-8 max-w-[1240px] w-full px-2 rounded-lg">
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 justify-center items-center">
          {isEmpty ? (
            <Image
              src="/images/follback-banner-promo.png"
              alt="Promo tidak tersedia"
              width={1031}
              height={600}
              className="w-auto max-w-full xl:max-w-[1031px] h-auto rounded-lg"
            />
          ) : (
            promos.map((item) => (
              <div
                key={item.id}
                className="rounded-lg shadow-2xl overflow-hidden"
              >
                <Image
                  src={`${imageUrlClient}/promo-images/${item.image}`}
                  alt={item.title}
                  width={1031}
                  height={600}
                  className="w-auto max-w-full xl:max-w-[1031px] h-auto rounded-lg"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
