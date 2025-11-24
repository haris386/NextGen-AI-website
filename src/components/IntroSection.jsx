"use client";

import Image from "next/image";
import { CountingNumber } from "./ui/shadcn-io/counting-number";

export default function IntroSection() {
  return (
    <div className="bg-black w-[90%] md:w-[80%] mx-auto rounded-[35px] py-16 px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-white">
        {/* Column 1 */}
        <div className="border-b md:border-b-0 md:border-r md:border-gray-600 pb-6 md:pb-0 flex justify-center flex-col">
          <div className="flex flex-row justify-center">
          <CountingNumber
  number={230}
  inView={true}
  transition={{ stiffness: 100, damping: 30 }}
  className="text-[50px] font-[500] leading-none text-center"
/>
          <h2 className="text-[50px] font-[500] leading-none text-center">+</h2>
          </div>
          <p className="mt-2 text-[18px] text-gray-300 text-center">Currency Support</p>
        </div>

        {/* Column 2 */}
        <div className="border-b md:border-b-0 md:border-r md:border-gray-600 pb-6 md:pb-0">
           <div className="flex flex-row justify-center">
          <CountingNumber
  number={47}
  inView={true}
  transition={{ stiffness: 100, damping: 30 }}
  className="text-[50px] font-[500] leading-none text-center"
/>
          <h2 className="text-[50px] font-[500] leading-none text-center">M+</h2>
          </div>
          <p className="mt-2 text-[18px] text-gray-300 text-center">Transaction USD Made</p>
        </div>

        {/* Column 3 */}
        <div className="border-b md:border-b-0 md:border-r md:border-gray-600 pb-6 md:pb-0">
           <div className="flex flex-row justify-center">
          <CountingNumber
  number={116}
  inView={true}
  transition={{ stiffness: 100, damping: 30 }}
  className="text-[50px] font-[500] leading-none text-center"
/>
          <h2 className="text-[50px] font-[500] leading-none text-center">+</h2>
          </div>
          <p className="mt-2 text-[18px] text-gray-300 text-center">Team Members Involved</p>
        </div>

        {/* Column 4 */}
        <div>
           <div className="flex flex-row justify-center">
          <CountingNumber
  number={19}
  inView={true}
  transition={{ stiffness: 100, damping: 30 }}
  className="text-[50px] font-[500] leading-none text-center"
/>
          <h2 className="text-[50px] font-[500] leading-none text-center">Y</h2>
          </div>
          <p className="mt-2 text-[18px] text-gray-300 text-center">Work Experience</p>
        </div>
      </div>
    </div>
  );
}
