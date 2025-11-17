export default function EquipmentAndTechnology() {
  return (
    <section className="w-full lg:max-w-[80%] mx-auto mt-24 px-4 lg:px-6">
      <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-10 md:space-y-0">
        {/* Left Column */}
        <div className="flex-1">
          <h2 className="text-black text-2xl md:text-4xl font-[500] mb-6 leading-tight">
            We offer a wide range of equipment and technology solutions:
          </h2>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/icons/on-the-go-mobile.gif"
                className="object-contain"
                alt="icon"
                style={{ height: "60px" }}
              />
              <p className="text-gray-700 text-base md:text-lg">
                On the go mobile devices
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <img
                src="/icons/terminal.gif"
                className="object-contain"
                alt="icon"
                style={{ height: "60px" }}
              />
              <p className="text-gray-700 text-base md:text-lg">
                Countertop terminals
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <img
                src="/icons/sale-system.gif"
                className="object-contain"
                alt="icon"
                style={{ height: "60px" }}
              />
              <p className="text-gray-700 text-base md:text-lg">
                Full point of sale systems
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <img
                src="/icons/payment-portals.gif"
                className="object-contain"
                alt="icon"
                style={{ height: "60px" }}
              />
              <p className="text-gray-700 text-base md:text-lg">
                Payment portals
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <img
                src="/icons/ecommerce.gif"
                className="object-contain"
                alt="icon"
                style={{ height: "60px" }}
              />
              <p className="text-gray-700 text-base md:text-lg">
                e-Commerce gateways
              </p>
            </div>
          </div>

          <p className="mt-6 text-gray-600 text-sm md:text-base">
            In many cases, we can provide discounted or even free payment
            processing equipment.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/E&T.png"
            alt="Equipment"
            style={{
              width: "100%",
              maxWidth: "600px",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
