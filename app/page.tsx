import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Hero />
        <Service />
        <Company />
        <Contact />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
