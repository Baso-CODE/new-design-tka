import { ContactCs } from "@/app/types/contact.type";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllContactCsIsDeleted(): Promise<ContactCs[]> {
  try {
    const res = await fetch(`${baseUrlClient}/contactcs/isDeleted/allcs`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      return [];
    }

    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching contact CS:", error);
    return [];
  }
}
