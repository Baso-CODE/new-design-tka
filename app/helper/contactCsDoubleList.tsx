"use client";

import { ContactCs } from "@/app/types/contact.type";
import { useCsRotation } from "./useCsRotation";

interface Props {
  contacts: ContactCs[];
}

export default function ContactCsDoubleList({ contacts }: Props) {
  const { activeCs, rotateCs } = useCsRotation(
    contacts,
    "double",
    "contact_double_rotation",
  );

  if (!contacts || contacts.length === 0) return null;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    e.preventDefault();

    rotateCs();

    setTimeout(() => {
      window.open(link, "_blank", "noopener,noreferrer");
    }, 50);
  };

  return (
    <div className="flex w-full flex-col gap-3 sm:gap-4">
      {activeCs.map((contact) => (
        <a
          key={contact.id}
          href={contact.link_cta}
          onClick={(e) => handleClick(e, contact.link_cta)}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            block
            w-full
            outline-none
          ">
          <div
            className="
              relative

              flex
              min-h-12
              w-full
              items-center
              justify-center

              overflow-hidden

              rounded-[18px]

              border
              border-white/40

              px-4
              py-3

              text-center
              font-desc
              text-[16px]
              font-extrabold
              text-[#04397d]

              shadow-[0_10px_26px_rgba(113,79,0,0.18),0_3px_10px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(120,80,0,0.12)]

              backdrop-blur-[18px]
              backdrop-saturate-[180%]

              transition-all
              duration-300
              ease-out

              group-hover:-translate-y-0.5
              group-hover:scale-[1.01]

              group-hover:shadow-[0_14px_32px_rgba(113,79,0,0.24),0_5px_14px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.75)]

              group-active:translate-y-0
              group-active:scale-[0.985]

              sm:text-[18px]

              md:py-3.5
              md:text-[20px]
            "
            style={{
              background: [
                "linear-gradient(155deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.08) 32%, rgba(255,255,255,0.02) 55%)",
                "radial-gradient(circle at 15% -30%, rgba(255,255,255,0.55) 0%, transparent 42%)",
                "radial-gradient(circle at 90% 120%, rgba(255,225,80,0.32) 0%, transparent 45%)",
                "linear-gradient(135deg, #FFD426 0%, #FFCC00 45%, #F4B900 100%)",
              ].join(", "),
            }}>
            {/* TOP GLASS EDGE */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-[8%]
                top-0
                h-px

                bg-linear-to-r
                from-transparent
                via-white/90
                to-transparent
              "
            />

            {/* TOP LIQUID REFLECTION */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-[5%]
                -top-[85%]

                h-[130%]
                w-[60%]

                rotate-[-12deg]
                rounded-full

                bg-white/30
                blur-xl

                transition-transform
                duration-500

                group-hover:translate-x-5
              "
            />

            {/* BOTTOM GOLD REFRACTION */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-7
                right-[4%]

                h-12
                w-28

                rounded-full

                bg-[#fff1a3]/35
                blur-xl
              "
            />

            {/* LEFT LIGHT REFRACTION */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-6
                top-1/2

                h-10
                w-14

                -translate-y-1/2

                rounded-full

                bg-white/20
                blur-xl
              "
            />

            {/* INNER GLASS EDGE */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-[1px]

                rounded-[17px]

                border
                border-white/15
              "
            />

            {/* SUBTLE HOVER SHINE */}
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
                via-white/25
                to-transparent

                opacity-0

                transition-all
                duration-700

                group-hover:left-[115%]
                group-hover:opacity-100
              "
            />

            <span
              className="
                relative
                z-10

                drop-shadow-[0_1px_0_rgba(255,255,255,0.25)]

                transition-transform
                duration-300

                group-hover:scale-[1.01]
              ">
              {contact.nomor_hp} ({contact.nama_cs})
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
