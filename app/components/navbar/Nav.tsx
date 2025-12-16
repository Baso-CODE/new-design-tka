"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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

      // Ubah background saat scroll
      if (currentScrollY > 50) {
        setNavBg("bg-[#002b63] shadow-md");
      } else {
        setNavBg("");
      }

      // Sembunyikan navbar saat scroll ke bawah
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;

      // Tampilkan lagi setelah berhenti scroll
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
      className={`fixed top-4 z-10000 w-full transition-opacity duration-500 px-1 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={`rounded-full max-w-[1240px] mx-auto ${navBg}`}>
        <div className="flex justify-between items-center h-20 px-3 text-white">
          {/* === LOGO === */}
          <Link href="/">
            <Image
              src="/images/logo.webp"
              alt="Pusat bimbingan belajar dan les privat berkualitas dengan tutor terbaik untuk jenjang pendidikan TK hingga SMA"
              className="w-[107px] h-10"
              width={214}
              height={80}
              priority
            />
          </Link>

          {/* === NAV LINKS === */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.to ||
                (link.to !== "/" && pathname.startsWith(link.to));

              return (
                <Link key={link.id} href={link.to}>
                  <p
                    className={`nav_link font-desc font-normal text-[15px] cursor-pointer duration-300 ${
                      isActive
                        ? "text-[#FAAE17] font-bold"
                        : "hover:text-[#FAAE17]"
                    }`}
                  >
                    {link.label}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
