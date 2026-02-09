
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | IGI Freight Solutions',
  description: 'The page you are looking for does not exist. Return to IGI Freight Solutions home page.',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-background md:px-8">
      <h1 className="text-9xl font-bold text-primary-red">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-secondary-navy md:text-4xl">
        Page Not Found
      </h2>
      <p className="mt-4 text-lg text-secondary-slate max-w-lg">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link 
          href="/" 
          className="px-8 py-3 text-base font-semibold text-white transition-all bg-primary-red rounded-lg hover:bg-accent-dark-red shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-red focus:ring-offset-2"
        >
          Return Home
        </Link>
        <Link 
          href="/contact" 
          className="px-8 py-3 text-base font-semibold text-secondary-navy transition-all bg-transparent border-2 border-secondary-navy rounded-lg hover:bg-secondary-navy hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary-navy focus:ring-offset-2"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
