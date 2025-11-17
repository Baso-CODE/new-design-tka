import Link from "next/link";

import { ContactCs } from "@/app/types/contact.type";
import { getAllContactCs } from "@/app/request/contacts/getAllContactCs";
import Image from "next/image";

export default async function AllContactCS() {
  // Fetch data di server
  const { data: dataContact }: { data: ContactCs[] } = await getAllContactCs();

  return (
    <div className="flex justify-center bg-[#04397D] text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1240px] w-full p-4 my-10 lg:my-0">
        {/* Image */}
        <div className="lg:w-1/2 w-full mt-5 flex justify-center -order-1 lg:order-0">
          <Image
            loading="eager"
            src="/images/heroContact.webp"
            width={1000}
            height={1000}
            alt="Edumatrix Indonesia - Solusi Terbaik untuk Bimbingan Belajar dan Konsultasi Pendidikan. Hubungi Kami Sekarang untuk Informasi Lebih Lanjut!"
            className="w-full max-w-sm md:max-w-md lg:max-w-none h-auto object-cover rounded-md"
          />
        </div>

        {/* Konten */}
        <div className="lg:w-1/2 w-full lg:p-0 p-4 mt-9 lg:mt-0 text-center lg:text-left order-last lg:order-0">
          <h2 className="lg:text-[40px] text-[28px] sm:text-[35px] font-bold font-title mb-4 leading-tight">
            Kini Saatnya Menjadi Juara Bersama Edumatrix
          </h2>
          <p className="text-[16px] my-6 font-desc font-medium max-w-lg mx-auto lg:mx-0">
            Ribuan siswa telah bergabung dan mendapatkan pendampingan belajar
            terbaik dari Edumatrix. Klik Daftar untuk mengisi Form Registrasi
            Siswa atau konsultasikan kebutuhan Anda, segera hubungi:
          </p>
          <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
            {dataContact.map((contact) => (
              <Link
                key={contact.id}
                href={contact.link_cta ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#F68507] text-white py-3 font-desc font-bold md:text-[25px] text-[20px] px-4 rounded-md text-center hover:bg-orange-600 transition-colors duration-200">
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
