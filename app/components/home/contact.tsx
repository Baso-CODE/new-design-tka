import ContactCsDoubleList from "@/app/helper/contactCsDoubleList";
import Image from "next/image";
import { dummyContactCsData } from "../data/contactCs.dummyData";

export default function Contact() {
  return (
    <div className="flex justify-center bg-[#04397D] text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-310 w-full p-4 my-10 lg:my-0">
        {/* IMAGE */}
        <div className="lg:w-1/2 w-full mt-5 md:mt-0 flex justify-center relative order-first lg:order-0">
          <Image
            src="/images/background-contactCs.webp"
            alt="Student with Trophy"
            width={776}
            height={1146}
            loading="lazy"
            className="rounded-md xl:w-97 w-full max-w-sm h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-25 bg-linear-to-t from-[#04397D] to-transparent rounded-b-md" />
        </div>

        {/* TEXT + CTA */}
        <div className="lg:w-1/2 w-full mt-9 lg:mt-0 text-center lg:text-left order-last lg:order-0">
          <h2 className="lg:text-[40px] text-[28px] sm:text-[35px] font-bold font-title mb-4 leading-tight">
            Kini Saatnya Menjadi Juara Bersama Edumatrix
          </h2>

          <p className="text-[16px] my-6 font-desc font-bold max-w-lg mx-auto lg:mx-0">
            Ribuan siswa telah bergabung dan mendapatkan pendampingan belajar
            terbaik. Klik Daftar untuk mengisi Form Registrasi atau hubungi CS
            kami:
          </p>

          {/* Langsung gunakan dummy data sebagai props */}
          <ContactCsDoubleList contacts={dummyContactCsData} />
        </div>
      </div>
    </div>
  );
}
