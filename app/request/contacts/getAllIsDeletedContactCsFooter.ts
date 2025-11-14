import { ContactCs } from "@/app/types/contact.type";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllIsDeletedContactCsFooter(): Promise<ContactCs[]> {
  try {
    const response = await fetch(`${baseUrlClient}/contactcs/isDeleted/all`, {
      cache: "no-store",
    });

    const result = await response.json();
    return result.data ?? [];
  } catch (error) {
    console.error("Error fetching footer contact CS:", error);
    throw error;
  }
}
