'use client';

import { useState, useEffect } from 'react';
import ProductGrid from '@/components/products/ProductGrid';
import { getProducts } from '@/lib/store';
import { Product } from '@/types/ecommerce';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function DailyWearPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    function load() {
      setProducts(getProducts());
    }
    load();
    window.addEventListener('lathe_products_updated', load);
    return () => window.removeEventListener('lathe_products_updated', load);
  }, []);

  const dailyWear = products.filter(p => p.category === 'daily-wear' || p.subCategory === 'daily-wear');

  return (
    <div className="py-8 sm:py-12 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#A67C33] font-bold">
            Affordable Comfort
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#480E1E] mt-1">
            Daily Wear Collections
          </h1>
          <p className="font-italic-tagline text-base text-[#781934] mt-1">
            Pure soft mulmul cotton sarees, everyday kurti sets & breezy tunics.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[#480E1E]/80">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#065F46]" /> 100% Breathable Cotton
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#065F46]" /> Machine Wash Friendly
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#065F46]" /> Starting from just ₹549
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid products={dailyWear} />

      </div>
    </div>
  );
}
