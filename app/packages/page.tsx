'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, Cpu, Globe, Rocket, Zap } from 'lucide-react';
import Link from 'next/link';

const packages = [
  {
    id: 'eco-01',
    title: 'Forest Core Protocol',
    price: '99',
    period: '/ tour',
    description: 'A deep dive into the hidden ecosystems of the Neon Forest.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800',
    features: ['Bioluminescent Basecamp', 'Neural Guide App', 'Oxygen Enriched Gear', 'Digital Memory Log'],
    tier: 'Standard',
  },
  {
    id: 'eco-02',
    title: 'Sky-Vault Ascent',
    price: '249',
    period: '/ tour',
    description: 'High-altitude verticality for the ultimate spatial experience.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    features: ['Anti-Gravity Suit Pro', 'Holographic Map Sync', 'Emergency Drone Cover', 'Executive Pod Access'],
    tier: 'Premium',
    featured: true,
  },
  {
    id: 'eco-03',
    title: 'Zenit Hydro Flow',
    price: '189',
    period: '/ tour',
    description: 'Master the rapids with smart aquatic technology.',
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&q=80&w=800',
    features: ['Impact-Sensing Craft', 'Real-time Flow Radar', 'Hydro-Boost Propulsion', 'Nutrient Shield Rations'],
    tier: 'Elite',
  },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto px-6">
        <header className="text-center mb-20 max-w-2xl mx-auto">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-nature-accent/10 border border-nature-accent/20 text-nature-accent text-xs font-bold uppercase tracking-widest mb-6"
           >
             <Cpu size={14} /> System Availability: 100%
           </motion.div>
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-outfit uppercase tracking-tighter mb-4">
             ADVENTURE <span className="text-nature-500">TIERS</span>
           </h1>
           <p className="text-gray-400 font-medium">
             Select your immersion level. All packages include standard holographic safety protocols.
           </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative futuristic-card p-0 flex flex-col h-full overflow-hidden ${pkg.featured ? 'ring-2 ring-nature-accent border-nature-accent/30' : ''}`}
            >
              {pkg.featured && (
                <div className="absolute top-4 right-4 z-10 bg-nature-accent text-nature-900 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">
                  MOST IMMERSIVE
                </div>
              )}

              <div className="relative h-64 w-full">
                <Image 
                  src={pkg.image} 
                  alt={pkg.title} 
                  fill 
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-900 via-nature-900/40 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <span className="text-xs font-black text-nature-accent uppercase tracking-widest block mb-2">{pkg.tier}</span>
                  <h3 className="text-3xl font-black font-outfit uppercase tracking-tighter">{pkg.title}</h3>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-400 text-sm mb-8 font-medium italic">
                  "{pkg.description}"
                </p>

                <ul className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                      <div className="w-5 h-5 rounded bg-nature-accent/20 flex items-center justify-center text-nature-accent text-[8px]">
                        <Zap size={10} fill="currentColor" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-white/5 mt-auto">
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-black font-outfit text-white">${pkg.price}</span>
                        <span className="text-gray-500 text-sm font-bold uppercase tracking-widest">{pkg.period}</span>
                    </div>
                    <Link 
                        href={`/contact?package=${pkg.id}`}
                        className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-black uppercase tracking-widest text-sm transition-all duration-300 ${pkg.featured ? 'bg-nature-accent text-nature-900 hover:shadow-[0_0_20px_#84CC16]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                        INITIALIZE <Rocket size={18} />
                    </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 p-8 border border-white/5 bg-white/[0.02] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-nature-accent/30 flex items-center justify-center animate-spin-slow">
                    <Globe size={24} className="text-nature-accent" />
                </div>
                <div>
                   <h4 className="text-xl font-black font-outfit uppercase">Corporate Tours</h4>
                   <p className="text-gray-400 text-sm">Need a bulk system integration for your team?</p>
                </div>
            </div>
            <Link href="/contact" className="hover:text-nature-accent font-bold uppercase tracking-[0.2em] text-xs underline underline-offset-8">
                Request Custom Protocol
            </Link>
        </motion.div>
      </div>
    </div>
  );
}
