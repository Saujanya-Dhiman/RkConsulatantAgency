import Link from 'next/link';
import { BRAND } from '@/lib/constants';

export default function PropertyCard({ property }) {
  const { id, title, type, city, location, priceLabel, purpose, area, furnishing, status, images } = property;

  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=Hi%20RK%20Consultant,%20I%20am%20interested%20in%20property%20ID%20${id}:%20${encodeURIComponent(title)}%20located%20at%20${encodeURIComponent(location)}.`;

  // Helper for displaying friendly label formatting
  const getFurnishingLabel = (f) => {
    return f.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  const getTypeLabel = (t) => {
    return t.charAt(0).toUpperCase() + t.slice(1);
  };

  return (
    <div className="group bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] transition-all duration-300 flex flex-col h-full">
      {/* Property Image */}
      <div className="relative h-60 w-full overflow-hidden shrink-0">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badges overlay */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
            purpose === 'rent' 
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10' 
              : 'bg-blue-600 text-white shadow-md shadow-blue-500/10'
          }`}>
            For {purpose === 'rent' ? 'Rent' : 'Sale'}
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-sm text-slate-300 text-[10px] font-bold uppercase tracking-wider">
            {getTypeLabel(type)}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border backdrop-blur-md ${
            status === 'ready-to-move'
              ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/50'
              : 'bg-amber-950/80 text-amber-400 border-amber-800/50'
          }`}>
            {status === 'ready-to-move' ? 'Ready to Move' : 'Under Construction'}
          </span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Location & Title */}
        <div className="flex items-center gap-1 text-xs text-slate-400 mb-2">
          <svg className="w-3.5 h-3.5 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <span className="truncate">{location}</span>
        </div>
        <h3 className="text-white font-semibold text-lg leading-snug mb-4 group-hover:text-amber-400 transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-800/80 py-4 mb-6 mt-auto">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-slate-800/50 text-slate-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block leading-none">Super Area</span>
              <span className="text-sm font-semibold text-slate-200">{area.toLocaleString('en-IN')} sq.ft.</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-slate-800/50 text-slate-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 block leading-none">Furnishing</span>
              <span className="text-sm font-semibold text-slate-200 truncate max-w-[110px] block">{getFurnishingLabel(furnishing)}</span>
            </div>
          </div>
        </div>

        {/* Pricing and Action */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-semibold">Pricing</span>
            <span className="text-lg font-bold text-amber-400">{priceLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            {/* WhatsApp Icon */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-emerald-950/50 hover:bg-emerald-900 border border-emerald-800/50 text-emerald-400 hover:text-white transition-colors"
              title="Quick WhatsApp Inquiry"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.116-2.905-6.993-1.876-1.878-4.36-2.91-6.993-2.913-5.439 0-9.863 4.42-9.866 9.865-.001 1.745.467 3.447 1.354 4.951L1.84 21.03l4.807-1.876zm8.983-5.333c.27-.135 1.605-.792 1.852-.882.247-.09.427-.135.607.135.18.27.697.882.854 1.057.157.176.315.197.585.063.27-.135 1.14-.42 2.172-1.34 1.002-.894 1.677-2.001 1.874-2.339.197-.338.02-.52-.149-.688-.152-.152-.338-.394-.507-.59-.169-.197-.225-.338-.338-.563-.112-.225-.056-.422-.028-.59.028-.169.247-.597.338-.816.09-.218.18-.366.112-.507-.068-.14-.247-.197-.584-.366-.338-.169-1.605-.792-1.852-.882-.247-.09-.45-.135-.63.135-.18.27-.697.882-.854 1.057-.157.176-.315.197-.585.063-.09-.045-.37-.136-.704-.435-.262-.234-.439-.523-.49-.613-.197-.338-.02-.52.149-.688.152-.152.338-.394.507-.59.169-.197.225-.338.338-.563.112-.225.056-.422.028-.59-.028-.169-.247-.597-.338-.816-.09-.218-.18-.366-.112-.507-.068-.14-.247-.197-.584-.366-.338-.169-1.605-.792-1.852-.882-.247-.09-.45-.135-.63.135-.18.27-.697.882-.854 1.057-.157.176-.315.197-.585.063-.27-.135-.427-.203-.697-.203-.27 0-.585.09-.855.366-1.125 1.226-1.755 2.999-1.755 5.096 0 4.117 2.992 8.082 3.42 8.646.428.563 5.89 8.995 14.287 12.625 1.997.863 3.557 1.378 4.773 1.764 2.008.638 3.837.548 5.281.332 1.61-.24 3.328-.98 3.802-1.886.474-.906.474-1.682.331-1.886-.143-.204-.528-.328-.81-.462z" />
              </svg>
            </a>
            {/* Details Link */}
            <Link
              href={`/properties/${id}`}
              className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold hover:-translate-y-0.5 transition-all shadow-md"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
