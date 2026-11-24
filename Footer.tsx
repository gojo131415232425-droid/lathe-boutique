import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Heart, ShieldCheck, Clock, RefreshCw, Send } from 'lucide-react';
import Instagram from '@/components/icons/Instagram';

export default function Footer() {
  return (
    <footer className="bg-[#3E0B19] text-[#FAF7F2] pt-14 pb-20 md:pb-12 border-t-2 border-[#C69D56]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-[#C69D56]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#581125] flex items-center justify-center shrink-0 border border-[#C69D56]/40">
              <ShieldCheck className="w-5 h-5 text-[#E2C288]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#E2C288]">100% Quality Checked</h4>
              <p className="text-[11px] text-[#FAF7F2]/70">Premium silks & artisan finish</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#581125] flex items-center justify-center shrink-0 border border-[#C69D56]/40">
              <RefreshCw className="w-5 h-5 text-[#E2C288]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#E2C288]">Customization Studio</h4>
              <p className="text-[11px] text-[#FAF7F2]/70">Tailored to your measurements</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#581125] flex items-center justify-center shrink-0 border border-[#C69D56]/40">
              <Clock className="w-5 h-5 text-[#E2C288]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#E2C288]">Speedy Dispatch</h4>
              <p className="text-[11px] text-[#FAF7F2]/70">Express delivery across India</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#581125] flex items-center justify-center shrink-0 border border-[#C69D56]/40">
              <Heart className="w-5 h-5 text-[#E2C288]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#E2C288]">Direct Owner Care</h4>
              <p className="text-[11px] text-[#FAF7F2]/70">Instant WhatsApp assistance</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#C69D56]/50 shadow-md bg-[#FAF7F2]">
                <Image
                  src="/logo.png"
                  alt="Lathe Boutique"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold tracking-wider text-[#FAF7F2]">
                  LATHE BOUTIQUE
                </h3>
                <p className="font-italic-tagline text-sm text-[#E2C288]">
                  Elegance in every drape.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF7F2]/80 leading-relaxed max-w-sm">
              Your destination for handpicked bridal Kanjeevarams, Instagram-trending organza sarees, custom-tailored designer blouses & lehengas, everyday comfortable daily wear, and irresistible deals under ₹199.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/lathe_botique/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#581125] hover:bg-[#C69D56] hover:text-[#480E1E] transition-all flex items-center justify-center border border-[#C69D56]/40"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919486230422"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#065F46] hover:bg-[#047857] text-[#FFFFFF] transition-all flex items-center justify-center border border-[#C69D56]/40"
                aria-label="WhatsApp Us"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="tel:9486230422"
                className="w-9 h-9 rounded-full bg-[#581125] hover:bg-[#C69D56] hover:text-[#480E1E] transition-all flex items-center justify-center border border-[#C69D56]/40"
                aria-label="Call Number 1"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E2C288] mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF7F2]/80">
              <li>
                <Link href="/sarees" className="hover:text-[#E2C288] transition-colors">
                  Traditional Sarees
                </Link>
              </li>
              <li>
                <Link href="/sarees?category=instagram-trending" className="hover:text-[#E2C288] transition-colors">
                  Instagram Trending Sarees
                </Link>
              </li>
              <li>
                <Link href="/customization/saree" className="hover:text-[#E2C288] transition-colors">
                  Saree Customization
                </Link>
              </li>
              <li>
                <Link href="/customization/dresses" className="hover:text-[#E2C288] transition-colors">
                  Customized Dresses
                </Link>
              </li>
              <li>
                <Link href="/daily-wear" className="hover:text-[#E2C288] transition-colors">
                  Daily Wear Collections
                </Link>
              </li>
              <li>
                <Link href="/offers-199" className="text-[#E2C288] font-semibold hover:underline">
                  Offers Under ₹199 🔥
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E2C288] mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FAF7F2]/80">
              <li>
                <Link href="/track-order" className="hover:text-[#E2C288] transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-[#E2C288] transition-colors">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-[#E2C288] transition-colors">
                  Shopping Bag
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E2C288] transition-colors">
                  Customer Enquiry Form
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-[#E2C288] hover:underline font-medium">
                  Owner Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#E2C288] mb-4">
              Contact Boutique
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#FAF7F2]/80">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E2C288] shrink-0 mt-0.5" />
                <div>
                  <div>
                    <a href="tel:9486230422" className="hover:text-[#E2C288] font-semibold">
                      9486230422
                    </a>
                  </div>
                  <div>
                    <a href="tel:9488678422" className="hover:text-[#E2C288] font-semibold">
                      9488678422
                    </a>
                  </div>
                  <span className="text-[10px] text-[#FAF7F2]/60">(Mon - Sun: 9 AM - 9 PM)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-[#E2C288] shrink-0 mt-0.5" />
                <a
                  href="https://www.instagram.com/lathe_botique/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E2C288]"
                >
                  @lathe_botique
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E2C288] shrink-0 mt-0.5" />
                <span>Lathe Boutique, Tamil Nadu, India. Shipping Pan-India.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Payments */}
        <div className="pt-8 border-t border-[#C69D56]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <p>© {new Date().getFullYear()} Lathe Boutique. All Rights Reserved. Elegance in every drape.</p>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-[#E2C288]">Verified Payments:</span>
            <span className="bg-[#581125] px-2 py-0.5 rounded border border-[#C69D56]/30 text-[#FAF7F2]">Google Pay</span>
            <span className="bg-[#581125] px-2 py-0.5 rounded border border-[#C69D56]/30 text-[#FAF7F2]">PhonePe / Paytm</span>
            <span className="bg-[#581125] px-2 py-0.5 rounded border border-[#C69D56]/30 text-[#FAF7F2]">UPI / Netbanking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
