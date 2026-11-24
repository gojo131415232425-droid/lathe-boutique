'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Heart, ShoppingBag, Menu, X, Sparkles, Truck } from 'lucide-react';
import { getCart, getWishlist } from '@/lib/store';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  // Sync counts
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sarees', href: '/sarees' },
    { name: 'Saree Customization', href: '/customization/saree' },
    { name: 'Customized Dresses', href: '/customization/dresses' },
    { name: 'Daily Wear', href: '/daily-wear' },
    { 
      name: 'Offers Under ₹199', 
      href: '/offers-199', 
      badge: 'Hot Deal', 
      special: true 
    },
    { name: 'Track Order', href: '/track-order', icon: Truck },
    { name: 'Contact', href: '/contact' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/sarees?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#C69D56]/20 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#581125] hover:bg-[#FDECEF] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group text-center lg:text-left py-1">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-[#C69D56]/40 shadow-sm shrink-0 bg-[#FAF7F2]">
              <Image
                src="/logo.png"
                alt="Lathe Boutique Logo"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl sm:text-2xl md:text-3xl font-bold tracking-wider text-[#480E1E] leading-tight">
                LATHE BOUTIQUE
              </span>
              <span className="font-italic-tagline text-xs sm:text-sm text-[#A67C33] tracking-wide font-normal -mt-0.5">
                Elegance in every drape.
              </span>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-xs mx-6">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                placeholder="Search sarees, organza, daily wear..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FFFFFF] border border-[#C69D56]/30 text-[#480E1E] placeholder-[#480E1E]/50 text-xs sm:text-sm rounded-full pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#C69D56] transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-[#A67C33] absolute left-3 top-1/2 -translate-y-1/2" />
            </form>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Search Toggle */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 md:hidden text-[#581125] hover:text-[#C69D56] rounded-full hover:bg-[#FDECEF] transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2 text-[#581125] hover:text-[#C69D56] rounded-full hover:bg-[#FDECEF] transition-colors"
              title="My Wishlist"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#C69D56] text-[#480E1E] font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#FAF7F2]">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Shopping Bag / Cart */}
            <Link
              href="/cart"
              className="relative flex items-center gap-2 bg-[#581125] text-[#FAF7F2] hover:bg-[#480E1E] px-3 sm:px-4 py-2 rounded-full shadow-md transition-all group"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#E2C288] group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-semibold hidden sm:inline">Bag</span>
              {cartCount > 0 && (
                <span className="bg-[#E2C288] text-[#480E1E] font-bold text-xs px-1.5 py-0.2 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search Input dropdown */}
        {searchOpen && (
          <div className="pb-3 md:hidden">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search sarees, organza, dresses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-[#FFFFFF] border border-[#C69D56]/40 text-[#480E1E] text-sm rounded-full pl-9 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#C69D56]"
              />
              <Search className="w-4 h-4 text-[#A67C33] absolute left-3 top-1/2 -translate-y-1/2" />
            </form>
          </div>
        )}

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center space-x-8 py-2.5 border-t border-[#C69D56]/15">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-xs uppercase tracking-wider font-semibold py-1 transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#581125] font-bold'
                    : 'text-[#480E1E]/80 hover:text-[#C69D56]'
                } ${link.special ? 'text-[#881337]' : ''}`}
              >
                {link.name}
                {link.badge && (
                  <span className="bg-gradient-to-r from-[#C69D56] to-[#E2C288] text-[#480E1E] text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-full tracking-tighter animate-pulse">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C69D56] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[110px] bg-[#FAF7F2] z-50 overflow-y-auto border-t border-[#C69D56]/30 px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#A67C33] font-bold mb-1">
              Explore Collections
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-base font-semibold py-2.5 border-b border-[#C69D56]/15 transition-colors ${
                    isActive ? 'text-[#581125] font-bold' : 'text-[#480E1E]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.name}
                    {link.special && <Sparkles className="w-4 h-4 text-[#C69D56]" />}
                  </span>
                  {link.badge && (
                    <span className="bg-[#581125] text-[#FAF7F2] text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-4 flex flex-col space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#A67C33] font-bold">
                Direct Boutique Support
              </div>
              <a
                href="tel:9486230422"
                className="flex items-center gap-3 p-3 bg-[#FFFFFF] rounded-xl border border-[#C69D56]/30 text-sm font-medium text-[#480E1E]"
              >
                📞 Call: 9486230422 / 9488678422
              </a>
              <a
                href="https://wa.me/919486230422?text=Hello%20Lathe%20Boutique,%20I%20would%20like%20to%20enquire%20about%20your%20sarees%20and%20customization"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-[#065F46] text-[#FFFFFF] rounded-xl text-sm font-medium"
              >
                💬 WhatsApp Chat (9486230422)
              </a>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-[#480E1E] text-[#E2C288] rounded-xl text-center text-sm font-semibold"
              >
                🔒 Boutique Owner Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
