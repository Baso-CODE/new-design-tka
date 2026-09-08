"use client";

import { ContactCs } from "@/app/types/contact.type";
import { useCsRotation } from "../helper/useCsRotation";

interface Props {
  contacts: ContactCs[];
}

export default function PilihanMetodeClient({ contacts }: Props) {
  const { activeCs: activeOnline, rotateCs: rotateOnline } = useCsRotation(
    contacts,
    "single",
    "pilihan_online_rotation",
  );

  const { activeCs: activeOffline, rotateCs: rotateOffline } = useCsRotation(
    contacts,
    "single",
    "pilihan_offline_rotation",
  );

  if (
    !activeOnline ||
    activeOnline.length === 0 ||
    !activeOffline ||
    activeOffline.length === 0
  ) {
    return null;
  }

  const onlineContact = activeOnline[0];
  const offlineContact = activeOffline[0];

  const handleOnlineClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const link = onlineContact.link_cta;

    rotateOnline();

    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 50);
  };

  const handleOfflineClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const link = offlineContact.link_cta;

    rotateOffline();

    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-8 font-title">
      {/* AMBIENT LIGHT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          top-0
          h-48
          w-48
          rounded-full
          bg-[#4DA3FF]/8
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-0
          h-48
          w-48
          rounded-full
          bg-[#FAAE17]/6
          blur-3xl
        "
      />

      {/* TITLE */}
      <div
        className="
          relative
          z-10
          mb-6
          overflow-hidden

          rounded-full

          border
          border-[#05428a]/10

          bg-white/65

          px-6
          py-2.5

          shadow-[0_8px_22px_rgba(5,66,138,0.08),inset_0_1px_0_rgba(255,255,255,0.95)]

          backdrop-blur-[18px]
          backdrop-saturate-[180%]
        ">
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
            via-white
            to-transparent
          "
        />

        <h3 className="relative z-10 text-center text-xl font-extrabold text-[#05428a] md:text-2xl">
          Pilih Metode Belajarmu
        </h3>
      </div>

      {/* BUTTON WRAPPER */}
      <div className="relative z-10 flex w-full max-w-md flex-row items-center justify-center gap-3 sm:gap-4">
        {/* ONLINE */}
        <a
          href={onlineContact.link_cta}
          onClick={handleOnlineClick}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            relative

            flex
            w-1/2
            items-center
            justify-center

            overflow-hidden
            rounded-full

            border
            border-white/40

            px-4
            py-3

            text-center
            text-base
            font-extrabold
            tracking-wider
            text-white

            shadow-[0_10px_28px_rgba(0,110,50,0.24),0_3px_10px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,80,35,0.16)]

            backdrop-blur-[18px]
            backdrop-saturate-[180%]

            transition-all
            duration-300
            ease-out

            hover:-translate-y-0.5
            hover:scale-[1.02]
            hover:border-white/55

            hover:shadow-[0_14px_34px_rgba(0,110,50,0.30),0_5px_14px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.55)]

            active:translate-y-0
            active:scale-[0.985]

            sm:px-8
            sm:py-4
            sm:text-lg
          "
          style={{
            background: [
              "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 34%, transparent 58%)",
              "radial-gradient(circle at 15% -20%, rgba(255,255,255,0.22) 0%, transparent 38%)",
              "linear-gradient(135deg, #00a63a 0%, #009933 52%, #007a28 100%)",
            ].join(", "),
          }}>
          {/* TOP SPECULAR */}
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
              via-white/90
              to-transparent
            "
          />

          {/* REFLECTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-[25%]
              -top-[70%]
              h-[140%]
              w-[60%]
              rotate-[-16deg]
              rounded-full
              bg-white/18
              blur-xl
              transition-transform
              duration-500
              group-hover:translate-x-5
            "
          />

          {/* GREEN REFRACTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-6
              right-[8%]
              h-10
              w-24
              rounded-full
              bg-[#5cff91]/20
              blur-xl
            "
          />

          {/* HOVER SHINE */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-[45%]
              top-0
              h-full
              w-[35%]
              skew-x-[-20deg]
              bg-linear-to-r
              from-transparent
              via-white/30
              to-transparent
              opacity-0
              transition-all
              duration-700
              group-hover:left-[115%]
              group-hover:opacity-100
            "
          />

          <span className="relative z-10">ONLINE</span>
        </a>

        {/* OFFLINE */}
        <a
          href={offlineContact.link_cta}
          onClick={handleOfflineClick}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            relative

            flex
            w-1/2
            items-center
            justify-center

            overflow-hidden
            rounded-full

            border
            border-white/40

            px-4
            py-3

            text-center
            text-base
            font-extrabold
            tracking-wider
            text-white

            shadow-[0_10px_28px_rgba(170,0,55,0.24),0_3px_10px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(100,0,30,0.16)]

            backdrop-blur-[18px]
            backdrop-saturate-[180%]

            transition-all
            duration-300
            ease-out

            hover:-translate-y-0.5
            hover:scale-[1.02]
            hover:border-white/55

            hover:shadow-[0_14px_34px_rgba(170,0,55,0.30),0_5px_14px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.55)]

            active:translate-y-0
            active:scale-[0.985]

            sm:px-8
            sm:py-4
            sm:text-lg
          "
          style={{
            background: [
              "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 34%, transparent 58%)",
              "radial-gradient(circle at 15% -20%, rgba(255,255,255,0.22) 0%, transparent 38%)",
              "linear-gradient(135deg, #e5225a 0%, #d9144c 52%, #b5103f 100%)",
            ].join(", "),
          }}>
          {/* TOP SPECULAR */}
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
              via-white/90
              to-transparent
            "
          />

          {/* REFLECTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-[25%]
              -top-[70%]
              h-[140%]
              w-[60%]
              rotate-[-16deg]
              rounded-full
              bg-white/18
              blur-xl
              transition-transform
              duration-500
              group-hover:translate-x-5
            "
          />

          {/* RED REFRACTION */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-6
              right-[8%]
              h-10
              w-24
              rounded-full
              bg-[#ff638f]/20
              blur-xl
            "
          />

          {/* HOVER SHINE */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-[45%]
              top-0
              h-full
              w-[35%]
              skew-x-[-20deg]
              bg-linear-to-r
              from-transparent
              via-white/30
              to-transparent
              opacity-0
              transition-all
              duration-700
              group-hover:left-[115%]
              group-hover:opacity-100
            "
          />

          <span className="relative z-10">OFFLINE</span>
        </a>
      </div>
    </div>
  );
}
