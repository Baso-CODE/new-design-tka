import { AsalSekolahSiswa } from "@/app/types/sekolahSiwa.type";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllAsalSekolahSiswaIsDeleted(): Promise<
  AsalSekolahSiswa[]
> {
  try {
    const res = await fetch(
      `${baseUrlClient}/asalSekolahSiswas/isDeleted/all`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Failed to fetch data");

    const result = await res.json();

    return result.data;
  } catch (error) {
    console.error("Error fetching:", error);
    return [];
  }
}
