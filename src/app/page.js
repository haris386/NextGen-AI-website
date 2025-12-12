"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import EquipmentAndTechnology from "@/components/EquipmentAndTechnology";
import Footer from "@/components/Footer";
import ModalForm from "@/components/ModalForm";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <main className="relative">
      <Navbar setFormOpen={setFormOpen} />
      <div id="home">
        <HeroSection  setFormOpen={setFormOpen} setVideoOpen={setVideoOpen} />
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
        <Footer setFormOpen={setFormOpen} />
      </div>

      {/* Global Modals */}
      <ModalForm isOpen={formOpen} setIsOpen={setFormOpen} />
      <VideoModal
        isOpen={videoOpen}
        setIsOpen={setVideoOpen}
        videoUrl="/sample-video.mp4"
      />
    </main>
  );
}
