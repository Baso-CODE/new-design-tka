import { KecamatanResponse } from "@/app/types/kota.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getKabupatenBySlug(slug: string) {
  try {
    const response = await fetch(`${baseUrlClient}/kabupatens/slug/${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    const result: KecamatanResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error get kabupatens", error);
    throw error;
  }
}
