import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Footer } from "@/components/layout/Footer";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-rose-50 via-teal-50 to-purple-50 dark:from-rose-950/20 dark:via-teal-950/20 dark:to-purple-950/20">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}