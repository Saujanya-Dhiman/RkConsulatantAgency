"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BRAND } from '@/lib/constants';
import { getFeaturedProperties } from '@/lib/data/properties';
import PropertyCard from '@/components/site/PropertyCard';

export default function Home() {
  const router = useRouter();
  const featured = getFeaturedProperties();

  // Search filter states
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Inquiry form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'office',
    message: ''
  });

  // FAQ state
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    let url = '/properties?';
    if (city) url += `city=${city}&`;
    if (type) url += `type=${type}&`;
    if (searchQuery) url += `query=${encodeURIComponent(searchQuery)}`;
    router.push(url);
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', phone: '', propertyType: 'office', message: '' });
      }
    } catch (error) {
      console.error("Error submitting inquiry", error);
    } finally {
      setSubmitting(false);
    }
  };

  const services = [
    {
      id: 'office-leasing',
      title: 'Corporate Office Leasing',
      desc: 'Premium fully-furnished and bare-shell IT park offices, corporate HQs, and business center units.',
      icon: (
        <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'coworking-spaces',
      title: 'Coworking Space Solutions',
      desc: 'Flexible hot desks, dedicated desks, and private cabins in modern, high-tech coworking hubs.',
      icon: (
        <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'retail-leasing',
      title: 'Retail Showrooms & Shops',
      desc: 'High-visibility retail locations, double-height showrooms, and high-footfall corner slots.',
      icon: (
        <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: 'warehousing',
      title: 'Industrial Warehouses',
      desc: 'Large storage facilities, e-commerce fulfillment hubs, and manufacturing warehouses with loading bays.',
      icon: (
        <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: 'investment-advisory',
      title: 'Real Estate Investment Advisory',
      desc: 'Expert high-ROI consulting, pre-leased property acquisitions, and assured rental projects.',
      icon: (
        <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2zm9-1v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    },
    {
      id: 'sales',
      title: 'Commercial Assets Sales',
      desc: 'Buy and sell commercial plots, pre-leased buildings, and ready-to-use business assets.',
      icon: (
        <svg className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16c1.657 0 3-.895 3-2s-1.343-2-3-2-3-.895-3-2 1.343-2 3-2m0 8V7m0 9v1" />
        </svg>
      )
    }
  ];

  const faqs = [
    {
      q: "What geographic locations do you cover?",
      a: `We specialize in the Greater Mohali area (~70% of our portfolio) including Sector 82, Phase 8B Industrial Area, Aerocity, and JLPL. We also list premium commercial properties in Chandigarh (Sector 17, Sector 35, Industrial Area) and adjoining cities like Zirakpur and Kharar.`
    },
    {
      q: "Do you offer spaces for corporate IT parks?",
      a: "Yes. We have deep listings in Mohali's premier IT parks and industrial zones (e.g., Phase 8B and Sector 82) providing state-of-the-art office setups, heavy power loads, and high-speed elevator facilities."
    },
    {
      q: "What is the consulting fee or broker commission structure?",
      a: "Our initial consultations, site visits, and requirements mapping are completely free of charge. standard real estate brokerage terms apply upon successful execution of lease/sale agreements, which we discuss transparently upfront."
    },
    {
      q: "Can you help customize a bare-shell office layout?",
      a: "Absolutely. We work closely with developers and verified fit-out contractors in the Mohali-Chandigarh region. We can coordinate custom partitions, cabins, server rooms, and AC ducting setups to match your company's specifications."
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Leading Commercial Real Estate Advisory
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Find Your Next High-Performance <br />
            <span className="text-gradient-gold">Commercial Space</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Exclusive offices, showrooms, retail plugs, and warehouses across Mohali and Chandigarh. Let {BRAND.founder} find the ideal location for your business growth.
          </p>

          {/* Search Console */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto bg-slate-900/80 backdrop-blur-md border border-slate-800 p-4 sm:p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">Search Keywords</label>
              <input
                type="text"
                placeholder="e.g. IT park office, Phase 8B showroom..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
            <div className="w-full md:w-48 shrink-0">
              <label className="block text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">City/Area</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="">All Locations</option>
                <option value="Mohali">Mohali</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Zirakpur">Zirakpur</option>
                <option value="Kharar">Kharar</option>
              </select>
            </div>
            <div className="w-full md:w-48 shrink-0">
              <label className="block text-left text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">Property Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="">All Types</option>
                <option value="office">Office Space</option>
                <option value="showroom">Showroom</option>
                <option value="retail">Retail Shop</option>
                <option value="warehouse">Warehouse</option>
              </select>
            </div>
            <div className="w-full md:w-44 shrink-0 flex items-end">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold py-2.5 rounded-lg text-sm hover:shadow-lg hover:shadow-amber-500/10 transition-all hover:-translate-y-0.5"
              >
                Search Space
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-900/40 border border-slate-900 rounded-3xl p-8 backdrop-blur-sm">
          <div className="text-center p-4">
            <span className="block text-4xl sm:text-5xl font-extrabold text-white mb-2">150+</span>
            <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest font-semibold">Commercial Deals Closed</span>
          </div>
          <div className="text-center p-4 border-l border-slate-800/50">
            <span className="block text-4xl sm:text-5xl font-extrabold text-white mb-2">500k+</span>
            <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest font-semibold">Sq. Ft. Leased/Sold</span>
          </div>
          <div className="text-center p-4 border-l border-slate-800/50">
            <span className="block text-4xl sm:text-5xl font-extrabold text-white mb-2">10+ Yrs</span>
            <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest font-semibold">Real Estate Expertise</span>
          </div>
          <div className="text-center p-4 border-l border-slate-800/50">
            <span className="block text-4xl sm:text-5xl font-extrabold text-white mb-2">98%</span>
            <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest font-semibold">Client Satisfaction Rate</span>
          </div>
        </div>
      </section>

      {/* 3. About Brief */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-900 border border-slate-800 overflow-hidden relative shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Ravi Kant Founder"
              className="w-full h-full object-cover grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </div>
          {/* Accent Frame */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 border-b-4 border-r-4 border-amber-500/30 rounded-br-2xl -z-10" />
        </div>
        <div className="space-y-6">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Leadership</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meet the Founder: <span className="text-gradient-gold">{BRAND.founder}</span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            With over a decade of deep commercial asset advisory, Ravi Kant has built RK Consultant on the foundation of transparency, research, and client-first execution. Based in Sahibzada Ajit Singh Nagar (Mohali), we navigate complex real estate transactions to deliver prime corporate leases and investments.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            Whether you are a startup needing a modern coworking setup or an established enterprise requiring a massive manufacturing warehouse, we customize listings to match your functional and financial specs.
          </p>
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              Learn More About Our Team
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Our Services */}
      <section className="bg-slate-900/20 border-t border-b border-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Core Competencies</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Our Commercial Expertise</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              RK Consultant offers a complete suite of services tailored to investors, businesses, and property owners in the Chandigarh & Mohali regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-2xl hover:border-amber-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-amber-400 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {svc.desc}
                </p>
                <Link
                  href={`/services#${svc.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider hover:text-amber-300 transition-colors"
                >
                  Explore Details
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Properties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Premium Inventory</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Featured Commercial Listings</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore high-ROI investment options and premium ready-to-move locations currently active in Mohali and Chandigarh.
            </p>
          </div>
          <div>
            <Link
              href="/properties"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-900 text-sm font-semibold text-white tracking-wide hover:-translate-y-0.5 transition-all shadow-md"
            >
              Browse All 42 Listings
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.slice(0, 3).map((item) => (
            <PropertyCard key={item.id} property={item} />
          ))}
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="bg-slate-900/20 border-t border-b border-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Why RK Consultant</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Competitive Advantage
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Finding the right commercial property is not just about picking a location. It requires extensive market study, strict regulatory checks, and powerful negotiation structures. Here is how we ensure seamless delivery:
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">100% Verified Inventory</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">We carry out title deed reviews, lease term matching, and municipal compliance verifications on every listed space.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">Unmatched Market Research</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">We advise you based on deep rental yield benchmarks, commercial traffic indices, and local industrial development roadmaps.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">Personalized Layout Auditing</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">We coordinate layout drawings, seating plans, air-conditioning specifications, and server architectures before final handovers.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Modern skyscraper"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Support Center</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-900 bg-slate-900/20 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left text-white font-semibold hover:bg-slate-900/40 transition-colors"
                >
                  <span>{faq.q}</span>
                  <svg className={`w-5 h-5 text-amber-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-900/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Contact Form and Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-slate-900/40 border border-slate-800/80 p-8 sm:p-10 rounded-3xl backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Request Callback</h2>
          <p className="text-slate-400 text-xs sm:text-sm mb-8">Leave your coordinates below. Ravi Kant or our advisor will contact you within 2 business hours.</p>
          
          {formSubmitted ? (
            <div className="bg-emerald-950/40 border border-emerald-800 text-emerald-400 p-6 rounded-2xl text-center space-y-3">
              <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-bold text-white">Callback Scheduled Successfully</h3>
              <p className="text-slate-300 text-sm">Thank you! We will reach out to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">Target Property Type</label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="office">Office Space</option>
                  <option value="showroom">Retail Showroom</option>
                  <option value="retail">Retail Shop</option>
                  <option value="warehouse">Industrial Warehouse</option>
                  <option value="investment">Commercial Investment</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 pl-1">Message / Requirements</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Outline your requirements (e.g. 5,000 sq ft office in Sector 82 with 100 workstations)..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold rounded-lg text-sm hover:shadow-lg hover:shadow-amber-500/10 transition-all cursor-pointer disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Submit Request"}
              </button>
            </form>
          )}
        </div>

        {/* Map & Office Address */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6 mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">Head Office Location</span>
            <h2 className="text-3xl font-extrabold text-white">Visit Our Office</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We are located at Modern Tower, Sahibzada Ajit Singh Nagar, Sahibzada Ajit Singh Nagar, Punjab. Drop by for a face-to-face consultation.
            </p>
            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">
              <span className="block text-xs text-slate-500 font-bold uppercase mb-1">Corporate Address</span>
              <span className="text-white text-sm leading-relaxed font-semibold block">{BRAND.address}</span>
            </div>
          </div>
          
          <div className="w-full h-80 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.2586738982365!2d76.70295831513077!3d30.682977481545607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee662df94d3f%3A0xe543c7b2756ef259!2sSector%2075%2C%20Industrial%20Area%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="RK Consultant Map Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
