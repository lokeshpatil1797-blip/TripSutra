'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

const destinations = [
  { name: 'Jaipur', seed: 'jaipur-city', desc: 'The Pink City' },
  { name: 'Udaipur', seed: 'udaipur-lake', desc: 'City of Lakes' },
  { name: 'Varanasi', seed: 'varanasi-ghat', desc: 'Spiritual Heart' },
  { name: 'Goa', seed: 'goa-beach', desc: 'Coastal Paradise' },
  { name: 'Rishikesh', seed: 'rishikesh-yoga', desc: 'Yoga Capital' },
  { name: 'Agra', seed: 'agra-taj', desc: 'City of Love' },
  { name: 'Mumbai', seed: 'mumbai-city', desc: 'City of Dreams' },
  { name: 'Kochi', seed: 'kochi-kerala', desc: 'Queen of Arabian Sea' }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-saffron font-bold tracking-wider uppercase text-sm mb-2 block">Incredible India</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore the diverse landscapes, vibrant cities, and historical marvels that make India truly incredible.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-gold"
            >
              <Image 
                src={`https://picsum.photos/seed/${dest.seed}/600/600`}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 w-full z-10">
                <h3 className="text-white text-lg sm:text-xl font-bold uppercase mb-1">{dest.name}</h3>
                <p className="text-gold text-[10px] sm:text-xs font-normal uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{dest.desc}</p>
              </div>
              <div className="absolute inset-0 bg-royal/10 group-hover:bg-transparent transition-colors z-0 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
