'use client';
import { Sparkles } from 'lucide-react';

export default function SpecialOfferBanner() {
  return (
    <div className="bg-saffron text-white py-3 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-center">
        <Sparkles className="w-5 h-5 hidden sm:block" />
        <span>Special Offer: Book for 4 Travelers and Get 10% OFF on Your Entire Package!</span>
        <Sparkles className="w-5 h-5 hidden sm:block" />
      </div>
    </div>
  );
}
