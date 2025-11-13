import { baseUrlClient } from "@/app/utils/config";

export async function getKabupatenKotaBySlugUseSEO(slug: string) {
  try {
    const response = await fetch(
      `${baseUrlClient}/kabupatens/seo/slug/${slug}`,
      {
        method: "GET",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal get  kota kabupaten");
    }

    return result;
  } catch (error) {
    console.error("Error get kota kabupaten:", error);
    throw error;
  }
}
