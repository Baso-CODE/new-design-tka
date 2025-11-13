import { baseUrlClient } from "@/app/utils/config";

export async function getSingleContactCsIsDeleted() {
  try {
    const response = await fetch(`${baseUrlClient}/contactcs/isDeleted/single`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
