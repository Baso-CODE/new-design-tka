import Image from "next/image";
import Link from "next/link";
import { getDataContactCsDummy } from "../lib/getDummyDataRequest/getContactCsDummy.request";

export const dynamic = "force-dynamic";
export default async function FloatingCTA() {
  const waLink = await getDataContactCsDummy();

  return (
    <div
      className="
        fixed bottom-[3%] right-[3%] z-1000
        flex items-center gap-3
        md:bottom-[7%] md:right-[4%]
      ">
      {/* CHAT BUBBLE LABEL */}
      <div
        className="
          relative
          bg-white
          text-xs md:text-sm
          font-semibold
          px-4 py-2
          rounded-xl
          shadow-lg
          whitespace-nowrap
          before:content-['']
          before:absolute
          before:-right-1.5
          before:top-1/2
          before:-translate-y-1/2
          before:border-[6px]
          before:border-transparent
          before:border-l-white
        ">
        {"Klik untuk Konsultasi"}
      </div>

      {/* BUTTON */}
      <Link
        href={waLink.link_cta}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Matrix Tutoring"
        className="
          relative
          flex items-center justify-center
          w-12 h-12 md:w-14 md:h-14
          rounded-full
          bg-linear-to-br from-[#25D366] to-[#00b33c]
          shadow-xl
          hover:scale-110
          transition-all duration-300
        ">
        {/* PULSE RING */}
        <span
          className="
            absolute inline-flex
            w-full h-full
            rounded-full
            bg-[#25D366]
            opacity-30
            animate-ping
          "
        />

        {/* ICON */}
        <Image
          src="/images/icon-wa.svg"
          alt="Chat WhatsApp Matrix Tutoring"
          width={40}
          height={40}
          className="relative z-10 w-7 h-7 md:w-8 md:h-8"
          loading="eager"
        />
      </Link>
    </div>
  );
}
