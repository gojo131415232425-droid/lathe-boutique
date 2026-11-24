'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Product } from '@/types/ecommerce';
import { addToCart, toggleWishlist, isInWishlist } from '@/lib/store';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(() => isInWishlist(product.id));
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(false);

  const displayImage = hoveredImage && product.images[1] ? product.images[1] : product.images[0];

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = toggleWishlist(product);
    setIsWishlisted(newState);
  };

  const handleQuickAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div className="group relative bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#C69D56]/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      
      {/* Image Container */}
      <Link
        href={`/product/${product.id}`}
        className="relative block aspect-[3/4] w-full overflow-hidden bg-[#F8F1E4]"
        onMouseEnter={() => setHoveredImage(true)}
        onMouseLeave={() => setHoveredImage(false)}
      >
        <Image
          src={displayImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Badges Overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {product.isOfferUnder199 && (
            <span className="bg-gradient-to-r from-[#DC2626] to-[#991B1B] text-[#FFFFFF] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-md tracking-wider flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Under ₹199
            </span>
          )}

          {product.isInstagramTrend && !product.isOfferUnder199 && (
            <span className="bg-gradient-to-r from-[#831843] to-[#BE185D] text-[#FFFFFF] text-[10px] font-bold uppercase px-2 py-0.5 rounded-full shadow-md tracking-wider">
              Insta Viral
            </span>
          )}

          {product.discountPercentage > 0 && (
            <span className="bg-[#480E1E] text-[#E2C288] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm w-fit">
              {product.discountPercentage}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          type="button"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full transition-all duration-200 z-10 shadow-md ${
            isWishlisted
              ? 'bg-[#581125] text-[#FAF7F2]'
              : 'bg-[#FFFFFF]/90 text-[#480E1E] hover:bg-[#581125] hover:text-[#FAF7F2]'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-[#E2C288]' : ''}`} />
        </button>

        {/* Quick View / Stock Warning */}
        {product.stockQuantity > 0 && product.stockQuantity <= 5 && (
          <div className="absolute bottom-2 left-2 right-2 bg-[#480E1E]/80 backdrop-blur-xs text-[#E2C288] text-[10px] font-medium text-center py-1 rounded-lg">
            Hurry! Only {product.stockQuantity} left in stock
          </div>
        )}
      </Link>

      {/* Details Container */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between bg-[#FFFFFF]">
        <div>
          {/* Category subtitle */}
          <div className="text-[10px] uppercase tracking-wider text-[#A67C33] font-semibold mb-1 truncate">
            {product.fabric || product.category.replace('-', ' ')}
          </div>

          {/* Product Title */}
          <Link href={`/product/${product.id}`} className="block">
            <h3 className="font-serif-luxury text-sm sm:text-base font-semibold text-[#480E1E] line-clamp-2 hover:text-[#C69D56] transition-colors leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Available Sizes / Colors hint */}
          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[#480E1E]/60">
            {product.sizes.length > 0 && (
              <span className="truncate max-w-[150px]">{product.sizes[0]}</span>
            )}
            {product.colors.length > 1 && (
              <span className="text-[10px] text-[#C69D56] font-medium">
                • +{product.colors.length - 1} colors
              </span>
            )}
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="mt-3 pt-3 border-t border-[#C69D56]/15 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold text-[#480E1E]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-[#480E1E]/40 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {product.isCustomizable && (
              <span className="text-[9px] text-[#065F46] font-semibold flex items-center gap-0.5">
                ✨ Custom fit available
              </span>
            )}
          </div>

          {/* Add to Bag Button */}
          <button
            onClick={handleQuickAddToCart}
            type="button"
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
              addedAnimation
                ? 'bg-[#065F46] text-[#FFFFFF]'
                : 'bg-[#581125] text-[#FAF7F2] hover:bg-[#480E1E]'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#E2C288]" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
