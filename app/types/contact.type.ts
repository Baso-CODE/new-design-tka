export interface ContactCs {
  id: number;
  nomor_hp: string;
  nama_cs: string;
  link_cta?: string | null;
  isDeleted: boolean;
  weight: number;
  display_order: number;
  createdAt: string;
  updatedAt: string;
}
