import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";

export default function Footer({setFormOpen}) {
  return (
    <>
      {/* Footer 1 */}
      <footer className="w-full mt-10 bg-[#e7e7e7]">
        <div className="flex flex-col md:flex-row justify-between items-start px-10 py-10 space-y-10 md:space-y-0">
          {/* Left Column - Logo */}
          <div className="md:w-2/5 flex flex-col items-center md:items-start space-y-4">
            <img
              src="/logos/NextGenG.png"
              alt="Logo"
              style={{ height: "80px", objectFit: "contain" }}
            />
            <p className="text-gray-700 text-base text-center md:text-left">
              Payment processing done the right way!
            </p>
            <p className="text-gray-700 text-base text-center md:text-left">
              8910 W 192nd St. Unit P, ABC, ABC 00011
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:w-1/5 text-left space-y-3">
            <h3 className="text-black font-semibold text-lg">Quick Links</h3>
           <ul className="flex flex-col space-y-4 text-gray-700 text-base">
  <li><a href="#home" className="hover:underline">Home</a></li>
  <li><a href="#ouradvantages" className="hover:underline">Our Advantages</a></li>
  <li><a href="#whyus" className="hover:underline">Why Us</a></li>
  <li><a href="#technology" className="hover:underline">Technology</a></li>
</ul>


          </div>

          {/* Contact Column */}
          <div className="md:w-1/5 text-left space-y-2">
            <h3 className="text-black font-semibold text-lg">Contact Us</h3>
            <p className="text-gray-700 text-base space-y-4">
              Phone: (123) 456-7890
            </p>
            <p className="text-gray-700 text-base space-y-4">
              Email: info@example.com
            </p>
          </div>

          {/* Social Links Column */}
          <div className="md:w-1/5 text-left space-y-2">
            <h3 className="text-black font-semibold text-lg">Social Links</h3>
            <ul className="flex flex-col space-y-4 text-gray-700 text-base">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:underline flex items-center gap-2"
                >
                  <TiSocialFacebook size={20} /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:underline flex items-center gap-2"
                >
                  <TiSocialInstagram size={20} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:underline flex items-center gap-2"
                >
                  <TiSocialLinkedin size={20} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="w-[95%] mx-auto border-t border-gray-400 my-8"></div>

        {/* Bottom Call-to-Action */}
        <div className="w-[95%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
          {/* Left Text */}
          <p className="text-black text-base md:text-lg text-center md:text-left">
            Contact us today <br /> Enter in the next generation of Payment Processing
          </p>

          {/* Right Button */}
          <button onClick={() => setFormOpen(true)} className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground font-[500] rounded-full hover:opacity-90 transition-opacity">
            Contact Us
          </button>
        </div>
      </footer>

      {/* Footer 2 */}
      <footer className="w-full bg-black text-white px-10 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p>All rights reserved NextGen @ 2025</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
