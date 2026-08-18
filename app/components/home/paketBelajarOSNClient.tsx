"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import { ContactCs } from "@/app/types/contact.type";
import Image from "next/image";
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
    `Halo ${activeContact.nama_cs} https://les-tka.bimbeledumatrix.com saya ingin Daftar Paket JUARA TKA. Bagaimana penjelasan detail programnya?`,
  )}`;

  const waLinkDeluxe = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace("+", "")}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} https://les-tka.bimbeledumatrix.com saya ingin Daftar Paket MASTER TKA. Bagaimana penjelasan detail programnya?`,
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
      {/* KARTU 1: JUARA TKA (Menggunakan #04397D) */}
      <div className="bg-[#04397D] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
        <div>
          {/* Header Banner Image */}
          <div className="relative w-full h-55 md:h-62.5 overflow-hidden bg-[#0d2247]">
            <Image
              src="/images/tka/94972367_10054705 2.png"
              alt="Background Ornamen"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 flex items-end justify-between px-2 md:px-4">
              <div className="relative w-full h-full">
                <Image
                  src="/images/tka/paket-juara-tka.png"
                  alt="Juara TKA"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Title Bar Benefit */}
          <div className="bg-[#03295c] text-white py-3 text-center font-bold text-lg md:text-xl tracking-wide font-title">
            Benefit
          </div>

          {/* List Benefits */}
          <div className="p-6 md:p-8 font-desc">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {[
                "Program Privat 1 on 1",
                "Free Recording jika Online",
                "Try Out",
                "Jadwal Belajar Fleksibel",
                "Durasi Belajar 90 menit",
                "Bisa Request Tutor",
                "Sistem Belajar Online/Offline",
                "Progress Report Berkala",
                "Free Pendaftaran",
              ].map((item, i) => (
                <div className="flex items-start text-white text-sm" key={i}>
                  <div className="bg-[#22c55e] rounded p-0.5 text-white mr-2 mt-0.5 shrink-0">
                    <FaCheck size={12} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="p-6 md:p-8 pt-0">
          <Link
            href={waLinkPriority}
            onClick={(e) => handleClick(e, waLinkPriority)}
            target="_blank"
            aria-label="Konsultasi Sekarang melalui WhatsApp"
            rel="noopener noreferrer"
            className="w-full h-12 bg-white hover:bg-gray-100 text-[#04397D] font-extrabold rounded-full flex items-center justify-center transition-all duration-300 shadow-md uppercase tracking-wider text-sm">
            Konsultasi Sekarang
          </Link>
        </div>
      </div>

      {/* KARTU 2: MASTER TKA (Menggunakan Warna Orange) */}
      <div className="bg-orange-500 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
        <div>
          {/* Header Banner Image */}
          <div className="relative w-full h-55 md:h-62.5 overflow-hidden bg-[#0d2247]">
            <Image
              src="/images/tka/94972367_10054705 2.png"
              alt="Background Ornamen"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 flex items-end justify-between px-2 md:px-4">
              <div className="relative w-full h-full">
                <Image
                  src="/images/tka/paket-master-tka.png"
                  alt="Master TKA"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Title Bar Benefit */}
          <div className="bg-orange-600 text-white py-3 text-center font-bold text-lg md:text-xl tracking-wide font-title">
            Benefit
          </div>

          {/* List Benefits */}
          <div className="p-6 md:p-8 font-desc">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {[
                "Program Privat 1 on 1",
                "Free Recording jika Online",
                "Try Out",
                "Jadwal Belajar Fleksibel",
                "Durasi Belajar 120 menit",
                "Bisa Request Tutor",
                "Sistem Belajar Online/Offline",
                "Progress Report Berkala",
                "Free Pendaftaran",
              ].map((item, i) => (
                <div className="flex items-start text-white text-sm" key={i}>
                  <div className="bg-[#22c55e] rounded p-0.5 text-white mr-2 mt-0.5 shrink-0">
                    <FaCheck size={12} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="p-6 md:p-8 pt-0">
          <Link
            href={waLinkDeluxe}
            onClick={(e) => handleClick(e, waLinkDeluxe)}
            target="_blank"
            aria-label="Konsultasi Sekarang melalui WhatsApp"
            rel="noopener noreferrer"
            className="w-full h-12 bg-white hover:bg-gray-100 text-orange-600 font-extrabold rounded-full flex items-center justify-center transition-all duration-300 shadow-md uppercase tracking-wider text-sm">
            Konsultasi Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
