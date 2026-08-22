import { dummyContactCsData } from "../data/contactCs.dummyData";
import PaketBelajarOSNClient from "./paketBelajarOSNClient";

const PaketBelajarTKA = () => {
  return (
    <div className=" bg-[#f8faff]">
      <div className="flex container mx-auto items-center justify-center  py-[10vh] px-2 lg:px-0 font-title ">
        <div className="w-full">
          {/* Judul utama */}
          <h2 className="text-center font-title text-2xl md:text-3xl lg:text-4xl font-bold text-[#133b79] mb-4">
            Paket Bimbingan TKA Terbaik
          </h2>
          {/* Deskripsi */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-base md:text-base text-gray-600 font-desc">
              Pilih program terbaik sesuai kebutuhanmu. Mulai dari bimbingan
              intensif hingga tryout rutin - semua dirancang untuk membantumu
              menguasai materi TKA untuk tingkat SD, SMP, hingga SMA/SMK.
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
