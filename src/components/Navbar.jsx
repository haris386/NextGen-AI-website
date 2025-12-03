"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar({ setFormOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Our Advantages", id: "ouradvantages" },
    { name: "Why Us", id: "whyus" },
    { name: "Technology", id: "technology" },
  ];

  return (
    <nav className="w-full bg-[#f5f2fd]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logos/NextGen.png" alt="NextGen Logo" width={150} height={50} priority />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-8 text-black font-medium">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="hover:text-primary cursor-pointer transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex justify-end">
          <button
            onClick={() => setFormOpen(true)}
            className="px-5 py-2 rounded-full bg-black text-white font-medium shadow-sm hover:opacity-90 transition"
          >
            Try Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f5f2fd] w-full shadow-lg py-6">
          <ul className="flex flex-col items-center justify-center space-y-4 text-black font-medium">
            {menuItems.map((item) => (
              <li key={item.id} onClick={() => setIsOpen(false)}>
                <a href={`#${item.id}`} className="hover:text-primary cursor-pointer transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setFormOpen(true);
                  setIsOpen(false);
                }}
                className="px-6 py-2 rounded-full bg-black text-white font-medium shadow-sm hover:opacity-90 transition"
              >
                Try Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
