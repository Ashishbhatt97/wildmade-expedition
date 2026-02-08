'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=100&w=1920",
    alt: "Trekking"
  },
  {
    url: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&q=100&w=1920",
    alt: "Rafting"
  },
  {
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop",
    alt: "Bungy Jumping"
  },
  {
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1920&auto=format&fit=crop",
    alt: "Camping"
  }
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.3 }}
            transition={{ 
              duration: 20, 
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="relative w-full h-full"
          >
            <Image
              src={images[index].url}
              alt={images[index].alt}
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nature-900/60 to-nature-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
}
