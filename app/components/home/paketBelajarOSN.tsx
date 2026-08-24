import { dummyContactCsData } from "../data/contactCs.dummyData";
import PaketBelajarOSNClient from "./paketBelajarOSNClient";

const PaketBelajarTKA = () => {
  return (
    <div className="bg-[#f8faff]">
      <div className="flex container mx-auto items-center justify-center py-[5vh] px-2 lg:px-0 font-title">
        <div className="w-full">
          {/* Judul utama */}
          <h2 className="text-center font-title text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#133b79] mb-2">
            Paket Pilihan yang <span className="text-[#faae17]">Tersedia</span>
          </h2>
          {/* Deskripsi */}
          <div className="max-w-xl mx-auto text-center mb-10">
            <p className="text-sm md:text-base text-[#133b79] font-desc leading-relaxed">
              Pilih program terbaik sesuai kebutuhanmu. Semua dirancang untuk
              bantu kamu Menjadi Juara TKA
            </p>
          </div>

          {/* Render Client Component yang berisi rotasi CS */}
          <PaketBelajarOSNClient contacts={dummyContactCsData} />
        </div>
      </div>
    </div>
  );
};

export default PaketBelajarTKA;
