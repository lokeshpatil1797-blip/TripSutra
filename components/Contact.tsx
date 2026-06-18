'use client';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-beige scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <span className="text-saffron font-bold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal mb-6">Start Planning Your Journey</h2>
            <p className="text-gray-600 mb-10 text-lg">Have questions about our packages or want a custom itinerary? Our travel experts are ready to help you plan the perfect Indian adventure.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-saffron shadow-sm flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us 24/7</h4>
                  <p className="text-gray-600">8999202489</p>
                  <p className="text-gray-400 text-sm">International rates may apply</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-saffron shadow-sm flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">WhatsApp Chat</h4>
                  <p className="text-gray-600">8999202489</p>
                  <a href="#" className="text-royal font-medium text-sm hover:underline mt-1 inline-block">Click to chat</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-saffron shadow-sm flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Support</h4>
                  <p className="text-gray-600">Welcometoindia@tripsutra.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gold"
          >
            <h3 className="text-2xl font-bold text-royal mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                 <div className="col-span-2 sm:col-span-1">
                   <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                   <input type="text" className="w-full bg-beige border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron outline-none" placeholder="John" />
                 </div>
                 <div className="col-span-2 sm:col-span-1">
                   <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                   <input type="text" className="w-full bg-beige border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron outline-none" placeholder="Doe" />
                 </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full bg-beige border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron outline-none" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                <select className="w-full bg-beige border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron outline-none text-gray-700">
                   <option>Select a package or service</option>
                   <option>Golden Triangle</option>
                   <option>Kerala Backwaters</option>
                   <option>Custom Itinerary</option>
                   <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-beige border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-saffron outline-none resize-none" placeholder="Tell us about your travel plans..."></textarea>
              </div>

              <button className="w-full bg-saffron hover:bg-saffron-dark text-white font-bold py-4 rounded-xl transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
