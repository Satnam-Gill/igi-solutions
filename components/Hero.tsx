"use client";

import React from "react";
import Link from "next/link";


const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-bg.png"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-secondary-navy/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-navy/90 via-secondary-navy/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-orange/20 border border-primary-orange/30 backdrop-blur-sm mb-6">
            <span className="text-primary-orange font-bold text-sm tracking-wide uppercase">
              Premier Freight Broker Services
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Optimizing Your <span className="text-primary-red">Supply Chain</span> for Global Success
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            From drayage to intermodal transport, we are the logistics partner that delivers on promises. Experience seamless freight solutions tailored to your industry needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-primary-red hover:bg-primary-orange text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Get a Quote
            </Link>
            <Link
              href="/#services"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-bold text-lg transition-all duration-300 text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
