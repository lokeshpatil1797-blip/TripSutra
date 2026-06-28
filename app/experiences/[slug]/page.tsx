import { experiences_data } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return experiences_data.map((experience) => ({
    slug: experience.slug,
  }));
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const experience = experiences_data.find((e) => e.slug === resolvedParams.slug);

  if (!experience) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white text-center px-4">
            {experience.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/#experiences" className="text-saffron font-semibold hover:underline mb-8 inline-block">
          &larr; Back to Experiences
        </Link>
        
        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl mb-10 shadow-sm border border-slate-100">
          <p className="text-lg text-slate-700 leading-relaxed">
            {experience.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-serif font-bold text-royal mb-6">Highlights</h2>
            <ul className="space-y-4">
              {experience.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-saffron mr-3 mt-1">✓</span>
                  <span className="text-slate-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-royal text-white p-8 rounded-2xl h-fit">
            <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">Key Details</h3>
            
            <div className="space-y-6">
              <div>
                <span className="block text-white/70 text-sm mb-1 uppercase tracking-wider">Duration</span>
                <span className="font-semibold text-lg">{experience.duration}</span>
              </div>
              
              <div>
                <span className="block text-white/70 text-sm mb-1 uppercase tracking-wider">Available Locations</span>
                <span className="font-semibold text-lg">{experience.location}</span>
              </div>
            </div>
            
            <button className="w-full mt-8 bg-saffron hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full transition-colors">
              Inquire About This Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
