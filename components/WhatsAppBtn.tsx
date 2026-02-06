'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppBtn() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-8 right-8 z-[900]"
    >
      <Link 
        href="https://wa.me/1234567890" 
        target="_blank" 
        className="w-16 h-16 bg-nature-accent text-nature-900 rounded-2xl flex items-center justify-center shadow-[0_0_20px_#84CC16] hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
        <div className="absolute -inset-2 bg-nature-accent/20 rounded-3xl -z-10 animate-pulse" />
      </Link>
    </motion.div>
  );
}
