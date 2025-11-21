import type { GetPromoResponse } from "@/app/types/promo.types";

export const promoDummy: GetPromoResponse = {
  message: "Berhasil mengambil data promo",
  data: [
    {
      id: 7,
      title: "Bukan Promo ",
      image: "/images/promo-paket-osn.avif",
      isDeleted: false,
      createdAt: "2024-10-30T03:21:38.000Z",
      updatedAt: "2025-01-03T02:08:23.000Z",
    },
  ],
};
