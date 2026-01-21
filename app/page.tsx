import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
