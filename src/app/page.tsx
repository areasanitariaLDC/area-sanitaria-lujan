import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import CentersSection from "@/components/home/CentersSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CentersSection />
      </main>
      <Footer />
    </div>
  );
}
