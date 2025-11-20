import { GetPromoResponse, Promo } from "@/app/types/promo.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllPromoIsDeleted(): Promise<Promo[]> {
  try {
    const res = await fetch(`${baseUrlClient}/promos/isDeleted/all`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch promo");

    const result: GetPromoResponse = await res.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching promo:", error);
    return [];
  }
}
