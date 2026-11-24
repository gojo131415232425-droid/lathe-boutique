import Link from 'next/link';
import { Product } from '@/types/ecommerce';
import ProductCard from '@/components/products/ProductCard';
import { Sparkles, ArrowRight, Tag } from 'lucide-react';

interface OffersUnder199Props {
  products: Product[];
}

export default function OffersUnder199({ products }: OffersUnder199Props) {
  const offerProducts = products.filter(p => p.isOfferUnder199 || p.price <= 199).slice(0, 4);

  return (
    <section className="py-14 bg-gradient-to-r from-[#FFF1F2] via-[#FAF7F2] to-[#FFF1F2] border-y border-[#C69D56]/30 relative overflow-hidden">
      
      {/* Decorative Stamp Background */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#991B1B]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#991B1B] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
              <Tag className="w-3.5 h-3.5 text-[#E2C288]" /> Special Promotional Corner
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#480E1E]">
              Offers Under ₹199
            </h2>
            <p className="text-xs sm:text-sm text-[#480E1E]/70 mt-1">
              Boutique brocade cut-pieces, handcrafted silk scrunchies, pearl jhumkas & daily dupattas!
            </p>
          </div>

          <Link
            href="/offers-199"
            className="px-5 py-2.5 rounded-full bg-[#991B1B] text-[#FFFFFF] font-semibold text-xs sm:text-sm hover:bg-[#7F1D1D] transition-all shadow-md flex items-center gap-2 group shrink-0"
          >
            <span>View All Under ₹199 Deals</span>
            <ArrowRight className="w-4 h-4 text-[#E2C288] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {offerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
