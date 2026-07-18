"use client";

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import { getPropertyById } from '@/lib/data/properties';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const property = getPropertyById(id);

  // If property ID doesn't exist in listings
  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center space-y-6">
        <svg className="w-16 h-16 text-slate-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h1 className="text-3xl font-extrabold text-white">Commercial Asset Not Found</h1>
        <p className="text-slate-400 max-w-md mx-auto">
          The property ID you are attempting to review does not exist in our active database inventory. It may have been closed or archived.
        </p>
        <Link
          href="/properties"
          className="inline-block px-6 py-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-amber-500/10 transition-all"
        >
          Return to Catalog
        </Link>
      </div>
    );
  }

  // Active Photo Swapper State
  const [activePhoto, setActivePhoto] = useState(property.images[0]);

  // Lead Form States
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    email: '',
    visitDate: '',
    message: `Hi, I am interested in property ID ${property.id}: ${property.title}.`
  });

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadForm,
          propertyType: property.type,
          propertyId: property.id,
          propertyTitle: property.title
        })
      });
      if (response.ok) {
        setSubmitted(true);
        setLeadForm({ name: '', phone: '', email: '', visitDate: '', message: '' });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=Hello%20RK%20Consultant,%20I%20am%20interested%20in%20Property%20ID%20${property.id}:%20${encodeURIComponent(property.title)}%20(${property.priceLabel}).%20Please%20share%20layout%20drawings.`;

  const getFurnishingLabel = (f) => {
    return f.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  const getTypeLabel = (t) => {
    return t.charAt(0).toUpperCase() + t.slice(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back to listings bar */}
      <div className="mb-8">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Listings Catalog
        </Link>
      </div>

      {/* Primary Details Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
              property.purpose === 'rent' ? 'bg-amber-500 text-slate-950' : 'bg-blue-600 text-white'
            }`}>
              For {property.purpose === 'rent' ? 'Rent' : 'Sale'}
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-bold uppercase tracking-wider">
              {getTypeLabel(property.type)}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
              property.status === 'ready-to-move' ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/50' : 'bg-amber-950/80 text-amber-400 border-amber-800/50'
            }`}>
              {property.status === 'ready-to-move' ? 'Ready to Move' : 'Under Construction'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {property.title}
          </h1>
          <div className="flex items-center gap-1.5 text-sm text-slate-400 pl-0.5">
            <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span>{property.location}</span>
          </div>
        </div>
        <div className="shrink-0 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
          <span className="block text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Commercial Price</span>
          <span className="text-3xl font-extrabold text-amber-400 block">{property.priceLabel}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content Pane */}
        <div className="lg:col-span-2 space-y-12">
          {/* Photo Gallery Component */}
          <div className="space-y-4">
            <div className="w-full aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 relative">
              <img
                src={activePhoto}
                alt={property.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(img)}
                  className={`w-full aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all relative cursor-pointer ${
                    activePhoto === img ? 'border-amber-500 scale-[0.98]' : 'border-slate-850 hover:border-slate-700'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Asset Description */}
          <div className="bg-slate-900/10 border border-slate-900 p-8 rounded-3xl space-y-4">
            <h2 className="text-xl font-bold text-white tracking-wide">Property Description</h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {property.description}
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Strategically selected by {BRAND.founder}, this asset offers superb logistical layout structures, premium construction values, and direct accessibility to the primary highway networks. Highly recommended for commercial brands looking to establish a prominent footprint.
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white tracking-wide">Technical Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex justify-between items-center p-4 bg-slate-900/40 border border-slate-850 rounded-xl text-sm">
                <span className="text-slate-500 font-medium">Super Area</span>
                <span className="text-white font-semibold">{property.area.toLocaleString('en-IN')} sq.ft.</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-900/40 border border-slate-850 rounded-xl text-sm">
                <span className="text-slate-500 font-medium">Property Type</span>
                <span className="text-white font-semibold">{getTypeLabel(property.type)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-900/40 border border-slate-850 rounded-xl text-sm">
                <span className="text-slate-500 font-medium">Furnishing Status</span>
                <span className="text-white font-semibold">{getFurnishingLabel(property.furnishing)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-900/40 border border-slate-850 rounded-xl text-sm">
                <span className="text-slate-500 font-medium">Construction Status</span>
                <span className="text-white font-semibold">{property.status === 'ready-to-move' ? 'Ready to Move' : 'Under Construction'}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-900/40 border border-slate-850 rounded-xl text-sm">
                <span className="text-slate-500 font-medium">Transaction Type</span>
                <span className="text-white font-semibold uppercase">{property.purpose === 'rent' ? 'Lease / Rent' : 'Outright Purchase'}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-900/40 border border-slate-850 rounded-xl text-sm">
                <span className="text-slate-500 font-medium">Location Region</span>
                <span className="text-white font-semibold">{property.city}</span>
              </div>
            </div>
          </div>

          {/* Premium Amenities Grid */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white tracking-wide">Included Amenities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {property.amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-4 bg-slate-900/20 border border-slate-900 rounded-xl text-xs text-slate-300"
                >
                  <div className="w-5 h-5 rounded bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Location */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white tracking-wide">Property Location Map</h2>
            <div className="w-full h-80 rounded-3xl overflow-hidden border border-slate-800 shadow-xl">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.25!2d${property.coordinates.lng}!3d${property.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQxJzE2LjYiTiA3NsKwNDMnMDQuNCJF!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Property Map Location"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Sticky Lead Submission Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-slate-900/60 backdrop-blur-sm border border-slate-850 p-6 sm:p-8 rounded-3xl space-y-6">
            <h3 className="text-lg font-bold text-white mb-2">Schedule A Visit</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Book an appointment with {BRAND.founder} or our regional representative to evaluate this site in person.
            </p>

            {submitted ? (
              <div className="bg-emerald-950/40 border border-emerald-800 text-emerald-400 p-6 rounded-2xl text-center space-y-2">
                <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-sm font-bold text-white">Visit Scheduled!</h4>
                <p className="text-xs text-slate-300">We will call you shortly to confirm the timings.</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1 pl-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-xs text-slate-200 placeholder-slate-650 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1 pl-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    placeholder="Enter your phone"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-xs text-slate-200 placeholder-slate-650 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1 pl-1">Date of Visit</label>
                  <input
                    type="date"
                    required
                    value={leadForm.visitDate}
                    onChange={(e) => setLeadForm({ ...leadForm, visitDate: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-xs text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-500 mb-1 pl-1">Message</label>
                  <textarea
                    rows={3}
                    value={leadForm.message}
                    onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-xs text-slate-200 placeholder-slate-650 focus:outline-none focus:border-amber-500 transition-colors text-slate-300"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold rounded-lg text-xs hover:shadow-lg hover:shadow-amber-500/10 transition-all cursor-pointer disabled:opacity-50"
                >
                  {submitting ? "Booking..." : "Schedule Tour"}
                </button>
              </form>
            )}

            <div className="relative flex items-center justify-center my-6">
              <span className="absolute w-full h-[1px] bg-slate-800" />
              <span className="relative bg-slate-900 px-3 text-[10px] uppercase font-bold text-slate-500">OR Direct Call</span>
            </div>

            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900 border border-emerald-800/50 text-emerald-400 hover:text-white text-xs font-bold transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.116-2.905-6.993-1.876-1.878-4.36-2.91-6.993-2.913-5.439 0-9.863 4.42-9.866 9.865-.001 1.745.467 3.447 1.354 4.951L1.84 21.03l4.807-1.876zm8.983-5.333c.27-.135 1.605-.792 1.852-.882.247-.09.427-.135.607.135.18.27.697.882.854 1.057.157.176.315.197.585.063.27-.135 1.14-.42 2.172-1.34 1.002-.894 1.677-2.001 1.874-2.339.197-.338.02-.52-.149-.688-.152-.152-.338-.394-.507-.59-.169-.197-.225-.338-.338-.563-.112-.225-.056-.422-.028-.59.028-.169.247-.597.338-.816.09-.218.18-.366.112-.507-.068-.14-.247-.197-.584-.366-.338-.169-1.605-.792-1.852-.882-.247-.09-.45-.135-.63.135-.18.27-.697.882-.854 1.057-.157.176-.315.197-.585.063-.09-.045-.37-.136-.704-.435-.262-.234-.439-.523-.49-.613-.197-.338-.02-.52.149-.688.152-.152.338-.394.507-.59.169-.197.225-.338.338-.563.112-.225.056-.422.028-.59-.028-.169-.247-.597-.338-.816-.09-.218-.18-.366-.112-.507-.068-.14-.247-.197-.584-.366-.338-.169-1.605-.792-1.852-.882-.247-.09-.45-.135-.63.135-.18.27-.697.882-.854 1.057-.157.176-.315.197-.585.063-.27-.135-.427-.203-.697-.203-.27 0-.585.09-.855.366-1.125 1.226-1.755 2.999-1.755 5.096 0 4.117 2.992 8.082 3.42 8.646.428.563 5.89 8.995 14.287 12.625 1.997.863 3.557 1.378 4.773 1.764 2.008.638 3.837.548 5.281.332 1.61-.24 3.328-.98 3.802-1.886.474-.906.474-1.682.331-1.886-.143-.204-.528-.328-.81-.462z" />
                </svg>
                Inquire via WhatsApp
              </a>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
                </svg>
                Call Hotline
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
