import { ContactCs } from "@/app/types/contact.type";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllContactCsIsDeleted(): Promise<ContactCs[]> {
  try {
    const res = await fetch(`${baseUrlClient}/contactcs/isDeleted/allcs`, {
      // cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch contact CS");
    }

    const result = await res.json();
    return result.data; // backend: { data: [...] }
  } catch (error) {
    console.error("Error fetching contact CS:", error);
    return [];
  }
}
