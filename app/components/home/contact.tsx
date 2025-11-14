import Image from "next/image";

import { getAllContactCsIsDeleted } from "@/app/request/contacts/getAllIsDeletedContactCs";
import Link from "next/link";

export default async function Contact() {
  const contactCsData = await getAllContactCsIsDeleted();

  return (
    <div className="flex justify-center bg-[#04397D] text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1240px] w-full p-4 my-10 lg:my-0">
        {/* IMAGE */}
        <div className="lg:w-1/2 w-full mt-5 md:mt-0 flex justify-center relative order-first lg:order-0">
          <Image
            src="/images/background-contactCs.webp"
            alt="Student with Trophy"
            width={776}
            height={1146}
            className="rounded-md xl:w-[388px] w-full max-w-sm h-auto object-cover"
            priority={false}
          />
          <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-linear-to-t from-[#04397D] to-transparent rounded-b-md" />
        </div>

        {/* TEXT + CTA BUTTONS */}
        <div className="lg:w-1/2 w-full mt-9 lg:mt-0 text-center lg:text-left order-last lg:order-0">
          <h2 className="lg:text-[40px] text-[28px] sm:text-[35px] font-bold font-title mb-4 leading-tight">
            Kini Saatnya Menjadi Juara Bersama Edumatrix
          </h2>

          <p className="text-[16px] my-6 font-desc font-bold max-w-lg mx-auto lg:mx-0">
            Ribuan siswa telah bergabung dan mendapatkan pendampingan belajar
            terbaik dari Edumatrix. Klik Daftar untuk mengisi Form Registrasi
            Siswa atau konsultasikan kebutuhan Anda, segera hubungi:
          </p>

          <div className="space-y-4 max-w-md mx-auto lg:mx-0">
            {contactCsData.map((contact) => (
              <Link
                key={contact.id}
                href={contact.link_cta ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#F68507] text-white py-3 font-desc font-bold md:text-[32px] text-[20px] px-2 rounded-md text-center hover:bg-orange-600 transition-colors duration-200">
                  {contact.nomor_hp} ({contact.nama_cs})
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
