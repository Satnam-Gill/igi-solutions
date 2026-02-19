import React from "react";
import Link from "next/link";

const Footer = () => {  
return (
    <footer className="bg-secondary-navy text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-wider">
              IGI FREIGHT SOLUTION<span className="text-primary-red">.</span>
            </h2>
            <p className="text-secondary-slate text-sm leading-relaxed max-w-xs">
              Your trusted partner in logistics and supply chain optimization. Providing reliable drayage, intermodal, and freight brokerage services across the USA.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="h-8 w-8 bg-secondary-slate/20 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors cursor-pointer" aria-label="LinkedIn">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="h-8 w-8 bg-secondary-slate/20 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors cursor-pointer" aria-label="Facebook">
                 <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                 </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-secondary-light mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Drayage', href: '/drayage' },
                { name: 'Intermodal', href: '/intermodal' },
                { name: 'Truckload', href: '/truckload' },
                { name: 'Refrigerated', href: '/reefer' },
                { name: 'Air & Expedited', href: '/air-expedited' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-secondary-slate hover:text-primary-orange transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-secondary-light mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Get a Quote', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-secondary-slate hover:text-primary-orange transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-secondary-light mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-secondary-slate">
                <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-red mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>
                        130 FIG TREE LN APT 2B<br />
                        MARTINEZ, CA 94553
                    </span>
                </li>
                <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-red mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (510) 878-8774</span>
                </li>
                 <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-red mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:ops@igifreightsolutions.com" className="hover:text-white transition-colors">ops@igifreightsolutions.com</a>
                </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-secondary-slate/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-secondary-slate">
          <p>&copy; {new Date().getFullYear()} IGI FREIGHT SOLUTION. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
