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

  <div id="home">
    <HeroSection />
  </div>

  <div id="ouradvantages" className="mt-20 mb-10">
    <IntroSection />
  </div>

  <div id="whyus" className="mb-10">
    <WhyChooseUs />
  </div>

  <div id="technology" className="my-10">
    <EquipmentAndTechnology />
  </div>

  <div className="mt-5">
    <Footer />
  </div>
</main>

  );
}
