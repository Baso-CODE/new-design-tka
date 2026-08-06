"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import { ContactCs } from "@/app/types/contact.type";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

interface Props {
  contacts: ContactCs[];
}

export default function PaketBelajarOSNClient({ contacts }: Props) {
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "single",
    "paket_belajar_rotation",
  );

  if (!activeCs || activeCs.length === 0) return null;
  const activeContact = activeCs[0];

  // Buat link dinamis berdasarkan nama CS yang sedang aktif
  const waLinkPriority = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace("+", "")}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} https://bimbeledumatrix.com saya ingin Daftar Paket ULTIMATE MASTERY Bimbel OSN. Bagaimana penjelasan detail programnya?`,
  )}`;

  const waLinkDeluxe = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace("+", "")}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} https://bimbeledumatrix.com saya ingin Daftar Paket CHAMPION SERIES Bimbel OSN. Bagaimana penjelasan detail programnya?`,
  )}`;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    e.preventDefault();
    rotateCs(); // Rotasi ke CS berikutnya dan simpan ke localStorage

    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* ULTIMATE MASTERY */}
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform flex flex-col">
        <div className="bg-[#00317e] text-white rounded-t-xl -mx-6 -mt-6 px-6 py-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center leading-tight font-title">
            ULTIMATE MASTERY
          </h2>
        </div>
        <ul className="space-y-4 grow font-desc">
          {[
            "Program pendampingan belajar 1 guru 1 Siswa",
            "Jadwal belajar fleksibel",
            "Durasi belajar 120 menit",
            "Materi lengkap",
            "Kecocokan belajar antara tutor & siswa",
            "Progress report bulanan",
            "Free assessment (Pre Test dan Post Test)",
            "E-book soal & e-book pembahasan",
            "Recording pembelajaran yang bisa diakses unlimited",
          ].map((item, i) => (
            <li className="flex items-start text-gray-700 text-base" key={i}>
              <FaCheck className="text-green-500 mr-3 mt-1 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href={waLinkPriority}
          onClick={(e) => handleClick(e, waLinkPriority)}
          target="_blank"
          aria-label="Tanya kelas melalui WhatsApp (membuka di tab baru)"
          rel="noopener noreferrer"
          className="mt-2 group relative inline-flex h-14 items-center justify-center rounded-full bg-[#faae17] py-1 pl-14 pr-6 font-medium text-neutral-50 transition-all duration-300 cursor-pointer">
          <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-start rounded-full bg-[#04397d] transition-[width] group-hover:w-[calc(100%-8px)]">
            <div className="ml-3.5 flex items-center justify-center rotate-180">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white">
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
          <span className="z-10 font-bold uppercase">
            <span className="mr-2">💬</span>Tanya Kelas ({activeContact.nama_cs}
            )
          </span>
        </Link>
      </div>

      {/* CHAMPION SERIES */}
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform flex flex-col">
        <div className="bg-[#00317e] text-white rounded-t-xl -mx-6 -mt-6 px-6 py-8 mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center leading-tight font-title">
            CHAMPION SERIES
          </h2>
        </div>
        <ul className="space-y-4 grow font-desc">
          {[
            "Program pendampingan belajar 1 guru 1 Siswa",
            "Jadwal belajar fleksibel",
            "Durasi belajar 90 menit",
            "Materi lengkap",
            "Kecocokan belajar antara tutor & siswa",
            "Progress report bulanan",
            "Free assessment (Pre Test dan Post Test)",
            "E-book soal & e-book pembahasan",
            "Recording pembelajaran yang bisa diakses unlimited",
          ].map((item, i) => (
            <li className="flex items-start text-gray-700 text-base" key={i}>
              <FaCheck className="text-green-500 mr-3 mt-1 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href={waLinkDeluxe}
          onClick={(e) => handleClick(e, waLinkDeluxe)}
          target="_blank"
          aria-label="Tanya kelas melalui WhatsApp (membuka di tab baru)"
          rel="noopener noreferrer"
          className="mt-2 group relative inline-flex h-14 items-center justify-center rounded-full bg-[#faae17] py-1 pl-6 pr-14 font-medium text-neutral-50 transition-all duration-300 cursor-pointer">
          <span className="z-10 pr-2 font-bold uppercase">
            <span className="mr-2">💬</span>Tanya Kelas ({activeContact.nama_cs}
            )
          </span>
          <div className="absolute left-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-[#04397d] transition-[width] group-hover:w-[calc(100%-8px)]">
            <div className="mr-3.5 flex items-center justify-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white">
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
