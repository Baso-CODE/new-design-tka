import { getDataProgramDummy } from "@/app/lib/getDummyDataRequest/getProgramDummy.request";
import {
  BookOpen,
  GraduationCap,
  Lightbulb,
  Send,
  Target,
  Users,
} from "lucide-react";

const icons = [
  <GraduationCap
    key="1"
    size={40}
    className="text-[#04397D]"
    strokeWidth={1.5}
  />,
  <Users key="2" size={40} className="text-[#04397D]" strokeWidth={1.5} />,
  <Lightbulb key="3" size={40} className="text-[#04397D]" strokeWidth={1.5} />,
  <Target key="4" size={40} className="text-[#04397D]" strokeWidth={1.5} />,
  <BookOpen key="5" size={40} className="text-[#04397D]" strokeWidth={1.5} />,
  <Send key="6" size={40} className="text-[#04397D]" strokeWidth={1.5} />,
];

const badgeColors = [
  {
    base: "#E53855",
    glow: "rgba(229,56,85,0.28)",
    text: "#ffffff",
  },
  {
    base: "#FFC107",
    glow: "rgba(255,193,7,0.30)",
    text: "#04397D",
  },
  {
    base: "#056fcb",
    glow: "rgba(5,111,203,0.30)",
    text: "#ffffff",
  },
  {
    base: "#056fcb",
    glow: "rgba(5,111,203,0.30)",
    text: "#ffffff",
  },
  {
    base: "#10B981",
    glow: "rgba(16,185,129,0.26)",
    text: "#ffffff",
  },
  {
    base: "#A855F7",
    glow: "rgba(168,85,247,0.26)",
    text: "#ffffff",
  },
];

