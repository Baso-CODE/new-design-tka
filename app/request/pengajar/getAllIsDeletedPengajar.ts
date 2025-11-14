import { ApiResponse } from "@/app/types/pengajar.type";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllPengajarIsDeleted(): Promise<ApiResponse> {
  try {
    const response = await fetch(`${baseUrlClient}/pengajars/isDeleted/all`);

    if (!response.ok) {
      // Tangani respons HTTP yang tidak sukses
      const errorText = await response.text();
      console.error(`HTTP error! status: ${response.status}`, errorText);
      throw new Error(
        `Failed to fetch pengajar data. Status: ${response.status}`
      );
    }

    const result: ApiResponse = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
