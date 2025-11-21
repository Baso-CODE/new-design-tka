import { getKecamatanDummyByKabupatenSlug } from "@/app/lib/getDummyDataRequest/getKecamatanDummy.request";
import { KecamatanResponse } from "@/app/types/kota.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getKabupatenBySlug(slug: string) {
  try {
    const response = await fetch(`${baseUrlClient}/kabupatens/slug/${slug}`, {
      method: "GET",
      cache: "force-cache",
    });

    if (!response.ok) {
      return {
        message: "Fallback dummy data",
        data: { kecamatans: getKecamatanDummyByKabupatenSlug(slug) },
      };
    }

    const result: KecamatanResponse = await response.json();
    return result.data;
  } catch (error) {
    return {
      message: "Network error - fallback dummy",
      data: { kecamatans: getKecamatanDummyByKabupatenSlug(slug) },
    };
  }
}
