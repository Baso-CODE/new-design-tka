import { Kota } from "@/app/types/kota.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getAllKotaClient(): Promise<Kota[]> {
  try {
    const res = await fetch(`${baseUrlClient}/kotas/all/client`, {
      method: "GET",
      cache: "no-store",
    });

    // Jika fetch gagal atau response bukan 2xx
    if (!res.ok) {
      console.error("Failed fetching kota:", await res.text());
      return [];
    }

    const json = await res.json();

    // Validasi output untuk keamanan
    return Array.isArray(json.data) ? json.data : [];
  } catch (err) {
    console.error("Error get kota:", err);
    return []; // fallback aman
  }
}
