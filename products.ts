import { Product } from '@/types/ecommerce';

export const INITIAL_PRODUCTS: Product[] = [
  // --- SAREES: Traditional ---
  {
    id: 'sar-01',
    name: 'Kanjeevaram Pure Soft Silk Saree - Regal Magenta & Gold Zari',
    slug: 'kanjeevaram-soft-silk-saree-magenta-gold',
    category: 'sarees',
    subCategory: 'traditional',
    description: 'Exquisite handwoven Kanjeevaram soft silk saree adorned with intricate traditional peacock and chakra gold zari motifs. Features a majestic royal grand pallu and contrast designer blouse piece. Ideal for weddings, temple festivities, and grand celebrations.',
    price: 3899,
    originalPrice: 7999,
    discountPercentage: 51,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['Free Size (5.5m + 0.8m Blouse)'],
    colors: [
      { name: 'Royal Magenta', hex: '#881337' },
      { name: 'Peacock Green', hex: '#064E3B' },
      { name: 'Temple Yellow', hex: '#D97706' }
    ],
    inStock: true,
    stockQuantity: 12,
    isFeatured: true,
    isTrending: true,
    isInstagramTrend: false,
    isOfferUnder199: false,
    isCustomizable: true,
    fabric: 'Pure Soft Silk with Rich Gold Zari',
    work: 'Jacquard Weaving with Gold Zari Border',
    careInstructions: 'Dry clean only. Store wrapped in muslin cloth.',
    dispatchDays: 2,
    createdAt: '2026-01-15'
  },
  {
    id: 'sar-02',
    name: 'Banarasi Meenakari Semi-Katan Silk Bridal Saree',
    slug: 'banarasi-meenakari-silk-bridal-saree',
    category: 'sarees',
    subCategory: 'traditional',
    description: 'Timeless Banarasi masterpiece featuring intricate Meenakari floral jaal across the body, with heavy antique gold zari borders and a breathtaking kadhwa pallu.',
    price: 4499,
    originalPrice: 8999,
    discountPercentage: 50,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['Free Size (6.3m with Blouse)'],
    colors: [
      { name: 'Ruby Wine', hex: '#4A0404' },
      { name: 'Midnight Navy', hex: '#0F172A' }
    ],
    inStock: true,
    stockQuantity: 8,
    isFeatured: true,
    isTrending: false,
    isInstagramTrend: false,
    isOfferUnder199: false,
    isCustomizable: true,
    fabric: 'Banarasi Semi-Katan Silk',
    work: 'Handwoven Meenakari with Gold Zari',
    careInstructions: 'Strictly dry clean only.',
    dispatchDays: 2,
    createdAt: '2026-01-18'
  },

  // --- SAREES: Instagram Trending ---
  {
    id: 'sar-03',
    name: 'Instagram Viral Pastel Organza Saree with Cutwork Pearl Border',
    slug: 'instagram-viral-pastel-organza-saree',
    category: 'sarees',
    subCategory: 'instagram-trending',
    description: 'As seen on top fashion influencers! Ethereal sheer organza saree with delicate hand-embroidered pearl cutwork scalloped borders and hand-painted watercolor floral motifs. Drapes like a dream.',
    price: 2499,
    originalPrice: 4999,
    discountPercentage: 50,
    images: [
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['Free Size (5.5m + Unstitched Blouse)'],
    colors: [
      { name: 'Powder Blush', hex: '#FBCFE8' },
      { name: 'Mint Sage', hex: '#A7F3D0' },
      { name: 'Lavender Mist', hex: '#DDD6FE' }
    ],
    inStock: true,
    stockQuantity: 15,
    isFeatured: true,
    isTrending: true,
    isInstagramTrend: true,
    isOfferUnder199: false,
    isCustomizable: true,
    fabric: 'Lightweight Glass Organza',
    work: 'Hand Cutwork with Pearl & Thread Detailing',
    careInstructions: 'Dry clean recommended.',
    dispatchDays: 1,
    createdAt: '2026-02-01'
  },
  {
    id: 'sar-04',
    name: 'Shimmer Pleated Metallic Georgette Cocktail Saree',
    slug: 'shimmer-pleated-metallic-georgette-saree',
    category: 'sarees',
    subCategory: 'party-wear',
    description: 'Ultra-glamorous ready-to-drape micro-pleated saree with high-shine metallic finish and designer velvet sequin blouse fabric. Perfect for sangeet nights, receptions, and cocktail parties.',
    price: 2899,
    originalPrice: 5999,
    discountPercentage: 52,
    images: [
      'https://images.unsplash.com/photo-1610030469668-935a92a54316?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['Free Size'],
    colors: [
      { name: 'Rose Gold', hex: '#B76E79' },
      { name: 'Champagne Gold', hex: '#E5D3B3' },
      { name: 'Smoky Emerald', hex: '#047857' }
    ],
    inStock: true,
    stockQuantity: 9,
    isFeatured: false,
    isTrending: true,
    isInstagramTrend: true,
    isOfferUnder199: false,
    isCustomizable: false,
    fabric: 'Premium Metallic Lycra-Georgette Blend',
    work: 'Accordion Micro-Pleating with Sequin Blouse',
    careInstructions: 'Gentle hand wash in cold water or dry clean.',
    dispatchDays: 2,
    createdAt: '2026-02-05'
  },

  // --- SAREES: Daily Wear ---
  {
    id: 'sar-05',
    name: 'Mulmul Cotton Block Print Daily Comfort Saree',
    slug: 'mulmul-cotton-block-print-daily-saree',
    category: 'sarees',
    subCategory: 'daily-wear',
    description: 'Feather-light 100% pure Mulmul cotton saree with authentic Bagru floral hand block prints. Breathable, sweat-absorbent, and wonderfully soft for office wear, college, and daily errands.',
    price: 899,
    originalPrice: 1699,
    discountPercentage: 47,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['Free Size (6.2m with Running Blouse)'],
    colors: [
      { name: 'Indigo Blue', hex: '#1E3A8A' },
      { name: 'Terracotta Rust', hex: '#9A3412' },
      { name: 'Olive Green', hex: '#3F6212' }
    ],
    inStock: true,
    stockQuantity: 25,
    isFeatured: true,
    isTrending: false,
    isInstagramTrend: false,
    isOfferUnder199: false,
    isCustomizable: false,
    fabric: '100% Pure Organic Mulmul Cotton',
    work: 'Traditional Hand Block Printing',
    careInstructions: 'Gentle hand wash in mild detergent. Dry in shade.',
    dispatchDays: 1,
    createdAt: '2026-02-10'
  },
  {
    id: 'sar-06',
    name: 'Soft Linen Silk Dual-Tone Festive Saree',
    slug: 'soft-linen-silk-dual-tone-saree',
    category: 'sarees',
    subCategory: 'latest',
    description: 'Contemporary dual-tone linen silk saree featuring silver zari stripes on the pallu with handcrafted tassels. Sophisticated, breezy, and effortlessly stylish.',
    price: 1499,
    originalPrice: 2999,
    discountPercentage: 50,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['Free Size'],
    colors: [
      { name: 'Mustard & Grey', hex: '#CA8A04' },
      { name: 'Coral & Beige', hex: '#F43F5E' }
    ],
    inStock: true,
    stockQuantity: 14,
    isFeatured: false,
    isTrending: true,
    isInstagramTrend: false,
    isOfferUnder199: false,
    isCustomizable: true,
    fabric: 'Breathable Linen Silk',
    work: 'Silver Zari Border with Handcrafted Pompoms',
    careInstructions: 'First wash dry clean, subsequently gentle hand wash.',
    dispatchDays: 1,
    createdAt: '2026-02-12'
  },

  // --- SAREE CUSTOMIZATION ---
  {
    id: 'cust-sar-01',
    name: 'Bespoke Hand-Embroidered Bridal Saree Customization',
    slug: 'bespoke-bridal-saree-customization',
    category: 'customization-saree',
    subCategory: 'customization',
    description: 'Design your dream wedding saree with Lathe Botique! Choose your desired pure silk fabric (Kanjeevaram, Organza, Tussar, or Georgette), custom dye to any Pantone shade, handpick Zari or Aari embroidery borders, and personalize with couple monogramming.',
    price: 5999,
    originalPrice: 11999,
    discountPercentage: 50,
    images: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['Custom Tailored to Measure'],
    colors: [
      { name: 'Custom Palette (Any Shade)', hex: '#BE185D' }
    ],
    inStock: true,
    stockQuantity: 99,
    isFeatured: true,
    isTrending: true,
    isInstagramTrend: true,
    isOfferUnder199: false,
    isCustomizable: true,
    fabric: 'Customer Choice (Pure Kanjeevaram Silk / Organza / Raw Silk)',
    work: 'Zardozi, Cutdana, Maggam Work & Personalization',
    careInstructions: 'Custom wedding garment - strict dry clean.',
    dispatchDays: 10,
    createdAt: '2026-02-14'
  },
  {
    id: 'cust-sar-02',
    name: 'Custom Blouse & Saree Styling Package - Maggam & Aari Work',
    slug: 'custom-blouse-maggam-work-styling',
    category: 'customization-saree',
    subCategory: 'customization',
    description: 'Transform any saree into a couture statement. Includes customized designer blouse cutting, padding, heavy neck & sleeve bridal hand embroidery, tassel dori making, and saree fall-pico edging.',
    price: 1999,
    originalPrice: 3800,
    discountPercentage: 47,
    images: [
      'https://images.unsplash.com/photo-1610030469668-935a92a54316?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['Custom Bust 32 - 48 Inch'],
    colors: [
      { name: 'Match Your Saree Color', hex: '#DB2777' }
    ],
    inStock: true,
    stockQuantity: 50,
    isFeatured: false,
    isTrending: true,
    isInstagramTrend: false,
    isOfferUnder199: false,
    isCustomizable: true,
    fabric: 'Silk / Raw Silk / Velvet Base',
    work: 'Intricate Aari, Zardozi, and Pearl Beadwork',
    careInstructions: 'Dry clean only.',
    dispatchDays: 5,
    createdAt: '2026-02-15'
  },

  // --- CUSTOMIZED DRESSES ---
  {
    id: 'cust-dr-01',
    name: 'Boutique Customized Georgette Anarkali Gown with Dupatta',
    slug: 'customized-georgette-anarkali-gown',
    category: 'customization-dress',
    subCategory: 'custom-dresses',
    description: 'Full flair 6-meter circular flare Anarkali gown tailored to your exact measurements. Styled with handcrafted bodice detailing, customized neckline, and matching organza lace dupatta.',
    price: 3299,
    originalPrice: 6500,
    discountPercentage: 49,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Custom Size'],
    colors: [
      { name: 'Dusty Rose', hex: '#FDA4AF' },
      { name: 'Sage Green', hex: '#86EFAC' },
      { name: 'Royal Wine', hex: '#881337' }
    ],
    inStock: true,
    stockQuantity: 20,
    isFeatured: true,
    isTrending: true,
    isInstagramTrend: true,
    isOfferUnder199: false,
    isCustomizable: true,
    fabric: 'Pure Georgette with Shantoon Silk Lining',
    work: 'Custom Neckline Embroidery & Lace Border',
    careInstructions: 'Dry clean recommended.',
    dispatchDays: 5,
    createdAt: '2026-02-16'
  },
  {
    id: 'cust-dr-02',
    name: 'Instagram Designer Crop-Top & Multi-Tier Lehenga Skirt',
    slug: 'custom-crop-top-tier-lehenga-skirt',
    category: 'customization-dress',
    subCategory: 'custom-dresses',
    description: 'Trending ethnic co-ord set featuring a padded sweetheart neck bustier top, flared tiered skirt, and lightweight cape dupatta. Fully customizable for bridesmaid squads or birthdays.',
    price: 3699,
    originalPrice: 7200,
    discountPercentage: 49,
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Size'],
    colors: [
      { name: 'Lavender Floral', hex: '#C084FC' },
      { name: 'Sunshine Yellow', hex: '#FACC15' }
    ],
    inStock: true,
    stockQuantity: 15,
    isFeatured: false,
    isTrending: true,
    isInstagramTrend: true,
    isOfferUnder199: false,
    isCustomizable: true,
    fabric: 'Organza / Silk Georgette',
    work: 'Tiered Frills with Sequin Highlights',
    careInstructions: 'Dry clean only.',
    dispatchDays: 7,
    createdAt: '2026-02-18'
  },

  // --- DAILY WEAR ---
  {
    id: 'dw-01',
    name: 'Everyday Pure Cotton Floral Straight Kurti & Pant Set',
    slug: 'everyday-pure-cotton-floral-kurti-pant-set',
    category: 'daily-wear',
    subCategory: 'daily-wear',
    description: 'Ultra-breathable premium 60-60 cotton straight-cut kurti with matching cigarette pants. Features pocket on trousers and subtle wooden button details. Maximum comfort for long work days.',
    price: 699,
    originalPrice: 1499,
    discountPercentage: 53,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    colors: [
      { name: 'Powder Blue', hex: '#BAE6FD' },
      { name: 'Peach Coral', hex: '#FED7AA' },
      { name: 'Olive Green', hex: '#BBF7D0' }
    ],
    inStock: true,
    stockQuantity: 30,
    isFeatured: true,
    isTrending: true,
    isInstagramTrend: false,
    isOfferUnder199: false,
    isCustomizable: false,
    fabric: '100% Cambric Cotton',
    work: 'Screen Print with Neckline Piping',
    careInstructions: 'Regular machine wash with like colors.',
    dispatchDays: 1,
    createdAt: '2026-02-18'
  },
  {
    id: 'dw-02',
    name: 'Rayon Slub Casual Daily Wear A-Line Tunic Dress',
    slug: 'rayon-slub-casual-daily-wear-tunic',
    category: 'daily-wear',
    subCategory: 'daily-wear',
    description: 'Flowy, super soft rayon slub tunic dress with round neck, 3/4th sleeves, and contrast tassel tie-ups. Easy breezy style for college, grocery runs, and casual coffee meetups.',
    price: 549,
    originalPrice: 1199,
    discountPercentage: 54,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Teal Green', hex: '#0D9488' },
      { name: 'Maroon', hex: '#991B1B' }
    ],
    inStock: true,
    stockQuantity: 24,
    isFeatured: false,
    isTrending: false,
    isInstagramTrend: false,
    isOfferUnder199: false,
    isCustomizable: false,
    fabric: '14Kg Heavy Rayon Slub',
    work: 'Hand Block Print Motifs',
    careInstructions: 'Cold hand wash or gentle machine cycle.',
    dispatchDays: 1,
    createdAt: '2026-02-19'
  },

  // --- OFFERS UNDER ₹199 (SPECIAL PROMOTIONAL SECTION) ---
  {
    id: 'off-199-01',
    name: 'Handcrafted Silk Fabric Scrunchies Set of 3 (Pastel Luxe)',
    slug: 'handcrafted-silk-fabric-scrunchies-set-of-3',
    category: 'offers-under-199',
    subCategory: 'accessories',
    description: 'Prevent hair breakage in boutique style! Set of 3 premium mulberry silk-blend scrunchies handcrafted in trending pastel shades. Zero snagging, extra gentle on hair.',
    price: 99,
    originalPrice: 299,
    discountPercentage: 67,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['Set of 3 (Standard Elastic)'],
    colors: [
      { name: 'Pastel Trio (Blush, Mint, Lavender)', hex: '#F472B6' }
    ],
    inStock: true,
    stockQuantity: 100,
    isFeatured: true,
    isTrending: true,
    isInstagramTrend: true,
    isOfferUnder199: true,
    isCustomizable: false,
    fabric: 'Satin & Silk Blend',
    work: 'Hand-Stitched Strong Elastic',
    careInstructions: 'Hand wash with mild shampoo.',
    dispatchDays: 1,
    createdAt: '2026-02-20'
  },
  {
    id: 'off-199-02',
    name: 'Boutique Brocade Designer Blouse Cut-Piece (1 Meter)',
    slug: 'boutique-brocade-blouse-cut-piece-1m',
    category: 'offers-under-199',
    subCategory: 'fabrics',
    description: 'High-density Banarasi brocade fabric cut-piece (1 Full Meter) with shimmering gold floral zari work. Ideal for stitching contrast party wear blouses for any saree.',
    price: 189,
    originalPrice: 450,
    discountPercentage: 58,
    images: [
      'https://images.unsplash.com/photo-1610030469668-935a92a54316?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['1 Meter (44 Inch Width)'],
    colors: [
      { name: 'Gold Brocade', hex: '#EAB308' },
      { name: 'Ruby Red', hex: '#DC2626' },
      { name: 'Bottle Green', hex: '#166534' }
    ],
    inStock: true,
    stockQuantity: 45,
    isFeatured: true,
    isTrending: true,
    isInstagramTrend: false,
    isOfferUnder199: true,
    isCustomizable: false,
    fabric: 'Banarasi Art Silk Brocade',
    work: 'Woven Floral Zari Booti',
    careInstructions: 'Dry clean or cold dip wash.',
    dispatchDays: 1,
    createdAt: '2026-02-20'
  },
  {
    id: 'off-199-03',
    name: 'Traditional Kashmiri Jhumka Earrings with Pearl Drops',
    slug: 'traditional-kashmiri-jhumka-earrings',
    category: 'offers-under-199',
    subCategory: 'jewelry',
    description: 'Antique gold-toned lightweight ethnic jhumki earrings with floral stud, enamel meenakari inlay, and tiny cluster faux pearls. Complements traditional sarees seamlessly.',
    price: 149,
    originalPrice: 399,
    discountPercentage: 63,
    images: [
      'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['One Size (Lightweight 18g)'],
    colors: [
      { name: 'Antique Gold & Pearl', hex: '#CA8A04' }
    ],
    inStock: true,
    stockQuantity: 35,
    isFeatured: true,
    isTrending: true,
    isInstagramTrend: true,
    isOfferUnder199: true,
    isCustomizable: false,
    fabric: 'Alloy & Faux Pearls',
    work: 'Antique Polish with Meenakari',
    careInstructions: 'Keep away from perfumes and moisture. Store in ziplock pouch.',
    dispatchDays: 1,
    createdAt: '2026-02-21'
  },
  {
    id: 'off-199-04',
    name: 'Handloom Cotton Bandhani Print Daily Dupatta (2.25m)',
    slug: 'handloom-cotton-bandhani-print-dupatta',
    category: 'offers-under-199',
    subCategory: 'accessories',
    description: 'Pure soft cotton Jaipuri Bandhej print dupatta with delicate pompom edges. Pairs beautifully with any plain white, black, or pastel kurti.',
    price: 199,
    originalPrice: 499,
    discountPercentage: 60,
    images: [
      'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    ],
    sizes: ['2.25 Meters x 36 Inch'],
    colors: [
      { name: 'Red & Yellow Bandhej', hex: '#DC2626' },
      { name: 'Royal Blue Bandhej', hex: '#2563EB' }
    ],
    inStock: true,
    stockQuantity: 28,
    isFeatured: false,
    isTrending: true,
    isInstagramTrend: false,
    isOfferUnder199: true,
    isCustomizable: false,
    fabric: '100% Soft Cotton',
    work: 'Jaipuri Bandhej Print with Pom-Pom Lace',
    careInstructions: 'Wash separately in cold water.',
    dispatchDays: 1,
    createdAt: '2026-02-22'
  }
];

export const CATEGORIES_CONFIG = [
  {
    id: 'sarees',
    name: 'Sarees',
    subtitle: 'Kanjeevaram, Organza, Banarasi & Trends',
    href: '/sarees',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    itemCount: '150+ Designs'
  },
  {
    id: 'customization-saree',
    name: 'Saree Customization',
    subtitle: 'Tailored Fabrics, Aari Work & Blouses',
    href: '/customization/saree',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80',
    itemCount: 'Bespoke Studio'
  },
  {
    id: 'customization-dress',
    name: 'Customized Dresses',
    subtitle: 'Bridal Lehengas & Gowns to Fit You',
    href: '/customization/dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
    itemCount: 'Custom Tailoring'
  },
  {
    id: 'daily-wear',
    name: 'Daily Wear',
    subtitle: 'Comfortable Cotton Sarees, Kurtis & Co-ords',
    href: '/daily-wear',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80',
    itemCount: 'Affordable Comfort'
  },
  {
    id: 'offers-under-199',
    name: 'Offers Under ₹199',
    subtitle: 'Fabrics, Jhumkas, Dupattas & Scrunchies',
    href: '/offers-199',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80',
    itemCount: 'Budget Mega Deals',
    isSpecial: true
  }
];
