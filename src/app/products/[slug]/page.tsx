import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";
import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/lib/products";
import { getProductGalleryImages } from "@/lib/productImages";

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

  const [description, ...restParagraphs] = product.paragraphs;
  const galleryImages = getProductGalleryImages(product.slug);

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

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#1E2B61] sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-10">
            <ProductGallery slug={product.slug} images={galleryImages} />
          </div>

          <div className="mt-10">
            <Accordion
              items={[
                {
                  title: "Description",
                  content: <p>{description}</p>,
                },
                {
                  title: "Details",
                  content: (
                    <div className="space-y-4">
                      {restParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                      {product.applications && (
                        <ul className="flex flex-wrap gap-2 pt-1">
                          {product.applications.map((item) => (
                            <li
                              key={item}
                              className="rounded-full border border-[#1E2B61]/15 bg-[#F5F7FC] px-3 py-1.5 text-xs text-[#1E2B61]"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      {product.closingParagraph && <p>{product.closingParagraph}</p>}
                    </div>
                  ),
                },
                {
                  title: "Specs",
                  content: product.specs ? (
                    <dl className="divide-y divide-[#1E2B61]/10">
                      {product.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-3 sm:gap-6"
                        >
                          <dt className="text-sm text-[#1E2B61] sm:col-span-1">
                            {spec.label}
                          </dt>
                          <dd className="text-sm leading-relaxed text-zinc-600 sm:col-span-2">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p>Detailed specifications are coming soon.</p>
                      <span className="inline-flex shrink-0 cursor-not-allowed items-center gap-2 rounded-full border border-[#1E2B61]/15 bg-[#F5F7FC] px-4 py-2 text-xs font-medium text-[#1E2B61]/50">
                        Coming soon
                      </span>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