export default async function Program() {
  const programData = await getDataProgramDummy();

  return (
    <section
      className="
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        py-10
        font-title
        md:py-20
      "
      style={{
        background:
          "linear-gradient(155deg, #0571cd 0%, #0459ad 48%, #033790 100%)",
      }}>
      {/* =========================================================
          BACKGROUND LIQUID REFRACTION
      ========================================================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-52
          -top-40
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#4DA3FF]/20
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-52
          -right-48
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#168cff]/18
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[15%]
          top-[15%]
          h-64
          w-64
          rounded-full
          bg-[#FAAE17]/8
          blur-3xl
        "
      />

      {/* TOP AMBIENT LIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-48
          w-[70%]
          -translate-x-1/2
          rounded-full
          bg-white/5
          blur-3xl
        "
      />

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8">
        <div className="container mx-auto">
          {/* =====================================================
              SECTION TITLE
          ===================================================== */}
          <div className="mb-8 flex items-center justify-center md:mb-12">
            <div
              className="
                relative
                inline-flex
                items-center
                justify-center
                overflow-hidden

                rounded-full

                border
                border-white/25

                bg-white/10

                px-8
                py-3

                shadow-[0_10px_30px_rgba(0,25,70,0.20),inset_0_1px_0_rgba(255,255,255,0.38)]

                backdrop-blur-[20px]
                backdrop-saturate-[180%]
              ">
              {/* TITLE SPECULAR */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-[12%]
                  top-0
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-white/85
                  to-transparent
                "
              />

              {/* TITLE REFRACTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-5
                  right-[10%]
                  h-10
                  w-28
                  rounded-full
                  bg-[#4DA3FF]/18
                  blur-xl
                "
              />

              <h2 className="relative z-10 text-center font-title text-2xl font-bold text-white md:text-3xl">
                Fitur Program
              </h2>
            </div>
          </div>

          {/* =====================================================
              GRID
          ===================================================== */}
          <div className="grid grid-cols-2 gap-3 md:gap-8 lg:grid-cols-3">
            {programData.map((item, index) => {
              const color = badgeColors[index % badgeColors.length];

              return (
                <div
                  key={item.id}
                  className="
                    group
                    relative

                    flex
                    flex-col
                    items-center
                    justify-between

                    overflow-hidden

                    rounded-[24px]

                    border
                    border-white/38

                    p-3

                    text-center
                    text-slate-800

                    shadow-[0_18px_42px_rgba(0,25,70,0.20),0_5px_14px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.60),inset_0_-1px_0_rgba(0,50,120,0.05)]

                    backdrop-blur-[24px]
                    backdrop-saturate-[185%]

                    transition-all
                    duration-500
                    ease-out

                    hover:-translate-y-1.5
                    hover:scale-[1.015]
                    hover:border-white/55

                    hover:shadow-[0_26px_55px_rgba(0,30,85,0.28),0_8px_20px_rgba(0,0,0,0.13),inset_0_1px_0_rgba(255,255,255,0.75)]

                    sm:rounded-[28px]
                    sm:p-4

                    md:rounded-[32px]
                    md:p-7
                  "
                  style={{
                    background: [
                      "linear-gradient(145deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 46%, rgba(238,247,255,0.70) 100%)",
                      "rgba(255,255,255,0.78)",
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
                      via-white
                      to-transparent
                    "
                  />

                  {/* LARGE SPECULAR REFLECTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -left-[35%]
                      -top-[18%]
                      z-0

                      h-[55%]
                      w-[90%]

                      rotate-[-18deg]
                      rounded-full

                      bg-white/50
                      blur-2xl

                      transition-transform
                      duration-700

                      group-hover:translate-x-8
                    "
                  />

                  {/* BLUE BOTTOM REFRACTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-16
                      -right-12
                      z-0

                      h-36
                      w-44

                      rounded-full

                      bg-[#4DA3FF]/12
                      blur-3xl
                    "
                  />

                  {/* BADGE COLOR REFRACTION */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -bottom-20
                      -left-10
                      z-0

                      h-36
                      w-40

                      rounded-full

                      blur-3xl
                    "
                    style={{
                      background: color.glow,
                    }}
                  />

                  {/* INNER GLASS EDGE */}
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-[1px]
                      z-20

                      rounded-[23px]

                      border
                      border-white/28

                      sm:rounded-[27px]
                      md:rounded-[31px]
                    "
                  />

                  <div className="relative z-10 flex w-full flex-col items-center">
                    {/* =================================================
                        ICON LIQUID GLASS
                    ================================================= */}
                    <div
                      className="
                        relative
                        mb-3

                        flex
                        h-16
                        w-16
                        items-center
                        justify-center

                        overflow-hidden

                        rounded-[20px]

                        border
                        border-white/70

                        bg-white/58

                        shadow-[0_9px_22px_rgba(4,57,125,0.11),inset_0_1px_0_rgba(255,255,255,1),inset_0_-1px_0_rgba(4,57,125,0.04)]

                        backdrop-blur-[18px]

                        transition-all
                        duration-500

                        group-hover:-translate-y-1
                        group-hover:scale-[1.05]
                        group-hover:bg-white/75

                        sm:mb-5
                        sm:h-20
                        sm:w-20
                        sm:rounded-[24px]
                      ">
                      {/* ICON TOP REFLECTION */}
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          left-[10%]
                          right-[10%]
                          top-0

                          h-[45%]

                          rounded-b-[70%]

                          bg-linear-to-b
                          from-white
                          to-transparent
                        "
                      />

                      {/* ICON BLUE REFRACTION */}
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          -bottom-5
                          -right-3

                          h-12
                          w-14

                          rounded-full

                          bg-[#4DA3FF]/12
                          blur-xl
                        "
                      />

                      <div
                        className="
                          relative
                          z-10

                          flex
                          scale-[0.82]
                          items-center
                          justify-center

                          transition-transform
                          duration-500

                          group-hover:scale-[0.90]

                          sm:scale-100
                          sm:group-hover:scale-110
                        ">
                        {icons[index % icons.length]}
                      </div>
                    </div>

                    {/* =================================================
                        COLORED LIQUID GLASS BADGE
                    ================================================= */}
                    <div
                      className="
                        relative
                        mb-2
                        w-full
                        overflow-hidden

                        rounded-full

                        border
                        border-white/40

                        px-2
                        py-2

                        font-bold

                        shadow-[0_7px_18px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.50)]

                        backdrop-blur-[16px]
                        backdrop-saturate-[180%]

                        transition-all
                        duration-300

                        group-hover:scale-[1.015]

                        sm:mb-3
                        sm:px-4

                        md:py-2.5
                      "
                      style={{
                        background: [
                          "linear-gradient(150deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.05) 40%, transparent 65%)",
                          color.base,
                        ].join(", "),
                        boxShadow: `0 7px 18px ${color.glow}, inset 0 1px 0 rgba(255,255,255,0.48)`,
                      }}>
                      {/* BADGE TOP HIGHLIGHT */}
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          inset-x-[12%]
                          top-0
                          h-px

                          bg-linear-to-r
                          from-transparent
                          via-white/85
                          to-transparent
                        "
                      />

                      {/* BADGE LIQUID LIGHT */}
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          -left-[10%]
                          -top-[100%]

                          h-[140%]
                          w-[60%]

                          rotate-[-15deg]
                          rounded-full

                          bg-white/22
                          blur-xl
                        "
                      />

                      <h3
                        className="
                          relative
                          z-10
                          text-[11px]
                          leading-tight

                          sm:text-base
                          md:text-lg
                        "
                        style={{
                          color: color.text,
                        }}>
                        {item.judul_fitur}
                      </h3>
                    </div>

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}
                    <p
                      className="
                        relative
                        z-10

                        font-desc
                        text-[10px]
                        leading-relaxed
                        text-[#52677c]

                        sm:text-xs
                        md:text-sm
                      ">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FALLBACK */}
          {programData.length === 0 && (
            <div
              className="
                relative
                mx-auto
                mt-8
                max-w-xl
                overflow-hidden

                rounded-[20px]

                border
                border-white/25

                bg-white/10

                px-5
                py-4

                text-center
                font-desc
                text-sm
                text-white/85

                shadow-[0_10px_28px_rgba(0,25,70,0.16),inset_0_1px_0_rgba(255,255,255,0.30)]

                backdrop-blur-[18px]
              ">
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-[15%]
                  top-0
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-white/75
                  to-transparent
                "
              />

              <span className="relative z-10">
                Data asli tidak tersedia. Menampilkan konten placeholder.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
