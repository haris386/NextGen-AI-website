"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { WritingText } from "@/components/ui/shadcn-io/writing-text";
import { SplittingText } from "./ui/shadcn-io/splitting-text";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#f5f2fd]">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Title Heading */}
            <div className="space-y-3">
              <WritingText
                className="font-bold text-foreground text-[50px] leading-[1.1] md:text-[100px]"
                text="Next Gen Payments"
                spacing={9}
              />
              {/* Subtitle */}
              <SplittingText
  text={"Payment processing done"}
  className="block text-[25px] leading-[1.2] md:text-[45px] font-medium text-muted-foreground"
/>
              <SplittingText
  text={"the right way!"}
  className="block text-[25px] leading-[1.2] md:text-[45px] font-medium text-muted-foreground"
/>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Get Started Button */}
              <button className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-[500] rounded-full hover:opacity-90 transition-opacity">
                Get Started
              </button>

              {/* Video Button */}
              <button className="flex items-center gap-3 px-2 sm:px-2 text-black font-[500]">
                <span className="w-[60px] h-[60px] flex items-center justify-center border-2 bg-[#f5f2fd] border-black rounded-full">
                  <span className="w-10 h-10 flex items-center justify-center bg-[#ffb1a4] rounded-full">
                    <img
                      src="/icons/play.gif"
                      alt=""
                      style={{ height: "30px" }}
                    />
                    {/* <FaPlay size={16} /> */}
                  </span>
                </span>
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="flex justify-end h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              src="/images/hero-rightSide.png"
              alt="Hero Right Side"
              width={600}
              height={600}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
