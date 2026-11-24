import type { Metadata } from "next";
import Footer from "@/components/Footer";
import NewsGrid from "@/components/NewsGrid";
import { NEWS } from "@/lib/news";
import { getNewsCoverImage } from "@/lib/newsImages";

export const metadata: Metadata = {
  title: "News | Qognilum",
};

export default function NewsPage() {
  const items = [...NEWS]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((article) => ({
      slug: article.slug,
      title: article.title,
      date: article.date,
      image: getNewsCoverImage(article.slug),
    }));

  return (
    <>
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1E2B61] sm:text-4xl">
            News
          </h1>
          <div className="mt-10">
            <NewsGrid items={items} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
