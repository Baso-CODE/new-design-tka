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
      <div
        className="relative flex items-center justify-center py-20 px-4"
        style={{
          background: "linear-gradient(to bottom, #033c95 0%, #0570cc 100%)",
        }}>
        <p className="text-gray-500">Tampilan komponen mengalami gangguan.</p>
      </div>
    );
  }

  return <PengajarClient pengajarData={pengajarData} />;
}
