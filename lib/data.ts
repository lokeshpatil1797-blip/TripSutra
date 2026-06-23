export const destinations = [
  {
    slug: 'delhi',
    name: 'Delhi',
    state: 'delhi-ncr',
    stateName: 'Delhi NCR',
    image: 'https://picsum.photos/seed/delhi/1200/800',
    about: 'Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque.',
    bestTime: 'October to March',
    budget: '$50 - $150 per day',
    duration: '3-4 Days',
    attractions: [
      { name: 'Red Fort', image: 'https://picsum.photos/seed/redfort/600/400', description: 'Historic fort.', hours: '9AM - 6PM', entryFee: '$7', tips: 'Visit early morning.' },
      { name: 'India Gate', image: 'https://picsum.photos/seed/indiagate/600/400', description: 'War memorial.', hours: '24 Hours', entryFee: 'Free', tips: 'Beautiful to visit at night.' },
      { name: 'Qutub Minar', image: 'https://picsum.photos/seed/qutub/600/400', description: 'Tall minaret.', hours: '7AM - 5PM', entryFee: '$8', tips: 'Photography allowed.' }
    ],
    thingsToDo: ['Try street food at Chandni Chowk', 'Heritage walks', 'Shopping at Dilli Haat', 'Visit Akshardham Temple'],
    food: [
      { name: 'Chole Bhature', places: 'Sita Ram Diwan Chand', veg: true },
      { name: 'Butter Chicken', places: 'Moti Mahal', veg: false },
      { name: 'Parathas', places: 'Paranthe Wali Gali', veg: true },
    ],
    itinerary: [
      { day: 1, title: 'Old Delhi Charm', activities: ['Red Fort', 'Jama Masjid', 'Chandni Chowk'] },
      { day: 2, title: 'Monuments and Markets', activities: ['India Gate', 'Humayun Tomb', 'Connaught Place'] },
      { day: 3, title: 'Spiritual & Modern', activities: ['Lotus Temple', 'Qutub Minar', 'Hauz Khas Village'] },
    ],
    transport: {
      airport: 'Indira Gandhi International Airport (DEL)',
      railway: 'New Delhi Railway Station (NDLS)',
      local: 'Delhi Metro, Cabs, Auto-rickshaws',
    },
    safety: 'Generally safe, beware of pickpockets in crowded areas. Use official cabs.',
    weather: 'Hot summers, cold winters, pleasant spring/autumn.',
    faqs: [
      { q: 'Is it safe for solo female travelers?', a: 'Yes, but standard precautions apply. Avoid isolated areas late at night.' },
      { q: 'How is the Metro system?', a: 'Delhi Metro is excellent, cheap, fast, and covers most tourist spots.' }
    ]
  },
  {
    slug: 'agra',
    name: 'Agra',
    state: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    image: 'https://picsum.photos/seed/agra/1200/800',
    about: 'Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh. It is a major tourist destination because of its many Mughal-era buildings, most notably the Taj Mahal, Agra Fort and Fatehpur Sikri.',
    bestTime: 'October to March',
    budget: '$40 - $120 per day',
    duration: '1-2 Days',
    attractions: [
      { name: 'Taj Mahal', image: 'https://picsum.photos/seed/tajmahal/600/400', description: 'Iconic marble mausoleum.', hours: '6AM - 6PM (Closed Fridays)', entryFee: '$15', tips: 'Buy tickets online.' },
    ],
    thingsToDo: [],
    food: [],
    itinerary: [],
    transport: { airport: '', railway: 'Agra Cantt', local: 'Auto-rickshaws, Taxis' },
    safety: 'Beware of touts around major monuments.',
    weather: 'Hot in summer, pleasant in winter.',
    faqs: []
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    state: 'rajasthan',
    stateName: 'Rajasthan',
    image: 'https://picsum.photos/seed/jaipur/1200/800',
    about: 'Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color.',
    bestTime: 'October to March',
    budget: '$40 - $100 per day',
    duration: '2-3 Days',
    attractions: [
      { name: 'Amber Fort', image: 'https://picsum.photos/seed/amberfort/600/400', description: 'Majestic hilltop fort.', hours: '8AM - 5:30PM', entryFee: '$7', tips: 'Go early to avoid crowds and heat.' },
      { name: 'Hawa Mahal', image: 'https://picsum.photos/seed/hawamahal/600/400', description: 'Palace of winds.', hours: '9AM - 4:30PM', entryFee: '$3', tips: 'Best photographed from across the street.' },
    ],
    thingsToDo: ['Shopping at Johari Bazaar', 'Elephant ride (though walking is preferred by eco-tourists)', 'Try local Rajasthani Thali'],
    food: [{ name: 'Dal Baati Churma', places: 'Chokhi Dhani', veg: true }],
    itinerary: [],
    transport: { airport: 'Jaipur International Airport (JAI)', railway: 'Jaipur Junction', local: 'Auto-rickshaws, Cabs' },
    safety: 'Generally safe. Bargain hard in markets.',
    weather: 'Very hot summers, pleasant winters.',
    faqs: []
  },
  {
    slug: 'varanasi',
    name: 'Varanasi',
    state: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    image: 'https://picsum.photos/seed/varanasi/1200/800',
    about: 'Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters.',
    bestTime: 'October to March',
    budget: '$30 - $80 per day',
    duration: '2-3 Days',
    attractions: [
      { name: 'Dashashwamedh Ghat', image: 'https://picsum.photos/seed/ghat/600/400', description: 'Main ghat along the Ganges.', hours: '24 Hours', entryFee: 'Free', tips: 'Attend the evening Aarti.' }
    ],
    thingsToDo: ['Boat ride on the Ganges', 'Watch the Ganga Aarti', 'Explore the narrow alleys'],
    food: [{ name: 'Kachori Sabzi', places: 'Ram Bhandar', veg: true }, { name: 'Lassi', places: 'Blue Lassi Shop', veg: true }],
    itinerary: [],
    transport: { airport: 'Lal Bahadur Shastri Airport', railway: 'Varanasi Junction', local: 'Rickshaws, Walking' },
    safety: 'Be respectful of religious customs at the ghats.',
    weather: 'Summers are scorching, winters are cool.',
    faqs: []
  },
  {
    slug: 'goa',
    name: 'Goa',
    state: 'goa',
    stateName: 'Goa',
    image: 'https://picsum.photos/seed/goabeach/1200/800',
    about: 'Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations.',
    bestTime: 'November to February',
    budget: '$50 - $150 per day',
    duration: '4-7 Days',
    attractions: [
      { name: 'Baga Beach', image: 'https://picsum.photos/seed/bagabeach/600/400', description: 'Popular lively beach.', hours: '24 Hours', entryFee: 'Free', tips: 'Great for nightlife.' },
      { name: 'Basilica of Bom Jesus', image: 'https://picsum.photos/seed/bomjesus/600/400', description: 'Historic church.', hours: '9AM - 6PM', entryFee: 'Free', tips: 'Dress modestly.' }
    ],
    thingsToDo: ['Water sports', 'Beach hopping', 'Visit spice plantations', 'Nightlife'],
    food: [{ name: 'Goan Fish Curry', places: 'Fishermans Wharf', veg: false }],
    itinerary: [],
    transport: { airport: 'Goa International Airport (GOI)', railway: 'Madgaon Junction', local: 'Scooter rentals, Taxis' },
    safety: 'Watch out for strong ocean currents and don’t drink and drive on scooters.',
    weather: 'Tropical, hot and humid year-round, heavy monsoons.',
    faqs: []
  }
];

