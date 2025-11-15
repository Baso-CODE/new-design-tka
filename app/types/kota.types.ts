// app/types/kota.type.ts
export interface Kabupaten {
  id: number;
  nama_kota_kabupaten: string;
  slug: string;
  kota_id?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface Kota {
  id: number;
  nama_kota: string;
  slug: string;
  foto_kota?: string | null;
  kotakabupatens?: Kabupaten[];
  createdAt?: string;
  updatedAt?: string;
}

export interface GetKotaBySlugResponse {
  status: number;
  data: {
    kota?: Kota | null;
    kabupatens?: Kabupaten[] | null;
  };
  message?: string;
}
