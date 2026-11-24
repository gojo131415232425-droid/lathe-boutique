import Link from 'next/link';
import Image from 'next/image';
import { Scissors, Sparkles, Upload, Ruler, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CustomizationHighlight() {
  const steps = [
    {
      icon: Scissors,
      title: '1. Select Style & Fabric',
      desc: 'Pick your preferred silk, organza, georgette, or cotton base.'
    },
    {
      icon: Upload,
      title: '2. Upload Reference Image',
      desc: 'Share any Instagram or Pinterest design photo you love.'
    },
    {
      icon: Ruler,
      title: '3. Custom Fit & Aari Work',
      desc: 'Our master artisans stitch and hand-embroider to your measurements.'
    },
    {
      icon: CheckCircle2,
      title: '4. Delivered to Doorstep',
      desc: 'Quality checked, steam finished, and safely dispatched.'
    }
  ];

  return (
    <section className="py-16 bg-[#480E1E] text-[#FAF7F2] relative overflow-hidden border-y-2 border-[#C69D56]/40">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C69D56]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#581125] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#581125] border border-[#C69D56]/40 text-[#E2C288] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Bespoke Couture Studio
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Have a Dream Design in Mind? <br />
            <span className="text-[#E2C288] italic">We Customize It For You.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF7F2]/80 mt-3 max-w-lg mx-auto">
            From bridal Aari work blouses and personalized sarees to flared anarkalis and lehengas, Lathe Boutique brings your exact vision to life.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="bg-[#3E0B19]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#C69D56]/30 flex flex-col items-start hover:border-[#E2C288] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#581125] flex items-center justify-center text-[#E2C288] mb-4 border border-[#C69D56]/40">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-base font-bold text-[#E2C288] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-[#FAF7F2]/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dual CTA Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Saree Customization Card */}
          <div className="bg-[#FAF7F2] text-[#480E1E] p-6 sm:p-8 rounded-3xl shadow-xl border border-[#C69D56]/40 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#A67C33]">
                Bridal & Festive
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold mt-1">
                Saree & Blouse Customization
              </h3>
              <p className="text-xs sm:text-sm text-[#480E1E]/80 mt-2">
                Custom dye pure Kanjeevarams, hand-embroidery Maggam borders, monogramming, and designer bridal blouses.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/customization/saree"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#581125] text-[#FAF7F2] font-semibold text-xs sm:text-sm hover:bg-[#480E1E] transition-all shadow-md group"
              >
                <span>Customize Your Saree</span>
                <ArrowRight className="w-4 h-4 text-[#E2C288] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Dress Customization Card */}
          <div className="bg-[#FAF7F2] text-[#480E1E] p-6 sm:p-8 rounded-3xl shadow-xl border border-[#C69D56]/40 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#A67C33]">
                Party & Occasion
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold mt-1">
                Customized Dresses & Lehengas
              </h3>
              <p className="text-xs sm:text-sm text-[#480E1E]/80 mt-2">
                Send your dress inspiration photo, select your neckline, sleeves, and flared silhouette tailored to your body fit.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/customization/dresses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#480E1E] text-[#FAF7F2] font-semibold text-xs sm:text-sm hover:bg-[#581125] transition-all shadow-md group"
              >
                <span>Customize Your Dress</span>
                <ArrowRight className="w-4 h-4 text-[#E2C288] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