export const states_data = [
  {
    slug: 'rajasthan',
    name: 'Rajasthan',
    image: 'https://picsum.photos/seed/rajasthan/1200/800',
    history: 'Known as the Land of Kings, Rajasthan is a state in northern India. It covers 342,239 square kilometers or 10.4 percent of Indias total geographical area. Famous for its forts, palaces, and the Thar Desert.',
    culture: 'Rich cultural heritage with vibrant folk music, traditional dance forms like Ghoomar, and colorful attire.',
    famousCities: [
      { name: 'Jaipur', slug: 'jaipur', image: 'https://picsum.photos/seed/jaipur_sm/400/300' },
      { name: 'Udaipur', slug: 'udaipur', image: 'https://picsum.photos/seed/udaipur_sm/400/300' },
      { name: 'Jodhpur', slug: 'jodhpur', image: 'https://picsum.photos/seed/jodhpur_sm/400/300' },
    ],
    attractions: ['Amber Fort', 'City Palace Udaipur', 'Mehrangarh Fort', 'Jaisalmer Fort'],
    food: 'Dal Baati Churma, Laal Maas, Ghevar.',
    bestRoutes: 'Jaipur -> Pushkar -> Jodhpur -> Udaipur',
  },
  {
    slug: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    image: 'https://picsum.photos/seed/up/1200/800',
    history: 'Uttar Pradesh is a state in northern India. With roughly 200 million inhabitants, it is the most populous state in India. It has a rich history of ancient empires and religious sites.',
    culture: 'Home to classical dances like Kathak and diverse musical traditions.',
    famousCities: [
      { name: 'Agra', slug: 'agra', image: 'https://picsum.photos/seed/agra_sm/400/300' },
      { name: 'Varanasi', slug: 'varanasi', image: 'https://picsum.photos/seed/varanasi_sm/400/300' },
      { name: 'Lucknow', slug: 'lucknow', image: 'https://picsum.photos/seed/lucknow_sm/400/300' },
    ],
    attractions: ['Taj Mahal', 'Kashi Vishwanath Temple', 'Bara Imambara'],
    food: 'Awadhi Biryani, Tunday Kababi, Petha of Agra.',
    bestRoutes: 'Delhi -> Agra -> Lucknow -> Varanasi',
  }
];

