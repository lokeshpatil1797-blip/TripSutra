import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Check, X, Calendar as CalendarIcon, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import GroupCalculator from '@/components/GroupCalculator';
import BookingForm from '@/components/BookingForm';
import { packages_data } from '@/lib/data';

export function generateStaticParams() {
  return packages_data.map((pkg) => ({
    package: pkg.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ package: string }> }) {
  const { package: pkgSlug } = await params;
  const pkg = packages_data.find((p) => p.slug === pkgSlug);
  if (!pkg) return { title: 'Not Found' };
  return {
    title: `${pkg.name} | TrayJourney`,
    description: pkg.highlights.join(', '),
  };
}

export default async function PackagePage({ params }: { params: Promise<{ package: string }> }) {
  const { package: pkgSlug } = await params;
  const pkg = packages_data.find((p) => p.slug === pkgSlug);
  
  if (!pkg) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-beige">
      <Navbar />
      
      <div className="relative h-[60vh] flex items-end pb-12">
        <Image 
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumbs 
            items={[
               { label: 'Packages', href: '/packages' },
               { label: pkg.name }
            ]} 
          />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">{pkg.name}</h1>
          <div className="flex flex-wrap items-center gap-6 text-white mb-4">
             <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-saffron">${pkg.price}</span>
                <span className="text-sm font-medium opacity-80">per person</span>
             </div>
             <div className="w-px h-6 bg-white/30 hidden sm:block"></div>
             <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-saffron" />
                <span className="font-medium text-lg">{pkg.duration}</span>
             </div>
             <div className="w-px h-6 bg-white/30 hidden sm:block"></div>
             <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-saffron fill-current" />
                <span className="font-bold text-lg">{pkg.rating}</span>
                <span className="text-sm opacity-80 ml-1">({pkg.reviews} reviews)</span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
           <div className="lg:col-span-2 space-y-12">
             <section className="bg-white p-8 rounded-3xl border border-gold/50 shadow-sm">
               <h2 className="text-2xl font-serif font-bold text-royal mb-6">Package Highlights</h2>
               <div className="grid sm:grid-cols-2 gap-4">
                 {pkg.highlights.map((h, i) => (
                   <div key={i} className="flex gap-3 items-start">
                     <Check className="w-5 h-5 text-saffron shrink-0" />
                     <span className="text-slate-700 font-medium">{h}</span>
                   </div>
                 ))}
               </div>
             </section>

             <section>
               <h2 className="text-3xl font-serif font-bold text-royal mb-8">Itinerary</h2>
               <div className="space-y-6">
                 {pkg.itinerary.length > 0 ? pkg.itinerary.map((day, i) => (
                   <div key={i} className="flex gap-6">
                     <div className="flex flex-col items-center">
                       <div className="w-12 h-12 rounded-full bg-saffron text-white flex items-center justify-center font-bold text-xl shrink-0 z-10 shadow-md">
                         {day.day}
                       </div>
                       {i !== pkg.itinerary.length - 1 && <div className="w-0.5 h-full bg-gold my-2 border-dashed"></div>}
                     </div>
                     <div className="bg-white p-8 rounded-3xl border border-gold/50 flex-1 shadow-sm pb-8 mt-1">
                       <h3 className="text-xl font-bold text-royal mb-2">{day.title}</h3>
                       <p className="text-slate-600 leading-relaxed">{day.desc}</p>
                     </div>
                   </div>
                 )) : <p className="text-slate-500 italic">Detailed itinerary available upon inquiry.</p>}
               </div>
             </section>

             <div className="grid md:grid-cols-2 gap-8">
               <section className="bg-[#f0fdf4] p-8 rounded-3xl border border-green-200">
                 <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-2">
                   <Check className="w-6 h-6 border-2 border-green-800 rounded-full p-0.5" /> What&apos;s Included
                 </h3>
                 <ul className="space-y-3">
                   {pkg.inclusions.map((inc, i) => (
                     <li key={i} className="flex gap-2 text-green-700 items-start">
                       <Check className="w-5 h-5 shrink-0 mt-0.5" /> <span>{inc}</span>
                     </li>
                   ))}
                 </ul>
               </section>
               
               <section className="bg-[#fef2f2] p-8 rounded-3xl border border-red-200">
                 <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
                   <X className="w-6 h-6 border-2 border-red-800 rounded-full p-0.5" /> Exclusions
                 </h3>
                 <ul className="space-y-3">
                   {pkg.exclusions.map((exc, i) => (
                     <li key={i} className="flex gap-2 text-red-700 items-start">
                       <X className="w-5 h-5 shrink-0 mt-0.5" /> <span>{exc}</span>
                     </li>
                   ))}
                 </ul>
               </section>
             </div>
           </div>

           <div className="lg:col-span-1">
              <BookingForm packageName={pkg.name} />
           </div>
        </div>
      </div>

      <div className="border-t border-gold bg-beige">
        <GroupCalculator />
      </div>
    </main>
  );
}
