export const WILAYAH_BASE = "https://wilayah.id/api";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bimbeljuaratka.com";

// ── Types ─────────────────────────────────────────────────
export type WilayahItem = { code: string; name: string };
export type WilayahResponse = { data: WilayahItem[] };

// ── Fetchers ──────────────────────────────────────────────
export async function getProvinces(): Promise<WilayahItem[]> {
  try {
    const res = await fetch(`${WILAYAH_BASE}/provinces.json`, {
      next: { revalidate: 86400 },
    });
    const json: WilayahResponse = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

export async function getRegencies(
  provinceCode: string,
): Promise<WilayahItem[]> {
  try {
    const res = await fetch(`${WILAYAH_BASE}/regencies/${provinceCode}.json`, {
      next: { revalidate: 86400 },
    });
    const json: WilayahResponse = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

export async function getDistricts(
  regencyCode: string,
): Promise<WilayahItem[]> {
  try {
    const res = await fetch(`${WILAYAH_BASE}/districts/${regencyCode}.json`, {
      next: { revalidate: 86400 },
    });
    const json: WilayahResponse = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

export async function getVillages(
  districtCode: string,
): Promise<WilayahItem[]> {
  try {
    const res = await fetch(`${WILAYAH_BASE}/villages/${districtCode}.json`, {
      next: { revalidate: 86400 },
    });
    const json: WilayahResponse = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

// ── Slug ──────────────────────────────────────────────────
export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/^(kabupaten|kota|kecamatan|desa|kelurahan)\s+/, "")
    .trim()
    .replace(/\s+/g, "-");
}

// ── Ibu kota provinsi ─────────────────────────────────────
export const PROVINCE_TO_CAPITAL: Record<string, string> = {
  "11": "banda-aceh",
  "12": "medan",
  "13": "padang",
  "14": "pekanbaru",
  "15": "jambi",
  "16": "palembang",
  "17": "bengkulu",
  "18": "bandar-lampung",
  "19": "pangkal-pinang",
  "21": "tanjung-pinang",
  "31": "jakarta",
  "32": "bandung",
  "33": "semarang",
  "34": "yogyakarta",
  "35": "surabaya",
  "36": "serang",
  "51": "denpasar",
  "52": "mataram",
  "53": "kupang",
  "61": "pontianak",
  "62": "palangka-raya",
  "63": "banjarmasin",
  "64": "samarinda",
  "65": "tanjung-selor",
  "71": "manado",
  "72": "palu",
  "73": "makassar",
  "74": "kendari",
  "75": "gorontalo",
  "76": "mamuju",
  "81": "ambon",
  "82": "sofifi",
  "91": "manokwari",
  "92": "jayapura",
  "93": "nabire",
  "94": "wamena",
  "95": "merauke",
  "96": "sorong",
};

// ── Batch fetcher ─────────────────────────────────────────
export async function batchFetch<T, R>(
  items: T[],
  fn: (item: T) => Promise<R>,
  batchSize = 5,
): Promise<R[]> {
  const results: R[] = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(fn));
    results.push(...batchResults);
  }
  return results;
}
