"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    // div 1
    <div className="bg-[#E7E7E7] rounded-[20px] mx-auto w-[80%] p-6 flex flex-col md:flex-row items-center gap-6">
      
      {/* Left Content */}
      <div className="flex-1">
        <p className="font-semibold mb-[15px] leading-[1] text-[25px] md:text-[50px]">
          At Next Gen Payments, we believe in putting our client’s best interests first.
        </p>

        <p className="text-base text-gray-600 text-[15px] md:text-[20px]">
          We take the time to fully understand your business’s payment processing needs and customize a solution designed specifically for you.
        </p>
      </div>

      {/* Right GIF */}
      <div className="flex-1 flex justify-center">
        <Image 
          src="/images/a.jpg"
          alt="Illustration" 
          className="rounded-[20px]"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
