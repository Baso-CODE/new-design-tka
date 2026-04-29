"use client";

import { getDataSuccessStoryDummy } from "@/app/lib/getDummyDataRequest/getSuccessStoryDummy.request";
import { SuccessStory } from "@/app/types/successStory.type";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SuccessStoryGrid() {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    async function fetchData() {
      const data = await getDataSuccessStoryDummy();
      setStories(data);
    }
    fetchData();
  }, []);

  if (stories.length === 0) return null;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  return (
    <section className="py-8 sm:py-12 bg-linear-to-r from-[#04397d] to-[#023ea9]">
      <div className="mx-auto max-w-310 px-2 ">
        <h2 className="text-3xl sm:text-4xl font-title font-extrabold text-white text-center mb-4 sm:mb-6">
          Kisah Sukses Alumni Kami
        </h2>

        <p className="text-lg font-desc sm:text-xl text-white text-center mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90">
          Mereka adalah bukti nyata keberhasilan program bimbingan kami.
        </p>

        {/* GRID */}
        <div
          className="
          grid gap-4
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5
        ">
          {stories.slice(0, visibleCount).map((story) => (
            <div key={story.id} className="w-full">
              <Image
                src={story.image || "-"}
                alt={story.participantName}
                width={400}
                height={600}
                className="rounded-md w-full h-full object-contain shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* BUTTON */}
        {visibleCount < stories.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
              Tampilkan Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
