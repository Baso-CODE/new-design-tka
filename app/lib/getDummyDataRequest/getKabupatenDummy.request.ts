import { Kabupaten } from "@/app/types/kota.types";
import { kabupatenDummy } from "../data/kabupatenDummy.data";
import { kotaDummy } from "../data/kotaDummy.data";

export function getKabupatenDummyByKotaSlug(slug: string): Kabupaten[] {
  const kota = kotaDummy.find((k) => k.slug === slug);
  if (!kota) return [];
  return kabupatenDummy.filter((k) => k.kota_id === kota.id);
}
