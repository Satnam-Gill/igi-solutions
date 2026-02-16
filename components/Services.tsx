import React from "react";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "Drayage Services",
      description: "Efficient port-to-door container transport. We handle the complexities of port logistics so you don't have to.",
      image: "/service-drayage.png",
      link: "/drayage",
    },
    {
      title: "Intermodal Transport",
      description: "Cost-effective long-haul solutions combining rail and truck. seamless transitions for your cargo across the country.",
      image: "/service-intermodal.png",
      link: "/intermodal",
    },
    {
      title: "Freight Brokerage",
      description: "Connecting you with reliable carriers. Our vast network ensures your freight moves fast, at the best rates.",
      image: "/service-brokerage.png",
      link: "/truckload",
    },
  ];

  return (
    <section className="py-20 bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy mb-4">
            Comprehensive <span className="text-primary-red">Logistics Solutions</span>
          </h2>
          <p className="text-secondary-slate max-w-2xl mx-auto text-lg">
            From drayage to full-service freight brokerage, we optimize every link in your supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary-navy/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-secondary-navy mb-3 group-hover:text-primary-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-slate mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-primary-red font-semibold hover:text-primary-orange transition-colors group-hover:translate-x-1 duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
