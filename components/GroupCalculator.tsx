'use client';
import { useState } from 'react';
import { Users, Calculator, DollarSign, Wallet } from 'lucide-react';

const packages = [
  { id: 1, name: 'Golden Triangle Tour', price: 799 },
  { id: 2, name: 'Rajasthan Royal Experience', price: 1099 },
  { id: 3, name: 'Kerala Backwater Retreat', price: 650 },
  { id: 4, name: 'Goa Beach Escape', price: 450 },
  { id: 5, name: 'Spiritual India Journey', price: 850 },
  { id: 6, name: 'Himalayan Adventure Tour', price: 1350 },
];

export default function GroupCalculator() {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [travelers, setTravelers] = useState<number>(3);

  const getDiscountData = (count: number) => {
    if (count <= 1) return { percent: 0, label: 'Solo Traveler' };
    if (count === 2) return { percent: 2, label: '2 Travelers' };
    if (count === 3) return { percent: 5, label: '3 Travelers' };
    if (count === 4) return { percent: 10, label: '4 Travelers' };
    if (count === 5) return { percent: 12, label: '5 Travelers' };
    return { percent: 15, label: '6+ Travelers' };
  };

  const discountData = getDiscountData(travelers);
  const originalTotal = selectedPackage.price * travelers;
  const savings = (originalTotal * discountData.percent) / 100;
  const finalTotal = originalTotal - savings;

  return (
    <section id="calculator" className="py-24 bg-beige relative border-y border-gold">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gold overflow-hidden">
          <div className="bg-royal p-8 text-white text-center">
            <h2 className="text-3xl font-serif font-bold mb-4 flex items-center justify-center gap-3">
              <Calculator className="w-8 h-8 text-gold" />
              Group Savings Calculator
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-sm">
              See exactly how much you can save by traveling together. The larger your group, the more you save on our unforgettable Indian experiences.
            </p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-royal mb-2" htmlFor="package">
                    Select Package
                  </label>
                  <select 
                    id="package"
                    value={selectedPackage.id}
                    onChange={(e) => setSelectedPackage(packages.find(p => p.id === Number(e.target.value)) || packages[0])}
                    className="w-full bg-[#FFF8F0] border border-gold rounded-xl px-4 py-3 text-royal font-medium focus:ring-2 focus:ring-saffron outline-none"
                  >
                    {packages.map(pkg => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} (${pkg.price} / person)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-royal mb-2" htmlFor="travelers">
                    Number of Travelers: <span className="text-saffron text-lg">{travelers}</span>
                  </label>
                  <input 
                    type="range"
                    id="travelers"
                    min="1"
                    max="10"
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-saffron"
                  />
                  <div className="flex justify-between text-xs text-slate-500 font-medium mt-2">
                    <span>Solo</span>
                    <span>10+ Group</span>
                  </div>
                </div>

                <div className="bg-[#FFF8F0] p-4 rounded-xl border border-gold">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-royal mb-2">Discount Structure</h4>
                  <ul className="text-sm text-slate-600 space-y-1 font-medium">
                    <li>2 Travelers: <span className="text-saffron font-bold">2% OFF</span></li>
                    <li>3 Travelers: <span className="text-saffron font-bold">5% OFF</span></li>
                    <li>4 Travelers: <span className="text-saffron font-bold">10% OFF</span></li>
                    <li>5 Travelers: <span className="text-saffron font-bold">12% OFF</span></li>
                    <li>6+ Travelers: <span className="text-saffron font-bold">15% OFF</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <div className="border border-slate-100 rounded-2xl p-6 relative overflow-hidden bg-white shadow-sm">
                  {discountData.percent > 0 && (
                     <div className="absolute top-0 right-0 bg-saffron text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                       {discountData.percent}% DISCOUNT APPLIED
                     </div>
                  )}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-slate-600 font-medium">
                      <span>Original Total</span>
                      <span className="line-through">${originalTotal.toLocaleString('en-US')}</span>
                    </div>
                    <div className="flex justify-between items-center text-saffron font-bold text-lg">
                      <span>Total Savings</span>
                      <span>- ${savings.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Final Payable Amount</div>
                      <div className="text-4xl font-serif font-bold text-royal flex items-center gap-1">
                        <DollarSign className="w-8 h-8 text-saffron" />
                        {finalTotal.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                      </div>
                    </div>
                    <button className="w-full bg-royal hover:bg-royal-dark text-white font-bold py-4 rounded-xl transition-colors mt-4">
                      Book Now to Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
