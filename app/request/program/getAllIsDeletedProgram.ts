import { ProgramBelajar } from "@/app/types/programBelejar.type";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllProgramBelajarIsDeleted(): Promise<{
  data: ProgramBelajar[];
}> {
  try {
    const res = await fetch(`${baseUrlClient}/programBelajars/isDeleted/all`, {
      cache: "force-cache",
    });

    // Jika gagal (HTTP error)
    if (!res.ok) {
      console.error(`Fetch failed with status ${res.status}`);
      return { data: [] };
    }

    const result = await res.json();

    // Validasi agar aman
    return {
      data: Array.isArray(result.data) ? result.data : [],
    };
  } catch (error) {
    console.error("Error fetching program belajar:", error);
    return { data: [] }; // fallback aman
  }
}
