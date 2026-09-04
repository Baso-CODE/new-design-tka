"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "./NavLink";

const Nav = () => {
  const pathname = usePathname();
  const [navBg, setNavBg] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      if (currentScrollY > 50) {
        setNavBg("bg-[#056fcb] shadow-md");
      } else {
        setNavBg("");
      }

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;

      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(true), 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (timeout) clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed hidden lg:block top-4 z-10000 w-full transition-opacity duration-500 px-1 ${
        visible ? "opacity-100" : "opacity-0"
      }`}>
      <div className={`rounded-full max-w-310 mx-auto ${navBg}`}>
        <div className="flex justify-between items-center h-20 px-3 text-white">
          {/* === LOGO === */}
          <Link href="/">
            <Image
              src="/images/logo.webp"
              alt="Pusat bimbingan belajar dan les privat berkualitas dengan tutor terbaik untuk jenjang pendidikan TK hingga SMA"
              className="w-26.75 h-10"
              width={214}
              height={80}
              priority
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          {/* === NAV LINKS + BUTTON DAFTAR === */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.to ||
                (link.to !== "/" && pathname.startsWith(link.to));

              return (
                <Link key={link.id} href={link.to}>
                  <p
                    className={`nav_link font-desc font-bold text-[15px] cursor-pointer duration-300 ${
                      isActive
                        ? "text-[#FAAE17] font-bold"
                        : "hover:text-[#FAAE17]"
                    }`}>
                    {link.label}
                  </p>
                </Link>
              );
            })}

            {/* === BUTTON DAFTAR === */}
            <Link href="/daftar">
              <button className="bg-[#FAAE17] hover:bg-[#e09c10] text-white font-desc font-bold text-[15px] px-6 py-2 rounded-full cursor-pointer transition-colors duration-300">
                Daftar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
