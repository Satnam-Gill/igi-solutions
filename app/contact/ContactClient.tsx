"use client";

import React, { useState } from "react";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
    message: "",
    termsAccepted: false,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccessModalOpen(true);
        setFormData({
            fullName: "",
            company: "",
            jobTitle: "",
            email: "",
            phone: "",
            message: "",
            termsAccepted: false,
        });
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prev) => ({ ...prev, termsAccepted: checked }));
  };


  return (
    <main className="min-h-screen bg-secondary-white text-secondary-navy font-sans">
      {/* 1. Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_hero_bg_1770634103013.png"
            alt="Contact IGI Freight Solutions"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-secondary-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-navy/90 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-light tracking-wide max-w-2xl mx-auto">
            We’re here to help you optimize your supply chain. Reach out to our team of experts today.
          </p>
        </div>
      </section>

      {/* 2. Contact Content */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info & Context */}
          <div className="space-y-12">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/20 mb-6">
                 <span className="text-primary-red font-bold text-sm tracking-wide uppercase">
                   Contact Us
                 </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary-navy leading-tight">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-secondary-slate leading-relaxed mb-8">
                Whether you have a question about our services, need a quote, or want to explore partnership opportunities, we are ready to assist you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-secondary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-secondary-navy">Email Us</h3>
                            <a href="mailto:ops@igifreightsolutions.com" className="text-primary-red hover:underline text-lg">ops@igifreightsolutions.com</a>
                            <p className="text-sm text-secondary-slate mt-1">We typically reply within 24 hours.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-secondary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-secondary-navy">Call Us</h3>
                            <p className="text-secondary-navy text-lg">+1 (925) 474-4422</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-secondary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-secondary-navy">Visit Us</h3>
                            <p className="text-secondary-navy text-lg">
                                130 FIG TREE LN APT 2B<br />
                                MARTINEZ, CA 94553
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-lg">
                 <Image
                    src="/about_story_image_1770633807908.png"
                    alt="Customer Support"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-secondary-navy/20" />
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-secondary-navy">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary-navy uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-secondary-light/30 border border-gray-200 focus:border-primary-red focus:bg-white focus:ring-2 focus:ring-primary-red/20 transition-all outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-navy uppercase tracking-wider">Company</label>
                    <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Inc."
                    className="w-full px-4 py-3 rounded-lg bg-secondary-light/30 border border-gray-200 focus:border-primary-red focus:bg-white focus:ring-2 focus:ring-primary-red/20 transition-all outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-navy uppercase tracking-wider">Job Title</label>
                    <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="Logistics Manager"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-light/30 border border-gray-200 focus:border-primary-red focus:bg-white focus:ring-2 focus:ring-primary-red/20 transition-all outline-none"
                    />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-navy uppercase tracking-wider">Email Address *</label>
                    <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-light/30 border border-gray-200 focus:border-primary-red focus:bg-white focus:ring-2 focus:ring-primary-red/20 transition-all outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-secondary-navy uppercase tracking-wider">Phone Number *</label>
                    <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 555-5555"
                    className="w-full px-4 py-3 rounded-lg bg-secondary-light/30 border border-gray-200 focus:border-primary-red focus:bg-white focus:ring-2 focus:ring-primary-red/20 transition-all outline-none"
                    />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary-navy uppercase tracking-wider">Leave a Message Here *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg bg-secondary-light/30 border border-gray-200 focus:border-primary-red focus:bg-white focus:ring-2 focus:ring-primary-red/20 transition-all outline-none resize-none"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <div className="flex items-center h-5">
                    <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5 text-primary-red border-gray-300 rounded focus:ring-primary-red cursor-pointer"
                    />
                </div>
                <div className="text-sm md:text-base">
                    <label htmlFor="terms" className="text-secondary-slate cursor-pointer select-none">
                    I agree to the 
                    </label>
                    <button 
                        type="button" 
                        onClick={() => setIsModalOpen(true)}
                        className="text-primary-red font-semibold hover:underline ml-1 focus:outline-none"
                    >
                        Terms & Conditions & Privacy Policy
                    </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 bg-gradient-to-r from-primary-red to-primary-orange text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 mt-4 flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                 {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA (Optional, keeping for consistency) */}
      <CallToAction />

    {/* 4. Privacy Policy Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-secondary-navy">Privacy Policy</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-secondary-navy transition-colors p-2 rounded-full hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="overflow-y-auto p-6 md:p-8 space-y-6 text-secondary-slate leading-relaxed">
              <div className="prose prose-slate max-w-none">
                <h3 className="text-lg font-bold text-secondary-navy mb-2">Effective Date: Feb 1, 2026</h3>
                <h3 className="text-xl font-bold text-secondary-navy mb-4">COPPA Privacy Policy</h3>

                <p className="mb-4">
                  At IGI Freight Solutions (“IGI Freight Solutions,” “we,” “our,” or “us”), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard information obtained through our website and online services (collectively, the “Services”).
                </p>
                <p className="mb-4">
                  This policy applies to all visitors and users of our website, accessible at <a href="https://www.igifreightsolutions.com" className="text-primary-red hover:underline">https://www.igifreightsolutions.com</a> (the “Site”).
                </p>
                <p className="mb-4">
                  We place special importance on protecting the privacy of children and strictly comply with the Children’s Online Privacy Protection Act of 1998 (COPPA). This law requires us to inform parents and guardians about how information is collected from children under the age of 13 and to obtain verified parental consent before collecting such information.
                </p>
                <p className="mb-4">
                  We encourage parents to guide their children on safe online practices and advise children to consult their parents before sharing any personal information online.
                </p>
                <p className="mb-4">
                  By accessing our Site or using our Services—or by allowing a child to do so—you agree to the terms outlined in this Privacy Policy and our Terms of Use.
                </p>

                <h3 className="text-xl font-bold text-secondary-navy mt-8 mb-4">Information We Collect</h3>
                <h4 className="text-lg font-semibold text-secondary-navy mb-2">Personal Information</h4>
                <p className="mb-4">
                  We only collect personal information when you voluntarily provide it to us. When you register on our Site or contact us, you may be asked to share basic details such as your name, email address, or other contact information (“Personal Information”).
                </p>
                <p className="mb-4">
                  We do not knowingly collect Personal Information from children under the age of 13 without verified parental consent. If we discover that such information has been collected without consent, we will promptly delete it. If you believe that a child under 13 has provided us with Personal Information without parental approval, please contact us at <a href="mailto:info@igifreightsolutions.com" className="text-primary-red hover:underline">info@igifreightsolutions.com</a>.
                </p>

                <h4 className="text-lg font-semibold text-secondary-navy mb-2">Usage Information</h4>
                <p className="mb-4">
                  Like most websites, we automatically collect certain non-personal data when you visit our Site. This may include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and language</li>
                  <li>Operating system</li>
                  <li>Referring and exit pages</li>
                  <li>Date and time of visits</li>
                  <li>Pages viewed and time spent on the Site</li>
                </ul>
                <p className="mb-4">
                  This information (“Usage Information”) helps us understand how visitors use our Site so we can improve functionality and performance. We collect this data using cookies and similar tracking technologies such as pixel tags or web beacons. You may choose to disable cookies through your browser settings; however, some features of the Site may not function properly as a result. We do not collect Personal Information through cookies. However, if you have provided Personal Information, it may be associated with Usage Information for analytical purposes.
                </p>

                <h3 className="text-xl font-bold text-secondary-navy mt-8 mb-4">SMS Communication Policy</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>IGI Freight Solutions does not share SMS consent or phone numbers with third parties.</li>
                  <li>SMS consent is obtained through an opt-in checkbox on our website.</li>
                  <li>You may opt out of SMS communications at any time by replying STOP or emailing <a href="mailto:info@igifreightsolutions.com" className="text-primary-red hover:underline">info@igifreightsolutions.com</a>.</li>
                  <li>Phone numbers and SMS data are used strictly for communication purposes and are never sold or shared.</li>
                </ul>

                <h3 className="text-xl font-bold text-secondary-navy mt-8 mb-4">How We Use Your Information</h3>
                <p className="mb-4">We use collected information responsibly and only for legitimate business purposes, including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Verifying your identity and managing user accounts</li>
                  <li>Responding to inquiries and service requests</li>
                  <li>Providing logistics, freight, and related services</li>
                  <li>Sending important service-related notifications</li>
                  <li>Improving website functionality and user experience</li>
                  <li>Analyzing traffic and usage trends</li>
                  <li>Preventing fraud and ensuring platform security</li>
                  <li>Complying with legal and regulatory requirements</li>
                </ul>
                <p className="mb-4">Any use of information will always align with this Privacy Policy.</p>

                <h3 className="text-xl font-bold text-secondary-navy mt-8 mb-4">Sharing of Information</h3>
                <p className="mb-4">We do not sell or rent your Personal Information to third parties for marketing purposes. We may share information only in the following situations:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>With trusted service providers who assist us with hosting, payments, or operations (under strict confidentiality agreements)</li>
                    <li>In the event of a merger, acquisition, or sale of company assets</li>
                    <li>When required by law, court order, or government request</li>
                    <li>To protect our rights, safety, property, or users</li>
                </ul>

                <h3 className="text-xl font-bold text-secondary-navy mt-8 mb-4">Data Security</h3>
                <p className="mb-4">
                  We implement commercially reasonable security measures to protect your Personal Information from unauthorized access, misuse, or disclosure. However, no method of online transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security. We recommend avoiding the transmission of sensitive information via email.
                </p>

                <h3 className="text-xl font-bold text-secondary-navy mt-8 mb-4">Accessing or Updating Your Information</h3>
                <p className="mb-4">
                  You may request to update, correct, or delete your account information by contacting us at <a href="mailto:info@igifreightsolutions.com" className="text-primary-red hover:underline">info@igifreightsolutions.com</a>. For parents or guardians, you may review or request deletion of your child’s information (if applicable) and withdraw consent for future data collection. We take steps to verify parental identity before processing such requests.
                </p>

                <h3 className="text-xl font-bold text-secondary-navy mt-8 mb-4">Your Communication Preferences</h3>
                <p className="mb-4">
                  If you no longer wish to receive promotional emails, you can unsubscribe using the link provided in our emails or by contacting us directly at <a href="mailto:info@igifreightsolutions.com" className="text-primary-red hover:underline">info@igifreightsolutions.com</a>.
                </p>

                <h3 className="text-xl font-bold text-secondary-navy mt-8 mb-4">Third-Party Links</h3>
                <p className="mb-4">
                  Our Site may contain links to third-party websites. IGI Freight Solutions is not responsible for the privacy practices or content of those external sites. We encourage you to review their privacy policies before sharing personal data.
                </p>

                <h3 className="text-xl font-bold text-secondary-navy mt-8 mb-4">International Users</h3>
                <p className="mb-4">
                  Our Site and Services are operated from the United States. If you access our Site from outside the U.S., please note that your information may be transferred to and processed in the United States. By using our Services, you consent to this transfer.
                </p>

                <h3 className="text-xl font-bold text-secondary-navy mt-8 mb-4">Changes to This Privacy Policy</h3>
                <p className="mb-4">
                  We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date. Continued use of the Site after changes are made constitutes acceptance of the revised policy.
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end bg-gray-50 rounded-b-2xl">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 bg-secondary-navy text-white font-bold rounded-lg hover:bg-secondary-navy/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Success Modal Popup */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 flex flex-col items-center text-center shadow-2xl animate-in fade-in zoom-in duration-200">
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
             </div>
             <h3 className="text-2xl font-bold text-secondary-navy mb-3">Message Sent!</h3>
             <p className="text-secondary-slate mb-8">
               Thank you for contacting us. We have received your message and will get back to you shortly.
             </p>
             <button
               onClick={() => setIsSuccessModalOpen(false)}
               className="w-full py-3 bg-gradient-to-r from-primary-red to-primary-orange text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all"
               >
               Close
             </button>
          </div>
        </div>
      )}
    </main>
  );
}
