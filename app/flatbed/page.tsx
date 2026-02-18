
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flatbed & Specialized Hauling | IGI Freight Solutions",
  description: "Expert heavy haul and flatbed shipping services. We handle oversized loads, machinery, and construction materials with specialized equipment.",
  keywords: ["flatbed shipping", "heavy haul", "oversized load", "specialized transport", "step deck", "RGN", "construction logistics"],
};

export default function FlatbedPage() {
  return (
    <main className="min-h-screen bg-secondary-white text-secondary-navy font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/service-drayage.png"
            alt="Flatbed Truck with Cargo"
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
            Heavy & Specialized
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
            Flatbed Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Expert handling for your oversized, heavy, and irregular freight. We have the right equipment for the job.
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
              We Handle The <span className="text-primary-red">Heavy Lifting</span>
            </h2>
            <p className="text-lg text-secondary-slate leading-relaxed">
              From construction materials to industrial machinery, flatbed shipping requires precision and expertise. Our team understands the unique challenges of securing and transporting open-deck cargo. We ensure your freight is properly tarped, strapped, and delivered safely to the job site.
            </p>
            <div className="flex items-center space-x-4">
               <div className="h-12 w-1 bg-primary-orange rounded-full"></div>
               <p className="font-semibold text-secondary-navy italic">
                 "Secure transport for complex cargo."
               </p>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-primary-red font-bold hover:text-primary-orange transition-colors group"
            >
              Request Equipment
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group">
             <Image
              src="/flatbed_hero.png"
              alt="Flatbed Logistics"
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
              Specialized Capabilities
            </h2>
            <p className="text-lg text-secondary-slate">
              Access a diverse fleet of open-deck trailers to meet any shipping requirement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Oversized Loads",
                desc: "Complete logistics management for wide, tall, and heavy shipments, including permitting and pilot cars.",
                icon: (
                   <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                   </svg>
                )
              },
              {
                title: "Project Cargo",
                desc: "End-to-end planning and execution for large-scale industrial projects and plant relocations.",
                icon: (
                  <svg className="w-8 h-8 text-primary-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                title: "Job Site Delivery",
                desc: "Coordinate precise delivery times and equipment needs for construction sites and remote locations.",
                icon: (
                  <svg className="w-8 h-8 text-secondary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
                  View Specs &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
        {/* Ability 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/flatbed_operation.png"
              alt="Safety Protocols"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-navy/30 to-transparent" />
          </div>
          <div className="order-2 space-y-6">
             <div className="inline-block p-3 rounded-lg bg-primary-orange/10 text-primary-orange mb-2">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                 </svg>
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy">
              Safety & Compliance
            </h2>
            <p className="text-lg text-secondary-slate">
               Safety is paramount when moving heavy freight. We strictly adhere to all DOT regulations and ensure every carrier in our network is qualified to handle specialized loads. Your cargo's safety is our top priority.
            </p>
            <Link href="/contact" className="px-6 py-3 bg-secondary-navy text-white font-semibold rounded-lg hover:bg-primary-red transition-colors inline-block mt-4">
               Safety First
            </Link>
          </div>
        </div>

        {/* Ability 2 */}
         <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
             <div className="inline-block p-3 rounded-lg bg-primary-red/10 text-primary-red mb-2">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy">
              Permitting & Routing
            </h2>
            <p className="text-lg text-secondary-slate">
               Navigating regulations for oversized loads can be complex. We handle all the necessary permits and route surveys to ensure a smooth journey. We identify potential obstacles and plan the optimal route for your specific cargo dimensions.
            </p>
             <Link href="/contact" className="px-6 py-3 bg-secondary-navy text-white font-semibold rounded-lg hover:bg-primary-red transition-colors inline-block mt-4">
               Get Routing Plan
            </Link>
          </div>
           <div className="order-1 lg:order-2 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/service-drayage.png"
              alt="Permits and Routing"
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
              <h3 className="text-4xl lg:text-5xl font-extrabold text-primary-orange mb-2">Heavy Haul</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">Specialists</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-primary-orange mb-2">All 50</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">States Covered</p>
            </div>
             <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-4xl lg:text-5xl font-extrabold text-primary-orange mb-2">Permit</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-red to-primary-orange text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Got an oversized load? We have the solution.
          </h2>
          <div className="mt-10">
             <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-primary-red font-bold text-xl rounded-full shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
            >
              Request a Flatbed Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
