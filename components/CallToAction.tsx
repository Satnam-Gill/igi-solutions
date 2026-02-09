import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-red to-primary-orange text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Move Your Freight?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          Partner with a top-rated freight broker. From drayage to intermodal, we handle it all.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/contact"
            className="px-10 py-4 bg-white text-primary-red font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Shipping Now
          </Link>
          <Link
            href="/carriers"
            className="px-10 py-4 bg-secondary-navy text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-secondary-navy/90 transition-all duration-300 transform hover:-translate-y-1"
          >
            Join Our Carrier Network
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
