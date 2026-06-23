import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { blogs_data } from '@/lib/data';

export const metadata = {
  title: 'Travel Blog | TrayJourney',
  description: 'Travel tips, guides, and stories from India.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-beige">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-royal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Travel Experiences & Guides</h1>
          <p className="text-xl text-white/80 max-w-2xl">Read our latest stories to inspire your next Indian adventure.</p>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-2 gap-8">
            {blogs_data.map(blog => (
               <article key={blog.slug} className="bg-white rounded-3xl overflow-hidden border border-gold/50 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1">
                 <Link href={`/blog/${blog.slug}`} className="block relative h-72">
                   <Image src={blog.image} alt={blog.title} fill className="object-cover" referrerPolicy="no-referrer" />
                 </Link>
                 <div className="p-8">
                   <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                     <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {blog.date}</span>
                     <span className="flex items-center gap-1.5 text-saffron"><Clock className="w-4 h-4" /> {blog.readingTime}</span>
                   </div>
                   <h2 className="text-3xl font-serif font-bold text-royal mb-4 line-clamp-2 hover:text-saffron transition-colors">
                     <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                   </h2>
                   <p className="text-slate-600 line-clamp-3 mb-6 relative">
                     {blog.excerpt}
                   </p>
                   <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                     <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                       <User className="w-5 h-5" />
                     </div>
                     <span className="font-bold text-slate-800">{blog.author}</span>
                   </div>
                 </div>
               </article>
            ))}
         </div>
      </div>
    </main>
  )
}
