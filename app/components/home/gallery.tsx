"use client";

import Image from "next/image";
import { useState } from "react";

const galleryData = {
  offline: [
    {
      id: 1,
      src: "/images/gallery-belajar/gallery-offline-1.webp",
      alt: "Bimbingan Offline TKA Edumatrix",
      title: "Bimbingan Tatap Muka Eksklusif",
    },
    {
      id: 2,
      src: "/images/gallery-belajar/gallery-offline-2.webp",
      alt: "Suasana Kelas Offline TKA",
      title: "Diskusi & Pembahasan Soal TKA",
    },
    {
      id: 3,
      src: "/images/gallery-belajar/gallery-offline-3.webp",
      alt: "Suasana Kelas Offline TKA",
      title: "Sesi Latihan Intensif",
    },
    {
      id: 4,
      src: "/images/gallery-belajar/gallery-offline-4.webp",
      alt: "Suasana Kelas Offline TKA",
      title: "Evaluasi & Koreksi Bersama",
    },
  ],
  online: [
    {
      id: 5,
      src: "/images/gallery-belajar/gallery-online-1.webp",
      alt: "Bimbingan Interaktif Online TKA",
      title: "Kelas Online Live Interaktif",
    },
    {
      id: 6,
      src: "/images/gallery-belajar/gallery-online-2.webp",
      alt: "Sesi Belajar Online TKA Edumatrix",
      title: "Pendampingan Private Online",
    },
    {
      id: 7,
      src: "/images/gallery-belajar/gallery-online-3.webp",
      alt: "Sesi Belajar Online TKA Edumatrix",
      title: "Sesi Tanya Jawab Live",
    },
  ],
};

type Tab = "offline" | "online";

const tabs: {
  key: Tab;
  label: string;
  icon: string;
  color: string;
  accent: string;
}[] = [
  {
    key: "offline",
    label: "Kelas Offline",
    icon: "🏫",
    color: "text-[#04397d]",
    accent: "bg-[#04397d]",
  },
  {
    key: "online",
    label: "Kelas Online",
    icon: "💻",
    color: "text-orange-600",
    accent: "bg-orange-500",
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<Tab>("offline");
  const items = galleryData[activeTab];
  const isOffline = activeTab === "offline";

  return (
    <section className="bg-[#f8faff] py-16 sm:py-20 lg:py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2744] font-title leading-tight mb-4">
            Galeri Belajar{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#04397d]">
                TKA Edumatrix
              </span>
            </span>
          </h2>
          <p className="text-slate-500 font-desc text-sm sm:text-base leading-relaxed">
            Dokumentasi proses bimbingan TKA secara tatap muka maupun online
            interaktif — suasana belajar yang aktif dan menyenangkan.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="relative flex items-center gap-1 bg-white border border-gray-200 rounded-2xl p-1.5 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold font-title
                  transition-all duration-300 whitespace-nowrap
                  ${
                    activeTab === tab.key
                      ? `${tab.accent} text-white shadow-md`
                      : "text-slate-500 hover:text-slate-800 hover:bg-gray-50"
                  }
                `}>
                <span>{tab.icon}</span>
                {tab.label}
                {activeTab === tab.key && (
                  <span className="ml-1 bg-white/20 text-white text-[10px] font-bold rounded-full px-2 py-0.5">
                    {items.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid — asymmetric: first item spans full width on md, rest in 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, index) => {
            const isFeature = index === 0;
            return (
              <div
                key={item.id}
                className={`
                  group relative overflow-hidden rounded-2xl bg-gray-900 shadow-md
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                  ${isFeature ? "md:col-span-2" : ""}
                `}>
                {/* Image */}
                <div
                  className={`relative w-full overflow-hidden ${isFeature ? "h-72 sm:h-96" : "h-60 sm:h-72"}`}>
                  <Image
                    src={item.src}
                    loading="lazy"
                    fill
                    alt={item.alt}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                {/* Caption overlaid on image bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                  <div>
                    {isFeature && (
                      <span
                        className={`
                        inline-block mb-2 text-[10px] font-bold tracking-widest uppercase rounded-full px-3 py-1
                        ${isOffline ? "bg-[#04397d] text-white" : "bg-orange-500 text-white"}
                      `}>
                        {isOffline ? "🏫 Offline" : "💻 Online"} · Unggulan
                      </span>
                    )}
                    <p className="text-white font-semibold font-title text-sm sm:text-base drop-shadow">
                      {item.title}
                    </p>
                  </div>

                  {/* Mode badge */}
                  <span
                    className={`
                    shrink-0 text-[10px] font-bold rounded-xl px-3 py-1.5 backdrop-blur-sm border
                    ${
                      isOffline
                        ? "bg-[#04397d]/70 border-[#04397d]/50 text-white"
                        : "bg-orange-500/70 border-orange-400/50 text-white"
                    }
                  `}>
                    {isOffline ? "Offline" : "Online"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom counter */}
        <p className="text-center mt-8 text-xs text-slate-400 font-desc">
          Menampilkan{" "}
          <strong className="text-slate-600">{items.length} foto</strong>{" "}
          {activeTab === "offline" ? "kelas tatap muka" : "kelas online"}
        </p>
      </div>
    </section>
  );
};

export default Gallery;
