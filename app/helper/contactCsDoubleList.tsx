"use client";

import { ContactCs } from "@/app/types/contact.type";
import { useCsRotation } from "./useCsRotation";

interface Props {
  contacts: ContactCs[];
}

export default function ContactCsDoubleList({ contacts }: Props) {
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
    <div className="flex flex-col gap-3 sm:gap-4 w-full">
      {activeCs.map((contact) => (
        <a
          key={contact.id}
          href={contact.link_cta}
          onClick={(e) => handleClick(e, contact.link_cta)}
          className="block w-full group">
          <div className="bg-[#ffcc00] text-[#04397d] py-3 md:py-3.5 font-desc font-extrabold text-[16px] sm:text-[18px] md:text-[20px] px-4 rounded-lg text-center hover:bg-[#e6b800] transition-all duration-200 cursor-pointer shadow-md group-hover:shadow-lg transform group-hover:-translate-y-0.5">
            {contact.nomor_hp} ({contact.nama_cs})
          </div>
        </a>
      ))}
    </div>
  );
}
