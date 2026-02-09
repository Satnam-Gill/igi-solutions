
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | IGI Freight Solutions",
  description: "Learn about IGI Freight Solutions, your dedicated partner in navigating complex logistics. Providing fast, flexible freight strategies.",
  keywords: ["about igi freight", "logistics company history", "freight brokerage team", "supply chain experts", "trusted carrier network"],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-secondary-white text-secondary-navy font-sans">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_hero_1770634129408.png"
            alt="IGI Freight Solutions Logistics"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-secondary-navy/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-navy/90 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
            Navigating complex logistics with ease and precision.
          </p>
        </div>
      </section>

      {/* 2. Main Content / Story Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/20 mb-6">
              <span className="text-primary-red font-bold text-sm tracking-wide uppercase">
                Your Trusted Partner
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-secondary-navy leading-tight">
              We Don't Just Move Goods, <br />
              <span className="text-primary-red">We Move Businesses Forward</span>
            </h2>
            <div className="space-y-6 text-lg text-secondary-slate leading-relaxed">
              <p>
                IGI Freight Solutions is your trusted partner in navigating complex logistics with ease and precision. In an ever-evolving global market, we provide the stability and expertise you need to keep your supply chain running smoothly.
              </p>
              <p>
                From identifying the ideal transport for your unique shipping needs to managing customs clearance and compliance risks, we deliver end-to-end solutions tailored for efficiency. We understand that every shipment counts.
              </p>
              <p>
                Experience a world of fast, flexible, and future-ready strategies designed to leave a lasting impact on the way you move and manage freight.
              </p>
            </div>
            
            <div className="mt-10">
              <Link 
                href="/services" 
                className="inline-flex items-center text-primary-red font-bold text-lg hover:text-primary-orange transition-colors group"
              >
                Explore Our Services
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/about_story_1770633856642.png"
              alt="Logistics Operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary-navy/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 3. Coverage / Solutions Grid */}
      <section className="py-24 bg-secondary-light/30 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy mb-6">
              Tailored Solutions for Every Need
            </h2>
            <p className="text-lg text-secondary-slate">
              With integrated visibility and a vetted carrier network, we provide reliable capacity and accountable service from port to door.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="h-56 relative overflow-hidden">
                <Image 
                  src="/service-brokerage.png" 
                  alt="Ideal Transport" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-secondary-navy/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary-red/10 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                    <svg className="w-6 h-6 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary-navy">Ideal Transport</h3>
                <p className="text-secondary-slate mb-4">
                  Identifying the perfect shipping modes for your cargo, ensuring cost-effectiveness and speed.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="h-56 relative overflow-hidden">
                <Image 
                  src="/tech-logistics.png" 
                  alt="Customs & Compliance" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                 <div className="absolute inset-0 bg-secondary-navy/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                    <svg className="w-6 h-6 text-primary-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary-navy">Customs & Compliance</h3>
                <p className="text-secondary-slate mb-4">
                  Expert management of customs clearance and risk mitigation to keep your freight moving without delay.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="h-56 relative overflow-hidden">
                <Image 
                  src="/service-intermodal.png" 
                  alt="Future-Ready Strategy" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                 <div className="absolute inset-0 bg-secondary-navy/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-secondary-navy/10 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                    <svg className="w-6 h-6 text-secondary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary-navy">Future-Ready Strategy</h3>
                <p className="text-secondary-slate mb-4">
                   Flexible, scalable solutions designed to adapt to market changes and drive business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Impact / Team Section */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-secondary-navy shadow-2xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 opacity-40">
              <Image 
                src="/about_team_1770633901123.png" 
                alt="Our Team" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-navy/90 via-secondary-navy/80 to-secondary-navy/60" />

            <div className="relative z-10 p-12 md:p-24 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                "We pride ourselves on delivery, reliability, and precision in every shipment."
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                Our commitment goes beyond just logistics. We are invested in your success, ensuring that every interaction adds value to your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                   href="/contact"
                   className="px-8 py-4 rounded-full bg-primary-red hover:bg-white hover:text-primary-red text-white font-bold text-lg transition-all duration-300 shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <CallToAction />
    </main>
  );
}
