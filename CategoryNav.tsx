import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES_CONFIG } from '@/data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CategoryNav() {
  return (
    <section className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#A67C33] font-bold">
            Curated For You
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#480E1E] mt-1">
            Explore Boutique Categories
          </h2>
          <div className="w-16 h-0.5 bg-[#C69D56] mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-[#480E1E]/70 mt-2">
            From regal wedding drapes to casual comfort wear and customized designs.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES_CONFIG.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={`group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                cat.isSpecial
                  ? 'border-[#991B1B]/40 ring-2 ring-[#991B1B]/20'
                  : 'border-[#C69D56]/25'
              }`}
            >
              {/* Image Aspect Box */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F8F1E4]">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E0B19]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge if special */}
                {cat.isSpecial && (
                  <div className="absolute top-2.5 right-2.5 bg-[#991B1B] text-[#FFFFFF] text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#E2C288]" /> Deal
                  </div>
                )}

                {/* Bottom Content overlay inside image */}
                <div className="absolute bottom-3 left-3 right-3 text-[#FAF7F2]">
                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] text-[#E2C288] mt-0.5 font-medium line-clamp-1">
                    {cat.itemCount}
                  </p>
                </div>
              </div>

              {/* Sub-bar */}
              <div className="p-2.5 bg-[#FFFFFF] flex items-center justify-between text-xs font-semibold text-[#480E1E] group-hover:text-[#C69D56] transition-colors">
                <span className="text-[11px] truncate">{cat.subtitle}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
