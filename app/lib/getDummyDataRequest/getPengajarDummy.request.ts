import { ApiResponse } from "@/app/types/pengajar.type";
import { pengajarDummy } from "../data/pengajarDummy.data";

export async function getPengajarDummy(): Promise<ApiResponse> {
  return pengajarDummy;
}
