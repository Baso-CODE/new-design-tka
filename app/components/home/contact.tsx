import ContactCsDoubleList from "@/app/helper/contactCsDoubleList";
import Image from "next/image";
import { dummyContactCsData } from "../data/contactCs.dummyData";

export default function Contact() {
  return (
    <div className="flex justify-center bg-linear-to-b from-[#056dc9] via-[#044ea8] to-[#033790] text-white pt-0 pb-16 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-310 w-full p-4 my-10 lg:my-0">
        {/* IMAGE */}
        <div className="w-full flex justify-center relative -mt-40 sm:-mt-32 md:-mt-40 lg:-mt-48 z-10">
          <Image
            src="/images/sd-smp-sma-siswa.webp"
            alt="Student with Trophy"
            width={776}
            height={1146}
            loading="lazy"
            className="w-full max-w-75 sm:max-w-100 md:max-w-125 h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* TEXT + CTA */}
        <div className="lg:w-1/2 w-full mt-9 lg:mt-0 text-center lg:text-left order-last lg:order-0">
          <h2 className="text-2xl sm:text-3xl md:text-[35px] font-extrabold font-title mb-4 leading-tight">
            Kini Saatnya Menjadi Juara <br />
            <span className="text-[#ffcc00]">Bersama Edumatrix</span>
          </h2>

          <p className="text-[13px] sm:text-[15px] md:text-base mb-8 font-desc max-w-2xl mx-auto leading-relaxed text-gray-100 px-2">
            Ribuan siswa telah bergabung dan mendapatkan pendampingan belajar
            terbaik dari Edumatrix. Klik Daftar untuk mengisi Form Registrasi
            Siswa atau konsultasikan kebutuhan Anda, segera hubungi:
          </p>

          {/* Langsung gunakan dummy data sebagai props */}
          <ContactCsDoubleList contacts={dummyContactCsData} />
        </div>
      </div>
    </div>
  );
}
