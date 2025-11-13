import { baseUrlClient } from "@/app/utils/config";

export async function getAllIsDeletedContactCsFooter() {
  try {
    const contactcs = await fetch(`${baseUrlClient}/contactcs/isDeleted/all`);
    const result = await contactcs.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
