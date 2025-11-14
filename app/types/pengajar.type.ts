export interface Pengajar {
  id: number;
  nama_pengajar: string;
  descripsi_pengajar: string;
  jenjang: string;
  university: string;
  foto_pengajar: string;
  title: string;
  thumbnail: string;
  isDeleted: boolean;
  created_at: string;
  updated_at: string;
}
export interface ApiResponse {
  status: number;
  data: Pengajar[];
}
