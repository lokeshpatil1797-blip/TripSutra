'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

const experiences = [
  { title: 'Traditional Indian Weddings', seed: 'indian-wedding' },
  { title: 'Local Village Tours', seed: 'indian-village' },
  { title: 'Yoga & Meditation Retreats', seed: 'yoga-retreat' },
  { title: 'Indian Cooking Classes', seed: 'indian-cooking' },
  { title: 'Festival Celebrations', seed: 'diwali-celebration' },
  { title: 'Wildlife Safaris', seed: 'tiger-safari' },
  { title: 'Temple Tours', seed: 'indian-temple' },
  { title: 'Street Food Markets', seed: 'indian-street-food' },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 bg-royal text-white scroll-mt-20 relative overflow-hidden">
      {/* Background motif */}
      <div className="absolute top-0 right-0 opacity-5 w-[800px] h-[800px] pointer-events-none">
         <Image src="https://picsum.photos/seed/motifs/800/800" alt="Motif" fill className="object-cover rounded-full blur-3xl mix-blend-overlay" referrerPolicy="no-referrer" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-saffron font-bold tracking-wider uppercase text-sm mb-2 block">Immersive Culture</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Discover the Soul of India</h2>
            <p className="text-white/80 text-lg">We offer exclusive access to authentic local experiences that allow you to participate in Indian culture, rather than just observing it.</p>
          </div>
          <button className="whitespace-nowrap px-6 py-3 rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all font-semibold">
            View All Experiences
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {experiences.map((exp, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: idx * 0.05 }}
               className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
             >
                <Image 
                  src={`https://picsum.photos/seed/${exp.seed}/400/600`}
                  alt={exp.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex items-end">
                   <h3 className="text-xl font-serif text-white font-bold group-hover:-translate-y-2 transition-transform duration-300">
                      {exp.title}
                   </h3>
                </div>
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-saffron/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
