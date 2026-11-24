'use client';

import Link from 'next/link';
import { Phone, Sparkles, ShieldCheck } from 'lucide-react';
import Instagram from '@/components/icons/Instagram';

export default function TopBar() {
  return (
    <div className="bg-[#480E1E] text-[#F8F1E4] text-xs font-medium py-2 px-4 border-b border-[#C69D56]/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Announcement */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Sparkles className="w-3.5 h-3.5 text-[#E2C288] shrink-0 animate-pulse" />
          <span>
            Festive Special: <strong className="text-[#E2C288]">Free Express Delivery</strong> on orders above ₹999 | GPay & UPI Accepted
          </span>
        </div>

        {/* Right: Quick Contacts & Admin */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <a
            href="tel:9486230422"
            className="flex items-center gap-1 hover:text-[#E2C288] transition-colors"
            title="Call Boutique"
          >
            <Phone className="w-3 h-3 text-[#E2C288]" />
            <span>9486230422</span>
          </a>

          <span className="text-[#C69D56]/40 hidden md:inline">|</span>

          <a
            href="https://www.instagram.com/lathe_botique/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#E2C288] transition-colors"
            title="Instagram @lathe_botique"
          >
            <Instagram className="w-3 h-3 text-[#E2C288]" />
            <span>@lathe_botique</span>
          </a>

          <span className="text-[#C69D56]/40">|</span>

          <Link
            href="/admin"
            className="flex items-center gap-1 text-[#E2C288] hover:underline transition-all"
            title="Owner Admin Dashboard"
          >
            <ShieldCheck className="w-3 h-3 text-[#E2C288]" />
            <span className="font-semibold">Owner Portal</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
