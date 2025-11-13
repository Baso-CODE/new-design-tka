import { baseUrlClient } from "@/app/utils/config";

export async function getAllAsalSekolahSiswaIsDeleted() {
  try {
    const asalSekolahSiswas = await fetch(
      `${baseUrlClient}/asalSekolahSiswas/isDeleted/all`
    );
    const result = await asalSekolahSiswas.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
