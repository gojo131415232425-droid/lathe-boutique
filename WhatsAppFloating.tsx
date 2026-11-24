'use client';

import { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-40 flex flex-col items-end gap-2.5">
      {/* Friendly Chat Tooltip */}
      {showTooltip && (
        <div className="relative bg-[#FFFFFF] text-[#480E1E] text-xs font-medium py-2 px-3 rounded-2xl shadow-xl border border-[#C69D56]/40 max-w-[210px] animate-bounce duration-1000">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 bg-[#480E1E] text-[#FAF7F2] rounded-full p-0.5 hover:bg-[#581125]"
            title="Close"
          >
            <X className="w-3 h-3" />
          </button>
          <span>Need saree customization or instant order? <strong>WhatsApp us!</strong></span>
        </div>
      )}

      {/* Buttons */}
      <div className="flex items-center gap-2">
        {/* Direct Call Button */}
        <a
          href="tel:9486230422"
          className="w-11 h-11 rounded-full bg-[#581125] text-[#FAF7F2] shadow-xl hover:bg-[#480E1E] flex items-center justify-center hover:scale-110 transition-transform border border-[#C69D56]/50"
          title="Call Lathe Boutique: 9486230422"
        >
          <Phone className="w-5 h-5 text-[#E2C288]" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919486230422?text=Hello%20Lathe%20Boutique!%20I%20am%20browsing%20your%20website%20and%20would%20like%20to%20enquire%20about%20a%20product%20/%20customization."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] text-[#FFFFFF] shadow-2xl hover:bg-[#20bd5a] flex items-center justify-center hover:scale-110 transition-all border-2 border-[#FFFFFF]"
          title="Chat on WhatsApp (9486230422)"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
