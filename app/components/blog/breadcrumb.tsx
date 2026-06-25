"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface BreadcrumbProps {
  selectedTag?: string | null;
}

interface BreadcrumbItem {
  name: string;
  link: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ selectedTag }) => {
  const location = usePathname();

  const pathParts = location.split("/").filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", link: "/" },
    ...pathParts.map((part, index) => {
      return {
        name: part.charAt(0).toUpperCase() + part.slice(1),
        link: "/" + pathParts.slice(0, index + 1).join("/"),
      };
    }),
  ];

  return (
    <div className="hidden sm:block text-[#111827] py-4 px-4">
      <div className="flex flex-wrap items-center space-x-2 text-sm sm:text-base">
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={breadcrumb.link} className="flex items-center">
            <Link
              href={breadcrumb.link}
              className={`hover:text-[#FFD700] ${
                index === breadcrumbs.length - 1 ? "font-bold" : ""
              }`}>
              {breadcrumb.name}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </span>
        ))}
        {selectedTag && (
          <span className="text-[#FFD700] ml-2 whitespace-nowrap">{`Tag: ${selectedTag}`}</span>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
