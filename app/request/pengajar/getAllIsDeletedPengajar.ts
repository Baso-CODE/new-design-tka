import { ApiResponse } from "@/app/types/pengajar.type";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllPengajarIsDeleted(): Promise<ApiResponse> {
  try {
    const response = await fetch(`${baseUrlClient}/pengajars/isDeleted/all`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        status: response.status,
        data: [],
      };
    }

    const result: ApiResponse = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching pengajar:", error);

    return {
      status: 500,
      data: [],
    };
  }
}
