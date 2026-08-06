"use client";

import { ContactCs } from "@/app/types/contact.type";
import { useCsRotation } from "./useCsRotation";

interface Props {
  contacts: ContactCs[];
}

export default function ContactCsDoubleList({ contacts }: Props) {
  // Berikan storageKey unik agar tidak bentrok dengan Hero / Floating CTA
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "double",
    "contact_double_rotation",
  );

  if (!contacts || contacts.length === 0) return null;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    e.preventDefault();
    rotateCs();

    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0">
      {activeCs.map((contact) => (
        <a
          key={contact.id}
          href={contact.link_cta}
          onClick={(e) => handleClick(e, contact.link_cta)}
          className="block">
          <div className="bg-[#F68507] text-white py-3 font-desc font-bold md:text-[25px] text-[20px] px-4 rounded-md text-center hover:bg-orange-600 transition-colors duration-200 cursor-pointer">
            {contact.nomor_hp} ({contact.nama_cs})
          </div>
        </a>
      ))}
    </div>
  );
}
