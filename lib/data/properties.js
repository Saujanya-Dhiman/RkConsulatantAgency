// Commercial real estate listings generator for RK Consultant
const PROPERTY_IMAGES = {
  office: [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'
  ],
  showroom: [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80'
  ],
  retail: [
    'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
  ],
  warehouse: [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1590247813693-5541f1c0078a?auto=format&fit=crop&w=800&q=80'
  ]
};

const AMENITIES = {
  office: ['24/7 Security', 'Power Backup', 'High-Speed Lifts', 'Reserved Parking', 'Central AC', 'Conference Room', 'Pantry', 'Fire Fighting System', 'Wi-Fi Enabled', 'Visitor Parking'],
  showroom: ['Double Height Ceiling', 'Road Facing Frontage', 'Ample Parking', 'Power Backup', 'Heavy Footfall Area', '24/7 Security', 'Loading/Unloading Bay', 'Escalators', 'Fire Alarms'],
  retail: ['Centrally Air Conditioned', 'Food Court Nearby', 'Escalators & Lifts', 'Multi-level Parking', '24/7 Security', 'Power Backup', 'High Visibility Display', 'Washrooms'],
  warehouse: ['Heavy Vehicle Access', 'High Ceiling (25ft+)', 'Loading Docks', 'Insulated Roofing', 'Office Cabin Space', '24/7 Security', 'Fire Sprinklers', 'Water Storage', 'Wide Entry Gate']
};

const MOHALI_SECTORS = [
  'Phase 8B, Industrial Area',
  'Sector 82, Industrial Area',
  'Sector 74, Industrial Area',
  'Phase 7, Mohali',
  'Sector 62 (Phase 8), Mohali',
  'Aerocity, Mohali',
  'JLPL Industrial Area, Sector 82',
  'Phase 9, Mohali',
  'Sector 67, Mohali'
];

const CHANDIGARH_SECTORS = [
  'Sector 17, Chandigarh',
  'Sector 35, Chandigarh',
  'Industrial Area Phase 1',
  'Industrial Area Phase 2',
  'Sector 9, Chandigarh',
  'Sector 8, Chandigarh'
];

const NEARBY_AREAS = [
  'VIP Road, Zirakpur',
  'Kharar-Ludhiana Road, Kharar',
  'Dera Bassi Industrial Area'
];

