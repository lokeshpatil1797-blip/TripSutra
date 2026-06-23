import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { blogs_data } from '@/lib/data';

export function generateStaticParams() {
  return blogs_data.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs_data.find((b) => b.slug === slug);
  if (!blog) return { title: 'Not Found' };
  return {
    title: `${blog.title} | Trip Sutra Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs_data.find((b) => b.slug === slug);
  
  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-16 pb-12 bg-beige border-b border-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Breadcrumbs 
            items={[
               { label: 'Blog', href: '/blog' },
               { label: blog.title }
            ]} 
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-royal mb-6 leading-tight">{blog.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-500 uppercase tracking-widest pb-8">
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-saffron" /> {blog.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-saffron" /> {blog.date}</span>
            <span className="flex items-center gap-2 text-saffron"><Clock className="w-4 h-4" /> {blog.readingTime}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-16">
        <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl mb-16">
           <Image src={blog.image} alt={blog.title} fill className="object-cover" referrerPolicy="no-referrer" priority />
        </div>

        <article className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-royal prose-a:text-saffron">
           <p className="lead text-xl md:text-2xl text-slate-600 font-serif italic mb-10 pb-8 border-b border-gold/30">
             {blog.excerpt}
           </p>
           
           <div className="text-lg text-slate-800 leading-relaxed whitespace-pre-line">
             {blog.content}
           </div>
        </article>
      </div>

      {/* Keep Reading */}
      <div className="bg-beige py-16 border-t border-gold mt-16">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-serif font-bold text-royal mb-8">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-8">
               {blogs_data.filter(b => b.slug !== blog.slug).map(b => (
                 <Link key={b.slug} href={`/blog/${b.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-gold/50 hover:shadow-lg transition-transform hover:-translate-y-1">
                   <div className="relative h-48">
                     <Image src={b.image} alt={b.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                   </div>
                   <div className="p-6">
                     <h4 className="font-serif font-bold text-xl text-royal mb-2 group-hover:text-saffron transition-colors">{b.title}</h4>
                     <p className="text-sm text-slate-600">{b.excerpt}</p>
                   </div>
                 </Link>
               ))}
            </div>
         </div>
      </div>
    </main>
  );
}
