"use client";

import { useEffect, useRef, useState } from "react";

interface AccordionFAQProps {
  title: string;
  content: string;
  defaultOpen?: boolean;
  index: number;
}

export function AccordionFAQ({
  title,
  content,
  defaultOpen = false,
  index,
}: AccordionFAQProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className={`
        group rounded-2xl border transition-all duration-300 overflow-hidden bg-white
        ${
          isOpen
            ? "border-[#04397d]/30 shadow-md shadow-[#04397d]/10"
            : "border-gray-200 shadow-sm hover:border-[#04397d]/20 hover:shadow-md hover:shadow-[#04397d]/5"
        }
      `}>
      <button
        className="flex items-start gap-4 w-full px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04397d]/40 rounded-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}>
        {/* Question number badge */}
        <span
          className={`
            mt-0.5 shrink-0 w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-all duration-300
            ${
              isOpen
                ? "bg-[#04397d] text-white"
                : "bg-[#04397d]/10 text-[#04397d] group-hover:bg-[#04397d]/20"
            }
          `}>
          {String(index).padStart(2, "0")}
        </span>

        {/* Title */}
        <span
          className={`
            flex-1 text-sm md:text-base font-semibold font-title leading-snug transition-colors duration-200
            ${isOpen ? "text-[#04397d]" : "text-[#1a2744] group-hover:text-[#04397d]"}
          `}>
          {title}
        </span>

        {/* Toggle icon: + / × */}
        <span
          className={`
            mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
            ${
              isOpen
                ? "bg-[#04397d] text-white rotate-45"
                : "bg-gray-100 text-gray-400 group-hover:bg-[#04397d]/10 group-hover:text-[#04397d]"
            }
          `}>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16M4 12h16"
            />
          </svg>
        </span>
      </button>

      {/* Answer */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight }}>
        {/* Left accent bar + answer text */}
        <div className="mx-4 mb-4 flex gap-4 rounded-xl bg-[#f0f5ff] border-l-4 border-[#04397d] px-4 py-4">
          <p className="font-desc text-sm md:text-[15px] leading-relaxed text-[#334155] font-medium">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
