import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { states_data, destinations } from '@/lib/data';

export function generateStaticParams() {
  return states_data.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params;
  const state = states_data.find((s) => s.slug === stateSlug);
  if (!state) return { title: 'Not Found' };
  return {
    title: `${state.name} Travel & Tourism Guide | TrayJourney`,
    description: state.history.substring(0, 160),
  };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params;
  const stateData = states_data.find((s) => s.slug === stateSlug);
  
  if (!stateData) {
    notFound();
  }

  const stateCities = destinations.filter(d => d.state === stateData.slug);

  return (
    <main className="min-h-screen bg-beige">
      <Navbar />
      
      <div className="relative h-[50vh] flex items-end pb-12">
        <Image 
          src={stateData.image}
          alt={stateData.name}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumbs 
            items={[
               { label: 'Destinations', href: '/destinations' },
               { label: stateData.name }
            ]} 
          />
          <span className="text-saffron font-bold tracking-wider uppercase text-sm mb-2 block">State Guide</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">{stateData.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid md:grid-cols-2 gap-12">
           <section>
             <h2 className="text-3xl font-serif font-bold text-royal mb-6">History & Culture</h2>
             <div className="space-y-4">
               <p className="text-lg text-slate-700 leading-relaxed indent-0 space-y-4">{stateData.history}</p>
               <p className="text-lg text-slate-700 leading-relaxed indent-0 space-y-4">{stateData.culture}</p>
             </div>
           </section>
           
           <section className="bg-white p-8 rounded-3xl border border-gold/50 shadow-sm">
             <h3 className="text-2xl font-serif font-bold text-royal mb-6">Quick Highlights</h3>
             <ul className="space-y-4 text-slate-700">
               <li><strong className="text-royal">Major Attractions: </strong>{stateData.attractions.join(', ')}</li>
               <li><strong className="text-royal">Famous Food: </strong>{stateData.food}</li>
               <li><strong className="text-royal">Suggested Route: </strong>{stateData.bestRoutes}</li>
             </ul>
           </section>
        </div>

        <section>
          <h2 className="text-3xl font-serif font-bold text-royal mb-8">Popular Destinations in {stateData.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stateData.famousCities.map(city => (
              <Link key={city.slug} href={`/destination/${city.slug}`} className="group relative h-64 rounded-2xl overflow-hidden block">
                <Image src={city.image} alt={city.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-serif font-bold text-white group-hover:text-saffron transition-colors">{city.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
