"use client";

import Image from "next/image";
import Link from "next/link";
import ProductIcon from "@/components/ProductIcon";
import { PRODUCTS } from "@/lib/products";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function Products({
  cardImages = {},
}: {
  cardImages?: Record<string, string>;
}) {
  const { ref: sectionRef, progress } = useScrollProgress<HTMLElement>(0.85, 0.4);

  return (
    <section id="products" ref={sectionRef} className="scroll-mt-14 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#65A3FF]">
          Products & Services
        </span>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => {
            const delay = i * 0.12;
            const p = Math.min(Math.max((progress - delay) / (1 - delay), 0), 1);
            const revealStyle =
              p >= 1
                ? undefined
                : {
                    opacity: p,
                    transform: `translateY(${(1 - p) * 28}px)`,
                    willChange: "transform, opacity",
                  };

            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                style={revealStyle}
                className="group flex h-[27rem] flex-col overflow-hidden rounded-2xl border border-[#1E2B61]/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative w-full shrink-0 overflow-hidden bg-zinc-200 transition-[height] duration-300 ease-out h-72 group-hover:h-28">
                  {cardImages[product.slug] ? (
                    <Image
                      src={cardImages[product.slug]}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 90vw"
                      quality={60}
                      priority
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <ProductIcon slug={product.slug} className="h-10 w-10 text-zinc-400" />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col overflow-hidden px-6">
                  <h3 className="shrink-0 pt-5 text-lg font-semibold leading-snug text-[#1E2B61]">
                    {product.title}
                  </h3>

                  <div className="mt-3 flex flex-1 flex-col overflow-hidden pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm leading-relaxed text-zinc-600 line-clamp-4">
                      {product.paragraphs[0]}
                    </p>
                    <span className="mt-4 inline-flex w-fit shrink-0 items-center gap-1 text-sm font-semibold text-[#1E2B61]">
                      Read more
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-6-6m6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
