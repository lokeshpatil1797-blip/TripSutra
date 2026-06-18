'use client';
import { motion } from 'motion/react';
import { Percent, ShieldCheck, Users, Smile, HeartHandshake, Map } from 'lucide-react';

const benefits = [
  {
    icon: Percent,
    title: 'Special Group Discounts',
    description: 'Save up to 15% on your total package cost when traveling in a group. More people means more savings for everyone.'
  },
  {
    icon: Users,
    title: 'Private Expert Guides',
    description: 'Groups of 4 or more automatically receive private dedicated cultural guides to enhance your personal experience.'
  },
  {
    icon: HeartHandshake,
    title: 'Shared Memories',
    description: 'Experience the magic of India with those who matter most. Discovering new cultures together creates unmistakable bonds.'
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure Travel',
    description: 'Traveling together naturally adds a layer of security, supported further by our 24/7 dedicated local assistance.'
  },
  {
    icon: Smile,
    title: 'Better Experiences',
    description: 'Group bookings unlock exclusive cultural experiences like private cooking classes or dedicated cultural performances.'
  },
  {
    icon: Map,
    title: 'Lower Add-On Costs',
    description: 'Share the cost of optional add-ons like premium vehicle upgrades, exclusive safari jeeps, and boat rentals.'
  }
];

export default function WhyGroupTravel() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-saffron font-bold tracking-wider uppercase text-sm mb-2 block">Travel Better Together</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal mb-4">Why Travel in Groups?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Whether it&apos;s with family, friends, or a community club, group travel amplifies the joy and lowers the cost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-[#FFF8F0] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gold group"
             >
               <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-saffron group-hover:text-white transition-colors text-royal shadow-sm border border-gold/50">
                  <benefit.icon className="w-7 h-7" />
               </div>
               <h4 className="text-xl font-bold text-royal mb-3">{benefit.title}</h4>
               <p className="text-slate-600 leading-relaxed font-medium">{benefit.description}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
