import { baseUrlClient } from "@/app/utils/config";

export async function getKabupatenBySlug(slug: string) {
  try {
    const response = await fetch(`${baseUrlClient}/kabupatens/slug/${slug}`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal get kabupatens");
    }

    return result;
  } catch (error) {
    console.error("Error get kabupatens", error);
    throw error;
  }
}
