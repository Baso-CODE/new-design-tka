"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuksesContent() {
  const params = useSearchParams();
  const nama = params.get("nama") || "Calon Siswa";
  const cs = params.get("cs") || "CS kami";

  return (
    <div className="min-h-screen bg-[#f0f7ff] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-[#056fcb] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#056fcb] mb-3">
          Pendaftaran Berhasil!
        </h2>
        <p className="text-gray-600 mb-2">
          Terima kasih,{" "}
          <span className="font-semibold text-gray-800">{nama}</span>.
        </p>
        <p className="text-gray-500 text-sm mb-2">
          Kamu sudah terhubung dengan{" "}
          <span className="font-semibold text-[#056fcb]">{cs}</span> via
          WhatsApp.
        </p>
        <p className="text-gray-400 text-xs mb-8">
          Jika tab WhatsApp belum terbuka, pastikan pop-up tidak diblokir oleh
          browser kamu.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#056fcb] hover:bg-[#0460b0] text-white font-bold px-8 py-3 rounded-full transition-colors duration-300">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default function SuksesPage() {
  return (
    <Suspense>
      <SuksesContent />
    </Suspense>
  );
}
