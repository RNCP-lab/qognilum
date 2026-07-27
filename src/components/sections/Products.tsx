import Link from "next/link";
import ProductIcon from "@/components/ProductIcon";
import { PRODUCTS } from "@/lib/products";

export default function Products() {
  return (
    <section id="products" className="scroll-mt-14 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#65A3FF]">
          Products & Services
        </span>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col rounded-2xl border border-[#1E2B61]/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E2B61] text-white">
                <ProductIcon slug={product.slug} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-[#1E2B61]">
                {product.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                {product.paragraphs[0]}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#1E2B61]">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
