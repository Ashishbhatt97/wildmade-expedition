'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 ${scrolled ? 'py-4 glass-nav shadow-[0_10px_40px_rgba(0,0,0,0.5)]' : 'py-8 bg-transparent'}`}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 relative">
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className="w-10 h-10 bg-nature-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(173,255,47,0.4)]"
          >
            <Sparkles className="text-nature-900" size={20} />
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="font-outfit text-xl lg:text-2xl font-black uppercase tracking-tighter text-white">
                Wildmade<span className="text-nature-accent italic">Expedition</span>
            </span>
            <span className="text-[8px] font-black tracking-[0.4em] text-nature-accent/50 group-hover:text-nature-accent transition-colors">ADVENTURE_PROTOCOL</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <ul className="flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                <li key={link.name}>
                    <Link 
                    href={link.href} 
                    className={`relative text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:text-nature-accent ${isActive ? 'text-nature-accent' : 'text-gray-400'}`}
                    >
                    {link.name}
                    {isActive && (
                        <motion.div 
                        layoutId="navUnderline"
                        className="absolute -bottom-2 left-0 w-full h-[2px] bg-nature-accent shadow-[0_0_10px_#ADFF2F]"
                        />
                    )}
                    </Link>
                </li>
                );
            })}
            </ul>

            <Link href="/contact" className="btn-futuristic px-6 xl:px-8 py-3 text-xs tracking-widest leading-none flex items-center gap-2 group whitespace-nowrap">
                INIT_SYNC <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-nature-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[1100] bg-nature-900/95 backdrop-blur-3xl flex flex-col p-10 lg:hidden"
          >
            <div className="flex items-center justify-between mb-20">
                <div className="flex items-center gap-3">
                    <Sparkles className="text-nature-accent" size={24} />
                    <span className="font-outfit text-xl font-bold uppercase tracking-tighter">Wildmade Expedition</span>
                </div>
                <button 
                    className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:border-nature-accent"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <X size={24} />
                </button>
            </div>

            <ul className="space-y-6 flex-1">
              {navLinks.map((link, i) => (
                <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-5xl font-black font-outfit uppercase tracking-tighter hover:text-nature-accent block transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 space-y-8">
                <div className="flex gap-10 opacity-30">
                    <Activity size={20} />
                    <ShieldCheck size={20} />
                    <Zap size={20} />
                </div>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="btn-futuristic w-full py-6 text-xl tracking-[0.2em] flex items-center justify-center gap-3">
                    SYNC_NOW <ArrowRight size={24} />
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const ChevronRight = ({...props}) => (
    <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
    >
        <path d="m9 18 6-6-6-6"/>
    </svg>
)

const ArrowRight = ({...props}) => (
    <svg 
        {...props}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
    >
        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
)
