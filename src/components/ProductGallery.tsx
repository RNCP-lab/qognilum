"use client";

import { useState } from "react";
import ProductVisual from "@/components/ProductVisual";

const VARIANT_COUNT = 3;

export default function ProductGallery({ slug }: { slug: string }) {
  const [active, setActive] = useState(0);

  const goPrev = () => setActive((i) => (i - 1 + VARIANT_COUNT) % VARIANT_COUNT);
  const goNext = () => setActive((i) => (i + 1) % VARIANT_COUNT);

  return (
    <div>
      <ProductVisual slug={slug} variant={active} className="h-64 w-full sm:h-80" />

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous view"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1E2B61]/15 text-[#1E2B61] transition hover:bg-[#1E2B61]/5"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-3">
          {Array.from({ length: VARIANT_COUNT }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`View ${index + 1}`}
              className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl transition sm:h-20 sm:w-20 ${
                active === index
                  ? "ring-2 ring-[#1E2B61] ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <ProductVisual slug={slug} variant={index} compact className="h-full w-full rounded-xl" />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next view"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1E2B61]/15 text-[#1E2B61] transition hover:bg-[#1E2B61]/5"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
