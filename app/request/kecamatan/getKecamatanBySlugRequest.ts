import { KelurahanResponse } from "@/app/types/kota.types";
import { baseUrlClient } from "../../utils/config";

export async function getKecamatanBySlug(slug: string) {
  try {
    const response = await fetch(`${baseUrlClient}/kecamatans/slug/${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    const result: KelurahanResponse = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error get kecamatans", error);
    throw error;
  }
}