export const packages_data = [
  {
    slug: 'golden-triangle-tour',
    name: 'Golden Triangle Tour',
    duration: '6 Days / 5 Nights',
    price: 799,
    rating: 4.9,
    reviews: 125,
    highlights: ['Visit Taj Mahal at Sunrise', 'Amber Fort Elephant Ride', 'Rickshaw down Chandni Chowk', 'Private AC Transport'],
    image: 'https://picsum.photos/seed/golden-triangle/800/600',
    itinerary: [
      { day: 1, title: 'Arrival in Delhi', desc: 'Transfer to hotel.' },
      { day: 2, title: 'Delhi Sightseeing', desc: 'Visit Red Fort, India Gate, Qutub Minar.' },
      { day: 3, title: 'Delhi to Agra', desc: 'Drive to Agra. Visit Agra Fort.' },
      { day: 4, title: 'Taj Mahal & to Jaipur', desc: 'Sunrise Taj Mahal. Drive to Jaipur via Fatehpur Sikri.' },
      { day: 5, title: 'Jaipur Sightseeing', desc: 'Amber Fort, City Palace, Hawa Mahal.' },
      { day: 6, title: 'Return to Delhi', desc: 'Drive back to Delhi for departure.' }
    ],
    inclusions: ['Hotels', 'Breakfast', 'Private AC Car', 'English speaking guide'],
    exclusions: ['Flights', 'Monument Entrance Fees', 'Lunch & Dinner'],
    popular: true
  },
  {
    slug: 'rajasthan-royal-tour',
    name: 'Rajasthan Royal Experience',
    duration: '10 Days / 9 Nights',
    price: 1099,
    rating: 4.7,
    reviews: 84,
    highlights: ['Stay in Heritage Hotels', 'Desert Camel Safari', 'Udaipur Boat Ride', 'Cultural Performances'],
    image: 'https://picsum.photos/seed/rajasthan-tour/800/600',
    itinerary: [
       { day: 1, title: 'Arrival in Jaipur', desc: 'Welcome.' },
       { day: 2, title: 'Jaipur Explore', desc: 'Forts and Palaces.' }
    ],
    inclusions: ['4-Star Heritage Stays', 'Breakfast', 'Driver', 'Guide'],
    exclusions: ['Flights', 'Meals', 'Fees'],
    popular: false
  },
  {
    slug: 'goa-beach-escape',
    name: 'Goa Beach Escape',
    duration: '5 Days / 4 Nights',
    price: 450,
    rating: 4.8,
    reviews: 175,
    highlights: ['Luxury Beach Resort', 'Private Boat Cruise', 'Old Goa Heritage Walk', 'Beachside Seafood Dinner'],
    image: 'https://picsum.photos/seed/goa-beach/800/600',
    itinerary: [],
    inclusions: ['Resort stay', 'Breakfast', 'Transfers'],
    exclusions: ['Flights', 'Water sports'],
    popular: true
  }
];

