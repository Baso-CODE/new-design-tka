"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "./NavLink";

const Nav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;

      if (timeout) clearTimeout(timeout);

      timeout = setTimeout(() => {
        setVisible(true);
      }, 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (timeout) clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed
        top-4
        z-[10000]
        hidden
        w-full
        px-3
        lg:block
        transition-all
        duration-500
        ease-out
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }
      `}>
      <div
        className={`
          relative
          mx-auto
          max-w-[1240px]
          overflow-hidden
          rounded-[999px]
          border
          transition-all
          duration-500

          ${
            scrolled
              ? `
                border-white/25
                bg-[#063766]/40
                shadow-[0_18px_50px_rgba(0,25,60,0.28),0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.05)]
                backdrop-blur-[28px]
                backdrop-saturate-[190%]
              `
              : `
                border-white/20
                bg-white/10
                shadow-[0_12px_36px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.28)]
                backdrop-blur-[20px]
                backdrop-saturate-[170%]
              `
          }
        `}>
        {/* TOP SPECULAR HIGHLIGHT */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-8
            top-0
            z-20
            h-px
            bg-linear-to-r
            from-transparent
            via-white/80
            to-transparent
          "
        />

        {/* LEFT SOFT REFLECTION */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-12
            -top-16
            h-28
            w-72
            rotate-[-8deg]
            rounded-full
            bg-white/20
            blur-3xl
          "
        />

        {/* BLUE REFRACTION */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-20
            right-[15%]
            h-28
            w-80
            rounded-full
            bg-[#4DA3FF]/15
            blur-3xl
          "
        />

        {/* AMBER REFRACTION */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-12
            -top-12
            h-28
            w-40
            rounded-full
            bg-[#FAAE17]/10
            blur-3xl
          "
        />

        {/* INNER GLASS EDGE */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-[1px]
            rounded-[999px]
            border
            border-white/[0.06]
          "
        />

        <div
          className="
            relative
            z-10
            flex
            h-20
            items-center
            justify-between
            px-4
          ">
          {/* LOGO */}
          <Link
            href="/"
            className="
              relative
              flex
              items-center
              rounded-full
              transition-transform
              duration-300
              hover:scale-[1.03]
              active:scale-[0.98]
            ">
            <Image
              src="/images/logo.webp"
              alt="Pusat bimbingan belajar dan les privat berkualitas dengan tutor terbaik untuk jenjang pendidikan TK hingga SMA"
              className="h-10 w-[107px] object-contain"
              width={214}
              height={80}
              priority
              fetchPriority="high"
            />
          </Link>

          {/* NAVIGATION */}
          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.to ||
                (link.to !== "/" && pathname.startsWith(link.to));

              return (
                <Link
                  key={link.id}
                  href={link.to}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    px-4
                    py-2.5
                    transition-all
                    duration-300
                    ease-out

                    ${
                      isActive
                        ? `
                          border
                          border-white/25
                          bg-white/15
                          shadow-[0_5px_16px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.35)]
                          backdrop-blur-xl
                        `
                        : `
                          border
                          border-transparent
                          hover:border-white/15
                          hover:bg-white/10
                        `
                    }
                  `}>
                  {/* ACTIVE/HOVER REFLECTION */}
                  <span
                    aria-hidden="true"
                    className={`
                      pointer-events-none
                      absolute
                      left-[15%]
                      right-[15%]
                      top-0
                      h-px
                      bg-linear-to-r
                      from-transparent
                      via-white/70
                      to-transparent
                      transition-opacity
                      duration-300
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-70"
                      }
                    `}
                  />

                  {/* ACTIVE SOFT GLOW */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -bottom-5
                        left-1/2
                        h-8
                        w-20
                        -translate-x-1/2
                        rounded-full
                        bg-[#FAAE17]/15
                        blur-xl
                      "
                    />
                  )}

                  <span
                    className={`
                      relative
                      z-10
                      font-desc
                      text-[15px]
                      font-bold
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "text-[#FFD166] drop-shadow-[0_1px_6px_rgba(250,174,23,0.25)]"
                          : "text-white/85 group-hover:text-[#FFD166]"
                      }
                    `}>
                    {link.label}
                  </span>
                </Link>
              );
            })}

            {/* BUTTON DAFTAR */}
            <Link
              href="/daftar"
              className="
                group
                relative
                ml-2
                flex
                items-center
                justify-center
                overflow-hidden
                rounded-full

                border
                border-white/40

                bg-[#FAAE17]/75

                px-7
                py-3

                shadow-[0_8px_24px_rgba(250,174,23,0.30),inset_0_1px_0_rgba(255,255,255,0.60),inset_0_-1px_0_rgba(126,74,0,0.14)]

                backdrop-blur-xl
                backdrop-saturate-[180%]

                transition-all
                duration-300
                ease-out

                hover:scale-[1.04]
                hover:bg-[#FAAE17]/85
                hover:shadow-[0_10px_28px_rgba(250,174,23,0.40),inset_0_1px_0_rgba(255,255,255,0.70)]

                active:scale-[0.97]
              ">
              {/* BUTTON TOP REFLECTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[12%]
                  right-[12%]
                  top-0
                  h-[48%]
                  rounded-b-[70%]
                  bg-linear-to-b
                  from-white/45
                  to-transparent
                "
              />

              {/* BUTTON LOWER REFRACTION */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-5
                  right-2
                  h-10
                  w-16
                  rounded-full
                  bg-[#FFE6A3]/25
                  blur-xl
                "
              />

              {/* BUTTON INNER EDGE */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-[2px]
                  rounded-full
                  border
                  border-white/10
                "
              />

              <span
                className="
                  relative
                  z-10
                  font-desc
                  text-[15px]
                  font-bold
                  text-white
                  drop-shadow-[0_1px_2px_rgba(90,50,0,0.25)]
                ">
                Daftar
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
