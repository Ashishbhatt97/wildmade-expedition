'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Sparkles, 
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-nature-900 pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-nature-accent/20 to-transparent" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-nature-500/5 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="group flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-nature-700/50 rounded-xl flex items-center justify-center border border-nature-accent/20">
                <Sparkles className="text-nature-accent" size={20} />
              </div>
              <span className="font-outfit text-2xl font-black uppercase tracking-tighter">
                Wildmade<span className="text-nature-accent italic">Expedition</span>
              </span>
            </Link>
            <p className="text-gray-500 font-medium text-base mb-10 leading-relaxed">
              Architecting the next epoch of human exploration. We bridge the neural gap between digital precision and the primal forest.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Github].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-nature-accent hover:border-nature-accent hover:shadow-[0_0_15px_rgba(173,255,47,0.2)] transition-all duration-300">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
             <h4 className="font-black font-outfit uppercase text-[10px] tracking-[0.4em] text-nature-accent mb-10">CORE_PROTOCOLS</h4>
             <ul className="space-y-4">
               {['Hyper Rafting', 'Matrix Trekking', 'Neo Camping', 'Adventure Tours'].map((item) => (
                 <li key={item}>
                   <Link href="/services" className="text-xs font-black text-gray-500 hover:text-white hover:translate-x-2 flex items-center gap-2 group transition-all duration-300">
                     {item.toUpperCase()} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          <div className="lg:col-span-2">
             <h4 className="font-black font-outfit uppercase text-[10px] tracking-[0.4em] text-nature-accent mb-10">ARCHIVES</h4>
             <ul className="space-y-4">
               {['The Vision', 'Tiers', 'Visual Feed', 'Safety Layer'].map((item) => (
                 <li key={item}>
                   <Link href="/about" className="text-xs font-black text-gray-500 hover:text-white hover:translate-x-2 flex items-center gap-2 group transition-all duration-300">
                     {item.toUpperCase()} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          <div className="lg:col-span-4">
             <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nature-accent/5 rounded-full blur-3xl group-hover:bg-nature-accent/10 transition-colors" />
                <h4 className="font-black font-outfit uppercase text-[10px] tracking-[0.4em] text-nature-accent mb-6 flex items-center gap-2">
                    <ShieldAlert size={14} className="animate-pulse" /> UPLINK_CENTER
                </h4>
                <ul className="space-y-6">
                    <li className="flex gap-4">
                        <MapPin className="text-nature-accent/60 shrink-0" size={18} />
                        <span className="text-[10px] font-black text-gray-400 capitalize tracking-widest leading-relaxed font-inter uppercase">Bio-District 7 // PNW 98101 // Seattle Metro</span>
                    </li>
                    <li className="flex gap-4 items-center">
                        <Phone className="text-nature-accent/60 shrink-0" size={18} />
                        <span className="text-xs font-black text-white tracking-widest">+1 (888) NEO-WILD</span>
                    </li>
                </ul>
                <button 
                  onClick={scrollToTop}
                  className="mt-8 w-full py-4 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.5em] hover:bg-white/5 transition-colors"
                >
                  Return to Apex
                </button>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-nature-accent animate-ping" />
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em]">
                    © {new Date().getFullYear()} WILDMADE_EXPEDITION // ALL_SYSTEMS_GO
                </p>
            </div>
            <div className="flex gap-10">
               <Link href="#" className="text-[10px] font-black text-gray-700 hover:text-nature-accent uppercase tracking-[0.2em] transition-colors">Privacy_Protocol</Link>
               <Link href="#" className="text-[10px] font-black text-gray-700 hover:text-nature-accent uppercase tracking-[0.2em] transition-colors">Safety_Log</Link>
               <Link href="#" className="text-[10px] font-black text-gray-700 hover:text-nature-accent uppercase tracking-[0.2em] transition-colors">OS_v4.2.0</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
