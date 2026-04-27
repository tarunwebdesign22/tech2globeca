"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

          <p className="hidden sm:block">
            CALL US +1-778-382-9628 | INFO@TECH2GLOBE.CA
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-sm">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/tech2globe-logo.png"
              alt="Tech2Globe Logo"
              width={320}
              height={148}
              className="h-8 w-auto md:h-10 lg:h-12 transition-all"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#" className="hover:text-[#c7010c]">HOME</a>
            <a href="#" className="hover:text-[#c7010c]">ABOUT US</a>
            <a href="#" className="hover:text-[#c7010c]">SERVICES</a>
            <a href="#" className="hover:text-[#c7010c]">PACKAGES</a>
            <a href="#" className="hover:text-[#c7010c]">LOCATION</a>
            <a href="#" className="hover:text-[#c7010c]">BLOGS</a>
            <a href="#" className="hover:text-[#c7010c]">CONTACT US</a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-100 px-4 pb-4">
            <nav className="flex flex-col gap-4 font-medium text-gray-700">
              <a href="#">HOME</a>
              <a href="#">ABOUT US</a>
              <a href="#">SERVICES</a>
              <a href="#">PACKAGES</a>
              <a href="#">LOCATION</a>
              <a href="#">BLOGS</a>
              <a href="#">CONTACT US</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
