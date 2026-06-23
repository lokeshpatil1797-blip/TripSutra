import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { packages_data } from '@/lib/data';

export const metadata = {
  title: 'India Tour Packages | Trip Sutra',
  description: 'Book the best holiday packages and travel experiences in India.',
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-beige">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-royal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Tour Packages' }]} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Tour Packages</h1>
          <p className="text-xl text-white/80 max-w-2xl">Curated itineraries designed for authentic experiences.</p>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages_data.map((pkg) => (
             <div key={pkg.slug} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gold group flex flex-col h-full relative">
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-saffron text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="absolute top-4 left-4 z-10 bg-royal text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Up to 15% Group Discount
                </div>
                <div className="relative h-60 overflow-hidden">
                   <Image 
                     src={pkg.image}
                     alt={pkg.name}
                     fill
                     className="object-cover group-hover:scale-110 transition-transform duration-700"
                     referrerPolicy="no-referrer"
                   />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-royal mb-2 group-hover:text-saffron transition-colors">
                        <Link href={`/packages/${pkg.slug}`}>{pkg.name}</Link>
                      </h3>
                      <p className="text-slate-500 font-medium">{pkg.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">From</p>
                      <p className="text-2xl font-bold text-saffron">${pkg.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex text-saffron">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-slate-700">{pkg.rating}</span>
                    <span className="text-sm text-slate-500">({pkg.reviews} reviews)</span>
                  </div>

                  <div className="space-y-3 mb-8 flex-1">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 shrink-0"></div>
                        <p className="text-sm text-slate-600 font-medium">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/packages/${pkg.slug}`}
                    className="w-full bg-transparent hover:bg-royal text-royal hover:text-white font-bold py-3.5 rounded-xl transition-colors border-2 border-royal text-center block"
                  >
                    View Details
                  </Link>
                </div>
             </div>
          ))}
        </div>
      </div>
    </main>
  );
}
