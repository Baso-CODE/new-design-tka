import { Kota } from "@/app/types/kota.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllKotaClient(): Promise<Kota[]> {
  try {
    const res = await fetch(`${baseUrlClient}/kotas/all/client`, {
      method: "GET",
      cache: "no-store", // SSR fresh data
    });

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.message || "Gagal memuat data kota");
    }

    return json.data;
  } catch (err) {
    console.error("Error get kota:", err);
    return [];
  }
}
