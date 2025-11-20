"use client";

import { useState, useRef, useEffect } from "react";

interface AccordionFAQProps {
  title: string;
  content: string;
}

export function AccordionFAQ({ title, content }: AccordionFAQProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  // Update maxHeight saat isOpen berubah
  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300 w-full">
      <button
        className="flex justify-between items-center w-full p-4 text-left focus:outline-none text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900 font-title">
          {title}
        </span>
        <span
          className={`ml-2 transform transition-transform duration-500 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <svg
            className="w-5 h-5 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight }}
      >
        <div className="p-4 font-medium text-white bg-[#0f4787] font-desc rounded-b-lg">
          {content}
        </div>
      </div>
    </div>
  );
}
