import Link from 'next/link';
import { Product } from '@/types/ecommerce';
import ProductCard from '@/components/products/ProductCard';
import { ArrowRight, Flame } from 'lucide-react';

interface TrendingSectionProps {
  products: Product[];
}

export default function TrendingSection({ products }: TrendingSectionProps) {
  const trending = products.filter(p => p.isTrending || p.isFeatured).slice(0, 4);

  return (
    <section className="py-14 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#A67C33] font-bold">
              <Flame className="w-4 h-4 text-[#C69D56]" />
              Hot Right Now
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#480E1E] mt-1">
              Trending Sarees & Best Sellers
            </h2>
          </div>

          <Link
            href="/sarees"
            className="text-xs sm:text-sm font-bold text-[#581125] hover:text-[#C69D56] transition-colors flex items-center gap-1.5"
          >
            <span>View All Sarees</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
