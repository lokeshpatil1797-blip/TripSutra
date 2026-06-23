import Link from 'next/link';
import Image from 'next/image';
import { destinations } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Destinations in India | Trip Sutra',
  description: 'Explore the best travel destinations in India.',
};

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-beige">
      <Navbar />
      
      <div className="pt-24 pb-12 bg-royal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Destinations' }]} />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Explore Incredible India</h1>
          <p className="text-xl text-white/80 max-w-2xl">Discover iconic cities, hidden gems, and spiritual capitals across the subcontinent.</p>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link key={dest.slug} href={`/destination/${dest.slug}`} className="group block">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gold/30">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 relative z-10">
                    <span className="text-saffron text-sm font-bold uppercase tracking-wider mb-1 block">{dest.stateName}</span>
                    <h3 className="text-2xl font-serif font-bold text-white">{dest.name}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
