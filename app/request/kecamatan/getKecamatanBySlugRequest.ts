import { KelurahanResponse } from "@/app/types/kota.types";
import { baseUrlClient } from "../../utils/config";
import { getKelurahanDummyByKecamatanSlug } from "@/app/lib/getDummyDataRequest/getKelurahanDummy.reques";

export async function getKecamatanBySlug(
  slug: string
): Promise<KelurahanResponse["data"]> {
  try {
    const response = await fetch(`${baseUrlClient}/kecamatans/slug/${slug}`, {
      method: "GET",
      cache: "force-cache",
    });

    // Jika gagal → fallback ke dummy
    if (!response.ok) {
      return {
        kelurahans: getKelurahanDummyByKecamatanSlug(slug),
      };
    }

    const result: KelurahanResponse = await response.json();

    return {
      kelurahans: result.data?.kelurahans ?? [],
    };
  } catch (error) {
    console.error("Error get kecamatans:", error);

    // Jika network error → fallback dummy
    return {
      kelurahans: getKelurahanDummyByKecamatanSlug(slug),
    };
  }
}
