import { dummyContactCsData } from "./data/contactCs.dummyData";
import FooterClient from "./footerClient";

export default function FooterEduMatrix() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-linear-to-b from-[#0572ce] to-[#033790] pb-20 md:pb-0">
      <div className="text-white md:p-10 p-4 max-w-310 mx-auto">
        {/* Title */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="sm:text-[36px] text-[30px] font-title font-bold">
            Edumatrix Indonesia
          </h2>
        </div>

        {/* Render Client Component dengan data terpusat */}
        <FooterClient contacts={dummyContactCsData} />

        {/* Footer Text */}
        <p className="mt-8 text-center text-xs font-title">
          &copy; {currentYear} - Edumatrix - ONLINE & OFFLINE
        </p>

        <p className="text-center text-xs font-title">
          Pusat Les Privat Nasional & Internasional Jabodetabek
        </p>
      </div>
    </div>
  );
}
