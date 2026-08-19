import { getPengajarDummy } from "@/app/lib/getDummyDataRequest/getPengajarDummy.request";
import { Pengajar as PengajarType } from "@/app/types/pengajar.type";
import PengajarClient from "./pengajarClient";

export default async function Pengajar() {
  let pengajarData: PengajarType[] = [];

  const result = await getPengajarDummy();
  pengajarData = Array.isArray(result.data) ? result.data : [];

  // Setelah try/catch selesai → aman return JSX
  if (pengajarData.length === 0) {
    return (
      <div className="flex justify-center bg-[#ffffff] py-10">
        <p className="text-gray-500">Tampilan komponen mengalami gangguan.</p>
      </div>
    );
  }

  return <PengajarClient pengajarData={pengajarData} />;
}
