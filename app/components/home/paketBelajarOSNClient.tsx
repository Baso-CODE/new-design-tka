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

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";

  // Buat link dinamis berdasarkan nama CS yang sedang aktif dan base URL dari env
  const waLinkPriority = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace("+", "")}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} ${baseUrl} saya ingin Daftar Paket JUARA TKA. Bagaimana penjelasan detail programnya?`,
  )}`;

  const waLinkDeluxe = `https://api.whatsapp.com/send?phone=${activeContact.nomor_hp.replace("+", "")}&text=${encodeURIComponent(
    `Halo ${activeContact.nama_cs} ${baseUrl} saya ingin Daftar Paket MASTER TKA. Bagaimana penjelasan detail programnya?`,
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
      {/* KARTU 1: JUARA TKA (Menggunakan Gradasi yang Selaras) */}
      <div
        className="rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between"
        style={{
          background: "linear-gradient(to bottom, #033c95 0%, #0570cc 100%)",
        }}>
        <div>
          {/* Header Banner Image */}
          <div className="relative w-full h-55 md:h-62.5 overflow-hidden bg-[#0d2247]">
            <Image
              src="/images/tka/bg-paket-belajar.webp"
              alt="Background Ornamen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 flex items-end justify-between px-2 md:px-4">
              <div className="relative w-full h-full">
                <Image
                  src="/images/tka/paket-juara-tka.webp"
                  alt="Juara TKA"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Title Bar Benefit */}
          <div className="bg-[#03295c] text-white py-3 text-center font-bold text-lg md:text-xl tracking-wide font-title">
            Benefit yang didapat
          </div>

          {/* List Benefits */}
          <div className="p-6 md:p-8 font-desc">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {[
                "Program Private 1 on 1",
                "Free Recording jika Online",
                "Try Out",
                "Jadwal Belajar Fleksibel",
                "Durasi Belajar 90 Menit",
                "Bisa Request Tutor",
                "Sistem Belajar Online / Offline",
                "Progress Report Berkala",
                "Free Pendaftaran",
              ].map((item, i) => (
                <div className="flex items-start text-white text-sm" key={i}>
                  {/* Ikon centang bulat putih sesuai referensi */}
                  <div className="bg-white rounded-full p-0.5 text-[#04397D] mr-2 mt-0.5 shrink-0 flex items-center justify-center">
                    <FaCheck size={10} className="stroke-3" />
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
            aria-label="Tanya Paket melalui WhatsApp"
            rel="noopener noreferrer"
            className="w-full h-12 bg-white hover:bg-gray-100 text-[#04397D] font-extrabold rounded-full flex items-center justify-center transition-all duration-300 shadow-md uppercase tracking-wider text-sm">
            Tanya Paket
          </Link>
        </div>
      </div>

      {/* KARTU 2: MASTER TKA (Menggunakan Gradasi Merah/Marun dan Style Baru) */}
      <div
        className="rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between"
        style={{
          background: "linear-gradient(to bottom, #830026 0%, #d9044d 100%)",
        }}>
        <div>
          {/* Header Banner Image */}
          <div className="relative w-full h-55 md:h-62.5 overflow-hidden bg-[#0d2247]">
            <Image
              src="/images/tka/bg-paket-belajar.webp"
              alt="Background Ornamen"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 flex items-end justify-between px-2 md:px-4">
              <div className="relative w-full h-full">
                <Image
                  src="/images/tka/paket-master-tka.webp"
                  alt="Master TKA"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Title Bar Benefit */}
          <div className="bg-[#66001d] text-white py-3 text-center font-bold text-lg md:text-xl tracking-wide font-title">
            Benefit yang didapat
          </div>

          {/* List Benefits */}
          <div className="p-6 md:p-8 font-desc">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {[
                "Program Private 1 on 1",
                "Free Recording jika Online",
                "Try Out",
                "Jadwal Belajar Fleksibel",
                "Durasi Belajar 120 Menit",
                "Bisa Request Tutor",
                "Sistem Belajar Online / Offline",
                "Progress Report Berkala",
                "Free Pendaftaran",
              ].map((item, i) => (
                <div className="flex items-start text-white text-sm" key={i}>
                  {/* Ikon centang bulat putih sesuai referensi */}
                  <div className="bg-white rounded-full p-0.5 text-[#830026] mr-2 mt-0.5 shrink-0 flex items-center justify-center">
                    <FaCheck size={10} className="stroke-3" />
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
            aria-label="Tanya Paket melalui WhatsApp"
            rel="noopener noreferrer"
            className="w-full h-12 bg-white hover:bg-gray-100 text-[#830026] font-extrabold rounded-full flex items-center justify-center transition-all duration-300 shadow-md uppercase tracking-wider text-sm">
            Tanya Paket
          </Link>
        </div>
      </div>
    </div>
  );
}
