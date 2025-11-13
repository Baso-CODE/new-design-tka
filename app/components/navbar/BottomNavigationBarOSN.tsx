"use client";

import { BookOpen, Feather, Home, Info, Mail, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Tipe untuk link navigasi
interface NavLink {
  id: number;
  to: string;
  label: string;
}

// Tipe item setelah di-mapping untuk bottom nav
interface BottomNavItem {
  name: string;
  link: string;
  icon: LucideIcon;
}

// Fungsi pembuat item nav lengkap dengan ikon
const getBottomNavItems = (navLinks: NavLink[]): BottomNavItem[] => {
  return navLinks.map((link) => {
    let iconComponent: LucideIcon = Home;

    switch (link.label) {
      case "Home":
        iconComponent = Home;
        break;
      case "About Us":
        iconComponent = Info;
        break;
      case "Our Program":
        iconComponent = BookOpen;
        break;
      case "Contact Us":
        iconComponent = Mail;
        break;
      case "Blog":
        iconComponent = Feather;
        break;
      default:
        iconComponent = Home;
    }

    return {
      name: link.label,
      link: link.to,
      icon: iconComponent,
    };
  });
};

// Props utama komponen
interface BottomNavigationBarOSNProps {
  navLinksData: NavLink[];
}

export default function BottomNavigationBarOSN({
  navLinksData,
}: BottomNavigationBarOSNProps) {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>(pathname);

  const bottomNavItems = getBottomNavItems(navLinksData);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#00295f] shadow-lg rounded-t-xl border-t border-[#04397D] lg:hidden">
      <div className="flex justify-around items-center h-16 max-w-full mx-auto px-2">
        {bottomNavItems.map((item) => {
          const isActive =
            activeLink === item.link ||
            (item.link !== "/" && activeLink.startsWith(item.link));

          const activeClasses = isActive
            ? "text-[#04397D] bg-orange-50"
            : "text-[#ffffff]";
          const hoverClasses = "hover:text-[#04397D] hover:bg-orange-50";

          return (
            <Link
              key={item.name}
              href={item.link}
              className={`flex flex-col items-center justify-center p-2 rounded-lg grow transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#0b4d94] ${activeClasses} ${hoverClasses}`}
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
