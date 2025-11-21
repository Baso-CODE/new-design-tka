import { Kelurahan } from "@/app/types/kota.types";
import { kelurahanDummy } from "../data/kelurahanDummy.data";
import { kecamatanDummy } from "../data/kecamatanDummy.data";

export function getKelurahanDummyByKecamatanSlug(slug: string): Kelurahan[] {
  const kecamatan = kecamatanDummy.find((k) => k.slug === slug);
  if (!kecamatan) return [];
  return kelurahanDummy.filter((k) => k.kecamatan_id === kecamatan.id);
}
