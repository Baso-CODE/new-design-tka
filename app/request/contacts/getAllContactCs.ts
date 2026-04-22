import { ContactCs } from "@/app/types/contact.type";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllContactCs(): Promise<ContactCs[] | null> {
  try {
    const response = await fetch(`${baseUrlClient}/contactcs/all/cs`);

    if (!response.ok) {
      return null;
    }

    const json = await response.json();

    if (!json?.data || !Array.isArray(json.data)) {
      console.error("Invalid CS response structure:", json);
      return null;
    }

    return json.data;
  } catch (err) {
    console.error("Error fetching contact CS:", err);
    return null; // FALLBACK
  }
}
