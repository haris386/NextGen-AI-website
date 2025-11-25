export default function EquipmentAndTechnology() {
  return (
    <section
      className="w-[90%] md:w-[80%] mx-auto rounded-[35px] mt-24 p-8"
      style={{ backgroundColor: "#fbeaf0" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* LEFT COLUMN — HEADING + IMAGE */}
        <div className="flex-1">
          <h2 className="text-black text-2xl md:text-4xl font-[500] leading-tight">
            We offer a wide range of equipment and technology solutions:
          </h2>

          {/* Image hidden on mobile — shown on md+ */}
          <img
            src="/images/WOD.png"
            alt="Equipment Technology"
            className="hidden md:block mt-6 w-full max-w-[18rem] ml-[25%]"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 space-y-6">

          {/* Block 1 */}
          <div>
            <h3 className="text-black text-xl md:text-2xl font-[500]">
              On-the-go Mobile Devices
            </h3>
            <p className="text-gray-800 text-base md:text-lg mt-1">
              Portable and easy-to-use mobile payment devices for businesses that operate anywhere.
            </p>
          </div>

          {/* Block 2 */}
          <div>
            <h3 className="text-black text-xl md:text-2xl font-[500]">
              Countertop Terminals
            </h3>
            <p className="text-gray-800 text-base md:text-lg mt-1">
              Reliable and secure payment terminals designed for fast in-store checkout.
            </p>
          </div>

          {/* Block 3 */}
          <div>
            <h3 className="text-black text-xl md:text-2xl font-[500]">
              Point-of-Sale Systems
            </h3>
            <p className="text-gray-800 text-base md:text-lg mt-1">
              Full POS setups that manage sales, inventory, analytics, and customer data effortlessly.
            </p>
          </div>

          {/* Block 4 */}
          <div>
            <h3 className="text-black text-xl md:text-2xl font-[500]">
              e-Commerce Gateways
            </h3>
            <p className="text-gray-800 text-base md:text-lg mt-1">
              Secure online payment gateways that help businesses accept digital payments smoothly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
