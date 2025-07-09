"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <nav
      className="bg-[#262626] border-b border-[#262626]
      w-full 
      px-[16px] sm:px-[162px] 
      py-[20px] 
      h-[106px] sm:h-[100px] lg:h-[100px] 
      flex items-center justify-between"
    >
      {/* Logo + Text */}
      <div className="flex items-center space-x-2">
        <div className="bg-[#9EFF00] p-2 rounded-lg">
          <Image
            src="/7Up.png"
            alt="Logo"
            width={24}
            height={24}
            className="md:w-8 md:h-8"
          />
        </div>
        <span className="text-white font-semibold text-lg">SquareUp</span>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center space-x-6 text-white font-medium text-base">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`px-3 py-2 rounded ${
                link.active ? "bg-[#2E2E2E]" : "hover:text-[#9EFF00]"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop ThemeSwitcher + Contact Us */}
      <div className="hidden lg:flex items-center space-x-4">
        <ThemeSwitcher />
        <button className="bg-[#9EFF00] rounded-2xl px-5 py-2 text-black font-medium text-[18px] leading-[150%] hover:bg-[#262626] hover:text-[#9EFF00] transition-colors duration-300">
          Contact Us
        </button>
      </div>

      {/* Hamburger Icon (Mobile + Tablet) */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-[106px] sm:top-[100px] lg:top-[100px] left-0 w-full bg-[#262626] text-white px-4 sm:px-6 py-4 flex flex-col space-y-4 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded ${
                link.active ? "bg-[#2E2E2E]" : "hover:text-[#9EFF00]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <ThemeSwitcher />
          <button className="mt-2 bg-[#9EFF00] rounded-2xl px-4 py-2 text-black font-medium text-sm leading-[150%] hover:bg-[#262626] hover:text-[#9EFF00] transition-colors duration-300">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
