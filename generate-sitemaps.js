import fs from "fs";
import path from "path";

const WILAYAH_BASE = "https://wilayah.id/api";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";

const PROVINCE_TO_CAPITAL = {
  11: "banda-aceh",
  12: "medan",
  13: "padang",
  14: "pekanbaru",
  15: "jambi",
  16: "palembang",
  17: "bengkulu",
  18: "bandar-lampung",
  19: "pangkal-pinang",
  21: "tanjung-pinang",
  31: "jakarta",
  32: "bandung",
  33: "semarang",
  34: "yogyakarta",
  35: "surabaya",
  36: "serang",
  51: "denpasar",
  52: "mataram",
  53: "kupang",
  61: "pontianak",
  62: "palangka-raya",
  63: "banjarmasin",
  64: "samarinda",
  65: "tanjung-selor",
  71: "manado",
  72: "palu",
  73: "makassar",
  74: "kendari",
  75: "gorontalo",
  76: "mamuju",
  81: "ambon",
  82: "sofifi",
  91: "manokwari",
  92: "jayapura",
  93: "nabire",
  94: "wamena",
  95: "merauke",
  96: "sorong",
};

async function fetchJSON(url) {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/^(kabupaten|kota|kecamatan|desa|kelurahan)\s+/, "")
    .trim()
    .replace(/\s+/g, "-");
}

function xmlUrl(loc, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
}

async function batchFetch(items, fn, batchSize = 5) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(fn));
    results.push(...batchResults);
  }
  return results;
}

async function generate() {
  console.log("Sedang mengambil data provinsi...");
  const provinces = await fetchJSON(`${WILAYAH_BASE}/provinces.json`);

  const outputDir = path.join(import.meta.dir, "public", "sitemap");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const prov of provinces) {
    const code = prov.code.slice(0, 2);
    const kotaSlug = PROVINCE_TO_CAPITAL[code] ?? "makassar";

    console.log(`Memproses Provinsi: ${prov.name} (File: ${kotaSlug}.xml)`);
    let urls = "";

    // Level 1: kotaSlug
    urls += xmlUrl(`${SITE_URL}/bimbel-tka-di-kota/${kotaSlug}`, "1.0");

    // Level 2: Regencies
    const regencies = await fetchJSON(
      `${WILAYAH_BASE}/regencies/${prov.code}.json`,
    );
    for (const kab of regencies) {
      const kabupatenSlug = toSlug(kab.name);
      urls += xmlUrl(
        `${SITE_URL}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}`,
        "0.8",
      );
    }

    // Level 3 & 4: Districts & Villages
    const districtData = await batchFetch(
      regencies,
      async (kab) => {
        const kabupatenSlug = toSlug(kab.name);
        const districts = await fetchJSON(
          `${WILAYAH_BASE}/districts/${kab.code}.json`,
        );
        return { kabupatenSlug, districts };
      },
      5,
    );

    for (const { kabupatenSlug, districts } of districtData) {
      for (const kec of districts) {
        const kecamatanSlug = toSlug(kec.name);
        urls += xmlUrl(
          `${SITE_URL}/bimbel-tka-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}`,
          "0.7",
        );
      }

      const villageData = await batchFetch(
        districts,
        async (kec) => {
          const kecamatanSlug = toSlug(kec.name);
          const villages = await fetchJSON(
            `${WILAYAH_BASE}/villages/${kec.code}.json`,
          );
          return { kecamatanSlug, villages };
        },
        5,
      );

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

    // Menggunakan kotaSlug sebagai nama file (contoh: banda-aceh.xml, makassar.xml)
    fs.writeFileSync(path.join(outputDir, `${kotaSlug}.xml`), xml);
    console.log(`> Berhasil membuat public/sitemap/${kotaSlug}.xml`);
  }

  console.log("Semua sitemap berhasil di-generate ke folder public/sitemap/!");
}

generate();
