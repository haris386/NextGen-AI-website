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
      <div className="pt-16 px-5">
        <HeroSection />
      </div>
      <div className="my-10">
        <IntroSection />
      </div>
      <div className="my-10">
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
