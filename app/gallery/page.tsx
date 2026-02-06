'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera, Layers, Maximize, Play } from 'lucide-react';

const galleryItems = [
  { 
    src: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=1000&fit=crop&q=80', 
    title: 'Bio-Lum Canopy',
    type: 'Photo',
    size: 'lg'
  },
  { 
    src: 'https://images.unsplash.com/photo-1541094391264-b8a7353f2c5f?w=600&fit=crop&q=80', 
    title: 'Deep Matrix Forest',
    type: 'Photo'
  },
  { 
    src: 'https://images.unsplash.com/photo-1563536310477-c7b4e3a800c2?w=600&fit=crop&q=80', 
    title: 'Vertex Summit',
    type: 'Tour'
  },
  { 
    src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&fit=crop&q=80', 
    title: 'Pulse Camping',
    type: 'Photo',
    size: 'tall'
  },
  { 
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&fit=crop&q=80', 
    title: 'Stream Flow',
    type: 'Video'
  },
  { 
    src: 'https://images.unsplash.com/photo-1497290756760-23ac55edf0d6?w=600&fit=crop&q=80', 
    title: 'Cyber Sunset',
    type: 'Photo'
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto px-6">
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-nature-accent mb-4"
                >
                    <Camera size={20} /> <span className="text-xs font-black uppercase tracking-widest">Visual Archives</span>
                </motion.div>
                <h1 className="text-6xl md:text-8xl font-black font-outfit uppercase tracking-tighter leading-none mb-6">
                    SENSORY <br/><span className="text-nature-accent italic">FEED</span>
                </h1>
                <p className="text-gray-400 font-medium border-l-2 border-nature-accent/30 pl-6">
                    Direct feeds from our explorer neural links. Actual captures from the frontier of bio-integrated adventure.
                </p>
            </div>
            <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                    <Layers size={20} />
                </button>
                <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    FILTER: ALL_MEDIA
                </div>
            </div>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
           {galleryItems.map((item, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden border border-white/5 cursor-pointer bg-nature-800"
             >
                <div className="relative overflow-hidden aspect-auto">
                    <img 
                        src={item.src} 
                        alt={item.title}
                        className="w-full transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 opacity-70 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nature-900 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Floating elements */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 text-white">
                            {item.type === 'Video' ? <Play size={16} fill="white" /> : <Maximize size={16} />}
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-[10px] font-black text-nature-accent uppercase tracking-[0.3em] mb-1 block">SCAN_RESULT // {item.type}</span>
                        <h3 className="text-xl font-black font-outfit uppercase tracking-tighter text-white">{item.title}</h3>
                    </div>
                </div>

                {/* Cyber lines decor */}
                <div className="absolute left-0 top-0 w-8 h-[1px] bg-nature-accent/50 group-hover:w-full transition-all duration-500" />
                <div className="absolute left-0 top-0 w-[1px] h-8 bg-nature-accent/50 group-hover:h-full transition-all duration-500" />
             </motion.div>
           ))}
        </div>

        <footer className="mt-20 text-center">
            <button className="btn-futuristic">
                LOAD MORE ARCHIVES
            </button>
        </footer>
      </div>
    </div>
  );
}
