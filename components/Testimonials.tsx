'use client';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    country: 'United Kingdom',
    rating: 5,
    text: 'Traveling to India seemed daunting, but TrayJourney made it the trip of a lifetime. The guides were phenomenally knowledgeable and the local cooking class was the highlight of our journey!',
    seed: 'sarah'
  },
  {
    name: 'Michael & David',
    country: 'Australia',
    rating: 5,
    text: 'We did the Golden Triangle and Rajasthan Heritage. Flawless execution. We felt safe, perfectly pampered, and truly immersed in the culture. The heritage hotels were breathtaking.',
    seed: 'michael'
  },
  {
    name: 'Elena Rostova',
    country: 'Germany',
    rating: 5,
    text: 'The Spiritual India Journey changed my perspective. Their attention to detail and respectful approach to Varanasi and Rishikesh gave us an authentic, uncommercialized experience. Highly recommended.',
    seed: 'elena'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-beige/50 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="text-center mb-16">
          <span className="text-saffron font-bold tracking-wider uppercase text-sm mb-2 block">Voices of Travelers</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal mb-4">What the World Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Stories and reviews from our global family of adventurers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {testimonials.map((test, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.15 }}
               className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative mt-6"
             >
                <div className="absolute -top-6 left-8">
                   <div className="relative w-14 h-14 rounded-full border-4 border-white shadow-md overflow-hidden">
                      <Image src={`https://picsum.photos/seed/${test.seed}/100/100`} alt={test.name} fill className="object-cover" referrerPolicy="no-referrer" />
                   </div>
                </div>

                <Quote className="absolute top-8 right-8 w-10 h-10 text-beige fill-current opacity-50" />

                <div className="pt-8 mb-4">
                  <div className="flex text-gold mb-2">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed relative z-10 font-medium">&quot;{test.text}&quot;</p>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-4">
                   <h4 className="font-bold text-gray-900">{test.name}</h4>
                   <p className="text-sm text-saffron font-medium">{test.country}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
