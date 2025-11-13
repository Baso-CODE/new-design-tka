import { ProgramBelajar } from "@/app/types/programBelejar.type";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllProgramBelajarIsDeleted(): Promise<{
  data: ProgramBelajar[];
}> {
  try {
    const res = await fetch(`${baseUrlClient}/programBelajars/isDeleted/all`, {
      cache: "no-store", // penting agar SSR fetch terbaru setiap kali request
    });

    if (!res.ok) throw new Error(`Fetch failed with status ${res.status}`);

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
