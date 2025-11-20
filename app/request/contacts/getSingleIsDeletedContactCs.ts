import { ContactCs } from "@/app/types/contact.type";

export async function getSingleContactCsIsDeleted(): Promise<ContactCs | null> {
  try {
    const response = await fetch(
      "https://node-osn.edusmart-indonesia.com/api/contactcs/isDeleted/single",
      {
        cache: "force-cache",
      }
    );

    if (!response.ok) {
      return null; // fallback aman
    }

    const json = await response.json();

    return json.data as ContactCs;
  } catch (error) {
    console.error("Error fetching single contact:", error);
    return null; // JANGLAN throw! wajib return aman
  }
}
