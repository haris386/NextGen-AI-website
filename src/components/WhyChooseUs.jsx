import { TbHierarchy3 } from "react-icons/tb";
import { FaLayerGroup } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="w-[90%] md:w-[80%] mx-auto mt-24 flex flex-col space-y-12 px-0 lg:px-6">
      {/* Section Heading */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Why Choose Us
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Discover the advantages our payment solutions bring to your business,
          from saving on processing fees to fully customized strategies.
        </p>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">

        {/* Left Card */}
        <div
          className="flex-1 md:flex-[7] rounded-[20px] h-64 
                     flex flex-col-reverse md:flex-row items-center p-6"
          style={{ background: "#f5f2fd" }}
        >
          {/* TEXT */}
          <div className="flex-1 pr-0 md:pr-4 text-left mt-4 md:mt-0">
            <h3 className="text-black font-[500] text-xl md:text-[40px] leading-[1] mb-[15px] md:mb-[25px]">
              Save Money on Processing Fees
            </h3>
            <p className="text-gray-600 text-sm md:text-[20px]">
              We partner with multiple providers to secure the best rates and
              help you save $$$$.
            </p>
          </div>

          {/* IMAGE (TOP ON MOBILE) */}
          <div className="flex-1 h-full flex items-center justify-center mb-4 md:mb-0">
            <img
              src="/images/SM.png"
              alt="Save Money"
              className="object-contain"
              style={{ height: "260px" }}
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 md:flex-[3] rounded-[20px] p-0 h-64 border-[4px] border-[#E7E7E7] flex flex-col overflow-hidden">
          <div className="w-full flex items-center justify-start pt-8 pl-4 pr-4">
            <TbHierarchy3 size={55} />
          </div>
          <div className="p-4 flex flex-col justify-start h-1/2 text-left">
            <h3 className="text-black font-[500] text-xl mb-2">
              Customized Payment Solutions
            </h3>
            <p className="text-gray-600 text-sm">
              We analyze your business needs and build a tailored plan.
            </p>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">

        {/* Left small card */}
        <div className="flex-1 md:flex-[3] rounded-[20px] p-0 h-64 border-[4px] border-[#E7E7E7] flex flex-col overflow-hidden">
          <div className="w-full flex items-center justify-start pt-10 pl-4 pr-4">
            <FaLayerGroup size={50} />
          </div>
          <div className="p-4 flex flex-col justify-start h-1/2 text-left">
            <h3 className="text-black font-[500] text-xl mb-2">
              Multiple Pricing Strategies
            </h3>
            <p className="text-gray-600 text-sm">
              Choose from Interchange+, flat-rate pricing, cash discounting, or
              surcharging.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div
          className="flex-1 md:flex-[7] rounded-[20px] h-64 
                     flex flex-col-reverse md:flex-row items-center p-6"
          style={{ background: "#f5f2fd" }}
        >
          {/* TEXT */}
          <div className="flex-1 pr-0 md:pr-4 text-left mt-4 md:mt-0">
            <h3 className="text-black font-[500] text-xl md:text-[40px] leading-[1] mb-[15px] md:mb-[25px]">
              Pass Fees to Customers
            </h3>
            <p className="text-gray-600 text-sm md:text-[20px]">
              If it's right for your business, we can show you how to legally
              pass credit card fees along to your customers.
            </p>
          </div>

          {/* IMAGE (TOP ON MOBILE) */}
          <div className="flex-1 h-full flex items-center justify-center mb-4 md:mb-0">
            <img
              src="/images/PFC.png"
              alt="Pass Fees"
              className="object-contain"
              style={{ height: "260px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
