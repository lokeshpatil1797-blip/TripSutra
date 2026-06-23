import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, IndianRupee, Sun, CheckCircle2, ChevronRight, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { destinations, packages_data } from '@/lib/data';

export function generateStaticParams() {
  return destinations.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city: cityParam } = await params;
  const city = destinations.find((d) => d.slug === cityParam);
  if (!city) return { title: 'Not Found' };
  return {
    title: `${city.name} Travel Guide & Tour Packages | Trip Sutra`,
    description: city.about.substring(0, 160),
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: cityParam } = await params;
  const city = destinations.find((d) => d.slug === cityParam);
  
  if (!city) {
    notFound();
  }

  // Find related tours based on text search in itinerary/name for simplicity here
  const relatedTours = packages_data.filter(pkg => 
    pkg.slug.includes(city.slug) || 
    pkg.itinerary.some(i => i.desc.includes(city.name) || i.title.includes(city.name))
  );

  return (
    <main className="min-h-screen bg-beige">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-end pb-16">
        <Image 
          src={city.image}
          alt={city.name}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumbs 
            items={[
               { label: 'Destinations', href: '/destinations' },
               { label: city.stateName, href: `/state/${city.state}` },
               { label: city.name }
            ]} 
          />
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">{city.name}</h1>
          <div className="flex flex-wrap gap-4 text-white p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 inline-flex">
             <div className="flex items-center gap-2">
               <Sun className="w-5 h-5 text-saffron" />
               <span className="font-medium text-sm text-balance">Best Time: {city.bestTime}</span>
             </div>
             <div className="hidden sm:block w-px h-5 bg-white/30 truncate"></div>
             <div className="flex items-center gap-2">
               <Clock className="w-5 h-5 text-saffron" />
               <span className="font-medium text-sm">Ideal: {city.duration}</span>
             </div>
             <div className="hidden sm:block w-px h-5 bg-white/30 truncate"></div>
             <div className="flex items-center gap-2">
               <IndianRupee className="w-5 h-5 text-saffron" />
               <span className="font-medium text-sm">{city.budget} avg</span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            {/* About */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-royal mb-6">About {city.name}</h2>
              <p className="text-lg text-slate-700 leading-relaxed indent-0 space-y-4">
                {city.about}
              </p>
            </section>

            {/* Attractions */}
            {city.attractions.length > 0 && (
              <section>
                <h2 className="text-3xl font-serif font-bold text-royal mb-6">Top Attractions</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {city.attractions.map((attr, idx) => (
                    <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gold/50 shadow-sm">
                      <div className="relative h-48">
                        <Image src={attr.image} alt={attr.name} fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-royal mb-2">{attr.name}</h3>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{attr.description}</p>
                        <div className="space-y-1 text-sm text-slate-500 font-medium pb-4 border-b border-slate-100 mb-4">
                          <div className="flex justify-between"><span>Hours:</span> <span className="text-royal">{attr.hours}</span></div>
                          <div className="flex justify-between"><span>Entry:</span> <span className="text-royal">{attr.entryFee}</span></div>
                        </div>
                        <div className="text-sm">
                          <span className="font-bold text-saffron">Tip: </span> 
                          <span className="text-slate-600 italic break-words">{attr.tips}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerary */}
            {city.itinerary.length > 0 && (
              <section>
                <h2 className="text-3xl font-serif font-bold text-royal mb-6">Suggested Itinerary</h2>
                <div className="space-y-6">
                  {city.itinerary.map((day, idx) => (
                    <div key={idx} className="flex gap-4">
                       <div className="flex flex-col items-center">
                         <div className="w-10 h-10 rounded-full bg-royal text-white flex items-center justify-center font-bold z-10">
                           {day.day}
                         </div>
                         {idx !== city.itinerary.length - 1 && <div className="w-0.5 h-full bg-gold/50 my-2"></div>}
                       </div>
                       <div className="bg-white p-6 rounded-2xl border border-gold/50 flex-1 shadow-sm pb-8">
                         <h4 className="text-lg font-bold text-royal mb-3">{day.title}</h4>
                         <ul className="space-y-2">
                           {day.activities.map((act, i) => (
                             <li key={i} className="flex gap-2 text-slate-700 items-start">
                               <CheckCircle2 className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
                               <span>{act}</span>
                             </li>
                           ))}
                         </ul>
                       </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-1 space-y-8">
             {/* Transport Info */}
             <div className="bg-royal text-white p-6 rounded-3xl">
                <h3 className="text-xl font-serif font-bold mb-6">Travel Information</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="block text-saffron font-bold text-xs uppercase tracking-wider mb-1">Nearest Airport</span>
                    <span>{city.transport.airport || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="block text-saffron font-bold text-xs uppercase tracking-wider mb-1">Railway Station</span>
                    <span>{city.transport.railway || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="block text-saffron font-bold text-xs uppercase tracking-wider mb-1">Local Transport</span>
                    <span>{city.transport.local}</span>
                  </div>
                </div>
             </div>

             {/* Tour Packages (Sidebar) */}
             {relatedTours.length > 0 && (
               <div>
                  <h3 className="text-2xl font-serif font-bold text-royal mb-6">Available Packages</h3>
                  <div className="space-y-4">
                    {relatedTours.slice(0,3).map(tour => (
                      <Link key={tour.slug} href={`/packages/${tour.slug}`} className="group block bg-white rounded-2xl p-3 border border-gold hover:shadow-md transition-all flex gap-4 items-center">
                        <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                          <Image src={tour.image} alt={tour.name} fill className="object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <h4 className="font-bold text-royal line-clamp-2 text-sm mb-1">{tour.name}</h4>
                          <div className="text-saffron font-bold text-sm">${tour.price}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </main>
  );
}
