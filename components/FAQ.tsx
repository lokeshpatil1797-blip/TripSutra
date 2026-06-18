'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How do I apply for an Indian eVisa?',
    answer: 'Most international tourists are eligible for an Indian eVisa. You can apply online through the official government portal at least 4 days before your arrival. We also provide step-by-step guidance to our booked guests.'
  },
  {
    question: 'Is it safe for a solo female traveler?',
    answer: 'Yes, but standard precautions are necessary. Our small group tours and private guided packages are highly recommended for solo female travelers as they provide a safe, secure, and hassle-free environment with 24/7 support.'
  },
  {
    question: 'What is the best time to visit India?',
    answer: 'The most popular time is between October and March when the weather is cool and dry. However, the Himalayas are best visited in summer (April to June), and Kerala is beautiful during the monsoons (July to August).'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major international credit cards (Visa, MasterCard, Amex), PayPal, and direct bank transfers. All our transactions are processed securely via encrypted gateways.'
  },
  {
    question: 'Are domestic flights included in the packages?',
    answer: 'Some premium packages include domestic flights. However, for most itineraries, internal flights are listed as optional add-ons so you can choose based on your budget.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-royal mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know before you go.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-saffron/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span className="text-lg font-bold text-gray-900 pr-8">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-saffron text-white' : 'bg-beige text-royal'}`}>
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
