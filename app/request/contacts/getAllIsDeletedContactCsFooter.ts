// request/getAllIsDeletedContactCsFooter.ts
import { ContactCs } from "@/app/types/contact.type";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllIsDeletedContactCsFooter(): Promise<ContactCs[]> {
  try {
    const response = await fetch(`${baseUrlClient}/contactcs/isDeleted/all`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("HTTP error:", response.status);
      return [];
    }

    const result = await response.json();
    return Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error("Error fetching footer contact CS:", error);
    return []; // Fallback aman
  }
}
