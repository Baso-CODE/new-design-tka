import { baseUrlClient } from "@/app/utils/config";
import { ContactCs } from "@/app/types/contact.type";

export async function getAllContactCs(): Promise<{ data: ContactCs[] }> {
  try {
    const response = await fetch(`${baseUrlClient}/contactcs/all/cs`, {
      cache: "no-store", // full SSR
    });
    const result = await response.json();
    return result; // { data: ContactCs[] }
  } catch (error) {
    console.error("Error fetching contact CS:", error);
    throw error;
  }
}
