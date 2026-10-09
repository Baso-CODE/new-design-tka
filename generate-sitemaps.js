import fs from "node:fs";
import path from "node:path";

const WILAYAH_BASE = "https://wilayah.id/api";
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com"
).replace(/\/+$/, "");

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

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, "public", "sitemap");
const INDEX_PATH = path.join(ROOT, "public", "sitemap.xml");

const REQUEST_DELAY = Number(process.env.SITEMAP_DELAY_MS || 700);
const PROVINCE_DELAY = 3000;
const MAX_RETRIES = 5;
const MAX_URLS = 45000;
const MAX_BYTES = 45 * 1024 * 1024;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let lastRequestAt = 0;

async function fetchJSON(url) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const elapsed = Date.now() - lastRequestAt;
    if (elapsed < REQUEST_DELAY) {
      await sleep(REQUEST_DELAY - elapsed);
    }

    lastRequestAt = Date.now();

    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(30000),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const json = await response.json();

      if (!Array.isArray(json.data)) {
        throw new Error("Format respons API tidak valid");
      }

      return json.data;
    } catch (error) {
      lastError = error;

      console.warn(`  ⚠️ Request gagal (${attempt}/${MAX_RETRIES}): ${url}`);

      if (attempt < MAX_RETRIES) {
        const retryDelay = Math.min(30000, 2000 * 2 ** (attempt - 1));
        await sleep(retryDelay);
      }
    }
  }

  throw new Error(`${url}: ${lastError?.message}`);
}

function toSlug(name) {
  return String(name)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(
      /^(?:kota\s+administrasi|kabupaten\s+administrasi|administrasi|kabupaten|kota|kecamatan|kelurahan|desa)\s+/,
      "",
    )
    .replace(/&/g, " dan ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlEntry(url) {
  return `  <url>
    <loc>${xmlEscape(url)}</loc>
  </url>`;
}

function createUrlset(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(urlEntry).join("\n")}
</urlset>`;
}

function createIndex(files) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${files
  .map(
    (file) => `  <sitemap>
    <loc>${xmlEscape(`${SITE_URL}/sitemap/${file}`)}</loc>
  </sitemap>`,
  )
  .join("\n")}
</sitemapindex>`;
}

function splitUrls(urls) {
  const chunks = [];
  let chunk = [];
  let bytes = 200;

  for (const url of urls) {
    const entryBytes = Buffer.byteLength(urlEntry(url)) + 1;

    if (chunk.length >= MAX_URLS || bytes + entryBytes > MAX_BYTES) {
      chunks.push(chunk);
      chunk = [];
      bytes = 200;
    }

    chunk.push(url);
    bytes += entryBytes;
  }

  if (chunk.length) chunks.push(chunk);
  return chunks;
}

function writeAtomic(filepath, content) {
  const temp = `${filepath}.tmp`;
  fs.writeFileSync(temp, content, "utf8");
  fs.renameSync(temp, filepath);
}

function getProvinceFiles(slug) {
  const pattern = new RegExp(
    `^${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:-\\d+)?\\.xml$`,
  );

  return fs.readdirSync(OUTPUT_DIR).filter((file) => pattern.test(file));
}

function updateIndex() {
  const files = fs
    .readdirSync(OUTPUT_DIR)
    .filter((file) => file.endsWith(".xml"))
    .sort();

  writeAtomic(INDEX_PATH, createIndex(files));
  console.log(`  📋 Sitemap index diperbarui: ${files.length} file`);
}

