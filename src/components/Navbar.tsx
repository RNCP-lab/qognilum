"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Products & Services", href: "#products" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full border-b border-zinc-200 bg-white transition-colors duration-300 ${
        scrolled
          ? "md:border-zinc-200 md:bg-white"
          : "md:border-transparent md:bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center px-6 sm:px-8">
        <Link
          href="#home"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo_blue/mark.svg"
            alt="Qognilum"
            width={265}
            height={278}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <ul className="ml-12 hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative py-1 text-sm font-medium text-[#1E2B61]/70 transition-colors hover:text-[#1E2B61]"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#1E2B61] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-md text-[#1E2B61] transition hover:bg-zinc-100 md:hidden"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-zinc-200 px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#1E2B61]/70 transition-colors hover:bg-zinc-50 hover:text-[#1E2B61]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
