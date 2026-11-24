"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Wait for the intro loader (see Loader.tsx) to finish before sliding in. */
const SHOW_DELAY_MS = 1800;

export type NewsNotificationProps = {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
};

export default function NewsNotification({ slug, title, excerpt, image }: NewsNotificationProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          role="status"
          aria-label="Latest news"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-x-4 top-[4.5rem] z-40 sm:inset-x-auto sm:right-6 sm:w-[22rem]"
        >
          <div className="relative rounded-[20px] border border-zinc-200/70 bg-white/80 p-3 backdrop-blur-md shadow-[0_12px_40px_-12px_rgba(30,43,97,0.35)]">
            <Link
              href={`/news/${slug}`}
              onClick={dismiss}
              className="group flex items-center gap-3 pr-7"
            >
              {image && (
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[14px] bg-zinc-200">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-wider text-[#1E2B61]/50">
                  Latest news
                </p>
                <h2 className="mt-0.5 line-clamp-2 text-sm font-medium leading-snug text-[#1E2B61] group-hover:underline">
                  {title}
                </h2>
                <p className="mt-1 line-clamp-1 text-xs text-zinc-600">{excerpt}</p>
              </div>
            </Link>

            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss news notification"
              className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full text-[#1E2B61]/50 transition hover:bg-zinc-100 hover:text-[#1E2B61]"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
