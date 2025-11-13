import { baseUrlClientTest } from "../../utils/config";

export async function getKelurahanBySlugUseSEO(slug: string) {
  try {
    const response = await fetch(
      `${baseUrlClientTest}/kelurahans/seo/slug/${slug}`,
      {
        method: "GET",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal get kecamatan");
    }

    return result;
  } catch (error) {
    console.error("Error get kecamatan:", error);
    throw error;
  }
}
