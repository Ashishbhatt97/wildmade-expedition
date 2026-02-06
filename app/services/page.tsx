'use client';

import { motion } from 'framer-motion';
import { Tent, Mountain, Waves, Map, Flame, Wind, Eye, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Bio-Sync Camping',
    desc: 'Advanced habitat pods integrated into the forest canopy. Experience silent nights with bioluminescent guidance.',
    icon: Tent,
    color: 'from-emerald-500 to-green-700',
  },
  {
    title: 'Gravity-Defying Trek',
    desc: 'Augmented climbing gear that helps you scale peak verticalities with ease. Conquer the highest summits ever recorded.',
    icon: Mountain,
    color: 'from-cyan-500 to-blue-700',
  },
  {
    title: 'Plasma Rafting',
    desc: 'Holographic navigation helps you master wild water rapid cascades. Safest, most thrilling aquatic adrenaline in existence.',
    icon: Waves,
    color: 'from-blue-500 to-indigo-700',
  },
  {
    title: 'Neural Path Hiking',
    desc: 'Paths curated to sync with your mental pace. Minimal impact, maximum serenity. Connect with nature on a synaptic level.',
    icon: Wind,
    color: 'from-lime-500 to-green-600',
  },
  {
    title: 'Extreme V-Sports',
    desc: 'Vertical paragliding and hyper-speed bungee. Not for the faint-hearted. Powered by proprietary impact-reduction technology.',
    icon: Flame,
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'AR Guided Tour',
    desc: 'Never get lost. Augmented reality overlays the terrain with history, safety paths, and botanical data in real-time.',
    icon: Eye,
    color: 'from-purple-500 to-pink-600',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-height-screen">
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nature-500/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-nature-accent/5 rounded-full blur-[150px] -z-10 -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tighter mb-6 leading-none">
              Nexus <span className="text-nature-accent italic">Tactics</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium max-w-xl">
              Our services merge primordial exploration with futuristic precision. Welcome to the next evolution of adventure sports.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="futuristic-card group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-black font-outfit uppercase mb-4 group-hover:text-nature-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  {service.desc}
                </p>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold uppercase tracking-widest text-nature-accent">Request Access</span>
                    <Zap className="text-nature-accent" size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
