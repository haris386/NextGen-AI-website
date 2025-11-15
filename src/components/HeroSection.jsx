'use client';

import { Globe } from "@/components/ui/globe";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Title Heading */}
            <div className="space-y-3">
              <h1 className="font-bold text-foreground text-[100px] leading-[1.1] md:text-[100px] sm:text-[45px]">
                Next Gen Payments
              </h1>
              
              {/* Subtitle */}
              <p className="text-muted-foreground text-[45px] leading-[1] sm:text-[25px]">
                Payment processing done the right way!
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity">
                Schedule a Call
              </button>
              <button className="px-6 sm:px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                Get a Quote
              </button>
            </div>
          </div>
          
          {/* Right Column - Globe */}
          <div className="flex justify-end h-[400px] sm:h-[500px] lg:h-[600px]">
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
}
