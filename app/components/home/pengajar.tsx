import { getAllPengajarIsDeleted } from "@/app/request/pengajar/getAllIsDeletedPengajar";
import PengajarClient from "./pengajarClient";
import { Pengajar as PengajarType } from "@/app/types/pengajar.type";

export default async function Pengajar() {
  let pengajarData: PengajarType[] = [];

  try {
    const result = await getAllPengajarIsDeleted();
    pengajarData = Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error("Error saat memuat pengajar:", error);
    // biarkan pengajarData tetap kosong
  }

  // Setelah try/catch selesai → aman return JSX
  if (pengajarData.length === 0) {
    return (
      <div className="flex justify-center bg-gray-50 py-10">
        <p className="text-gray-500">Tampilan komponen mengalami gangguan.</p>
      </div>
    );
  }

  return <PengajarClient pengajarData={pengajarData} />;
}
