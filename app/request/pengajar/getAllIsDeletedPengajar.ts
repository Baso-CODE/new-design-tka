import { baseUrlClient } from "@/app/utils/config";

export async function getAllPengajarIsDeleted() {
  try {
    const pengajars = await fetch(`${baseUrlClient}/pengajars/isDeleted/all`);
    const result = await pengajars.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
