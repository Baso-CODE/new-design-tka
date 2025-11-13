import { baseUrlClient } from "@/app/utils/config";

export async function getKotaBySlug(slug: string) {
  try {
    const response = await fetch(`${baseUrlClient}/kotas/slug/${slug}`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal menghapus kota");
    }

    return result;
  } catch (error) {
    console.error("Error deleting kota:", error);
    throw error;
  }
}
