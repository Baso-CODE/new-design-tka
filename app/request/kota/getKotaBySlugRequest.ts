import { GetKotaBySlugResponse } from "@/app/types/kota.types";
import { baseUrlClient } from "@/app/utils/config";

export async function getKotaBySlug(
  slug?: string
): Promise<GetKotaBySlugResponse> {
  if (!slug) {
    return {
      status: 400,
      data: { kota: null, kabupatens: [] },
      message: "Missing slug",
    };
  }

  try {
    const res = await fetch(
      `${baseUrlClient}/kotas/slug/${encodeURIComponent(slug)}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const json = await res.json();

    return {
      status: res.status,
      data: {
        kota: json.data?.kota ?? json.data ?? null,
        kabupatens:
          json.data?.kabupatens ??
          json.data?.kotakabupatens ??
          json.data?.kabupatens ??
          [],
      },
      message: json.message,
    };
  } catch (err) {
    console.error("getKotaBySlug error:", err);
    return {
      status: 500,
      data: { kota: null, kabupatens: [] },
      message: "Network error",
    };
  }
}
