'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layers, Sparkles, Heart, ShoppingBag } from 'lucide-react';
import { getCart, getWishlist } from '@/lib/store';

export default function MobileNav() {
  const pathname = usePathname();
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    function updateCounts() {
      const cart = getCart();
      const count = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(count);

      const wishlist = getWishlist();
      setWishlistCount(wishlist.length);
    }

    updateCounts();
    window.addEventListener('lathe_cart_updated', updateCounts);
    window.addEventListener('lathe_wishlist_updated', updateCounts);

    return () => {
      window.removeEventListener('lathe_cart_updated', updateCounts);
      window.removeEventListener('lathe_wishlist_updated', updateCounts);
    };
  }, []);

  const items = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Sarees', href: '/sarees', icon: Layers },
    { 
      label: 'Under ₹199', 
      href: '/offers-199', 
      icon: Sparkles, 
      highlight: true 
    },
    { label: 'Wishlist', href: '/wishlist', icon: Heart, count: wishlistCount },
    { label: 'Bag', href: '/cart', icon: ShoppingBag, count: cartCount },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#C69D56]/30 z-40 py-1.5 px-3 shadow-lg">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative flex flex-col items-center py-1 px-2 transition-all ${
                isActive
                  ? 'text-[#581125] font-bold scale-105'
                  : item.highlight
                  ? 'text-[#C69D56]'
                  : 'text-[#480E1E]/70 hover:text-[#581125]'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${item.highlight && !isActive ? 'text-[#C69D56]' : ''}`} />
                {item.count !== undefined && item.count > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#581125] text-[#FAF7F2] font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-[#FAF7F2]">
                    {item.count}
                  </span>
                )}
                {item.highlight && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#C69D56] animate-ping" />
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-0.5 ${item.highlight ? 'font-bold' : ''}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
