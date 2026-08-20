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

// Fungsi helper untuk jeda waktu (delay) dalam milidetik
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Fungsi fetch dengan mekanisme Retry (mencoba ulang jika gagal)
async function fetchJSON(url, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = await res.json();
      return json.data || [];
    } catch (error) {
      if (i === retries - 1) {
        console.warn(
          `Gagal memuat URL setelah ${retries} kali percobaan: ${url}`,
        );
        return [];
      }
      // Tunggu lebih lama sebelum mencoba ulang
      await sleep(delay * (i + 1));
    }
  }
  return [];
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

// Batch fetch dengan batasan lebih aman (misal: 3 request bersamaan) dan jeda
async function batchFetch(items, fn, batchSize = 3) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(fn));
    results.push(...batchResults);
    await sleep(200); // Jeda kecil antar batch
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

    console.log(`\nMemproses Provinsi: ${prov.name} (File: ${kotaSlug}.xml)`);
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
        const districts = await fetchJSON(
          `${WILAYAH_BASE}/districts/${kab.code}.json`,
        );
        return { districts };
      },
      3, // Dikecilkan menjadi 3 agar stabil
    );

    for (const { districts } of districtData) {
      for (const kec of districts) {
        const kecamatanSlug = toSlug(kec.name);
        urls += xmlUrl(
          `${SITE_URL}/bimbel-tka-di-kota/${kotaSlug}/${kecamatanSlug}`,
          "0.7",
        );
      }

      const villageData = await batchFetch(
        districts,
        async (kec) => {
          const villages = await fetchJSON(
            `${WILAYAH_BASE}/villages/${kec.code}.json`,
          );
          return { villages };
        },
        3,
      );

      for (const { villages } of villageData) {
        for (const village of villages) {
          const kelurahanSlug = toSlug(village.name);
          urls += xmlUrl(
            `${SITE_URL}/bimbel-tka-di-kota/${kotaSlug}/${kelurahanSlug}`,
            "0.6",
          );
        }
      }
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}</urlset>`;

    fs.writeFileSync(path.join(outputDir, `${kotaSlug}.xml`), xml);
    console.log(
      `> Selesai & Berhasil menyimpan public/sitemap/${kotaSlug}.xml`,
    );

    // Berikan jeda 1 detik antar provinsi agar server API wilayah.id tidak memblokir/timeout
    await sleep(1000);
  }

  console.log(
    "\nSemua sitemap berhasil di-generate dengan lengkap ke folder public/sitemap/!",
  );
}

generate();
