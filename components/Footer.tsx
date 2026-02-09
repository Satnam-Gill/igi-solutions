import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary-navy text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-wider">
              IGI FREIGHT SOLUTION<span className="text-primary-red">.</span>
            </h2>
            <p className="text-secondary-slate text-sm leading-relaxed max-w-xs">
              Crafting digital experiences with passion and precision. Building the future of web design, one pixel at a time.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholder */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 bg-secondary-slate/20 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors cursor-pointer">
                  <span className="sr-only">Social Link {i}</span>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-secondary-light mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-secondary-slate hover:text-primary-orange transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-secondary-light mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {['Documentation', 'Support', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-secondary-slate hover:text-primary-orange transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-secondary-light mb-4">
              Subscribe
            </h3>
            <p className="text-secondary-slate text-sm mb-4">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-secondary-slate/10 border border-secondary-slate/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red text-sm text-secondary-light placeholder-secondary-slate"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary-red hover:bg-primary-orange text-white rounded-md transition-colors text-sm font-medium shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-slate/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-secondary-slate">
          <p>&copy; {new Date().getFullYear()} IGI FREIGHT SOLUTION. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
