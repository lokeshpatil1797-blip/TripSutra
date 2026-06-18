'use client';
import { motion } from 'motion/react';
import { Compass, ShieldCheck, HeartHandshake, Map, Clock, Wallet } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Compass,
    title: 'Local Expert Guides',
    description: 'Explore with passionate locals who know the hidden gems.'
  },
  {
    icon: Wallet,
    title: 'Affordable Packages',
    description: 'Premium experiences tailored to fit your budget without compromise.'
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure Travel',
    description: 'Your safety is our top priority with 24/7 on-ground assistance.'
  },
  {
    icon: Map,
    title: 'Personalized Itineraries',
    description: 'Customized trips that match your pace, interests, and style.'
  },
  {
    icon: HeartHandshake,
    title: 'Cultural Experiences',
    description: 'Beyond sightseeing—participate in real Indian community life.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Always available to ensure your journey is seamless and stress-free.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-beige scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-saffron font-bold tracking-wider uppercase text-sm mb-2 block">About Trip Sutra</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal mb-6 leading-tight">
              We Don&apos;t Just Show You India, We Make You Feel It.
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded by passionate travelers, Trip Sutra was born with a mission: to bridge the gap between foreign tourists and the authentic soul of India. We wanted to move beyond the typical tourist traps and create a space where travelers can truly experience our vibrant heritage.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Whether you are an adventurer seeking the heights of the Himalayas, a spiritual seeker drawn to Varanasi, or a culture enthusiast wanting to taste the real spice of life, we are your trusted companions on this journey.
            </p>

            <div className="flex items-center gap-6 pb-4 border-b border-gray-200">
              <div className="flex -space-x-4">
                <Image src="https://picsum.photos/seed/face1/100/100" alt="Guide" width={48} height={48} className="rounded-full border-2 border-white object-cover hidden sm:block" referrerPolicy="no-referrer" />
                <Image src="https://picsum.photos/seed/face2/100/100" alt="Guide" width={48} height={48} className="rounded-full border-2 border-white object-cover hidden sm:block" referrerPolicy="no-referrer" />
                <Image src="https://picsum.photos/seed/face3/100/100" alt="Guide" width={48} height={48} className="rounded-full border-2 border-white object-cover hidden sm:block" referrerPolicy="no-referrer" />
                <div className="w-12 h-12 rounded-full border-2 border-white bg-saffron text-white flex items-center justify-center font-bold text-sm">
                  10+
                </div>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Years of Experience</p>
                <p className="text-gray-600">Trusted by Global Travelers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
               <Image 
                  src="https://picsum.photos/seed/india-culture/800/1000" 
                  alt="Authentic Indian Experience" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
               />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold rounded-full -z-0 opacity-50 blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-saffron rounded-full -z-0 opacity-30 blur-2xl"></div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-serif font-bold text-royal mb-4">Why Travel With Us</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">We provide a seamless blend of comfort, authenticity, and cultural immersion.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gold group"
             >
               <div className="w-14 h-14 bg-beige rounded-xl flex items-center justify-center mb-6 group-hover:bg-saffron group-hover:text-white transition-colors text-royal">
                  <feature.icon className="w-7 h-7" />
               </div>
               <h4 className="text-xl font-bold text-royal mb-3">{feature.title}</h4>
               <p className="text-gray-600 leading-relaxed">{feature.description}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
