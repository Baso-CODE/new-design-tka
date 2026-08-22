"use client";

import { schools } from "@/app/components/data/school";
import { useMemo, useState } from "react";

const AsalSekolahSiswaEdumatrix = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => schools.filter((s) => s.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#04397d] to-[#023ea9] py-20 px-4 font-title">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#023ea9]/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0255c9]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-310">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl  font-bold text-white leading-tight">
            Asal Sekolah Siswa{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-500">
              Edumatrix
            </span>
          </h2>
          <p className="mt-4 text-blue-200 text-sm sm:text-base max-w-xl mx-auto">
            Bergabung bersama siswa dari ratusan sekolah terbaik di seluruh
            Indonesia.
          </p>
        </div>

        {/* Stats + Search bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Count pill */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2.5 text-white">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm">
              Menampilkan{" "}
              <strong className="text-cyan-300">{filtered.length}</strong>
              <span className="text-blue-300">/{schools.length}</span> sekolah
            </span>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Cari sekolah..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-300 rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 hover:text-white transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* School list card */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30 bg-white/[0.06] backdrop-blur-md">
          {/* Inner scrollable area */}
          <div className="overflow-y-auto max-h-[480px] p-6 custom-scrollbar">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {filtered.map((school, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 group-hover:scale-150 transition-transform duration-200" />
                    <span className="text-sm text-blue-100 group-hover:text-white transition-colors duration-200 leading-snug">
                      {school}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <svg
                  className="w-10 h-10 text-blue-400 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                  />
                </svg>
                <p className="text-blue-200 text-sm">
                  Tidak ada sekolah dengan nama{" "}
                  <strong className="text-white">&ldquo;{query}&rdquo;</strong>
                </p>
                <button
                  onClick={() => setQuery("")}
                  className="mt-3 text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors">
                  Reset pencarian
                </button>
              </div>
            )}
          </div>

          {/* Bottom fade overlay */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#04397d]/60 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default AsalSekolahSiswaEdumatrix;