async function generateProvince(prov, slug) {
  const urls = [];
  const seen = new Set();
  const base = `${SITE_URL}/bimbel-tka-di-kota/${slug}`;

  const add = (url) => {
    if (seen.has(url)) return;
    seen.add(url);
    urls.push(url);
  };

  add(base);

  const regencies = await fetchJSON(
    `${WILAYAH_BASE}/regencies/${prov.code}.json`,
  );

  if (!regencies.length) {
    throw new Error(`Tidak ada data kabupaten: ${prov.name}`);
  }

  for (let i = 0; i < regencies.length; i++) {
    const kab = regencies[i];
    const kabSlug = toSlug(kab.name);

    if (!kabSlug) {
      throw new Error(`Slug kabupaten kosong: ${kab.name}`);
    }

    const kabUrl = `${base}/${kabSlug}`;

    const districts = await fetchJSON(
      `${WILAYAH_BASE}/districts/${kab.code}.json`,
    );

    if (!districts.length) {
      throw new Error(`Data kecamatan kosong: ${kab.name}`);
    }

    add(kabUrl);

    for (const kec of districts) {
      const kecSlug = toSlug(kec.name);

      if (!kecSlug) {
        throw new Error(`Slug kecamatan kosong: ${kec.name}`);
      }

      const kecUrl = `${kabUrl}/${kecSlug}`;

      const villages = await fetchJSON(
        `${WILAYAH_BASE}/villages/${kec.code}.json`,
      );

      add(kecUrl);

      for (const kel of villages) {
        const kelSlug = toSlug(kel.name);

        if (!kelSlug) {
          throw new Error(`Slug kelurahan kosong: ${kel.name}`);
        }

        add(`${kecUrl}/${kelSlug}`);
      }
    }

    console.log(
      `  [${i + 1}/${regencies.length}] ${kab.name} | ` +
        `${districts.length} kecamatan | ${urls.length} URL`,
    );
  }

  return urls;
}

function saveProvince(slug, urls) {
  const chunks = splitUrls(urls);
  const oldFiles = getProvinceFiles(slug);
  const newFiles = [];

  for (let i = 0; i < chunks.length; i++) {
    const filename = i === 0 ? `${slug}.xml` : `${slug}-${i + 1}.xml`;

    writeAtomic(path.join(OUTPUT_DIR, filename), createUrlset(chunks[i]));

    newFiles.push(filename);
  }

  updateIndex();

  for (const filename of oldFiles) {
    if (!newFiles.includes(filename)) {
      fs.rmSync(path.join(OUTPUT_DIR, filename));
    }
  }

  updateIndex();

  return newFiles;
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log("🚀 GENERATOR SITEMAP TKA");
  console.log(`🌐 Website: ${SITE_URL}`);
  console.log(`📡 API: ${WILAYAH_BASE}`);
  console.log(`⏱️ Delay request: ${REQUEST_DELAY} ms`);
  console.log("📍 Mengambil daftar provinsi...\n");

  const provinces = await fetchJSON(`${WILAYAH_BASE}/provinces.json`);

  if (!provinces.length) {
    throw new Error("Daftar provinsi kosong");
  }

  const failures = [];
  let totalUrls = 0;
  let success = 0;

  for (let i = 0; i < provinces.length; i++) {
    const prov = provinces[i];
    const code = prov.code.slice(0, 2);
    const slug = PROVINCE_TO_CAPITAL[code];

    console.log("=".repeat(55));
    console.log(`📍 [${i + 1}/${provinces.length}] ${prov.name}`);

    if (!slug) {
      console.warn(`  ⚠️ Mapping tidak ada: ${code}`);
      failures.push(prov.name);
      continue;
    }

    try {
      const urls = await generateProvince(prov, slug);
      const files = saveProvince(slug, urls);

      totalUrls += urls.length;
      success++;

      console.log(`✅ ${prov.name} selesai: ${urls.length} URL`);
      console.log(`📁 File: ${files.join(", ")}`);
    } catch (error) {
      failures.push(prov.name);
      console.error(`❌ Gagal ${prov.name}: ${error.message}`);
      console.log("  Sitemap lama dipertahankan.");
    }

    if (i < provinces.length - 1) {
      console.log(`⏳ Jeda ${PROVINCE_DELAY / 1000} detik...\n`);
      await sleep(PROVINCE_DELAY);
    }
  }

  updateIndex();

  console.log("\n" + "=".repeat(55));
  console.log("🏁 PROSES GENERATE SELESAI");
  console.log(`✅ Provinsi berhasil: ${success}`);
  console.log(`❌ Provinsi gagal: ${failures.length}`);
  console.log(`🔗 URL berhasil diproses: ${totalUrls}`);
  console.log(`📂 Output: ${OUTPUT_DIR}`);

  if (failures.length) {
    console.log(`⚠️ Gagal: ${failures.join(", ")}`);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("❌ Error:", error.message);
  process.exitCode = 1;
});
