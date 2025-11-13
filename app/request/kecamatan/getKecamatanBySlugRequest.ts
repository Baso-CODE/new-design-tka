import { baseUrlClient } from "../../utils/config";

export async function getKecamatanBySlug(slug: string) {
  try {
    console.log(slug);

    const response = await fetch(`${baseUrlClient}/kecamatans/slug/${slug}`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal get kecamatans");
    }

    return result;
  } catch (error) {
    console.error("Error get kecamatans", error);
    throw error;
  }
}
