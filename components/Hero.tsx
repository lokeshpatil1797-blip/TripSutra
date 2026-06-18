'use client';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:grid lg:grid-cols-12 bg-white pt-24 lg:pt-0 overflow-hidden">
      <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-center space-y-6 bg-white relative z-10 order-2 lg:order-1 h-full">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-3 py-1 bg-gold text-royal text-xs font-bold uppercase tracking-[0.2em] rounded-sm self-start"
        >
          Authentic Cultural Journeys
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] text-royal"
        >
          Explore Incredible <br className="hidden md:block"/> <span className="text-saffron italic">India Together</span> & Save More
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-slate-600 leading-relaxed max-w-md"
        >
          Travel with friends, family, or groups and unlock exclusive discounts on unforgettable Indian experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <a
            href="#packages"
            className="group flex items-center justify-center gap-2 bg-saffron text-white px-8 py-4 font-bold rounded-lg shadow-lg shadow-saffron/30 hover:shadow-saffron/50 transition-all w-full sm:w-auto"
          >
            View Packages
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#calculator"
            className="group flex items-center justify-center border-2 border-royal text-royal px-8 py-4 font-bold rounded-lg hover:bg-royal hover:text-white transition-all w-full sm:w-auto"
          >
            Calculate Group Discount
          </a>
        </motion.div>

        <div className="pt-8 grid grid-cols-2 gap-6 border-t border-slate-100 mt-6">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 mt-1 bg-gold rounded-full flex-shrink-0"></div>
            <div>
              <p className="text-sm font-bold text-royal">Local Expert Guides</p>
              <p className="text-xs text-slate-500">Deep cultural immersion</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 mt-1 bg-gold rounded-full flex-shrink-0"></div>
            <div>
              <p className="text-sm font-bold text-royal">24/7 Support</p>
              <p className="text-xs text-slate-500">Safe & secure travel</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 p-4 lg:p-10 bg-beige flex flex-col justify-center relative order-1 lg:order-2 min-h-[50vh] lg:min-h-screen">
        <div className="absolute inset-0 z-0 lg:p-10 lg:pt-24 lg:pb-10 box-border">
          <div className="relative w-full h-full lg:rounded-3xl overflow-hidden border-0 lg:border border-gold shadow-sm">
            <Image
              src="https://picsum.photos/seed/india-heritage/1920/1080"
              alt="Beautiful Indian Heritage"
              fill
              priority
              className="object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-royal/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white z-10">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider mb-2">FEATURED DESTINATION</span>
              <h2 className="text-3xl font-serif font-bold">Jaipur, Rajasthan</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
