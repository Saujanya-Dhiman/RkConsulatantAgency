"use client";

import { BRAND } from '@/lib/constants';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=Hello%20RK%20Consultant,%20I%20am%20interested%20in%20commercial%20properties%20in%20Mohali/Chandigarh.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 relative group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 -z-10 group-hover:hidden" />
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.116-2.905-6.993-1.876-1.878-4.36-2.91-6.993-2.913-5.439 0-9.863 4.42-9.866 9.865-.001 1.745.467 3.447 1.354 4.951L1.84 21.03l4.807-1.876zm8.983-5.333c.27-.135 1.605-.792 1.852-.882.247-.09.427-.135.607.135.18.27.697.882.854 1.057.157.176.315.197.585.063.27-.135 1.14-.42 2.172-1.34 1.002-.894 1.677-2.001 1.874-2.339.197-.338.02-.52-.149-.688-.152-.152-.338-.394-.507-.59-.169-.197-.225-.338-.338-.563-.112-.225-.056-.422-.028-.59.028-.169.247-.597.338-.816.09-.218.18-.366.112-.507-.068-.14-.247-.197-.584-.366-.338-.169-1.605-.792-1.852-.882-.247-.09-.45-.135-.63.135-.18.27-.697.882-.854 1.057-.157.176-.315.197-.585.063-.09-.045-.37-.136-.704-.435-.262-.234-.439-.523-.49-.613-.197-.338-.02-.52.149-.688.152-.152.338-.394.507-.59.169-.197.225-.338.338-.563.112-.225.056-.422.028-.59-.028-.169-.247-.597-.338-.816-.09-.218-.18-.366-.112-.507-.068-.14-.247-.197-.584-.366-.338-.169-1.605-.792-1.852-.882-.247-.09-.45-.135-.63.135-.18.27-.697.882-.854 1.057-.157.176-.315.197-.585.063-.27-.135-.427-.203-.697-.203-.27 0-.585.09-.855.366-1.125 1.226-1.755 2.999-1.755 5.096 0 4.117 2.992 8.082 3.42 8.646.428.563 5.89 8.995 14.287 12.625 1.997.863 3.557 1.378 4.773 1.764 2.008.638 3.837.548 5.281.332 1.61-.24 3.328-.98 3.802-1.886.474-.906.474-1.682.331-1.886-.143-.204-.528-.328-.81-.462z" />
        </svg>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${BRAND.phoneRaw}`}
        className="w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 relative group"
        aria-label="Call RK Consultant"
      >
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Call Experts
        </span>
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
        </svg>
      </a>
    </div>
  );
}
