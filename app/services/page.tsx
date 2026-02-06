'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Tent, Mountain, Waves, Bike, Zap, ArrowRight, Sparkles, Activity, MapPin } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const services = [
  {
    title: 'River Rafting',
    desc: 'Experience the thrill of white water rafting with multiple route options. From beginner-friendly 12KM stretches to extreme 36KM adventures through rapids.',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&q=80&w=1200',
    color: 'from-blue-500 to-indigo-700',
    routes: [
      { name: 'Clubhouse to Nim Beach', distance: '12 KM', difficulty: 'Beginner', price: '₹500' },
      { name: 'Shivpuri to Nim Beach', distance: '16 KM', difficulty: 'Intermediate', price: '₹700' },
      { name: 'Marine Drive to Nim Beach', distance: '26 KM', difficulty: 'Advanced', price: '₹1000' },
      { name: 'Kaudiyala to Nim Beach', distance: '36 KM', difficulty: 'Expert', price: '₹2500' },
    ],
  },
  {
    title: 'Camping',
    desc: 'Immerse yourself in nature with our premium camping experiences. Riverside camps with bonfires, music, and starlit nights in the wilderness.',
    icon: Tent,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1200',
    color: 'from-emerald-500 to-green-700',
    features: ['Riverside Locations', 'Bonfire & Music', 'Comfortable Tents', 'Meals Included'],
  },
  {
    title: 'Scooty Rent',
    desc: 'Explore the scenic mountain roads at your own pace. Rent premium scooties to discover hidden gems and breathtaking viewpoints.',
    icon: Bike,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1200',
    color: 'from-orange-500 to-red-600',
    features: ['Well-Maintained Fleet', 'Flexible Rental Hours', 'Helmet & Safety Gear', 'Local Route Maps'],
  },
  {
    title: 'Adventure Activities',
    desc: 'Push your limits with our range of adrenaline-pumping activities. From bungee jumping to cliff jumping, experience the ultimate thrill.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=1200',
    color: 'from-purple-500 to-pink-600',
    features: ['Bungee Jumping', 'Cliff Jumping', 'Flying Fox', 'Rock Climbing'],
  },
  {
    title: 'Trekking',
    desc: 'Discover pristine trails and conquer majestic peaks. Guided treks through forests, valleys, and mountains with experienced local guides.',
    icon: Mountain,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
    color: 'from-cyan-500 to-blue-700',
    features: ['Experienced Guides', 'Multiple Difficulty Levels', 'Safety Equipment', 'Scenic Routes'],
  },
];

const stats = [
  { label: 'Happy Explorers', value: 5000, suffix: '+' },
  { label: 'Rafting Routes', value: 4, suffix: '' },
  { label: 'Adventure Activities', value: 15, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Safety Rating', value: 100, suffix: '%' },
  { label: 'Trek Routes', value: 20, suffix: '+' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-nature-900">
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nature-500/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-nature-accent/5 rounded-full blur-[150px] -z-10 -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-nature-accent text-[10px] font-black uppercase tracking-[0.5em] mb-8 shadow-2xl backdrop-blur-md"
            >
              <Sparkles size={16} className="animate-spin-slow" /> WILDMADE PROTOCOLS
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-outfit uppercase tracking-tighter mb-6 leading-[0.85]">
              Our <span className="text-nature-accent italic">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
              From thrilling river rafting to serene camping experiences, we offer the complete adventure package in the heart of nature.
            </p>
          </motion.div>

          {/* Stats Section with Running Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-32 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-black font-outfit text-nature-accent group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Grid with Images */}
          <div className="space-y-32">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Section */}
                <motion.div 
                  style={{ order: i % 2 !== 0 ? 2 : 1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group border border-white/10 shadow-2xl"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[2s] opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-900 via-nature-900/40 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <service.icon className="text-nature-accent" size={32} />
                  </div>

                  {/* Live Status Badge */}
                  <div className="absolute top-8 left-8 futuristic-card py-2 px-4 bg-black/40 backdrop-blur-xl border-nature-accent/20">
                    <div className="flex items-center gap-2">
                      <Activity size={14} className="text-nature-accent animate-pulse" />
                      <span className="text-[9px] font-black tracking-widest uppercase text-white">AVAILABLE_NOW</span>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay`} />
                </motion.div>

                {/* Content Section */}
                <div style={{ order: i % 2 !== 0 ? 1 : 2 }} className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}>
                        <service.icon className="text-white" size={24} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-[0.4em] text-nature-accent">SERVICE_{String(i + 1).padStart(2, '0')}</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-outfit uppercase tracking-tighter mb-6 leading-none">
                      {service.title}
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed font-medium mb-8">
                      {service.desc}
                    </p>
                  </div>

                  {/* Routes for Rafting or Features for Others */}
                  {service.routes ? (
                    <div className="space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 mb-4 flex items-center gap-2">
                        <MapPin size={14} className="text-nature-accent" /> RAFTING_ROUTES
                      </h4>
                      <div className="space-y-3">
                        {service.routes.map((route, idx) => (
                          <div key={idx} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-nature-accent/30 transition-all group/route hover:bg-white/10">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <span className="text-sm md:text-base font-bold text-white block mb-1">{route.name}</span>
                                <div className="flex items-center gap-3 flex-wrap">
                                  <span className="text-xs font-black text-nature-accent px-3 py-1 rounded-full bg-nature-accent/10">{route.distance}</span>
                                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">• {route.difficulty}</span>
                                </div>
                              </div>
                              <div className="text-right ml-4">
                                <div className="text-2xl md:text-3xl font-black font-outfit text-nature-accent group-hover/route:scale-110 transition-transform">
                                  {route.price}
                                </div>
                                <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Per Person</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-500 mb-4">KEY_FEATURES</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {service.features?.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 group/feature">
                            <div className="w-2 h-2 rounded-full bg-nature-accent group-hover/feature:scale-150 transition-transform" />
                            <span className="text-sm font-bold text-gray-300 group-hover/feature:text-white transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-3 btn-futuristic px-8 py-4 text-sm tracking-widest group/btn"
                  >
                    BOOK NOW <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-12 md:p-16 rounded-3xl bg-gradient-to-br from-nature-accent/10 to-nature-500/5 border border-nature-accent/20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(173,255,47,0.1)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black font-outfit uppercase tracking-tighter mb-6">
                Ready to <span className="text-nature-accent italic">Adventure</span>?
              </h3>
              <p className="text-gray-400 font-medium mb-8 max-w-2xl mx-auto">
                Join thousands of explorers who have experienced the thrill of Wildmade Expedition. Book your adventure today!
              </p>
              <Link href="/contact" className="btn-futuristic px-12 py-5 text-base tracking-[0.3em] inline-flex items-center gap-3">
                CONTACT US NOW <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
