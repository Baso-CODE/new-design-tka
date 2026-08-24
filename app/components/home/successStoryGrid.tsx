"use client";

import { getDataSuccessStoryDummy } from "@/app/lib/getDummyDataRequest/getSuccessStoryDummy.request";
import { SuccessStory } from "@/app/types/successStory.type";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SuccessStoryGrid() {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    async function fetchData() {
      const data = await getDataSuccessStoryDummy();
      setStories(data);
    }
    fetchData();
  }, []);

  if (stories.length === 0) return null;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section
      className="py-12 sm:py-16 px-4"
      style={{
        background: "linear-gradient(to bottom, #0571cd 0%, #033790 100%)",
      }}>
      <div className="mx-auto max-w-6xl">
        {/* Judul Utama */}
        <h2 className="text-2xl sm:text-3xl font-title font-extrabold text-white text-center mb-3 sm:mb-4">
          Kisah Sukses <span className="text-[#fac61f]">Alumni Kami</span>
        </h2>

        {/* Deskripsi */}
        <p className="text-sm sm:text-base font-desc text-white text-center mb-8 sm:mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
          Mereka adalah bukti nyata keberhasilan program bimbingan kami.
          Bergabunglah dengan Edumatrix Indonesia dan jadilah kisah sukses
          berikutnya!
        </p>

        {/* GRID (2 Kolom di Mobile, 4 Kolom di Desktop) */}
        <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
          {stories.slice(0, visibleCount).map((story) => (
            <div
              key={story.id}
              className="w-full bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-xl overflow-hidden flex items-center justify-center aspect-3/4">
              <Image
                src={story.image || "-"}
                alt={story.participantName}
                width={500}
                height={700}
                className="rounded-xl sm:rounded-2xl w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* BUTTON */}
        {visibleCount < stories.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-[#fac61f] text-[#033790] font-bold font-title rounded-xl shadow-md hover:bg-yellow-400 transition">
              Tampilkan Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
