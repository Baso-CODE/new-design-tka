export interface Kelurahan {
  id: number;
  nama_kelurahan: string;
  slug: string;
  kecamatan_id?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface KelurahanResponse {
  data: {
    kelurahans?: Kelurahan[] | null;
  };
  message: string;
}
export interface Kecamatan {
  id: number;
  nama_kecamatan: string;
  slug: string;
  kota_kabupaten_id?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface KecamatanResponse {
  data: {
    kecamatans?: Kecamatan[] | null;
  };
  message: string;
}
export interface Kabupaten {
  id: number;
  nama_kota_kabupaten: string;
  slug: string;
  kecamatans: Kecamatan[];
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
