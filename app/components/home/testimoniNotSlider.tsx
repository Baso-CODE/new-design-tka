"use client";

import { getDataTestimoniDummy } from "@/app/lib/getDummyDataRequest/getTestimoniDummy.request";
import { SuccessStory } from "@/app/types/successStory.type";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TestimoniGrid() {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    async function fetchData() {
      const data = await getDataTestimoniDummy();
      setStories(data);
    }

    fetchData();
  }, []);

  if (stories.length === 0) return null;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
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
          "linear-gradient(160deg, #033790 0%, #044d9f 46%, #0571cd 100%)",
      }}>
      {/* BACKGROUND BLUE GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48
          top-[5%]

          h-[520px]
          w-[520px]

          rounded-full

          bg-[#4DA3FF]/20
          blur-3xl
        "
      />

      {/* BOTTOM BLUE REFRACTION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-60
          -right-44

          h-[520px]
          w-[520px]

          rounded-full

          bg-[#168cff]/22
          blur-3xl
        "
      />

      {/* GOLD AMBIENT REFLECTION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[18%]

          h-56
          w-56

          rounded-full

          bg-[#fac61f]/8
          blur-3xl
        "
      />

      {/* TOP LIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0

          h-40
          w-[70%]

          -translate-x-1/2

          rounded-full

          bg-white/5
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">
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

              drop-shadow-[0_2px_8px_rgba(0,25,70,0.18)]

              sm:mb-4
              sm:text-3xl
            ">
            Testimoni <span className="text-[#fac61f]">Orang Tua Murid</span>
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
            Kepercayaan orang tua adalah motivasi terbesar kami. Berikut
            pengalaman nyata dari para orang tua yang telah mempercayakan
            pendidikan anaknya kepada Edumatrix Indonesia.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
            mx-auto
            grid
            max-w-5xl
            grid-cols-2
            gap-4
            sm:gap-6
            md:grid-cols-3
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

                shadow-[0_18px_40px_rgba(0,20,65,0.26),0_5px_14px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.58),inset_0_-1px_0_rgba(0,50,120,0.08)]

                backdrop-blur-[22px]
                backdrop-saturate-[185%]

                transition-all
                duration-500
                ease-out

                hover:-translate-y-1
                hover:scale-[1.02]
                hover:border-white/55

                hover:shadow-[0_26px_55px_rgba(0,35,95,0.34),0_8px_20px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.72)]

                sm:rounded-[30px]
                sm:p-3
              "
              style={{
                background: [
                  "linear-gradient(145deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.11) 32%, rgba(255,255,255,0.045) 100%)",
                  "rgba(255,255,255,0.11)",
                ].join(", "),
              }}>
              {/* TOP GLASS EDGE */}
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

              {/* TOP LEFT REFLECTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-[35%]
                  -top-[16%]
                  z-10

                  h-[50%]
                  w-[90%]

                  rotate-[-20deg]
                  rounded-full

                  bg-white/20
                  blur-2xl

                  transition-all
                  duration-700

                  group-hover:translate-x-7
                  group-hover:bg-white/26
                "
              />

              {/* LOWER BLUE REFRACTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-14
                  -right-10
                  z-10

                  h-36
                  w-36

                  rounded-full

                  bg-[#4DA3FF]/20
                  blur-2xl
                "
              />

              {/* SMALL GOLD REFRACTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -left-10
                  bottom-[12%]
                  z-10

                  h-24
                  w-24

                  rounded-full

                  bg-[#fac61f]/8
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

              {/* IMAGE */}
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

                  shadow-[0_7px_18px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.30)]

                  sm:rounded-[24px]
                ">
                <Image
                  src={story.image || "-"}
                  alt={story.participantName}
                  width={500}
                  height={700}
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
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-linear-to-br
                    from-white/10
                    via-transparent
                    to-[#033790]/8
                  "
                />

                {/* IMAGE SPECULAR REFLECTION */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-[25%]
                    -top-[18%]

                    h-[38%]
                    w-[85%]

                    rotate-[-18deg]
                    rounded-full

                    bg-white/12
                    blur-xl

                    transition-transform
                    duration-700

                    group-hover:translate-x-5
                  "
                />

                {/* IMAGE BOTTOM GLASS SHADE */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0

                    h-[18%]

                    bg-linear-to-t
                    from-[#033790]/15
                    to-transparent
                  "
                />
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
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

                hover:shadow-[0_14px_34px_rgba(0,20,60,0.28),0_5px_14px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.88)]

                active:translate-y-0
                active:scale-[0.98]
              "
              style={{
                background: [
                  "linear-gradient(150deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.10) 34%, transparent 60%)",
                  "linear-gradient(135deg, #FFD94A 0%, #FAC61F 52%, #EFB515 100%)",
                ].join(", "),
              }}>
              {/* TOP REFLECTION */}
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
                  from-white/50
                  to-transparent
                "
              />

              {/* GOLD REFRACTION */}
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

                  bg-[#fff0a3]/32
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

              {/* INNER EDGE */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-[1px]

                  rounded-full

                  border
                  border-white/15
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
