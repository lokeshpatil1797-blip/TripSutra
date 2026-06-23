'use client';
import { motion } from 'motion/react';
import { Clock, Check, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Let's use the local data definition so this component is self-contained for props, but we route to the right slug.
const packages = [
  {
    title: 'Golden Triangle Tour',
    slug: 'golden-triangle-tour',
    duration: '7 Days / 6 Nights',
    price: '$799',
    rating: '4.9',
    reviews: 124,
    highlights: ['Delhi, Agra, Jaipur', 'Taj Mahal Sunrise Visit', 'Amer Fort Elephant Ride', 'Local Market Tour'],
    image: 'https://picsum.photos/seed/taj-mahal-tour/800/600',
    popular: true
  },
  {
    title: 'Rajasthan Royal Experience',
    slug: 'rajasthan-royal-tour',
    duration: '10 Days / 9 Nights',
    price: '$1,099',
    rating: '4.8',
    reviews: 98,
    highlights: ['Palaces of Udaipur', 'Jodhpur Blue City', 'Desert Safari in Jaisalmer', 'Cultural Night Dinner'],
    image: 'https://picsum.photos/seed/rajasthan-fort/800/600',
    popular: false
  },
  {
    title: 'Goa Beach Escape',
    slug: 'goa-beach-escape',
    duration: '5 Days / 4 Nights',
    price: '$450',
    rating: '4.8',
    reviews: 175,
    highlights: ['Luxury Beach Resort', 'Private Boat Cruise', 'Old Goa Heritage Walk', 'Beachside Seafood Dinner'],
    image: 'https://picsum.photos/seed/goa-beach/800/600',
    popular: true
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-beige scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-saffron font-bold tracking-wider uppercase text-sm mb-2 block">Curated Journeys</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal mb-4">Featured Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">Handpicked itineraries designed to give you the perfect balance of adventure, culture, and relaxation.</p>
          <Link href="/packages" className="text-saffron font-bold hover:text-royal transition-colors">
            View All Packages &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col border border-gold relative group"
             >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-saffron text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="absolute top-4 left-4 z-10 bg-royal text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Up to 15% Group Discount
                </div>
                <Link href={`/packages/${pkg.slug}`} className="relative h-60 overflow-hidden block">
                   <Image 
                     src={pkg.image}
                     alt={pkg.title}
                     fill
                     className="object-cover group-hover:scale-105 transition-transform duration-500"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="text-white flex items-center gap-1 text-sm font-medium">
                         <Clock className="w-4 h-4" />
                         {pkg.duration}
                      </div>
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-md text-white text-sm">
                         <Star className="w-4 h-4 fill-gold text-gold" />
                         <span className="font-bold">{pkg.rating}</span>
                         <span className="opacity-80">({pkg.reviews})</span>
                      </div>
                   </div>
                </Link>

                <div className="p-6 flex-1 flex flex-col">
                   <h3 className="text-2xl font-serif font-bold text-royal mb-2 italic">
                     <Link href={`/packages/${pkg.slug}`} className="hover:text-saffron transition-colors">{pkg.title}</Link>
                   </h3>
                   <div className="text-3xl font-bold text-royal mb-6">
                      {pkg.price} <span className="text-sm text-gray-500 font-normal">/ person</span>
                   </div>

                   <div className="space-y-3 mb-8 flex-1">
                      {pkg.highlights.map((highlight, hIdx) => (
                         <div key={hIdx} className="flex items-start gap-3">
                            <div className="mt-1 w-5 h-5 rounded-full bg-beige flex items-center justify-center flex-shrink-0">
                               <Check className="w-3 h-3 text-saffron" />
                            </div>
                            <span className="text-gray-600 font-medium text-sm">{highlight}</span>
                         </div>
                      ))}
                   </div>

                   <Link href={`/packages/${pkg.slug}`} className="w-full text-center bg-royal hover:bg-royal-dark text-white font-bold py-3.5 rounded-xl transition-colors shadow-md block">
                      View Details
                   </Link>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
