"use client";

import { useCsRotation } from "@/app/helper/useCsRotation";
import { ContactCs } from "@/app/types/contact.type";
import Image from "next/image";
import Link from "next/link";

interface Props {
  contacts: ContactCs[];
}

export default function FooterClient({ contacts }: Props) {
  // 1. Hook untuk Telepon Kantor (Mode Double)
  const { activeCs: doubleCs, rotateCs: rotateDouble } = useCsRotation(
    contacts,
    "double",
    "footer_double_rotation",
  );

  // 2. Hook untuk Banner Image CTA (Mode Single)
  const { activeCs: singleCs, rotateCs: rotateSingle } = useCsRotation(
    contacts,
    "single",
    "footer_single_rotation",
  );

  const activeBannerContact = singleCs[0] || contacts[0];

  const handleDoubleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    e.preventDefault();
    rotateDouble();
    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 50);
  };

  const handleBannerClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetLink = activeBannerContact?.link_cta || "#";
    rotateSingle();
    setTimeout(() => {
      window.open(targetLink, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* COL 1: Telepon Kantor (Double Rotation) */}
      <div>
        <h3 className="text-lg font-bold font-title mb-2">Office:</h3>

        <p className="mb-4 font-desc">
          Ruko Permai Monjali, Jalan Monjali No 3, Kutu Dukuh, Sinduadi, Mlati,
          Sleman, Yogyakarta 5524
        </p>

        <h3 className="text-lg font-bold font-title mb-0">Telepon Kantor:</h3>

        <ul className="mb-2 space-y-1">
          {doubleCs.map((admin) => (
            <li key={admin.id} className="font-desc">
              <Link
                href={admin.link_cta ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleDoubleLinkClick(e, admin.link_cta)}
                className="no-underline font-medium hover:underline">
                <span>{admin.nama_cs}:</span> {admin.nomor_hp}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* COL 2: About Us & Jam Kantor */}
      <div className="flex flex-col text-start">
        <h3 className="text-lg font-title font-bold mb-2">About Us:</h3>

        <p className="font-desc">
          Edumatrix Indonesia hadir sebagai mitra terpercaya dalam meningkatkan
          potensi akademik siswa melalui bimbingan belajar dan les privat
          berkualitas untuk berbagai jenjang pendidikan.
        </p>

        <h3 className="text-lg font-bold font-title mb-0 mt-6">Jam Kantor:</h3>

        <ul>
          <li className="font-desc">08.30 - 17.00 WIB Senin s.d Jumat</li>
          <li className="font-desc">08.30 - 13.00 WIB Sabtu</li>
        </ul>
      </div>

      {/* COL 3: Contact us (Single Rotation + Nama CS agak redup di bawah image) */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-title font-bold mb-4">Contact us:</h3>

        <Link
          href={activeBannerContact?.link_cta ?? "#"}
          onClick={handleBannerClick}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex flex-col items-center group">
          <Image
            src="/images/images-cta.webp"
            alt="Hubungi kami sekarang."
            width={600}
            height={180}
            className="w-full h-full rounded-lg cursor-pointer object-cover"
            loading="lazy"
          />
          <span className="mt-2 text-xs font-desc text-white/40 tracking-wide">
            CS Aktif: {activeBannerContact?.nama_cs}
          </span>
        </Link>
      </div>
    </div>
  );
}
