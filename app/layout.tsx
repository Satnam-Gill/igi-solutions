import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IGI Freight Solutions | Premier Logistics & Supply Chain",
    template: "%s | IGI Freight Solutions",
  },
  description: "Optimize your supply chain with expert freight brokerage, drayage, and intermodal transport services. Reliable global logistics from IGI Freight Solutions.",
  keywords: ["freight broker", "logistics", "supply chain", "drayage", "intermodal", "shipping", "freight management", "transportation", "cargo services"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <NavBar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
