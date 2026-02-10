
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Premier Drayage Services California & Nationwide | IGI Freight Solutions",
  description: "Expert drayage services at all major ports including LA & Long Beach. We offer efficient container transport, reduced transit times, and value-added warehousing solutions.",
  keywords: ["drayage services california", "port of LA drayage", "long beach container transport", "intermodal drayage", "port logistics", "container storage", "transloading services"],
};

export default function DrayagePage() {
  return (
    <main className="min-h-screen bg-secondary-white text-secondary-navy font-sans">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/service-drayage.png"
            alt="Drayage Services at Major Ports"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-secondary-navy/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-navy/90 via-transparent to-secondary-navy/30" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-orange/20 border border-primary-orange/30 text-primary-orange font-semibold text-sm mb-4 backdrop-blur-sm">
            Port & Rail Logistics
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
            Drayage Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Getting your shipments on the path to efficiency, right out of the gate.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-red hover:bg-white hover:text-primary-red text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-primary-red/50 transform hover:-translate-y-1"
            >
              Ship with Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Efficiency Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy leading-tight">
              Efficiency at All <span className="text-primary-red">Major Ports</span>
            </h2>
            <p className="text-lg text-secondary-slate leading-relaxed">
              Get efficiency for your shipments at any port in North America. From the <strong className="text-secondary-navy">Ports of LA/Long Beach</strong> to New Jersey, we have you covered. Our strategic presence at key gateways ensures reduced transit times and significant cost savings for your supply chain.
            </p>
            <div className="flex items-center space-x-4">
               <div className="h-12 w-1 bg-primary-orange rounded-full"></div>
               <p className="font-semibold text-secondary-navy italic">
                 "Reliable connections from port to door."
               </p>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-primary-red font-bold hover:text-primary-orange transition-colors group"
            >
              Start Shipping
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group">
             <Image
              src="/drayage-reliability-new.png"
              alt="Port of LA and Long Beach Operations"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary-navy/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 3. Value Added Solutions (Cards) */}
      <section className="py-24 bg-secondary-light/30 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy mb-6">
              Value Added Solutions
            </h2>
            <p className="text-lg text-secondary-slate">
              We go beyond simple transport. Our integrated assets and services provide a complete logistics ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Asset-Based Chassis",
                desc: "Availability when you need it most with our own fleet of chassis.",
                icon: (
                   <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                   </svg>
                )
              },
              {
                title: "Container Storage",
                desc: "Secure yard solutions to manage overflow and avoid demurrage fees.",
                icon: (
                  <svg className="w-8 h-8 text-primary-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                )
              },
              {
                title: "Transloading",
                desc: "Fast and efficient warehouse services to expeditiously move your cargo.",
                icon: (
                  <svg className="w-8 h-8 text-secondary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-navy mb-3">{item.title}</h3>
                <p className="text-secondary-slate mb-6">{item.desc}</p>
                <Link href="/contact" className="text-sm font-bold text-primary-red hover:underline">
                  Ship with Us &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reliability & One-Stop Shop (Alternating) */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
        {/* Reliability */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/service-brokerage.png"
              alt="Reliable Fees"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-navy/30 to-transparent" />
          </div>
          <div className="order-2 space-y-6">
             <div className="inline-block p-3 rounded-lg bg-primary-orange/10 text-primary-orange mb-2">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy">
              Reliability and Minimized Fees
            </h2>
            <p className="text-lg text-secondary-slate">
              From the time the container is offloaded from the vessel, the clock is ticking. Avoid delays and keep added fees to a minimum with our team working for you. We proactively monitor port status and container availability to keep your supply chain moving smoothly.
            </p>
            <Link href="/contact" className="px-6 py-3 bg-secondary-navy text-white font-semibold rounded-lg hover:bg-primary-red transition-colors inline-block mt-4">
               Get a Quote
            </Link>
          </div>
        </div>

        {/* One-Stop Shop */}
         <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
             <div className="inline-block p-3 rounded-lg bg-primary-red/10 text-primary-red mb-2">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                 </svg>
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy">
              Your One-Stop Shop
            </h2>
            <p className="text-lg text-secondary-slate">
              We manage your shipments from start to finish. Our asset-backed solutions ensure you have the capacity and expertise you need after your shipments leave the port, getting goods to their destinations on time. Simplify your logistics with a single point of contact.
            </p>
             <Link href="/contact" className="px-6 py-3 bg-secondary-navy text-white font-semibold rounded-lg hover:bg-primary-red transition-colors inline-block mt-4">
               Partner With Us
            </Link>
          </div>
           <div className="order-1 lg:order-2 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/drayage_hero_new_1.png"
              alt="Asset Backed Solutions"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
             <div className="absolute inset-0 bg-gradient-to-l from-secondary-navy/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* 5. Custom Stats Section */}
      <section className="py-20 bg-secondary-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-5xl lg:text-6xl font-extrabold text-primary-orange mb-2">90,000+</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">Containers Moved a Year</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-5xl lg:text-6xl font-extrabold text-primary-orange mb-2">20+</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">Owned Warehouses</p>
            </div>
             <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-5xl lg:text-6xl font-extrabold text-primary-orange mb-2">700k+</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">Containers Since 2015</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-red to-primary-orange text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start shipping with reliability, visibility, and industry expertise.
          </h2>
          <div className="mt-10">
             <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-primary-red font-bold text-xl rounded-full shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
