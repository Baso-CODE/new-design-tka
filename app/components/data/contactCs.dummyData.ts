import { ContactCs } from "@/app/types/contact.type";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com";

export const dummyContactCsData: ContactCs[] = [
  {
    id: 1,
    nama_cs: "Kak Sari",
    nomor_hp: "+6285712217876",
    link_cta: `https://wa.me/6285712217876?text=${encodeURIComponent(
      `Halo Kak Sari ${baseUrl}/, Saya ingin tanya program belajar yang ada di Edumatrix Indonesia. Apa saja jenis program belajar dan pilihan paket.`,
    )}`,
    isDeleted: false,
    weight: 1,
    display_order: 2,
  },
  {
    id: 2,
    nama_cs: "Kak Asya",
    nomor_hp: "+6281215523902",
    link_cta: `https://wa.me/6281215523902?text=${encodeURIComponent(
      `Halo Kak Asya ${baseUrl}/, Saya ingin tanya program belajar yang ada di Edumatrix Indonesia. Apa saja jenis program belajar dan pilihan paket.`,
    )}`,
    isDeleted: false,
    weight: 1,
    display_order: 3,
  },
  {
    id: 3,
    nama_cs: "Kak Putri",
    nomor_hp: "+6285724543040",
    link_cta: `https://wa.me/6285724543040?text=${encodeURIComponent(
      `Halo Kak Putri ${baseUrl}/, Saya ingin tanya program belajar yang ada di Edumatrix Indonesia. Apa saja jenis program belajar dan pilihan paket.`,
    )}`,
    isDeleted: false,
    weight: 1,
    display_order: 4,
  },
  {
    id: 4,
    nama_cs: "Kak Nevita",
    nomor_hp: "+6285815095359",
    link_cta: `https://wa.me/6285815095359?text=${encodeURIComponent(
      `Halo Kak Nevita ${baseUrl}/, Saya ingin tanya program belajar yang ada di Edumatrix Indonesia. Apa saja jenis program belajar dan pilihan paket.`,
    )}`,
    isDeleted: false,
    weight: 1,
    display_order: 4,
  },
];
