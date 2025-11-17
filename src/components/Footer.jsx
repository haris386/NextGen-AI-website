import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  return (
    <footer
      className="w-[98%] mt-10"
      style={{
        backgroundColor: "#e7e7e7",
        borderRadius: "20px",
        margin: "auto",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start px-6 py-10 space-y-10 md:space-y-0">
        {/* Left Column - Logo */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <img
            src="/logos/NextGen.png"
            alt="Logo"
            style={{ height: "70px", objectFit: "contain" }}
          />

          {/* Tagline */}
          <p className="text-gray-700 text-base mt-3 text-center md:text-left">
            Payment processing done the right way!
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center shadow">
              <TiSocialFacebook style={{ color: "white", fontSize: "30px" }} />
            </div>
            <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center shadow">
              <TiSocialInstagram style={{ color: "white", fontSize: "25px" }} />
            </div>
            <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center shadow">
             <TiSocialLinkedin style={{ color: "white", fontSize: "30px" }} />
            </div>
          </div>
        </div>

        {/* Middle Column - Quick Links */}
        <div className="flex-1 text-left">
          <h3 className="text-black font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 text-base">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Why Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Equipment
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column - Contact */}
        <div className="flex-1 text-left md:text-left">
          <h3 className="text-black font-semibold text-lg mb-3">Contact Us</h3>
          <p className="text-gray-700 text-base">Phone: (123) 456-7890</p>
          <p className="text-gray-700 text-base">Email: info@example.com</p>
        </div>
      </div>
    </footer>
  );
}
