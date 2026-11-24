import Hero from "@/components/sections/Hero";
import Focus from "@/components/sections/Focus";
import Expertise from "@/components/sections/Expertise";
import Products from "@/components/sections/Products";
import Company from "@/components/sections/Company";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import NewsNotification from "@/components/NewsNotification";
import { NEWS } from "@/lib/news";
import { getNewsCoverImage } from "@/lib/newsImages";
import { PRODUCTS } from "@/lib/products";
import { getProductCardImage } from "@/lib/productImages";

export default function Home() {
  const cardImages = Object.fromEntries(
    PRODUCTS.map((product) => [product.slug, getProductCardImage(product.slug)]).filter(
      (entry): entry is [string, string] => Boolean(entry[1])
    )
  );

  const latestNews = [...NEWS].sort((a, b) => b.date.localeCompare(a.date))[0];

  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Focus />
      <Expertise />
      <Products cardImages={cardImages} />
      <Company />
      <Contact />
      <Footer />
      {latestNews && (
        <NewsNotification
          slug={latestNews.slug}
          title={latestNews.title}
          excerpt={latestNews.excerpt}
          image={getNewsCoverImage(latestNews.slug)?.src}
        />
      )}
    </main>
  );
}
