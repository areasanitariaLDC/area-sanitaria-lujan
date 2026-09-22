import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Centers from "@/components/home/Centers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Centers />
      </main>
      <Footer />
    </div>
  );
}
