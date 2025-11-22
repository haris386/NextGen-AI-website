"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import EquipmentAndTechnology from "@/components/EquipmentAndTechnology";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div>
        <HeroSection />
      </div>
      <div className="mt-20 mb-10">
        <IntroSection />
      </div>
      <div className="mb-10">
        <WhyChooseUs />
      </div>
      <div className="my-10">
        <EquipmentAndTechnology />
      </div>
      <div className="my-5">
        <Footer />
      </div>
    </main>
  );
}
