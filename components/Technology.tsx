import React from "react";
import Image from "next/image";
import Link from "next/link";

const Technology = () => {
  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy mb-6">
              Advanced <span className="text-primary-red">Logistics Technology</span>
            </h2>
            <p className="text-lg text-secondary-slate mb-8 leading-relaxed">
              Experience total visibility. Our tech-enabled supply chain solutions give you real-time tracking, automated documentation, and seamless EDI/API integration.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Real-Time Load Tracking", 
                "Digital Documentation & Proof of Delivery", 
                "Customizable Reporting Dashboards", 
                "Secure API Integrations"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-secondary-navy font-medium">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-orange/20 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/tech-logistics.png"
                alt="Logistics Technology Interface"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-navy/40 to-transparent pointer-events-none" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-orange/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-red/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
