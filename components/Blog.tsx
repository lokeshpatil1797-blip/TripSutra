'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ChevronRight, Calendar } from 'lucide-react';

const posts = [
  {
    title: 'Best Time to Visit India: A Complete Guide',
    excerpt: 'Plan your perfect trip by understanding India\'s diverse climate, from the snowy Himalayas to the tropical south.',
    date: 'Oct 15, 2023',
    seed: 'india-climate'
  },
  {
    title: 'Indian Food Guide for Foreigners',
    excerpt: 'Navigate the complex, vibrant, and incredibly delicious world of Indian cuisine without upsetting your stomach.',
    date: 'Sep 22, 2023',
    seed: 'india-food'
  },
  {
    title: 'Top 10 Cultural Etiquette Tips',
    excerpt: 'Learn the dos and don\'ts of Indian culture to show respect and connect better with locals during your travels.',
    date: 'Aug 08, 2023',
    seed: 'india-etiquette'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-beige scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-saffron font-bold tracking-wider uppercase text-sm mb-2 block">Travel Resources</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal mb-4">India Travel Guides</h2>
            <p className="text-gray-600 text-lg">Helpful tips, guides, and inspiration for your Indian adventure.</p>
          </div>
          <button className="flex items-center gap-2 text-royal font-bold hover:text-saffron transition-colors group px-4 py-2">
            View All Posts <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {posts.map((post, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 group transition-all"
             >
                <div className="relative h-56 overflow-hidden">
                   <Image 
                     src={`https://picsum.photos/seed/${post.seed}/600/400`} 
                     alt={post.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-500" 
                     referrerPolicy="no-referrer"
                   />
                </div>
                <div className="p-6">
                   <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-royal transition-colors">{post.title}</h3>
                   <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                   <span className="text-saffron font-bold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ChevronRight className="w-4 h-4" />
                   </span>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
