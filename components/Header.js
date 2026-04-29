"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const locations = [
  { name: "Toronto", href: "/digital-marketing-toronto" },
  { name: "Mississauga", href: "/digital-marketing-mississauga" },
  { name: "Calgary", href: "/digital-marketing-calgary" },
  { name: "Ottawa", href: "/digital-marketing-ottawa" },
  { name: "Ontario", href: "/digital-marketing-ontario" },
  { name: "Vancouver", href: "/digital-marketing-vancouver" },
];

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
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <Link href="/" className="hover:text-[#c7010c]">HOME</Link>
            <Link href="/about-us" className="hover:text-[#c7010c]">ABOUT US</Link>
            <a href="#" className="hover:text-[#c7010c]">SERVICES</a>
            <a href="#" className="hover:text-[#c7010c]">PACKAGES</a>
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#c7010c] focus:outline-none focus:text-[#c7010c]"
                aria-haspopup="true"
              >
                LOCATION
                <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 min-w-[250px] bg-white pt-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="border-t-2 border-[#c7010c] py-2">
                  {locations.map((location) => (
                    <Link
                      key={location.href}
                      href={location.href}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c7010c]"
                    >
                      Digital Marketing {location.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <a href="#" className="hover:text-[#c7010c]">BLOGS</a>
            <Link href="/contact-us" className="hover:text-[#c7010c]">CONTACT US</Link>
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
              <Link href="/" onClick={() => setIsOpen(false)}>HOME</Link>
              <Link href="/about-us" onClick={() => setIsOpen(false)}>ABOUT US</Link>
              <a href="#" onClick={() => setIsOpen(false)}>SERVICES</a>
              <a href="#" onClick={() => setIsOpen(false)}>PACKAGES</a>
              <div>
                <p className="mb-2">LOCATION</p>
                <div className="ml-4 flex flex-col gap-3 border-l border-gray-300 pl-4 text-sm">
                  {locations.map((location) => (
                    <Link
                      key={location.href}
                      href={location.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-[#c7010c]"
                    >
                      Digital Marketing {location.name}
                    </Link>
                  ))}
                </div>
              </div>
              <a href="#" onClick={() => setIsOpen(false)}>BLOGS</a>
              <Link href="/contact-us" onClick={() => setIsOpen(false)}>CONTACT US</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
