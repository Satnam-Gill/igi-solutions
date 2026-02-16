
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Truckload (FTL) Brokerage | IGI Freight Solutions",
  description: "Reliable full truckload services across the US, Canada, and Mexico. Access our vast network of vetted carriers for dry van, flatbed, and specialized freight.",
  keywords: ["truckload shipping", "FTL brokerage", "freight broker", "dry van", "logistics companies", "full truckload", "transportation services"],
};

export default function TruckloadPage() {
  return (
    <main className="min-h-screen bg-secondary-white text-secondary-navy font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/service-brokerage.png"
            alt="Truckload Shipping on Highway"
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
            Over The Road Excellence
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
            Full Truckload Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            One point of contact. Thousands of vetted carriers. Seamless coverage across North America.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-red hover:bg-white hover:text-primary-red text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-primary-red/50 transform hover:-translate-y-1"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy leading-tight">
              Capacity <span className="text-primary-red">On Demand</span>
            </h2>
            <p className="text-lg text-secondary-slate leading-relaxed">
             Finding reliable capacity shouldn't be a struggle. We connect you with a vast network of pre-vetted carriers ready to move your freight. From standard dry vans to specialized equipment, we match your shipment with the right driver at the right price, ensuring your goods arrive safely and on schedule.
            </p>
            <div className="flex items-center space-x-4">
               <div className="h-12 w-1 bg-primary-orange rounded-full"></div>
               <p className="font-semibold text-secondary-navy italic">
                 "Driving efficiency into every mile."
               </p>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-primary-red font-bold hover:text-primary-orange transition-colors group"
            >
              Find a Truck
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group">
             <Image
              src="/drayage_hero_new_1.png"
              alt="Truckload Capacity"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary-navy/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Value Added Solutions */}
      <section className="py-24 bg-secondary-light/30 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy mb-6">
              More Than Just a Truck
            </h2>
            <p className="text-lg text-secondary-slate">
              We offer flexible solutions designed to adapt to your changing supply chain needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dedicated Lanes",
                desc: "Secure consistent capacity and pricing for your high-volume recurring lanes.",
                icon: (
                   <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                   </svg>
                )
              },
              {
                title: "Drop Trailer Programs",
                desc: "Improve warehouse efficiency with flexible pre-loading and drop-and-hook options.",
                icon: (
                  <svg className="w-8 h-8 text-primary-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )
              },
              {
                title: "High-Value Cargo",
                desc: "Enhanced security protocols and insurance coverage for your high-value shipments.",
                icon: (
                  <svg className="w-8 h-8 text-secondary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
        {/* Reliability */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/service-drayage.png"
              alt="Vetted Carriers"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-navy/30 to-transparent" />
          </div>
          <div className="order-2 space-y-6">
             <div className="inline-block p-3 rounded-lg bg-primary-orange/10 text-primary-orange mb-2">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy">
              Quality Assurance
            </h2>
            <p className="text-lg text-secondary-slate">
              We don't trust just anyone with your freight. Our rigorous carrier vetting process includes safety checks, insurance verification, and performance monitoring. You can rest easy knowing your cargo is in the hands of professional, qualified drivers.
            </p>
            <Link href="/contact" className="px-6 py-3 bg-secondary-navy text-white font-semibold rounded-lg hover:bg-primary-red transition-colors inline-block mt-4">
               Safety First
            </Link>
          </div>
        </div>

        {/* Visibility */}
         <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
             <div className="inline-block p-3 rounded-lg bg-primary-red/10 text-primary-red mb-2">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                 </svg>
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy">
              Total Visibility
            </h2>
            <p className="text-lg text-secondary-slate">
              Stay in the loop with real-time updates and advanced tracking technology. From pickup to delivery, you'll have complete visibility into your shipment's status, allowing you to manage your supply chain with confidence.
            </p>
             <Link href="/contact" className="px-6 py-3 bg-secondary-navy text-white font-semibold rounded-lg hover:bg-primary-red transition-colors inline-block mt-4">
               Get Visibility
            </Link>
          </div>
           <div className="order-1 lg:order-2 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-bg.png"
              alt="Truck on Highway"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
             <div className="absolute inset-0 bg-gradient-to-l from-secondary-navy/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-5xl lg:text-6xl font-extrabold text-primary-orange mb-2">20k+</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">Vetted Carriers</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-5xl lg:text-6xl font-extrabold text-primary-orange mb-2">98%</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">On-Time Performance</p>
            </div>
             <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-5xl lg:text-6xl font-extrabold text-primary-orange mb-2">No. 1</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">Customer Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-red to-primary-orange text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Move your freight with the experts.
          </h2>
          <div className="mt-10">
             <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-primary-red font-bold text-xl rounded-full shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
            >
              Get a Quote Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
