import Link from 'next/link';
import { BRAND } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center font-bold text-slate-950 text-xl shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                RK
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-wide block leading-none">
                  {BRAND.name}
                </span>
                <span className="text-[10px] text-amber-400 font-semibold tracking-widest uppercase block mt-1">
                  Commercial Experts
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Leading commercial real estate consultancy in Mohali, Chandigarh, and Punjab. Specializing in retail spaces, offices, coworking environments, and warehouses. Trust {BRAND.founder} for premier advisory services.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {BRAND.social.facebook && (
                <a
                  href={BRAND.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400 hover:bg-slate-800/50 transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>
              )}
              {BRAND.social.instagram && (
                <a
                  href={BRAND.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400 hover:bg-slate-800/50 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
              )}
              {BRAND.social.youtube && (
                <a
                  href={BRAND.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-400 hover:bg-slate-800/50 transition-all"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-amber-400 transition-colors">Commercial Properties</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact & Map</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Our Expertise</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services#office-leasing" className="hover:text-amber-400 transition-colors">Office Leasing</Link>
              </li>
              <li>
                <Link href="/services#coworking-spaces" className="hover:text-amber-400 transition-colors">Coworking Space Solutions</Link>
              </li>
              <li>
                <Link href="/services#retail-leasing" className="hover:text-amber-400 transition-colors">Retail Showrooms</Link>
              </li>
              <li>
                <Link href="/services#warehousing" className="hover:text-amber-400 transition-colors">Industrial Warehousing</Link>
              </li>
              <li>
                <Link href="/services#investment-advisory" className="hover:text-amber-400 transition-colors">Real Estate Investment</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Contact Details</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed text-slate-300">
                  {BRAND.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${BRAND.phoneRaw}`} className="text-slate-300 hover:text-amber-400 transition-colors">
                  {BRAND.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${BRAND.email}`} className="text-slate-300 hover:text-amber-400 transition-colors break-all">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-900 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {currentYear} {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
