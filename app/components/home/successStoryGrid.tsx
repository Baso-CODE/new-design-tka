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
      className="
        relative
        overflow-hidden
        px-4
        py-12
        sm:py-16
      "
      style={{
        background:
          "linear-gradient(155deg, #0571cd 0%, #0458ad 48%, #033790 100%)",
      }}>
      {/* BACKGROUND SOFT LIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          -top-48
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#4DA3FF]/25
          blur-3xl
        "
      />

      {/* BACKGROUND REFRACTION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-56
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#1c8cff]/20
          blur-3xl
        "
      />

      {/* GOLD REFRACTION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[15%]
          h-52
          w-52
          rounded-full
          bg-[#fac61f]/8
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <h2
            className="
              mb-3
              font-title
              text-2xl
              font-extrabold
              leading-tight
              text-white

              drop-shadow-[0_2px_8px_rgba(0,30,80,0.18)]

              sm:mb-4
              sm:text-3xl
            ">
            Kisah Sukses <span className="text-[#fac61f]">Alumni Kami</span>
          </h2>

          <p
            className="
              mx-auto
              max-w-2xl
              font-desc
              text-sm
              leading-relaxed
              text-white/90
              sm:text-base
            ">
            Mereka adalah bukti nyata keberhasilan program bimbingan kami.
            Bergabunglah dengan Edumatrix Indonesia dan jadilah kisah sukses
            berikutnya!
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-2
            gap-2
            sm:gap-2
            md:grid-cols-4
          ">
          {stories.slice(0, visibleCount).map((story) => (
            <div
              key={story.id}
              className="
                group
                relative

                flex
                aspect-3/4
                w-full
                items-center
                justify-center

                overflow-hidden

                rounded-[24px]

                border
                border-white/35

                p-2

                shadow-[0_16px_35px_rgba(0,20,65,0.25),0_5px_14px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.55)]

                backdrop-blur-[20px]
                backdrop-saturate-[180%]

                transition-all
                duration-500
                ease-out

                hover:-translate-y-1
                hover:scale-[1.02]
                hover:border-white/50

                hover:shadow-[0_24px_48px_rgba(0,30,85,0.34),0_8px_20px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.7)]

                sm:rounded-[30px]
                sm:p-3
              "
              style={{
                background: [
                  "linear-gradient(145deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.10) 32%, rgba(255,255,255,0.045) 100%)",
                  "rgba(255,255,255,0.12)",
                ].join(", "),
              }}>
              {/* TOP GLASS REFLECTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-[10%]
                  top-0
                  z-30

                  h-px

                  bg-linear-to-r
                  from-transparent
                  via-white/95
                  to-transparent
                "
              />

              {/* LEFT SPECULAR LIGHT */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-[35%]
                  -top-[18%]
                  z-10

                  h-[55%]
                  w-[90%]

                  rotate-[-20deg]
                  rounded-full

                  bg-white/20
                  blur-2xl

                  transition-all
                  duration-700

                  group-hover:translate-x-6
                  group-hover:bg-white/25
                "
              />

              {/* BLUE REFRACTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-12
                  -right-10
                  z-10

                  h-32
                  w-32

                  rounded-full

                  bg-[#4DA3FF]/18
                  blur-2xl
                "
              />

              {/* INNER GLASS BORDER */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-[1px]
                  z-30

                  rounded-[23px]

                  border
                  border-white/10

                  sm:rounded-[29px]
                "
              />

              {/* IMAGE WRAPPER */}
              <div
                className="
                  relative
                  z-20

                  h-full
                  w-full

                  overflow-hidden

                  rounded-[18px]

                  border
                  border-white/25

                  bg-white/10

                  shadow-[0_6px_16px_rgba(0,0,0,0.13),inset_0_1px_0_rgba(255,255,255,0.3)]

                  sm:rounded-[24px]
                ">
                <Image
                  src={story.image || "-"}
                  alt={story.participantName}
                  width={600}
                  height={800}
                  className="
                    h-full
                    w-full
                
                    object-center
                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-[1.035]
                  "
                />

                {/* IMAGE GLASS OVERLAY */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-linear-to-br
                    from-white/10
                    via-transparent
                    to-[#033790]/5
                  "
                />

                {/* IMAGE TOP REFLECTION */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-[20%]
                    -top-[20%]

                    h-[40%]
                    w-[80%]

                    rotate-[-15deg]
                    rounded-full

                    bg-white/12
                    blur-xl
                  "
                />
              </div>
            </div>
          ))}
        </div>

        {/* SHOW MORE BUTTON */}
        {visibleCount < stories.length && (
          <div className="mt-10 text-center">
            <button
              onClick={handleShowMore}
              className="
                group
                relative

                inline-flex
                min-h-12
                items-center
                justify-center

                overflow-hidden

                rounded-full

                border
                border-white/45

                px-7
                py-3

                font-title
                text-sm
                font-bold
                text-[#033790]

                shadow-[0_10px_28px_rgba(0,20,60,0.22),0_3px_10px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-1px_0_rgba(120,80,0,0.10)]

                backdrop-blur-[18px]
                backdrop-saturate-[180%]

                transition-all
                duration-300
                ease-out

                hover:-translate-y-0.5
                hover:scale-[1.025]

                hover:shadow-[0_14px_34px_rgba(0,20,60,0.28),0_5px_14px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.85)]

                active:translate-y-0
                active:scale-[0.98]
              "
              style={{
                background: [
                  "linear-gradient(150deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 35%, transparent 60%)",
                  "linear-gradient(135deg, #FFD94A 0%, #FAC61F 52%, #EFB515 100%)",
                ].join(", "),
              }}>
              {/* BUTTON TOP REFLECTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[10%]
                  right-[10%]
                  top-0

                  h-[45%]

                  rounded-b-[80%]

                  bg-linear-to-b
                  from-white/45
                  to-transparent
                "
              />

              {/* BUTTON GOLD REFRACTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-5
                  right-[8%]

                  h-10
                  w-24

                  rounded-full

                  bg-[#fff0a3]/30
                  blur-xl
                "
              />

              {/* HOVER SHINE */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-[50%]
                  top-0

                  h-full
                  w-[35%]

                  skew-x-[-20deg]

                  bg-linear-to-r
                  from-transparent
                  via-white/35
                  to-transparent

                  opacity-0

                  transition-all
                  duration-700

                  group-hover:left-[120%]
                  group-hover:opacity-100
                "
              />

              <span className="relative z-10">Tampilkan Lebih Banyak</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
