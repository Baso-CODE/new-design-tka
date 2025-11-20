import { KecamatanResponse } from "@/app/types/kota.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getKabupatenBySlug(slug: string) {
  try {
    const response = await fetch(`${baseUrlClient}/kabupatens/slug/${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Failed fetching kabupaten by slug:",
        await response.text()
      );
      return []; // fallback data
    }

    const result: KecamatanResponse = await response.json();
    return Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error("Error get kabupatens:", error);
    return []; // fallback data
  }
}
