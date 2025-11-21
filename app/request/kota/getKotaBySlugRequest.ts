import { getKotaDummyBySlug } from "@/app/lib/getDummyDataRequest/getImageKotaDummy.data";
import { getKabupatenDummyByKotaSlug } from "@/app/lib/getDummyDataRequest/getKabupatenDummy.request";
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
        cache: "force-cache",
      }
    );

    const json = await res.json();

    // Jika request berhasil → pakai data API
    if (res.ok) {
      return {
        status: res.status,
        data: {
          kota: json.data?.kota ?? json.data ?? null,
          kabupatens: json.data?.kabupatens ?? json.data?.kotakabupatens ?? [],
        },
        message: json.message,
      };
    }

    // Jika gagal → fallback ke dummy
    return {
      status: res.status,
      data: {
        kota: getKotaDummyBySlug(slug),
        kabupatens: getKabupatenDummyByKotaSlug(slug),
      },
      message: "Fallback to dummy data",
    };
  } catch (err) {
    console.error("getKotaBySlug error:", err);

    // Fallback jika network error
    return {
      status: 500,
      data: {
        kota: getKotaDummyBySlug(slug),
        kabupatens: getKabupatenDummyByKotaSlug(slug),
      },
      message: "Network error - fallback to dummy",
    };
  }
}
