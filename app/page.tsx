import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Technology from "@/components/Technology";
import WhyChooseUs from "@/components/WhyChooseUs";
import CallToAction from "@/components/CallToAction";
import Awards from "@/components/Awards";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Efficient Logistics & Freight Management | IGI Freight Solutions",
  description: "Streamline your shipping operations with IGI Freight Solutions. We offer tailored logistics strategies, drayage, and intermodal transport.",
  keywords: ["logistics solutions", "freight management", "optimize shipping", "supply chain efficiency", "transportation services", "3PL provider"],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary-light/20">
      <Hero />
      <Stats />
      <Awards/>
      <WhyChooseUs />
      <Services />
      <Technology />
      <CallToAction />
    </div>
  );
}
