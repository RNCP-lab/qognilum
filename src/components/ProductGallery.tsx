"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ProductVisual from "@/components/ProductVisual";

const PLACEHOLDER_COUNT = 3;

export default function ProductGallery({
  slug,
  images = [],
}: {
  slug: string;
  images?: string[];
}) {
  const hasImages = images.length > 0;
  const count = hasImages ? images.length : PLACEHOLDER_COUNT;
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goPrev = () => setActive((i) => (i - 1 + count) % count);
  const goNext = () => setActive((i) => (i + 1) % count);

  const touchStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const SWIPE_THRESHOLD = 40;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    didSwipe.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    if (Math.abs(e.touches[0].clientX - touchStartX.current) > 10) {
      didSwipe.current = true;
    }
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (delta > SWIPE_THRESHOLD) goPrev();
    else if (delta < -SWIPE_THRESHOLD) goNext();
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen]);

  return (
    <div>
      {hasImages ? (
        <button
          type="button"
          onClick={() => {
            if (didSwipe.current) {
              didSwipe.current = false;
              return;
            }
            setLightboxOpen(true);
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          aria-label="View full image"
          className="group relative h-64 w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[#1E2B61]/10 bg-zinc-100 sm:h-80"
        >
          <Image
            src={images[active]}
            alt=""
            fill
            sizes="(min-width: 640px) 700px, 100vw"
            quality={75}
            priority={active === 0}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/20 group-hover:opacity-100">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1E2B61] shadow-sm">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9V5.25A1.5 1.5 0 0 1 5.25 3.75H9M15 3.75h3.75a1.5 1.5 0 0 1 1.5 1.5V9M20.25 15v3.75a1.5 1.5 0 0 1-1.5 1.5H15M9 20.25H5.25a1.5 1.5 0 0 1-1.5-1.5V15"
                />
              </svg>
            </span>
          </span>
        </button>
      ) : (
        <ProductVisual slug={slug} variant={active} className="h-64 w-full sm:h-80" />
      )}

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
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`View ${index + 1}`}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl transition sm:h-20 sm:w-20 ${
                active === index
                  ? "ring-2 ring-[#1E2B61] ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {hasImages ? (
                <Image src={images[index]} alt="" fill sizes="80px" quality={60} className="object-cover" />
              ) : (
                <ProductVisual slug={slug} variant={index} compact className="h-full w-full rounded-xl" />
              )}
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

      {hasImages && lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {count > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous view"
              className="absolute left-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div
            className="relative h-full max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Image
              src={images[active]}
              alt=""
              fill
              sizes="100vw"
              quality={75}
              className="object-contain"
            />
          </div>

          {count > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next view"
              className="absolute right-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
