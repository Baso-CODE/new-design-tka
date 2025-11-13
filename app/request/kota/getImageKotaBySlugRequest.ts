import { baseUrlClient } from "@/app/utils/config";

export async function getImageKotaBySlug(slug: string) {
  try {
    const response = await fetch(`${baseUrlClient}/kotas/image/slug/${slug}`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal get  kota");
    }

    return result;
  } catch (error) {
    console.error("Error get kota:", error);
    throw error;
  }
}