export const blogs_data = [
  {
    slug: 'best-time-to-visit-india',
    title: 'Best Time to Visit India: A Complete Guide',
    author: 'Rahul Sharma',
    date: 'Oct 15, 2023',
    readingTime: '5 min read',
    image: 'https://picsum.photos/seed/india-climate/800/500',
    excerpt: 'Plan your perfect trip by understanding India\'s diverse climate, from the snowy Himalayas to the tropical south.',
    content: 'India is a vast country with diverse climatic zones. The best time to visit broadly depends on which region you plan to explore. For most parts of India, including Rajasthan, Delhi, Agra (The Golden Triangle), and Goa, the winter months from October to March offer the most pleasant weather...'
  },
  {
    slug: 'indian-food-guide-for-foreigners',
    title: 'Indian Food Guide for Foreigners',
    author: 'Priya Patel',
    date: 'Sep 22, 2023',
    readingTime: '7 min read',
    image: 'https://picsum.photos/seed/india-food/800/500',
    excerpt: 'Navigate the complex, vibrant, and incredibly delicious world of Indian cuisine without upsetting your stomach.',
    content: 'Indian cuisine is incredibly diverse, with each region offering its own unique flavors and specialties. While the spices can be intimidating at first, starting with milder dishes and gradually increasing the heat is the best approach. Don\'t forget to try regional street food from reputable vendors!'
  },
  {
    slug: 'top-10-cultural-etiquette-tips',
    title: 'Top 10 Cultural Etiquette Tips',
    author: 'Amit Kumar',
    date: 'Aug 08, 2023',
    readingTime: '6 min read',
    image: 'https://picsum.photos/seed/india-etiquette/800/500',
    excerpt: 'Learn the dos and don\'ts of Indian culture to show respect and connect better with locals during your travels.',
    content: 'Understanding cultural nuances is key to a rewarding trip to India. Always remove your shoes before entering temples or homes. Dress modestly, especially in religious sites. Use your right hand for eating and handing over items, as the left hand is traditionally considered unclean.'
  },
  {
    slug: 'india-travel-budget-guide',
    title: 'India Travel Budget Guide: How Much Does it Cost?',
    author: 'Priya Patel',
    date: 'Nov 02, 2023',
    readingTime: '7 min read',
    image: 'https://picsum.photos/seed/blog2/800/500',
    excerpt: 'From luxury palaces to budget backpacking. Find out how much you need for your trip to India.',
    content: 'Traveling to India can be extremely affordable or unabashedly luxurious. Your daily budget will largely depend on your travel style. Backpackers can get by on $20-$30 a day, mid-range travelers should budget $50-$100, while luxury travelers can spend upwards of $200 per day...'
  }
];
