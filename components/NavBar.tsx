"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Reset services submenu when main menu is toggled
    if (isOpen) setIsServicesOpen(false); 
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const services = [
    { name: "Drayage", href: "/drayage" },
    { name: "Warehousing & Transloading", href: "/warehousing-transloading" },
    { name: "Air & Expedited", href: "/air-expedited" },
    { name: "Truckload", href: "/truckload" },
    { name: "Intermodal", href: "/intermodal" },
    { name: "Flatbed", href: "/flatbed" },
    { name: "Reefer", href: "/reefer" },
    { name: "LTL", href: "/ltl" },
    { name: "Cross Border", href: "/cross-border" },
  ];

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
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-secondary-light hover:text-primary-orange transition-colors px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                Services
                <svg 
                  className="ml-1 h-4 w-4 fill-current transition-transform duration-200 group-hover:rotate-180" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              
              {/* Dropdown Content */}
              <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                 <div className="py-2" role="menu" aria-orientation="vertical">
                    <div className="absolute -top-2 left-8 w-4 h-4 bg-white transform rotate-45 border-l border-t border-black/5"></div>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-6 py-3 text-sm text-secondary-navy hover:bg-gray-50 hover:text-primary-red transition-colors border-b border-gray-100 last:border-0 font-medium"
                        role="menuitem"
                      >
                        {service.name}
                      </Link>
                    ))}
                 </div>
              </div>
            </div>


            <Link
              href="/contact"
              className="ml-4 px-6 py-3 rounded-full text-white font-bold shadow-lg shadow-primary-red/30 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-primary-red via-red-600 to-primary-orange hover:shadow-xl hover:-translate-y-1 active:scale-95 uppercase tracking-wide"
            >
              Get A Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-light hover:text-white hover:bg-secondary-slate focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
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
        } md:hidden bg-secondary-navy/95 backdrop-blur-md border-t border-secondary-slate/20 shadow-xl transition-all duration-300 ease-in-out`}
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

          {/* Mobile Services Dropdown */}
          <div className="space-y-1">
            <button
              onClick={toggleServices}
              className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-secondary-light hover:bg-secondary-slate/30 hover:text-primary-orange transition-colors focus:outline-none"
            >
              <span>Services</span>
              <svg 
                className={`h-5 w-5 transform transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div 
               className={`overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
            >
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  onClick={() => setIsOpen(false)}
                  className="block pl-8 pr-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>


          <div className="pt-4 mt-2 border-t border-secondary-slate/20">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-4 rounded-full text-white font-extrabold bg-gradient-to-r from-primary-red via-red-600 to-primary-orange shadow-lg hover:shadow-xl transition-all active:scale-95 uppercase tracking-wide"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
