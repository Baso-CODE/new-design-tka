const HeroContactCS = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-4 pt-[12vh] pb-10 text-white">
      {/* AMBIENT LIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-0
          h-72
          w-72
          rounded-full
          bg-[#4DA3FF]/18
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-[#FAAE17]/10
          blur-3xl
        "
      />

      {/* LIQUID GLASS HERO CARD */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
          overflow-hidden

          rounded-[32px]

          border
          border-white/30

          bg-white/10

          px-5
          py-8

          text-center

          shadow-[0_22px_55px_rgba(0,25,70,0.24),0_7px_18px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(255,255,255,0.05)]

          backdrop-blur-[24px]
          backdrop-saturate-[180%]

          sm:px-8
          sm:py-10
          md:px-12
        ">
        {/* TOP SPECULAR */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-[10%]
            top-0
            h-px
            bg-linear-to-r
            from-transparent
            via-white/85
            to-transparent
          "
        />

        {/* LEFT REFLECTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-16
            -top-20
            h-40
            w-56
            rounded-full
            bg-white/18
            blur-3xl
          "
        />

        {/* BLUE REFRACTION */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-20
            -right-12
            h-44
            w-56
            rounded-full
            bg-[#4DA3FF]/16
            blur-3xl
          "
        />

        {/* INNER EDGE */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-[1px]
            rounded-[31px]
            border
            border-white/[0.07]
          "
        />

        <h1
          className="
            relative
            z-10
            mb-6

            font-title
            text-4xl
            font-bold
            leading-tight
            text-white

            drop-shadow-[0_3px_10px_rgba(0,25,70,0.20)]

            sm:text-5xl
          ">
          Hubungi Kami
        </h1>

        <p
          className="
            relative
            z-10
            mx-auto
            max-w-4xl

            font-desc
            text-base
            font-medium
            leading-relaxed
            text-white/85

            sm:text-lg
            md:text-xl
          ">
          Kami di sini untuk membantu Anda! Apakah Anda memiliki pertanyaan,
          membutuhkan bantuan, atau ingin tahu lebih banyak tentang program
          kami? Jangan ragu untuk menghubungi kami.
        </p>
      </div>
    </section>
  );
};

export default HeroContactCS;
