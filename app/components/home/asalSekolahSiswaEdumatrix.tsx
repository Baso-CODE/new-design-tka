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
    <section
      className="relative overflow-hidden py-16 sm:py-20 px-4 font-title"
      style={{
        background: "linear-gradient(to bottom, #0571cd 0%, #033790 100%)",
      }}>
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Asal Sekolah Siswa <span className="text-[#fac61f]">Edumatrix</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-blue-100 font-desc text-sm sm:text-base max-w-xl mx-auto opacity-90">
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
              <strong className="text-cyan-600">{filtered.length}</strong>
              <span className="text-gray-500">/{schools.length}</span> sekolah
            </span>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
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
              className="w-full bg-white text-gray-800 placeholder-gray-400 border border-gray-200 rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
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
        <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100">
          <div className="overflow-y-auto max-h-120 p-4 sm:p-6 custom-scrollbar">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 ">
                {filtered.map((school, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-200 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-150 transition-transform duration-200" />
                    <span className="text-sm text-gray-700 group-hover:text-blue-900 font-medium transition-colors duration-200 leading-snug">
                      {school}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <svg
                  className="w-10 h-10 text-gray-300 mb-3"
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
                <p className="text-gray-600 text-sm">
                  Tidak ada sekolah dengan nama{" "}
                  <strong className="text-gray-900">
                    &ldquo;{query}&rdquo;
                  </strong>
                </p>
                <button
                  onClick={() => setQuery("")}
                  className="mt-3 text-xs text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors">
                  Reset pencarian
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

AsalSekolahSiswaEdumatrix.displayName = "AsalSekolahSiswaEdumatrix";
export default AsalSekolahSiswaEdumatrix;
