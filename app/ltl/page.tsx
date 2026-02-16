
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Less Than Truckload (LTL) Shipping | IGI Freight Solutions",
  description: "Cost-effective LTL shipping solutions for smaller loads. We consolidate your freight to maximize efficiency and provide competitive rates across North America.",
  keywords: ["LTL shipping", "less than truckload", "freight consolidation", "LTL carriers", "freight quote", "shipping rates", "pallet shipping"],
};

export default function LTLPage() {
  return (
    <main className="min-h-screen bg-secondary-white text-secondary-navy font-sans">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/service-intermodal.png"
            alt="LTL Shipping Dock"
            fill
            className="object-cover"
            priority
            quality={90}
            style={{ objectPosition: "center bottom" }} 
          />
          <div className="absolute inset-0 bg-secondary-navy/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-navy/90 via-transparent to-secondary-navy/30" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-orange/20 border border-primary-orange/30 text-primary-orange font-semibold text-sm mb-4 backdrop-blur-sm">
            Small Load Solutions
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
            LTL Shipping
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Cost-effective shipping for smaller loads without compromising on speed or service quality.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary-red hover:bg-white hover:text-primary-red text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-primary-red/50 transform hover:-translate-y-1"
            >
              Get LTL Rates
            </Link>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy leading-tight">
              Pay Only For <span className="text-primary-red">Space You Use</span>
            </h2>
            <p className="text-lg text-secondary-slate leading-relaxed">
              Don't pay for an entire truck when you only need a few pallet spaces. Our LTL (Less Than Truckload) services allow you to share trailer space with other shippers, significantly reducing your transportation costs. We leverage our network of regional and national carriers to find the most efficient route for your freight.
            </p>
            <div className="flex items-center space-x-4">
               <div className="h-12 w-1 bg-primary-orange rounded-full"></div>
               <p className="font-semibold text-secondary-navy italic">
                 "Maximized efficiency for smaller shipments."
               </p>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-primary-red font-bold hover:text-primary-orange transition-colors group"
            >
              Start Saving
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group">
             <Image
              src="/service-intermodal.png"
              alt="LTL Consolidation"
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
              Flexible Shipping Options
            </h2>
            <p className="text-lg text-secondary-slate">
              Tailored LTL services to meet your budget and timeline requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Volume LTL",
                desc: "Competitive spot market pricing for larger LTL shipments that don't quite fill a truck.",
                icon: (
                   <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                   </svg>
                )
              },
              {
                title: "Guaranteed Delivery",
                desc: "Choose time-definite delivery options when your shipment absolutely has to arrive by a certain date.",
                icon: (
                  <svg className="w-8 h-8 text-primary-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Easy Quoting",
                desc: "Get instant quotes from multiple top-tier carriers and book your shipment in minutes.",
                icon: (
                  <svg className="w-8 h-8 text-secondary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
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
                  Get a Quote &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternating Sections */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
        {/* Network */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/service-brokerage.png"
              alt="National Network"
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
              National Reach
            </h2>
            <p className="text-lg text-secondary-slate">
               Whether you're shipping across the state or across the country, we have you covered. Our extensive network of LTL carriers connects major hubs and remote locations alike, ensuring your freight reaches its destination regardless of distance.
            </p>
            <Link href="/contact" className="px-6 py-3 bg-secondary-navy text-white font-semibold rounded-lg hover:bg-primary-red transition-colors inline-block mt-4">
               View Coverage
            </Link>
          </div>
        </div>

        {/* Reliability */}
         <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
             <div className="inline-block p-3 rounded-lg bg-primary-red/10 text-primary-red mb-2">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                 </svg>
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy">
              Damage Prevention
            </h2>
            <p className="text-lg text-secondary-slate">
               LTL shipments are handled multiple times at terminals, increasing risk. We mitigate this by partnering with carriers known for their low claims ratios and by providing guidance on proper packaging. We ensure your freight is protected from pickup to delivery.
            </p>
             <Link href="/contact" className="px-6 py-3 bg-secondary-navy text-white font-semibold rounded-lg hover:bg-primary-red transition-colors inline-block mt-4">
               Protect Your Freight
            </Link>
          </div>
           <div className="order-1 lg:order-2 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/service-drayage.png"
              alt="Secure Packaging"
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
              <h3 className="text-5xl lg:text-6xl font-extrabold text-primary-orange mb-2">50+</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">Carrier Partners</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-5xl lg:text-6xl font-extrabold text-primary-orange mb-2">95%</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">Claims Free</p>
            </div>
             <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-5xl lg:text-6xl font-extrabold text-primary-orange mb-2">Instant</h3>
              <p className="text-gray-300 uppercase tracking-widest text-sm font-semibold mt-4">Rate Quotes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-red to-primary-orange text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Shipping smaller loads shouldn't be a hassle.
          </h2>
          <div className="mt-10">
             <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-primary-red font-bold text-xl rounded-full shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
            >
              Get LTL Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
