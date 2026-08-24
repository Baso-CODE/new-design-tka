"use client";
import { ContactCs } from "@/app/types/contact.type";
import { useCsRotation } from "../helper/useCsRotation";

interface Props {
  contacts: ContactCs[];
}

export default function PilihanMetodeClient({ contacts }: Props) {
  // Rotasi untuk tombol ONLINE (storageKey unik agar tidak bentrok)
  const { activeCs: activeOnline, rotateCs: rotateOnline } = useCsRotation(
    contacts,
    "single",
    "pilihan_online_rotation",
  );

  // Rotasi untuk tombol OFFLINE (storageKey unik)
  const { activeCs: activeOffline, rotateCs: rotateOffline } = useCsRotation(
    contacts,
    "single",
    "pilihan_offline_rotation",
  );

  if (
    !activeOnline ||
    activeOnline.length === 0 ||
    !activeOffline ||
    activeOffline.length === 0
  ) {
    return null;
  }

  const onlineContact = activeOnline[0];
  const offlineContact = activeOffline[0];

  // Handler klik untuk tombol Online
  const handleOnlineClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const link = onlineContact.link_cta;
    rotateOnline();
    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 50);
  };

  // Handler klik untuk tombol Offline
  const handleOfflineClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const link = offlineContact.link_cta;
    rotateOffline();
    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 font-title">
      {/* JUDUL */}
      <h3 className="text-xl md:text-2xl font-extrabold text-[#05428a] mb-6 text-center">
        Pilih Metode Belajarmu
      </h3>

      {/* WRAPPER TOMBOL (Diubah menjadi flex-row agar selalu kiri-kanan) */}
      <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
        {/* TOMBOL ONLINE (HIJAU) */}
        <a
          href={onlineContact.link_cta}
          onClick={handleOnlineClick}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-1/2
            flex items-center justify-center
            py-3 sm:py-4 px-4 sm:px-8
            rounded-full
            bg-[#009933] hover:bg-[#007a28]
            text-white font-extrabold text-base sm:text-lg tracking-wider
            shadow-md hover:shadow-lg
            transition-all duration-300 transform hover:-translate-y-0.5
            cursor-pointer
            text-center
          ">
          ONLINE
        </a>

        {/* TOMBOL OFFLINE (PINK/MERAH) */}
        <a
          href={offlineContact.link_cta}
          onClick={handleOfflineClick}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-1/2
            flex items-center justify-center
            py-3 sm:py-4 px-4 sm:px-8
            rounded-full
            bg-[#d9144c] hover:bg-[#b5103f]
            text-white font-extrabold text-base sm:text-lg tracking-wider
            shadow-md hover:shadow-lg
            transition-all duration-300 transform hover:-translate-y-0.5
            cursor-pointer
            text-center
          ">
          OFFLINE
        </a>
      </div>
    </div>
  );
}
