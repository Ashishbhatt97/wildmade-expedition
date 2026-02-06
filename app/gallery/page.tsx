'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera, Layers, Maximize, Play, Mountain, Tent, Waves, Wind } from 'lucide-react';
import { useState } from 'react';

const galleryItems = [
  // Camping & Tents
  { 
    src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1000&fit=crop&q=80', 
    title: 'Bio-Lum Camping',
    category: 'Camping',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&fit=crop&q=80', 
    title: 'Wilderness Camp',
    category: 'Camping',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=800&fit=crop&q=80', 
    title: 'Night Under Stars',
    category: 'Camping',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=800&fit=crop&q=80', 
    title: 'Lakeside Basecamp',
    category: 'Camping',
    type: 'Photo',
  },

  // Mountain Summits & Trekking
  { 
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&fit=crop&q=80', 
    title: 'Vertex Summit',
    category: 'Summit',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop&q=80', 
    title: 'Alpine Ascent',
    category: 'Summit',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&fit=crop&q=80', 
    title: 'Peak Conquest',
    category: 'Summit',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&fit=crop&q=80', 
    title: 'Mountain Trail',
    category: 'Trekking',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&fit=crop&q=80', 
    title: 'Ridge Walk',
    category: 'Trekking',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&fit=crop&q=80', 
    title: 'Summit Push',
    category: 'Summit',
    type: 'Photo',
  },

  // Rafting & Water Sports
  { 
    src: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=1000&fit=crop&q=80', 
    title: 'Plasma Rapids',
    category: 'Rafting',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&fit=crop&q=80', 
    title: 'River Flow',
    category: 'Rafting',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&fit=crop&q=80', 
    title: 'Whitewater Rush',
    category: 'Rafting',
    type: 'Video',
  },

  // Extreme Sports & Bungee
  { 
    src: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&fit=crop&q=80', 
    title: 'Free Fall',
    category: 'Extreme',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&fit=crop&q=80', 
    title: 'Bungee Jump',
    category: 'Extreme',
    type: 'Video',
  },
  { 
    src: 'https://images.unsplash.com/photo-1512757776214-26d36777b513?w=800&fit=crop&q=80', 
    title: 'Sky Dive',
    category: 'Extreme',
    type: 'Photo',
  },

  // Forest & Nature
  { 
    src: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=1000&fit=crop&q=80', 
    title: 'Deep Matrix Forest',
    category: 'Expedition',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&fit=crop&q=80', 
    title: 'Jungle Path',
    category: 'Expedition',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&fit=crop&q=80', 
    title: 'Misty Trail',
    category: 'Trekking',
    type: 'Photo',
  },

  // Sunset & Scenic
  { 
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop&q=80', 
    title: 'Golden Hour Peak',
    category: 'Summit',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&fit=crop&q=80', 
    title: 'Mountain Horizon',
    category: 'Summit',
    type: 'Photo',
  },

  // Rock Climbing
  { 
    src: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&fit=crop&q=80', 
    title: 'Vertical Ascent',
    category: 'Extreme',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&fit=crop&q=80', 
    title: 'Rock Face',
    category: 'Extreme',
    type: 'Photo',
  },

  // Additional Adventure Shots
  { 
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&fit=crop&q=80', 
    title: 'Lake Expedition',
    category: 'Expedition',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&fit=crop&q=80', 
    title: 'Wilderness Vista',
    category: 'Trekking',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&fit=crop&q=80', 
    title: 'Snow Trek',
    category: 'Trekking',
    type: 'Photo',
  },
  { 
    src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&fit=crop&q=80', 
    title: 'Cliff Edge',
    category: 'Extreme',
    type: 'Photo',
  },
];

const categories = ['All', 'Camping', 'Summit', 'Trekking', 'Rafting', 'Extreme', 'Expedition'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto px-6">
        <header className="mb-16">
          <div className="max-w-4xl mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-nature-accent mb-6"
            >
              <Camera size={20} /> <span className="text-xs font-black uppercase tracking-widest">Visual Archives</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-outfit uppercase tracking-tighter leading-none mb-6">
              SENSORY <br/><span className="text-nature-accent italic">FEED</span>
            </h1>
            <p className="text-gray-400 font-medium text-lg border-l-2 border-nature-accent/30 pl-6">
              Direct feeds from our explorer neural links. Actual captures from the frontier of bio-integrated adventure. Over {galleryItems.length} expeditions documented.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-nature-accent text-nature-900 shadow-[0_0_20px_rgba(173,255,47,0.3)]'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-8 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3">
              <Mountain className="text-nature-accent" size={24} />
              <div>
                <span className="block text-2xl font-black font-outfit text-white">12</span>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Summits</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Tent className="text-nature-accent" size={24} />
              <div>
                <span className="block text-2xl font-black font-outfit text-white">8</span>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Camps</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Waves className="text-nature-accent" size={24} />
              <div>
                <span className="block text-2xl font-black font-outfit text-white">6</span>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Rapids</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Wind className="text-nature-accent" size={24} />
              <div>
                <span className="block text-2xl font-black font-outfit text-white">15</span>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Treks</span>
              </div>
            </div>
          </div>
        </header>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          {filteredItems.map((item, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-3xl overflow-hidden border border-white/5 cursor-pointer bg-nature-800 break-inside-avoid"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-900 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                  <span className="text-[9px] font-black tracking-widest uppercase text-nature-accent">{item.category}</span>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 text-white">
                    {item.type === 'Video' ? <Play size={16} fill="white" /> : <Maximize size={16} />}
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] font-black text-nature-accent uppercase tracking-[0.3em] mb-1 block">SCAN_RESULT // {item.type}</span>
                  <h3 className="text-lg md:text-xl font-black font-outfit uppercase tracking-tighter text-white">{item.title}</h3>
                </div>
              </div>

              {/* Cyber lines decor */}
              <div className="absolute left-0 top-0 w-8 h-[1px] bg-nature-accent/50 group-hover:w-full transition-all duration-500" />
              <div className="absolute left-0 top-0 w-[1px] h-8 bg-nature-accent/50 group-hover:h-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Results Count */}
        <div className="mt-12 text-center">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
            Showing {filteredItems.length} of {galleryItems.length} Archives
          </p>
        </div>
      </div>
    </div>
  );
}
