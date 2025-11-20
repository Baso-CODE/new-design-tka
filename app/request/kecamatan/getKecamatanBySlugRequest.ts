import { KelurahanResponse } from "@/app/types/kota.types";
import { baseUrlClient } from "../../utils/config";

export async function getKecamatanBySlug(slug: string) {
  try {
    const response = await fetch(`${baseUrlClient}/kecamatans/slug/${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Failed fetching kecamatan by slug:",
        await response.text()
      );
      return []; // fallback aman
    }

    const result: KelurahanResponse = await response.json();

    return Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error("Error get kecamatans:", error);
    return []; // fallback aman
  }
}
