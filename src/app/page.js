"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-16 px-5">
        <HeroSection />
      </div>
      <div className="my-10">
        <IntroSection />
      </div>
    </main>
  );
}
