import { Kota } from "@/app/types/kota.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getImageKotaBySlug(slug: string): Promise<Kota> {
  try {
    const response = await fetch(`${baseUrlClient}/kotas/image/slug/${slug}`, {
      method: "GET",

      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal mengambil data kota");
    }

    return result.data as Kota;
  } catch (error) {
    console.error("Error get kota:", error);
    throw error;
  }
}
