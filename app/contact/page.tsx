import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Us | IGI Freight Solutions Customer Support",
  description: "Reach out to IGI Freight Solutions for personalized logistics support. Contact our team for quotes on drayage, intermodal, and freight services.",
  keywords: ["contact freight broker", "logistics customer service", "shipping quote", "transportation inquiries", "freight support"],
};

export default function ContactPage() {
  return <ContactClient />;
}
