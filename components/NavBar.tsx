"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-secondary-navy shadow-lg fixed w-full z-50 top-0 left-0 border-b border-secondary-slate/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="IGI FREIGHT SOLUTION" 
                width={180} 
                height={50} 
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-secondary-light hover:text-primary-orange transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-secondary-light hover:text-primary-orange transition-colors px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/services" className="text-secondary-light hover:text-primary-orange transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-secondary-light hover:text-primary-orange transition-colors px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <Link
              href="/get-started"
              className="ml-4 px-5 py-2.5 rounded-full text-white font-semibold shadow-md transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-primary-red to-primary-orange hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-light hover:text-white hover:bg-secondary-slate focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-secondary-navy/95 backdrop-blur-sm border-t border-secondary-slate/20 shadow-xl transition-all duration-300 ease-in-out`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-secondary-slate/30 hover:text-primary-orange transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-secondary-light hover:bg-secondary-slate/30 hover:text-primary-orange transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-secondary-light hover:bg-secondary-slate/30 hover:text-primary-orange transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-secondary-light hover:bg-secondary-slate/30 hover:text-primary-orange transition-colors"
          >
            Contact
          </Link>
          <div className="pt-4 mt-2 border-t border-secondary-slate/20">
            <Link
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-full text-white font-bold bg-gradient-to-r from-primary-red to-primary-orange shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
