"use client";

import { useState } from 'react';
import { BRAND } from '@/lib/constants';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'office',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData)
      });
      if (response.ok) {
        setSubmitted(true);
        setContactData({ name: '', email: '', phone: '', propertyType: 'office', message: '' });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=Hi%20RK%20Consultant,%20I%20would%20like%20to%20schedule%20a%20commercial%20asset%20consultation%20visit.`;

  return (
    <div className="space-y-20 pb-20">
      {/* Page Header */}
      <section className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Connect With Us</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Contact Our Head Office</h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have questions about a commercial property listing or wish to discuss an investment? Contact Ravi Kant directly or drop us an email.
          </p>
        </div>
      </section>

      {/* Main Content Info and Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Contact Info Cards */}
        <div className="lg:col-span-1 space-y-6">
          {/* Card 1: Phone */}
          <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-1">Direct Call</h3>
              <a href={`tel:${BRAND.phoneRaw}`} className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                {BRAND.phone}
              </a>
              <span className="block text-[10px] text-slate-500 mt-1 uppercase font-semibold">Available 9am to 8pm</span>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="text-white font-bold text-base mb-1">Email Inquiries</h3>
              <a href={`mailto:${BRAND.email}`} className="text-slate-400 hover:text-amber-400 text-sm transition-colors break-all">
                {BRAND.email}
              </a>
              <span className="block text-[10px] text-slate-500 mt-1 uppercase font-semibold">Responses in 24 hours</span>
            </div>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.116.55 4.103 1.597 5.845L0 24l6.335-1.662c1.696.924 3.63 1.411 5.673 1.412 6.626 0 12.004-5.379 12.004-12.004C24.012 5.378 18.63 0 12.004 0zm0 22c-1.808 0-3.528-.484-5.02-1.402l-.36-.215-3.736.98.997-3.642-.236-.375c-1.01-1.607-1.548-3.473-1.548-5.346 0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-1">WhatsApp Chat</h3>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                Chat With Experts
              </a>
              <span className="block text-[10px] text-slate-500 mt-1 uppercase font-semibold">Instant Response</span>
            </div>
          </div>

          {/* Card 4: Address */}
          <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-1">Corporate Office</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {BRAND.address}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Message Callback Form */}
        <div className="lg:col-span-2 bg-slate-900/20 border border-slate-900 p-8 sm:p-10 rounded-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Send Us A Message</h2>
          <p className="text-slate-400 text-xs sm:text-sm mb-8">Leave your specifications below and a regional commercial property manager will call you back.</p>
          
          {submitted ? (
            <div className="bg-emerald-950/40 border border-emerald-800 text-emerald-400 p-8 rounded-2xl text-center space-y-4">
              <svg className="w-14 h-14 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-white">Form Submitted Successfully</h3>
              <p className="text-slate-300 text-sm">We have received your parameters and will get in touch with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 placeholder-slate-650 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={contactData.phone}
                    onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-850 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 placeholder-slate-650 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="e.g. +91 91151 40468"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-850 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 placeholder-slate-650 focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="e.g. name@company.com"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">I am looking for</label>
                <select
                  value={contactData.propertyType}
                  onChange={(e) => setContactData({ ...contactData, propertyType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-850 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="office">Office Leasing</option>
                  <option value="showroom">Retail Showroom</option>
                  <option value="retail">Retail Shop Space</option>
                  <option value="warehouse">Industrial Warehouse</option>
                  <option value="investment">Commercial Investment</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">Requirements Message</label>
                <textarea
                  rows={4}
                  required
                  value={contactData.message}
                  onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-850 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 placeholder-slate-650 focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Mention target areas, size requirements, budget limits, etc."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold rounded-lg text-sm hover:shadow-lg hover:shadow-amber-500/10 transition-all cursor-pointer disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Embedded Maps Location Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[450px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.2586738982365!2d76.70295831513077!3d30.682977481545607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee662df94d3f%3A0xe543c7b2756ef259!2sSector%2075%2C%20Industrial%20Area%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="RK Consultant Head Office Location Map"
          />
        </div>
      </section>
    </div>
  );
}
