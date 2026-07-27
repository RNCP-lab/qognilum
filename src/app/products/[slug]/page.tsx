import Link from "next/link";
import { notFound } from "next/navigation";
import ProductIcon from "@/components/ProductIcon";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/lib/products";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 lg:py-24">
          <Link
            href="/#products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E2B61]/70 transition hover:text-[#1E2B61]"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0 6-6m-6 6 6 6" />
            </svg>
            Products & Services
          </Link>

          <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1E2B61] text-white">
            <ProductIcon slug={product.slug} className="h-6 w-6" />
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#1E2B61] sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-zinc-600">
            {product.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {product.applications && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {product.applications.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#1E2B61]/15 bg-[#F5F7FC] px-3 py-1.5 text-sm text-[#1E2B61]"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          {product.closingParagraph && (
            <p className="mt-6 text-base leading-relaxed text-zinc-600">
              {product.closingParagraph}
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
