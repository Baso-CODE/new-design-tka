import { ContactCs } from "@/app/types/contact.type";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllContactCsIsDeleted(): Promise<ContactCs[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000); // timeout 5 detik

  try {
    const res = await fetch(`${baseUrlClient}/contactcs/isDeleted/allcs`, {
      signal: controller.signal,
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching contact CS:", error);
    return [];
  } finally {
    clearTimeout(timeout);
  }
}
