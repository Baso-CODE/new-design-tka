import { getKotaDummyBySlug } from "@/app/lib/getDummyDataRequest/getImageKotaDummy.data";
import { Kota } from "@/app/types/kota.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getImageKotaBySlug(slug: string): Promise<Kota | null> {
  try {
    const response = await fetch(`${baseUrlClient}/kotas/image/slug/${slug}`, {
      method: "GET",
      cache: "force-cache",
    });

    const result = await response.json();

    // Jika response gagal
    if (!response.ok || !result.data) {
      console.warn("Fallback to dummy kota:", result.message);
      return getKotaDummyBySlug(slug);
    }

    return result.data as Kota;
  } catch (error) {
    console.error("Error get kota:", error);

    // Fallback aman
    return getKotaDummyBySlug(slug);
  }
}
