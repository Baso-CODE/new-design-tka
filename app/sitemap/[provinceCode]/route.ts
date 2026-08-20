import {
  batchFetch,
  getDistricts,
  getRegencies,
  getVillages,
  PROVINCE_TO_CAPITAL,
  SITE_URL,
  toSlug,
} from "@/app/lib/sitemap-utils";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 86400; // Cache selama 24 jam

function xmlUrl(loc: string, priority: string) {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
}

type RouteContext = {
  params: Promise<{ provinceCode: string }>;
};

export async function GET(_req: NextRequest, context: RouteContext) {
  const { provinceCode } = await context.params;

  // Bersihkan ekstensi .xml jika ada
  const code = provinceCode.replace(".xml", "");
  const kotaSlug = PROVINCE_TO_CAPITAL[code] ?? "makassar";

  let urls = "";

  // Level 1: kotaSlug (Representasi ibukota / wilayah utama provinsi)
  // Contoh: /bimbel-tka-di-kota/makassar
  urls += xmlUrl(`${SITE_URL}/bimbel-tka-di-kota/${kotaSlug}`, "1.0");

  // Ambil data kabupaten/kota di provinsi tersebut
  const regencies = await getRegencies(code);

  // Level 2: kabupatenSlug
  // Contoh: /bimbel-tka-di-kota/makassar/luwu-utara
  for (const kab of regencies) {
    const kabupatenSlug = toSlug(kab.name);
    urls += xmlUrl(
      `${SITE_URL}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}`,
      "0.8",
    );
  }

  // Level 3 & Level 4: Kecamatan dan Kelurahan menggunakan batchFetch
  const districtData = await batchFetch(
    regencies,
    async (kab) => {
      const kabupatenSlug = toSlug(kab.name);
      const districts = await getDistricts(kab.code);
      return { kabupatenSlug, districts };
    },
    5,
  );

  for (const { kabupatenSlug, districts } of districtData) {
    // Level 3: Kecamatan
    // Contoh: /bimbel-tka-di-kota/makassar/luwu-utara/baebunta-selatan
    for (const kec of districts) {
      const kecamatanSlug = toSlug(kec.name);
      urls += xmlUrl(
        `${SITE_URL}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`,
        "0.7",
      );
    }

    // Ambil data kelurahan berdasarkan kecamatan secara paralel
    const villageData = await batchFetch(
      districts,
      async (kec) => {
        const kecamatanSlug = toSlug(kec.name);
        const villages = await getVillages(kec.code);
        return { kecamatanSlug, villages };
      },
      5,
    );

    // Level 4: Kelurahan
    // Contoh: /bimbel-tka-di-kota/makassar/luwu-utara/baebunta-selatan/beringin-jaya
    for (const { kecamatanSlug, villages } of villageData) {
      for (const village of villages) {
        const kelurahanSlug = toSlug(village.name);
        urls += xmlUrl(
          `${SITE_URL}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`,
          "0.6",
        );
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
    },
  });
}
