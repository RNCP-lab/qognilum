import Hero from "@/components/sections/Hero";
import Focus from "@/components/sections/Focus";
import Expertise from "@/components/sections/Expertise";
import Products from "@/components/sections/Products";
import Company from "@/components/sections/Company";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Focus />
      <Expertise />
      <Products />
      <Company />
      <Contact />
      <Footer />
    </main>
  );
}
