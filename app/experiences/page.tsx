import { experiences_data } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function ExperiencesIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-saffron font-bold tracking-wider uppercase text-sm mb-2 block">Immersive Culture</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-royal mb-4">All Cultural Experiences</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Discover the soul of India through our curated list of authentic local experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences_data.map((exp, idx) => (
             <div
               key={idx}
               className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
             >
              <Link href={`/experiences/${exp.slug}`} className="block w-full h-full">
                <Image 
                  src={`https://picsum.photos/seed/${exp.seed}/600/800`}
                  alt={exp.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <h2 className="text-2xl font-serif text-white font-bold mb-2 group-hover:-translate-y-1 transition-transform duration-300">
                      {exp.title}
                   </h2>
                   <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 flex justify-between items-center text-white/90 text-sm">
                      <span>{exp.duration}</span>
                      <span className="text-saffron font-medium">View Details &rarr;</span>
                   </div>
                </div>
              </Link>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
