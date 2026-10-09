import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pendaftaran Berhasil",
  description:
    "Terima kasih telah melakukan pendaftaran. Tim Edumatrix Indonesia akan membantu proses selanjutnya.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: null,
  },
  openGraph: {
    type: "website",
    title: "Pendaftaran Berhasil",
    description: "Konfirmasi pendaftaran Edumatrix Indonesia.",
  },
};

export default function SuksesLayout({ children }: { children: ReactNode }) {
  return children;
}
