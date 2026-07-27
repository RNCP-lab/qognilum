"use client";

import { useEffect, useRef, useState } from "react";

export default function TopicDropdown({
  options,
  value,
  onChange,
  placeholder,
  fieldClassName,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  fieldClassName: string;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Topic"
        onClick={() => setOpen((v) => !v)}
        className={`${fieldClassName} flex items-center justify-between gap-2 pr-8 text-left`}
      >
        <span className={value ? "text-white" : "text-white/60"}>
          {value || placeholder}
        </span>
        <svg
          className={`pointer-events-none absolute right-0 h-4 w-4 text-white transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <ul
        role="listbox"
        className={`absolute left-0 right-0 z-[60] mt-2 origin-top overflow-hidden rounded-xl border border-white/15 bg-[#16204a] py-1.5 shadow-xl transition-all duration-150 ${
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        {options.map((item) => (
          <li key={item}>
            <button
              type="button"
              role="option"
              aria-selected={value === item}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition hover:bg-white/10 ${
                value === item ? "text-white" : "text-white/75"
              }`}
            >
              {item}
              {value === item && (
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0L3.296 9.21a1 1 0 111.42-1.42l3.996 3.996 6.55-6.55a1 1 0 011.42 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
