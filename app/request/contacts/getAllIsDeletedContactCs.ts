import { baseUrlClient } from "@/app/utils/config";

export async function getAllContactCsIsDeleted() {
  try {
    const contactcs = await fetch(`${baseUrlClient}/contactcs/isDeleted/allcs`);
    const result = await contactcs.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
