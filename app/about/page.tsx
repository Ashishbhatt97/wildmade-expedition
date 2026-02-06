'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Users, Zap, Award, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <header className="mb-24 relative">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nature-500/10 rounded-full blur-[100px] -z-10" />
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
             >
                <h1 className="text-7xl md:text-9xl font-black font-outfit uppercase tracking-tighter mb-8 leading-[0.8]">
                    CORE <br/><span className="text-nature-accent italic">MISSION</span>
                </h1>
                <p className="max-w-xl text-xl text-gray-400 font-medium">
                    Designing the future of human exploration through bio-integrated gear and immersive nature protocols. Since 2010.
                </p>
             </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[600px] rounded-3xl overflow-hidden group border border-white/5"
            >
                <Image 
                    src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1000"
                    alt="Team"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-900 to-transparent" />
                <div className="absolute inset-0 bg-nature-accent/10 mix-blend-overlay" />
                <div className="absolute bottom-10 left-10 right-10 p-8 futuristic-card">
                   <h4 className="text-2xl font-black font-outfit uppercase text-nature-accent mb-2">NEO-GUIDE DIVISION</h4>
                   <p className="text-sm text-gray-300">All our guides are NOLS certified with adaptive neural survival training.</p>
                </div>
            </motion.div>

            <div className="space-y-12">
                <div className="space-y-4">
                    <h2 className="text-4xl font-black font-outfit uppercase tracking-tight">Our Philosophy</h2>
                    <p className="text-gray-400 text-lg">We believe that adventure should be accessible but never routine. We use technology to enhance the raw experience of nature, not replace it.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { icon: Shield, title: "MAX SAFETY", desc: "Redundant AI-monitored safety layers." },
                        { icon: Target, title: "PRECISION", desc: "GPS-holographic pathfinding protocols." },
                        { icon: Users, title: "COMMUNITY", desc: "The global network of Neo-Explorers." },
                        { icon: Zap, title: "VELOCITY", desc: "High-adrenaline impact technology." }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl"
                        >
                            <item.icon className="text-nature-accent mb-4" size={24} />
                            <h4 className="font-black font-outfit uppercase text-sm mb-2">{item.title}</h4>
                            <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        <section className="py-20 border-y border-white/5 flex flex-wrap justify-center gap-16 md:gap-32">
            {[
                { label: "EXPLORERS", val: "50k+" },
                { label: "TOURS", val: "1.2k" },
                { label: "SUMMITS", val: "800+" },
                { label: "SAFETY RATE", val: "100%" }
            ].map((stat, i) => (
                <div key={i} className="text-center group">
                    <span className="block text-5xl font-black font-outfit text-white group-hover:text-nature-accent transition-colors">{stat.val}</span>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">{stat.label}</span>
                </div>
            ))}
        </section>

        <section className="mt-32">
            <h2 className="text-4xl font-black font-outfit uppercase tracking-tight mb-16 text-center">Certified Excellence</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <div className="h-16 flex items-center justify-center border border-white/10 rounded-xl px-8">
                    <span className="font-outfit font-black tracking-widest text-sm">NOLS AUTH</span>
                </div>
                <div className="h-16 flex items-center justify-center border border-white/10 rounded-xl px-8">
                    <span className="font-outfit font-black tracking-widest text-sm">BIO-SAFE</span>
                </div>
                <div className="h-16 flex items-center justify-center border border-white/10 rounded-xl px-8">
                    <span className="font-outfit font-black tracking-widest text-sm">ISO-XTREME</span>
                </div>
                <div className="h-16 flex items-center justify-center border border-white/10 rounded-xl px-8">
                    <span className="font-outfit font-black tracking-widest text-sm">GEO-NET</span>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