const generateProperties = () => {
  const list = [];
  
  // Total 42 properties
  // Mohali: ~70% (30 listings)
  // Chandigarh: ~25% (10 listings)
  // Nearby: ~5% (2 listings)
  
  for (let i = 1; i <= 42; i++) {
    let city = 'Mohali';
    let sector = '';
    
    if (i <= 30) {
      city = 'Mohali';
      sector = MOHALI_SECTORS[(i - 1) % MOHALI_SECTORS.length];
    } else if (i <= 40) {
      city = 'Chandigarh';
      sector = CHANDIGARH_SECTORS[(i - 31) % CHANDIGARH_SECTORS.length];
    } else {
      city = i === 41 ? 'Zirakpur' : 'Kharar';
      sector = NEARBY_AREAS[(i - 41) % NEARBY_AREAS.length];
    }

    // Determine type
    let type = 'office';
    if (i % 4 === 1) type = 'office';
    else if (i % 4 === 2) type = 'showroom';
    else if (i % 4 === 3) type = 'retail';
    else type = 'warehouse';

    // Purpose: 80% rent, 20% sale
    const purpose = i % 5 === 0 ? 'sale' : 'rent';

    // Size: 500 to 15000 sqft
    let area = 0;
    if (type === 'office') area = 800 + ((i * 130) % 3500);
    else if (type === 'showroom') area = 1500 + ((i * 240) % 4000);
    else if (type === 'retail') area = 400 + ((i * 90) % 2000);
    else area = 5000 + ((i * 750) % 15000);

    // Furnishing status
    const furnishingList = ['fully-furnished', 'semi-furnished', 'bare-shell'];
    const furnishing = furnishingList[(i * 7) % furnishingList.length];

    // Construction status
    const status = i % 7 === 0 ? 'under-construction' : 'ready-to-move';

    // Price calculation
    let price = 0;
    if (purpose === 'rent') {
      // Rent per sqft: Office: 40-70, Showroom: 80-150, Retail: 60-120, Warehouse: 15-25
      let rate = 45;
      if (type === 'office') rate = 40 + (i % 30);
      else if (type === 'showroom') rate = 80 + (i % 70);
      else if (type === 'retail') rate = 65 + (i % 55);
      else rate = 16 + (i % 9);
      price = Math.round((area * rate) / 500) * 500; // round to nearest 500
    } else {
      // Sale price per sqft: Office: 6000-9000, Showroom: 12000-20000, Retail: 10000-18000, Warehouse: 3000-5000
      let rate = 7000;
      if (type === 'office') rate = 6000 + (i % 4) * 1000;
      else if (type === 'showroom') rate = 12000 + (i % 5) * 2000;
      else if (type === 'retail') rate = 10000 + (i % 4) * 2000;
      else rate = 3000 + (i % 3) * 1000;
      price = Math.round((area * rate) / 50000) * 50000;
    }

    // Format price label
    let priceLabel = '';
    if (purpose === 'rent') {
      priceLabel = `₹${price.toLocaleString('en-IN')} / mo`;
    } else {
      if (price >= 10000000) {
        priceLabel = `₹${(price / 10000000).toFixed(2)} Cr`;
      } else {
        priceLabel = `₹${(price / 100000).toFixed(2)} L`;
      }
    }

    // Images
    const imgs = PROPERTY_IMAGES[type];
    const imageList = [
      imgs[(i) % imgs.length],
      imgs[(i + 1) % imgs.length],
      imgs[(i + 2) % imgs.length]
    ];

    // Titles and Descriptions
    let title = '';
    let desc = '';
    const num = sector.split(' ')[1] || sector.split(',')[0];
    
    if (type === 'office') {
      title = `${furnishing.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Commercial Office space in ${sector}`;
      desc = `This premium commercial office space of ${area} sq.ft. is situated in the prime business hub of ${sector}, ${city}. Perfectly suited for IT companies, MNCs, corporates, and call centers. Features modern layouts, ample natural light, high-end infrastructure, and top-tier maintenance.`;
    } else if (type === 'showroom') {
      title = `Premium Road-Facing Commercial Showroom in ${sector}`;
      desc = `Highly visible, double-height road-facing showroom space measuring ${area} sq.ft. located in a major retail corridor of ${sector}, ${city}. Boasting outstanding frontage, heavy daily footfall, and strategic brand positioning opportunities. Perfect for premium retail outlets, fashion brands, car dealerships, or jewelry stores.`;
    } else if (type === 'retail') {
      title = `Retail Shop Space in Busy Commercial Plaza, ${sector}`;
      desc = `Prime retail space of ${area} sq.ft. in one of ${city}'s busiest market areas (${sector}). Excellent floor visibility with wide frontage, secure loading/unloading area, and robust power backup systems. Best suited for pharmacies, apparel shops, cafes, or service centers.`;
    } else {
      title = `Spacious Industrial Warehouse with Dock Access, ${sector}`;
      desc = `A heavy-duty warehouse facility of ${area} sq.ft. located in the industrial zone of ${sector}, ${city}. Featuring high clearance heights (over 28 feet), multiple dock levelers, concrete flooring, insulated roofing, and standard office cabin space. Ideal for e-commerce hubs, logistics partners, and general storage.`;
    }

    list.push({
      id: i.toString(),
      title,
      description: desc,
      type,
      city,
      location: `${sector}, ${city}`,
      price,
      priceLabel,
      purpose,
      area,
      furnishing,
      status,
      amenities: AMENITIES[type],
      images: imageList,
      featured: i <= 6, // Make first 6 properties featured
      coordinates: {
        lat: 30.7046 + (i * 0.0015) % 0.05,
        lng: 76.7179 + (i * 0.0025) % 0.05
      }
    });
  }

  return list;
};

export const PROPERTIES = generateProperties();

export const getPropertyById = (id) => {
  return PROPERTIES.find(p => p.id === id);
};

export const getFeaturedProperties = () => {
  return PROPERTIES.filter(p => p.featured);
};
