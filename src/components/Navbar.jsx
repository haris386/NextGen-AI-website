"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "Why Us", "Pricing", "Solutions", "Technology", "Contact"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logos/NextGen.png"
            alt="NextGen Logo"
            width={150}   
            height={50}   
            priority       
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item} className="hover:text-primary cursor-pointer transition-colors">
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full absolute top-16 left-0 shadow-lg">
          <ul className="flex flex-col items-center justify-center space-y-4 py-6 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                className="hover:text-primary cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
