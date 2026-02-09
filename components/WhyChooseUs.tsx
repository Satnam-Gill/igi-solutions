import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Top-Rated Reliability",
      description: "Ranked among the top logistics providers for on-time delivery and service availability.",
      icon: (
        <svg className="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Expert Freight Brokers",
      description: "Our dedicated team of freight brokers ensures you get the best rates and capacity, every time.",
      icon: (
        <svg className="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "End-to-End Visibility",
      description: "From drayage at the port to final mile delivery, track your shipment every step of the way.",
      icon: (
        <svg className="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Asset-Based Expertise",
      description: "Leveraging our own assets and a vast carrier network to handle surge capacity and specialized needs.",
      icon: (
        <svg className="w-8 h-8 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-secondary-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy mb-4">
            Why <span className="text-primary-red">Ship With Us?</span>
          </h2>
          <p className="text-secondary-slate max-w-2xl mx-auto text-lg">
            We simplify supply chain complexities with proven expertise and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary-orange hover:-translate-y-2 group">
              <div className="mb-6 bg-secondary-light/50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary-red/10 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary-navy mb-3">{reason.title}</h3>
              <p className="text-secondary-slate text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
