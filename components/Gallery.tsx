'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

const images = [
  { seed: 'taj-mahal-zoom', span: 'col-span-2 row-span-2' },
  { seed: 'rajasthan-palace', span: 'col-span-1 row-span-1' },
  { seed: 'kerala-houseboat', span: 'col-span-1 row-span-1' },
  { seed: 'himalayas-mountain', span: 'col-span-2 row-span-1' },
  { seed: 'indian-festival-colors', span: 'col-span-1 row-span-2' },
  { seed: 'indian-food-thali', span: 'col-span-1 row-span-1' },
  { seed: 'spices-market', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
          <span className="text-saffron font-bold tracking-wider uppercase text-sm mb-2 block">Moments</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal mb-4">India Through Our Lens</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">A glimpse into the colors, landscapes, and smiles that await you.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
             >
                <Image 
                   src={`https://picsum.photos/seed/${img.seed}/800/${img.span.includes('row-span-2') ? '800' : '400'}`}
                   alt="Gallery image"
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-700"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
