import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { About } from "@/components/about";
import { Booking } from "@/components/booking";
import { Gallery } from "@/components/gallery";
import { WhoWeAre } from "@/components/who-we-are";
import { Stats } from "@/components/stats";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Booking />
        <Gallery />
        <WhoWeAre />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
