import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { formatDate } from "@/components/NewsGrid";
import { NEWS } from "@/lib/news";
import { getNewsCoverImage } from "@/lib/newsImages";

export async function generateStaticParams() {
  return NEWS.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = NEWS.find((item) => item.slug === slug);
  return article ? { title: `${article.title} | Qognilum`, description: article.excerpt } : {};
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = NEWS.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const image = getNewsCoverImage(article.slug);

  return (
    <>
      <main className="flex-1 bg-white">
        <article className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
          <Link
            href="/news"
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
            News
          </Link>

          <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14 lg:gap-16">
            {image && (
              <figure className="md:sticky md:top-24 md:self-start">
                <Image
                  src={image.src}
                  alt={article.imageCaption ?? ""}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  priority
                  className="h-auto max-h-[80vh] w-full rounded-3xl bg-zinc-100 object-cover"
                />
                {article.imageCaption && (
                  <figcaption className="mt-3 text-sm leading-relaxed text-zinc-500">
                    {article.imageCaption}
                  </figcaption>
                )}
              </figure>
            )}

            <div className={image ? "" : "md:col-span-2 md:max-w-3xl"}>
              <h1 className="text-4xl font-normal leading-tight tracking-tight text-[#1E2B61] sm:text-5xl">
                {article.title}
              </h1>
              <time dateTime={article.date} className="mt-4 block text-sm text-zinc-500">
                {formatDate(article.date)}
              </time>

              <div className="mt-10 space-y-5 leading-relaxed text-zinc-700">
                {article.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
