import { Kecamatan } from "@/app/types/kota.types";
import { kecamatanDummy } from "../data/kecamatanDummy.data";
import { kabupatenDummy } from "../data/kabupatenDummy.data";

export function getKecamatanDummyByKabupatenSlug(slug: string): Kecamatan[] {
  const kabupaten = kabupatenDummy.find((k) => k.slug === slug);
  if (!kabupaten) return [];
  return kecamatanDummy.filter((k) => k.kota_kabupaten_id === kabupaten.id);
}
