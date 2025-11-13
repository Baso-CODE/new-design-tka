import { baseUrlClient } from "@/app/utils/config";

export async function getAllPromoIsDeleted() {
  try {
    const promos = await fetch(`${baseUrlClient}/promos/isDeleted/all`);
    const result = await promos.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
