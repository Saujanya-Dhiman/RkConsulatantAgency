import Link from 'next/link';
import { BRAND } from '@/lib/constants';

export default function ServicesPage() {
  const serviceBlocks = [
    {
      id: 'office-leasing',
      title: 'Corporate Office Leasing',
      subtitle: 'Find spaces for growth',
      desc: 'We assist IT firms, multinational corporations, startups, and service centers in acquiring premium office properties. From fully-fitted tech hubs in Phase 8B to customized bare-shell units in Sector 82, we analyze seating requirements, fire exit standards, and power back-ups.',
      points: [
        'A-grade tech park offices and business center listings',
        'Verification of heavy electrical loads and HVAC systems',
        'Custom layout seating diagrams and design consulting',
        'Strict auditing of municipal certifications and lease terms'
      ],
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      action: 'Search Office Spaces'
    },
    {
      id: 'coworking-spaces',
      title: 'Flexible Coworking Solutions',
      subtitle: 'Modern workspace models',
      desc: 'Seeking agile scaling options without heavy capital expenditure? We partner with leading coworking brands and private builders in Mohali and Chandigarh to provide hot desks, dedicated workstations, executive suites, and corporate branch cabins.',
      points: [
        'Flexible month-to-month subscription plans',
        'Fully-equipped meeting rooms, high-speed Wi-Fi, and pantry support',
        'Rapid set-up for branch offices and distributed workforces',
        'Best-in-class pricing packages locked in by our negotiators'
      ],
      img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      action: 'Enquire About Desks'
    },
    {
      id: 'retail-leasing',
      title: 'Retail Showrooms & Shops',
      subtitle: 'High visibility locations',
      desc: 'Branding is about visibility. We help premium retail brands, fashion chains, car dealerships, and restaurants secure double-height road-facing showrooms in Mohali\'s top retail corridors and Chandigarh\'s premium sectors.',
      points: [
        'Prime roadside frontage slots with massive display glass boards',
        'Analysis of footfall patterns and neighborhood demographics',
        'Securing licenses for restaurants and commercial retail plugins',
        'Custom structural checks for heavy retail weight loads'
      ],
      img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80',
      action: 'Browse Retail Listings'
    },
    {
      id: 'warehousing',
      title: 'Industrial Warehouses & Logistics',
      subtitle: 'Heavy logistics facilities',
      desc: 'Need strategic storage setups for logistics or e-commerce? We represent huge industrial warehouse facilities near Kharar highway and Dera Bassi. Featuring high ceiling heights (over 28 feet), multiple loading docks, and heavy trailer access routes.',
      points: [
        'Logistics parks with concrete flooring and insulated sheets',
        'Multiple mechanical dock levellers and wide entrance bays',
        'Built-in office cabin spaces for logistics managers',
        '24/7 security guard networks and fire sprinklers'
      ],
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      action: 'View Warehouses'
    },
    {
      id: 'investment-advisory',
      title: 'Real Estate Investment Advisory',
      subtitle: 'Secure your financial future',
      desc: 'Get high-yielding investment advisory from Ravi Kant himself. We specialize in sourcing pre-leased commercial units with high-pedigree corporate tenants, yielding 7-9% rental returns, and locking down capital appreciation projects.',
      points: [
        'Access to off-market pre-leased bank and MNC assets',
        'Detailed financial ROI comparative calculations',
        'Assistance in tenant renewal contracts and escrow structures',
        'Structuring co-investment commercial portfolios'
      ],
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      action: 'Book Expert Advisory'
    },
    {
      id: 'sales',
      title: 'Commercial Assets Sales',
      subtitle: 'Acquire and trade assets',
      desc: 'Whether buying land to develop an IT park or selling an existing corporate showroom, we coordinate clean real estate transactions. We take care of registry entries, developer permissions, and state authority transfers.',
      points: [
        'Commercial SCO plots in sectors 82 and Aerocity',
        'Outright purchase of ready business centers and showroom shells',
        'Verification of state government property transfer NOCs',
        'Title verification and clean registration handovers'
      ],
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      action: 'Contact Sales Hotline'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Services Header */}
      <section className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Capabilities</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Expert Commercial Advisory</h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            RK Consultant is the premier advisor for businesses and investors looking for commercial spaces. We provide deep technical, financial, and legal audits on every site.
          </p>
        </div>
      </section>

      {/* Services Sections Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {serviceBlocks.map((svc, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              id={svc.id}
              key={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-slate-900 pb-16 last:border-0 scroll-mt-28 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Pane */}
              <div className={`relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl ${
                isEven ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content Pane */}
              <div className={`space-y-6 ${
                isEven ? 'lg:order-2' : 'lg:order-1'
              }`}>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{svc.subtitle}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{svc.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
                
                <ul className="space-y-3 pt-2">
                  {svc.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    href={`/properties?type=${svc.id === 'sales' ? '' : svc.id === 'investment-advisory' ? '' : svc.id === 'coworking-spaces' ? 'office' : svc.id}`}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                  >
                    {svc.action}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
