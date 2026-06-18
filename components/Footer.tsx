'use client';
import { MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-royal text-white pb-6 pt-12 md:pt-16 border-t-[8px] border-saffron">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              </div>
              <span className="font-sans text-xl font-bold tracking-tight text-white">
                Trip Sutra
              </span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Experience authentic culture, heritage, and local life with affordable premium travel packages designed for international travelers.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-saffron transition-colors">Our Story</a></li>
              <li><a href="#destinations" className="text-white/70 hover:text-saffron transition-colors">Destinations</a></li>
              <li><a href="#packages" className="text-white/70 hover:text-saffron transition-colors">Travel Packages</a></li>
              <li><a href="#blog" className="text-white/70 hover:text-saffron transition-colors">Travel Blog</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-saffron transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-saffron transition-colors">Visa Requirements</a></li>
              <li><a href="#" className="text-white/70 hover:text-saffron transition-colors">Safety Information</a></li>
              <li><a href="#" className="text-white/70 hover:text-saffron transition-colors">Payment Methods</a></li>
              <li><a href="#" className="text-white/70 hover:text-saffron transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-saffron transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4 text-sm">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
               <input type="email" placeholder="Enter your email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pb-3 text-white outline-none focus:border-saffron pr-32 text-sm" />
               <button className="absolute right-1 top-1 bottom-1 bg-saffron hover:bg-saffron-dark text-white font-bold px-4 rounded-lg transition-colors text-sm">
                  Subscribe
               </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 h-20 flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 md:pt-0">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2 opacity-70">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">System Secure</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-white/20"></div>
            <div className="hidden md:flex gap-4 text-xs font-medium">
              <span className="opacity-80">Visa Info</span>
              <span className="opacity-80">Safety Guide</span>
              <span className="opacity-80">Cancellation Policy</span>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase opacity-60">Currency</span>
              <span className="text-xs font-bold">USD ($) / EUR (€)</span>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-saffron hover:text-white transition-colors">FB</a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-saffron hover:text-white transition-colors">IG</a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-saffron hover:text-white transition-colors">YT</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
