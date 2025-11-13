import { baseUrlClient } from "@/app/utils/config";

export async function getAllContactCs() {
  try {
    const contactcs = await fetch(`${baseUrlClient}/contactcs/all/cs`);
    const result = await contactcs.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
