import { Kota } from "@/app/types/kota.types";
import { kotaDummy } from "../data/kotaDummy.data";

export function getKotaDummyBySlug(slug: string): Kota | null {
  return kotaDummy.find((item) => item.slug === slug) ?? null;
}
