import type { Metadata } from "next";
import type { ReactNode } from "react";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://bimbeljuaratka.com"
).replace(/\/+$/, "");

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Edumatrix Indonesia";

const title = "Pendaftaran Bimbel & Les Privat TKA";
const description =
  "Daftar program bimbel dan les privat TKA untuk SD, SMP, dan SMA di Edumatrix Indonesia. Isi formulir untuk memilih program serta jadwal belajar.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${baseUrl}/daftar`,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: `${baseUrl}/daftar`,
    siteName,
    title: `${title} | ${siteName}`,
    description,
  },
};

export default function DaftarLayout({ children }: { children: ReactNode }) {
  return children;
}
