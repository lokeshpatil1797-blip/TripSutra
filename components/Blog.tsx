'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Calendar } from 'lucide-react';
import { blogs_data } from '@/lib/data';

export default function Blog() {
  const posts = blogs_data.slice(0, 3);
  return (
    <section id="blog" className="py-24 bg-beige scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-saffron font-bold tracking-wider uppercase text-sm mb-2 block">Travel Resources</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal mb-4">India Travel Guides</h2>
            <p className="text-gray-600 text-lg">Helpful tips, guides, and inspiration for your Indian adventure.</p>
          </div>
          <Link href="/blog" className="flex items-center gap-2 text-royal font-bold hover:text-saffron transition-colors group px-4 py-2">
            View All Posts <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {posts.map((post, idx) => (
             <motion.div
               key={post.slug}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 group transition-all flex flex-col"
             >
                <Link href={`/blog/${post.slug}`} className="relative h-56 overflow-hidden block">
                   <Image 
                     src={post.image} 
                     alt={post.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-500" 
                     referrerPolicy="no-referrer"
                   />
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                   <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-royal transition-colors">
                     <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                   </h3>
                   <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-1">{post.excerpt}</p>
                   <Link href={`/blog/${post.slug}`} className="text-saffron font-bold text-sm uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all mt-auto w-fit">
                      Read More <ChevronRight className="w-4 h-4" />
                   </Link>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
