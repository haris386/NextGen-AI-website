export default function WhyChooseUs() {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto mt-24 flex flex-col space-y-6 px-0 lg:px-6">
      {/* Row 2: First set of cards */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        {/* Left Card */}
        <div
          className="flex-1 md:flex-[7] rounded-[20px] h-64 flex flex-row items-center p-6"
          style={{background: '#f5f2fd' }}
        >
          <div className="flex-1 pr-4">
            <h3 className="text-black font-[500] text-xl md:text-[40px] leading-[1] mb-[25px]">Save Money on Processing Fees</h3>
            <p className="text-gray-600 text-sm md:text-[20px]">We partner with multiple providers to secure the best rates and help you save $$$$.</p>
          </div>
          <div className="flex-1 h-full flex items-center justify-center">
            <img src="/images/SM.gif" alt="Save Money" className="object-contain" style={{height:'200px'}} />
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 md:flex-[3] rounded-[20px] p-0 h-64 border-[4px] border-[#E7E7E7] flex flex-col overflow-hidden">
          <div className="h-1/2 w-full flex items-center justify-start p-4">
            <img src="/images/CPS.gif" alt="Icon" className="object-contain" style={{height:'120px'}} />
          </div>
          <div className="p-4 flex flex-col justify-start h-1/2">
            <h3 className="text-black font-[500] text-xl mb-2">Customized Payment Solutions</h3>
            <p className="text-gray-600 text-sm">We analyze your business needs and build a tailored plan.</p>
          </div>
        </div>
      </div>

      {/* Row 3: Second set of cards */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
        <div className="flex-1 md:flex-[3] rounded-[20px] p-0 h-64 border-[4px] border-[#E7E7E7] flex flex-col overflow-hidden">
          <div className="h-1/2 w-full flex items-center justify-start p-4">
            <img src="/images/PS.gif" alt="Icon" className="object-contain" style={{height:'150px'}} />
          </div>
          <div className="p-4 flex flex-col justify-start h-1/2">
            <h3 className="text-black font-[500] text-xl mb-2">Multiple Pricing Strategies</h3>
            <p className="text-gray-600 text-sm">Choose from Interchange+, flat‑rate pricing, cash discounting, or surcharging.</p>
          </div>
        </div>

        <div
          className="flex-1 md:flex-[7] rounded-[20px] h-64 flex flex-row items-center p-6"
          style={{background: '#f5f2fd' }}
        >
          <div className="flex-1 pr-4">
            <h3 className="text-black font-[500] text-xl md:text-[40px] leading-[1] mb-[25px]">Pass Fees to Customers</h3>
            <p className="text-gray-600 text-sm md:text-[20px]">If it's right for your business, we can show you how to legally pass credit card fees along to your customers.</p>
          </div>
          <div className="flex-1 h-full flex items-center justify-center">
            <img src="/images/PFC.gif" alt="Pass Fees" className="object-contain" style={{height:'200px'}} />
          </div>
        </div>
      </div>
    </section>
  );
}