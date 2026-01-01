"use client";

export default function IntroSection() {
  return (
    <div className="relative bg-[#bbea7c] w-[90%] md:w-[80%] mx-auto rounded-[35px] py-16 px-16 overflow-hidden">

      {/* LEFT SIDE IMAGE */}
      <div
        className="
          absolute 
          top-[420px] left-[-15px]
          md:top-[-80px] md:left-0
          pointer-events-none select-none
        "
      >
        <img
          src="/images/introleft.png"
          alt="Left Decoration"
          className="object-contain opacity-40"
          style={{ width: "390px", height: "434px" }}
        />
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div
        className="
          absolute 
          top-[-90px] right-[-75px]
          md:top-[-80px] md:right-0
          pointer-events-none select-none
        "
      >
        <img
          src="/images/introright.png"
          alt="Right Decoration"
          className="object-contain opacity-40"
          style={{ width: "370px", height: "395px" }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-6 gap-x-10 text-black">

        {/* Column 1 */}
        <div className="flex justify-center flex-col text-center">
          <p className="text-[18px] font-[500] leading-relaxed">
            <span className="font-semibold">20+ years experience</span> helping merchants save $
          </p>
        </div>

        {/* Separator 1 */}
        <div className="flex justify-center items-center">
          <div className="hidden md:block w-[1px] bg-black/30 h-full" />
          <div className="block md:hidden h-[1px] bg-black/30 w-full" />
        </div>

        {/* Column 2 */}
        <div className="flex justify-center flex-col text-center">
          <p className="text-[18px] font-[500] leading-relaxed">
            Multiple processing partners to ensure{" "}
            <span className="font-semibold">best rates and solutions</span>
          </p>
        </div>

        {/* Separator 2 */}
        <div className="flex justify-center items-center">
          <div className="hidden md:block w-[1px] bg-black/30 h-full" />
          <div className="block md:hidden h-[1px] bg-black/30 w-full" />
        </div>

        {/* Column 3 */}
        <div className="flex justify-center flex-col text-center">
          <p className="text-[18px] font-[500] leading-relaxed">
            Contact us to see how you can qualify for{" "}
            <span className="font-semibold">free POS or terminal</span>
          </p>
        </div>

        {/* Separator 3 */}
        <div className="flex justify-center items-center">
          <div className="hidden md:block w-[1px] bg-black/30 h-full" />
          <div className="block md:hidden h-[1px] bg-black/30 w-full" />
        </div>

        {/* Column 4 */}
        <div className="flex justify-center flex-col text-center">
          <p className="text-[18px] font-[500] leading-relaxed">
            We can help you pass the fees to your customer to{" "}
            <span className="font-semibold">save you $</span>
          </p>
        </div>

      </div>
    </div>
  );
}
