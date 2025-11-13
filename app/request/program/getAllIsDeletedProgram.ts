import { baseUrlClient } from "@/app/utils/config";

export async function getAllProgramBelajarIsDeleted() {
  try {
    const programBelajar = await fetch(
      `${baseUrlClient}/programBelajars/isDeleted/all`
    );
    const result = await programBelajar.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
