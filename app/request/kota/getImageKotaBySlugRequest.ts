import { Kota } from "@/app/types/kota.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getImageKotaBySlug(slug: string): Promise<Kota | null> {
  try {
    const response = await fetch(`${baseUrlClient}/kotas/image/slug/${slug}`, {
      method: "GET",
      cache: "force-cache",
    });

    const result = await response.json();

    // Jika response gagal
    if (!response.ok) {
      console.error("Failed fetch kota:", result.message);
      return null; // fallback
    }

    return result.data as Kota;
  } catch (error) {
    console.error("Error get kota:", error);
    return null; // fallback aman, tidak throw
  }
}
