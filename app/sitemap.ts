import { getProvinces, SITE_URL } from "./lib/sitemap-utils";

export default async function sitemap() {
  // 1. Ambil daftar semua provinsi dari API wilayah.id
  const provinces = await getProvinces();

  // 2. Buat sitemap index untuk setiap kode provinsi
  const provinceSitemaps = provinces.map((prov) => {
    // Ambil 2 digit pertama kode wilayah sebagai provinceCode
    const code = prov.code.slice(0, 2);
    return {
      url: `${SITE_URL}/sitemap/${code}.xml`,
      lastModified: new Date(),
    };
  });

  // 3. Tambahkan halaman statis utama jika diperlukan
  const staticPages = [
    {
      url: `${SITE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/program`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
    },
  ];

  return [...staticPages, ...provinceSitemaps];
}
