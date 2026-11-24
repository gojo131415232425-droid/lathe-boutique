import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Palette } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F8F1E4] to-[#FAF7F2] py-8 sm:py-16 border-b border-[#C69D56]/20">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2C288]/15 to-[#581125]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 rounded-full bg-gradient-to-tr from-[#581125]/10 to-[#FDECEF] blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#C69D56]/40 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#C69D56]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#581125]">
                New Festive Season 2026 Collection
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-[#480E1E] leading-tight tracking-tight">
                Graceful Sarees & <br />
                <span className="text-[#A67C33] italic">Bespoke Couture</span>
              </h1>
              <p className="font-italic-tagline text-lg sm:text-2xl text-[#781934] font-medium pt-1">
                Elegance in every drape.
              </p>
            </div>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base text-[#480E1E]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Immerse yourself in authentic South Indian silks, viral Instagram pastel organzas, made-to-measure bridal blouse customizations, and everyday comfort wear handpicked for you.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/sarees"
                className="px-6 sm:px-8 py-3.5 rounded-full bg-[#581125] text-[#FAF7F2] font-semibold text-sm sm:text-base hover:bg-[#480E1E] transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
              >
                <span>Explore Sarees</span>
                <ArrowRight className="w-4 h-4 text-[#E2C288] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/customization/saree"
                className="px-6 sm:px-8 py-3.5 rounded-full bg-[#FFFFFF] text-[#480E1E] font-semibold text-sm sm:text-base border border-[#C69D56]/60 hover:bg-[#FDECEF] transition-all shadow-sm flex items-center gap-2"
              >
                <Palette className="w-4 h-4 text-[#A67C33]" />
                <span>Customization Studio</span>
              </Link>

              <Link
                href="/offers-199"
                className="px-5 py-3.5 rounded-full bg-gradient-to-r from-[#991B1B] to-[#7F1D1D] text-[#FFFFFF] font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-md flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-[#E2C288] animate-spin" />
                <span>Offers Under ₹199</span>
              </Link>
            </div>

            {/* Key Trust Micro-Badges */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 border-t border-[#C69D56]/20 max-w-md mx-auto lg:mx-0 text-left">
              <div>
                <span className="block font-serif-luxury text-lg sm:text-xl font-bold text-[#480E1E]">100%</span>
                <span className="text-[11px] text-[#480E1E]/70">Pure Silk & Soft Blends</span>
              </div>
              <div>
                <span className="block font-serif-luxury text-lg sm:text-xl font-bold text-[#480E1E]">Custom</span>
                <span className="text-[11px] text-[#480E1E]/70">Tailoring to Fit</span>
              </div>
              <div>
                <span className="block font-serif-luxury text-lg sm:text-xl font-bold text-[#480E1E]">Pan-India</span>
                <span className="text-[11px] text-[#480E1E]/70">Safe Express Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer Decorative Gold Arch */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-[#E2C288] via-[#C69D56] to-[#480E1E] opacity-50 blur-xs" />
              
              {/* Inner Card */}
              <div className="relative rounded-3xl overflow-hidden bg-[#FFFFFF] p-2 shadow-2xl border border-[#C69D56]/30">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
                    alt="Lathe Boutique Saree Showcase"
                    fill
                    priority
                    className="object-cover object-top"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E0B19]/80 via-transparent to-black/20" />

                  {/* Brand Floating Watermark */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C69D56]/40">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="/logo.png"
                        alt="Lathe Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#480E1E] tracking-wider">
                      LATHE BOUTIQUE
                    </span>
                  </div>

                  {/* Bottom Feature Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#C69D56]/30 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#A67C33] tracking-widest">
                          Bridal & Festive
                        </span>
                        <h4 className="font-serif-luxury text-sm font-bold text-[#480E1E]">
                          Pure Kanjeevaram Soft Silk
                        </h4>
                        <span className="text-xs text-[#065F46] font-semibold">
                          Special Offer: ₹3,899 <span className="line-through text-[#480E1E]/50 text-[10px]">₹7,999</span>
                        </span>
                      </div>
                      <Link
                        href="/sarees"
                        className="p-2 rounded-full bg-[#581125] text-[#FAF7F2] hover:bg-[#480E1E] transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
