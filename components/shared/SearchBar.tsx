'use client';
import { useState, useRef, useEffect } from 'react';
import { Search, X, MapPin, Package, FileText, Map } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { destinations, states_data, packages_data, blogs_data } from '@/lib/data';

type SearchResult = {
  id: string;
  type: 'city' | 'state' | 'package' | 'blog';
  title: string;
  subtitle: string;
  url: string;
  icon: any;
};

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const found: SearchResult[] = [];

    // Search Cities
    destinations.forEach(d => {
      if (d.name.toLowerCase().includes(q)) {
        found.push({ id: `dest-${d.slug}`, type: 'city', title: d.name, subtitle: `City in ${d.stateName}`, url: `/destination/${d.slug}`, icon: MapPin });
      } else {
        d.attractions.forEach(a => {
          if (a.name.toLowerCase().includes(q)) {
            found.push({ id: `attr-${a.name}`, type: 'city', title: a.name, subtitle: `Attraction in ${d.name}`, url: `/destination/${d.slug}`, icon: MapPin });
          }
        });
      }
    });

    // Search States
    states_data.forEach(s => {
      if (s.name.toLowerCase().includes(q)) {
        found.push({ id: `state-${s.slug}`, type: 'state', title: s.name, subtitle: 'Indian State', url: `/state/${s.slug}`, icon: Map });
      }
    });

    // Search Packages
    packages_data.forEach(p => {
      if (p.name.toLowerCase().includes(q) || p.highlights.some(h => h.toLowerCase().includes(q))) {
        found.push({ id: `pkg-${p.slug}`, type: 'package', title: p.name, subtitle: p.duration, url: `/packages/${p.slug}`, icon: Package });
      }
    });

    // Search Blogs
    blogs_data.forEach(b => {
      if (b.title.toLowerCase().includes(q)) {
        found.push({ id: `blog-${b.slug}`, type: 'blog', title: b.title, subtitle: 'Travel Blog', url: `/blog/${b.slug}`, icon: FileText });
      }
    });

    setResults(found.slice(0, 8)); // limit results
  }, [query]);

  const handleSelect = (url: string) => {
    router.push(url);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-sm ml-auto mr-4 hidden md:block">
      <div className="relative">
        <input 
          type="text" 
          value={query}
          onChange={(e) => {
             setQuery(e.target.value);
             setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search destinations, packages..."
          className="w-full bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-saffron"
        />
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        {query && (
          <button onClick={() => { setQuery(''); setResults([]); }} className="absolute right-3 top-2.5">
            <X className="w-4 h-4 text-slate-400 hover:text-slate-600" />
          </button>
        )}
      </div>

      {isOpen && query.trim().length >= 2 && (
        <div className="absolute top-12 right-0 w-full md:w-96 bg-white rounded-2xl shadow-xl border border-gold/30 z-50 overflow-hidden">
          {results.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50">Results</div>
              <ul className="max-h-80 overflow-y-auto">
                {results.map((res) => {
                  const Icon = res.icon;
                  return (
                    <li key={res.id}>
                      <button 
                        onClick={() => handleSelect(res.url)} 
                        className="w-full text-left px-4 py-3 hover:bg-beige flex gap-3 items-center transition-colors border-b border-slate-50 last:border-0"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-royal" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-royal line-clamp-1">{res.title}</p>
                          <p className="text-xs text-slate-500">{res.subtitle}</p>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="p-6 text-center text-slate-500 text-sm">
              <p>No results found for &quot;{query}&quot;</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
