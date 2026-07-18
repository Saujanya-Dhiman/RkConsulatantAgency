import { BRAND } from '@/lib/constants';

export default function AboutPage() {
  const values = [
    {
      title: 'Integrity First',
      desc: 'We conduct all operations with complete transparency, verified pricing, and legal documentation.',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Local Authority',
      desc: 'Over a decade of tracking micro-markets in Mohali (Sector 82, Phase 8B) and Chandigarh sectors.',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Client Centricity',
      desc: 'We map property specs, seating layouts, power loads, and budget boundaries before suggesting sites.',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: 'Strategic Negotiation',
      desc: 'Getting our clients the best lease terms, fit-out periods, and locked-in renewal conditions.',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Page Header */}
      <section className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">About Our Brand</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">The Commercial Experts</h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            RK Consultant is built on a foundation of local expertise, deep developer integrations, and highly ethical advisory practices. We help corporate brands settle in Punjab.
          </p>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
            alt="Ravi Kant"
            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="space-y-6">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">Founder's Message</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            "Transparency in commercial assets is our driving commitment."
          </h2>
          <div className="h-0.5 w-16 bg-amber-500 rounded-full" />
          <p className="text-slate-400 text-sm leading-relaxed">
            Commercial real estate transactions in Punjab are often complex and poorly documented. At RK Consultant, our mission is to eliminate information gaps. We build detailed layout guides, verify electric loading limits, audit RERA registration certificates, and run comparative financial schedules before advising you.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Over the past decade, we have helped dozens of retail storefronts, logistics hubs, and IT companies establish offices in Sector 82, Phase 8B, and Chandigarh. We welcome you to try our services and experience our customized consultancy firsthand.
          </p>
          <div>
            <span className="block text-white font-bold text-lg">{BRAND.founder}</span>
            <span className="block text-slate-500 text-xs font-semibold uppercase tracking-wider">Managing Director, {BRAND.name}</span>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-slate-900/20 border-t border-b border-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-900/40 border border-slate-850 p-8 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl">Our Mission</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              To supply premium verified commercial inventory with clear title records, simplifying search flows and accelerating handovers for corporates and retail brands.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-850 p-8 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl">Our Vision</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              To be recognized as Punjab's most trusted partner for commercial asset portfolios, offering unparalleled research intelligence and smooth asset closures.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our DNA</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Our Core Values</h2>
          <p className="text-slate-400 text-sm">Four key principles that govern every transaction and site tour we facilitate.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-slate-900/30 border border-slate-900/80 p-6 rounded-2xl space-y-4 hover:border-amber-500/20 transition-colors"
            >
              <div className="w-10 h-10 rounded bg-slate-950 border border-slate-850 flex items-center justify-center">
                {v.icon}
              </div>
              <h4 className="text-white font-bold text-base">{v.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
