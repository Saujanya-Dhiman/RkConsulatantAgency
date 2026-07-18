"use client";

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PROPERTIES } from '@/lib/data/properties';
import PropertyCard from '@/components/site/PropertyCard';

function PropertiesCatalog() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Filter States
  const [city, setCity] = useState(searchParams.get('city') || '');
  const [type, setType] = useState(searchParams.get('type') || '');
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [purpose, setPurpose] = useState(searchParams.get('purpose') || '');
  const [furnishing, setFurnishing] = useState('');
  const [status, setStatus] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [areaRange, setAreaRange] = useState('');

  // Sync with URL query parameters if they change
  useEffect(() => {
    const urlCity = searchParams.get('city');
    const urlType = searchParams.get('type');
    const urlQuery = searchParams.get('query');
    const urlPurpose = searchParams.get('purpose');
    
    if (urlCity !== null) setCity(urlCity);
    if (urlType !== null) setType(urlType);
    if (urlQuery !== null) setQuery(urlQuery);
    if (urlPurpose !== null) setPurpose(urlPurpose);
  }, [searchParams]);

  // Derived Filtered List
  const filteredProperties = PROPERTIES.filter((prop) => {
    // City filter
    if (city && prop.city.toLowerCase() !== city.toLowerCase()) return false;
    
    // Type filter
    if (type && prop.type !== type) return false;
    
    // Purpose filter (Rent / Sale)
    if (purpose && prop.purpose !== purpose) return false;
    
    // Furnishing filter
    if (furnishing && prop.furnishing !== furnishing) return false;
    
    // Status filter
    if (status && prop.status !== status) return false;

    // Search Query (matches title, location, description)
    if (query) {
      const q = query.toLowerCase();
      const matchTitle = prop.title.toLowerCase().includes(q);
      const matchLoc = prop.location.toLowerCase().includes(q);
      const matchDesc = prop.description.toLowerCase().includes(q);
      if (!matchTitle && !matchLoc && !matchDesc) return false;
    }

    // Budget range filter
    if (budgetRange) {
      if (prop.purpose === 'rent') {
        if (budgetRange === 'under-50k' && prop.price > 50000) return false;
        if (budgetRange === '50k-1l' && (prop.price < 50000 || prop.price > 100000)) return false;
        if (budgetRange === '1l-3l' && (prop.price < 100000 || prop.price > 300000)) return false;
        if (budgetRange === 'above-3l' && prop.price < 300000) return false;
      } else {
        if (budgetRange === 'under-1cr' && prop.price > 10000000) return false;
        if (budgetRange === '1cr-3cr' && (prop.price < 10000000 || prop.price > 30000000)) return false;
        if (budgetRange === 'above-3cr' && prop.price < 30000000) return false;
      }
    }

    // Area size range filter (sq.ft.)
    if (areaRange) {
      if (areaRange === 'under-1000' && prop.area > 1000) return false;
      if (areaRange === '1000-2500' && (prop.area < 1000 || prop.area > 2500)) return false;
      if (areaRange === '2500-5000' && (prop.area < 2500 || prop.area > 5000)) return false;
      if (areaRange === 'above-5000' && prop.area < 5000) return false;
    }

    return true;
  });

  const clearFilters = () => {
    setCity('');
    setType('');
    setQuery('');
    setPurpose('');
    setFurnishing('');
    setStatus('');
    setBudgetRange('');
    setAreaRange('');
    router.push('/properties');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="mb-12 space-y-4">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Premium Commercial Index</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Available Commercial Spaces</h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
          Browse verified premium commercial listings, offices, double-height showrooms, retail bays, and logistic warehouses. Filter to match your exact parameters.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Left Side: Filter Console */}
        <aside className="lg:col-span-1 space-y-8 bg-slate-900/40 border border-slate-800 p-6 rounded-2xl h-fit">
          <div className="flex items-center justify-between">
            <h2 className="text-white font-bold text-lg">Filters</h2>
            <button
              onClick={clearFilters}
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold cursor-pointer underline"
            >
              Clear All
            </button>
          </div>

          {/* Keyword Search */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">Search Keywords</label>
            <input
              type="text"
              placeholder="e.g. IT Park, Phase 8B..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Location Dropdown */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">City / Region</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value="">All Regions</option>
              <option value="Mohali">Mohali</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Zirakpur">Zirakpur</option>
              <option value="Kharar">Kharar</option>
            </select>
          </div>

          {/* Property Type Selector */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">Property Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value="">All Types</option>
              <option value="office">Office Space</option>
              <option value="showroom">Showroom</option>
              <option value="retail">Retail Shop</option>
              <option value="warehouse">Warehouse</option>
            </select>
          </div>

          {/* Purpose (Rent vs. Buy) */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">Listed For</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setPurpose(purpose === 'rent' ? '' : 'rent')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${
                  purpose === 'rent'
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/10'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                Rent
              </button>
              <button
                type="button"
                onClick={() => setPurpose(purpose === 'sale' ? '' : 'sale')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${
                  purpose === 'sale'
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/10'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                Sale
              </button>
            </div>
          </div>

          {/* Budget Filter */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">
              Budget Range {purpose && `(For ${purpose})`}
            </label>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value="">No Budget Limit</option>
              {purpose !== 'sale' ? (
                <>
                  <option value="under-50k">Under ₹50,000 / mo</option>
                  <option value="50k-1l">₹50,000 - ₹1,000,000 / mo</option>
                  <option value="1l-3l">₹1 Lakh - ₹3 Lakh / mo</option>
                  <option value="above-3l">Above ₹3 Lakh / mo</option>
                </>
              ) : (
                <>
                  <option value="under-1cr">Under ₹1 Crore</option>
                  <option value="1cr-3cr">₹1 Crore - ₹3 Crore</option>
                  <option value="above-3cr">Above ₹3 Crore</option>
                </>
              )}
            </select>
          </div>

          {/* Area Range Filter */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">Super Area (sq.ft.)</label>
            <select
              value={areaRange}
              onChange={(e) => setAreaRange(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value="">No Size Limit</option>
              <option value="under-1000">Under 1,000 sq.ft.</option>
              <option value="1000-2500">1,000 - 2,500 sq.ft.</option>
              <option value="2500-5000">2,500 - 5,000 sq.ft.</option>
              <option value="above-5000">Above 5,000 sq.ft.</option>
            </select>
          </div>

          {/* Furnishing Status */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">Furnishing Status</label>
            <select
              value={furnishing}
              onChange={(e) => setFurnishing(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value="">All Furnishing</option>
              <option value="fully-furnished">Fully Furnished</option>
              <option value="semi-furnished">Semi Furnished</option>
              <option value="bare-shell">Bare Shell</option>
            </select>
          </div>

          {/* Construction Status */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pl-1">Construction Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-sm text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value="">All Statuses</option>
              <option value="ready-to-move">Ready To Move</option>
              <option value="under-construction">Under Construction</option>
            </select>
          </div>
        </aside>

        {/* Right Side: Listings Catalog Grid */}
        <section className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center bg-slate-900/10 border border-slate-900 p-4 rounded-xl text-xs text-slate-400">
            <span>
              Showing <strong className="text-white">{filteredProperties.length}</strong> commercial properties
            </span>
            {filteredProperties.length > 0 && (
              <span>Sort: Featured First</span>
            )}
          </div>

          {filteredProperties.length === 0 ? (
            <div className="bg-slate-900/20 border border-slate-850 p-16 text-center rounded-3xl space-y-4">
              <svg className="w-16 h-16 text-slate-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              <h3 className="text-white font-bold text-xl">No Matching Properties Found</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                No active listings match your current filter parameters. Try loosening your keywords or reset all filters.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm hover:shadow-lg shadow-amber-500/10 transition-all cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProperties.map((item) => (
                <PropertyCard key={item.id} property={item} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-slate-400">
        <span className="inline-block w-8 h-8 rounded-full border-2 border-t-amber-500 border-slate-800 animate-spin mb-4" />
        <p className="text-sm">Loading properties database...</p>
      </div>
    }>
      <PropertiesCatalog />
    </Suspense>
  );
}
