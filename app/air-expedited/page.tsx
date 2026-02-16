
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Freight & Expedited Services | IGI Freight Solutions",
  description: "Rapid and reliable air freight and expedited ground services. Global reach, time-critical delivery, and 24/7 tracking for your urgent shipments.",
  keywords: ["air freight", "expedited shipping", "next flight out", "air cargo", "time critical logistics", "emergency freight", "charter services"],
};

export default function AirExpeditedPage() {
  return (
    <main className="min-h-screen bg-secondary-white text-secondary-navy font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/air_expedited_hero_1771249715312.png"
            alt="Air & Expedited Logistics"
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
            Global & Urgent Logistics
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
            Air & Expedited Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            When time is critical, trust our expedited solutions to deliver your cargo swiftly and securely.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-red hover:bg-white hover:text-primary-red text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-primary-red/50 transform hover:-translate-y-1"
            >
              Get a Quote Now
            </Link>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy leading-tight">
              Speed & <span className="text-primary-red">Reliability</span>
            </h2>
            <p className="text-lg text-secondary-slate leading-relaxed">
              We leverage our global network of airline partners and expedited ground carriers to ensure your urgent shipments reach their destination on time, every time. From critical manufacturing components to medical supplies, we handle your most sensitive cargo with the urgency it demands.
            </p>
            <div className="flex items-center space-x-4">
               <div className="h-12 w-1 bg-primary-orange rounded-full"></div>
               <p className="font-semibold text-secondary-navy italic">
                 "Delivering calm in the face of deadlines."
               </p>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-primary-red font-bold hover:text-primary-orange transition-colors group"
            >
              Ship Urgent Cargo
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group">
             <Image
              src="/expedited_truck_dock_1771249753735.png"
              alt="Air Freight Operations"
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
              Expedited Solutions
            </h2>
            <p className="text-lg text-secondary-slate">
              Customized options to meet your specific timeline and budget requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Next Flight Out (NFO)",
                desc: "Immediate dispatch on the next available flight for your most urgent cargo.",
                icon: (
                   <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                   </svg>
                )
              },
              {
                title: "Air Charter",
                desc: "Dedicated aircraft solutions for critical, high-value, or oversized shipments that can't wait.",
                icon: (
                  <svg className="w-8 h-8 text-primary-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Expedited Ground",
                desc: "Direct, non-stop trucking services including team drivers for rapid door-to-door delivery.",
                icon: (
                  <svg className="w-8 h-8 text-secondary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
                  Get Started &rarr;
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
              src="/air_expedited_hero_1771249805976.png"
              alt="Global Tracking"
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
              Real-Time Visibility
            </h2>
            <p className="text-lg text-secondary-slate">
              Never wonder where your urgent cargo is. We provide 24/7 tracking and proactive updates at every milestone. Our dedicated team monitors your shipment from pickup to final delivery, ensuring smooth transit through customs and transfer points.
            </p>
            <Link href="/contact" className="px-6 py-3 bg-secondary-navy text-white font-semibold rounded-lg hover:bg-primary-red transition-colors inline-block mt-4">
               Track Your Shipment
            </Link>
          </div>
        </div>

        {/* Global Reach */}
         <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
             <div className="inline-block p-3 rounded-lg bg-primary-red/10 text-primary-red mb-2">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy">
              Global Reach
            </h2>
            <p className="text-lg text-secondary-slate">
              Our network spans the globe. Whether you are shipping to or from Asia, Europe, or anywhere in the Americas, we have the connections and expertise to handle customs, compliance, and final mile delivery seamlessly.
            </p>
             <Link href="/contact" className="px-6 py-3 bg-secondary-navy text-white font-semibold rounded-lg hover:bg-primary-red transition-colors inline-block mt-4">
               Expand Your Reach
            </Link>
          </div>
           <div className="order-1 lg:order-2 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/air_cargo_global_1771249771821.png"
              alt="Global Logistics Network"
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
              <h3 className="text-5xl lg:text-6xl font-extrabold text-primary-orange mb-2">24/7</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">Operations Support</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-5xl lg:text-6xl font-extrabold text-primary-orange mb-2">Global</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">Network Coverage</p>
            </div>
             <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-5xl lg:text-6xl font-extrabold text-primary-orange mb-2">99%</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-red to-primary-orange text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need it there yesterday?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
             Contact our expedited team for immediate assistance and custom solutions.
          </p>
          <div className="mt-10">
             <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-primary-red font-bold text-xl rounded-full shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
