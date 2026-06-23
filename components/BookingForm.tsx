'use client';
import { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function BookingForm({ packageName }: { packageName: string }) {
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const contactNumber = '918999202489'; // Added India country code (91)
  const displayPhone = '+91 89992 02489';

  const handleWhatsAppBooking = () => {
    const message = `Hello, I am interested in booking the "${packageName}" tour.%0A%0A*Details:*%0ATravel Date: ${date || 'Not specified'}%0ATravelers: ${travelers}%0AEmail: ${email || 'Not specified'}%0APhone: ${phone || 'Not specified'}%0A%0APlease get back to me with a quote!`;
    const whatsappUrl = `https://wa.me/${contactNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+${contactNumber}`;
  };

  return (
    <div className="sticky top-32 bg-white p-8 rounded-3xl shadow-lg border border-gold">
      <h3 className="text-2xl font-serif font-bold text-royal mb-6">Book this tour</h3>
      
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Travel Date</label>
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron outline-none" 
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Travelers</label>
          <input 
            type="number" 
            min="1" 
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron outline-none" 
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
          <input 
            type="email" 
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron outline-none" 
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
          <input 
            type="tel" 
            placeholder="Your contact number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron outline-none" 
          />
        </div>
        
        <div className="pt-2 flex flex-col gap-3">
          <button 
            type="button" 
            onClick={handleWhatsAppBooking}
            className="w-full bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:bg-[#128C7E] transition-colors text-lg shadow-md flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> Book via WhatsApp
          </button>
          
          <button 
            type="button" 
            onClick={handleCall}
            className="w-full bg-royal text-white font-bold py-3.5 rounded-xl hover:bg-royal-dark transition-colors text-lg shadow-md flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" /> Call Now
          </button>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-slate-100 text-center">
        <p className="text-sm font-bold text-slate-600 mb-1">Direct Contact</p>
        <p className="text-slate-500 font-medium">{displayPhone}</p>
      </div>
    </div>
  );
}
