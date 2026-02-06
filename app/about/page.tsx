'use client';

import { motion, useInView } from 'framer-motion';
import { Shield, Target, Users, Zap, Award, CheckCircle2, Waves, Mountain, Tent, Bike } from 'lucide-react';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '' }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
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

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

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
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black font-outfit uppercase tracking-tighter mb-8 leading-[0.8]">
                    ABOUT <br/><span className="text-nature-accent italic">US</span>
                </h1>
                <p className="max-w-xl text-lg md:text-xl text-gray-400 font-medium">
                    At <span className="text-white font-bold">Wildmade Expedition</span>, we bring you the ultimate adventure experience in the heart of nature. From thrilling river rafting to peaceful camping under the stars, we've been creating unforgettable memories since 2010.
                </p>
             </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden group border border-white/5"
            >
                <Image 
                    src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1000"
                    alt="Wildmade Expedition Team"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-900 to-transparent" />
                <div className="absolute inset-0 bg-nature-accent/10 mix-blend-overlay" />
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 p-6 md:p-8 futuristic-card">
                   <h4 className="text-xl md:text-2xl font-black font-outfit uppercase text-nature-accent mb-2">EXPERT TEAM</h4>
                   <p className="text-xs md:text-sm text-gray-300">All our guides are certified professionals with years of experience in adventure sports and wilderness survival.</p>
                </div>
            </motion.div>

            <div className="space-y-12">
                <div className="space-y-4">
                    <h2 className="text-4xl font-black font-outfit uppercase tracking-tight">Our Philosophy</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">We believe that adventure should be accessible, safe, and unforgettable. Our mission is to provide world-class adventure experiences while maintaining the highest safety standards and environmental responsibility.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { icon: Shield, title: "SAFETY FIRST", desc: "100% safety record with certified equipment and trained professionals." },
                        { icon: Target, title: "PRECISION", desc: "Carefully planned routes and activities for optimal experience." },
                        { icon: Users, title: "COMMUNITY", desc: "Join thousands of happy adventurers from around the world." },
                        { icon: Zap, title: "THRILL", desc: "Adrenaline-pumping activities for all skill levels." }
                    ].map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl hover:border-nature-accent/30 transition-colors"
                        >
                            <item.icon className="text-nature-accent mb-4" size={24} />
                            <h4 className="font-black font-outfit uppercase text-sm mb-2">{item.title}</h4>
                            <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* Animated Stats Section */}
        <section className="py-20 border-y border-white/5 mb-32">
          <h2 className="text-3xl md:text-4xl font-black font-outfit uppercase tracking-tight mb-12 text-center">
            Our <span className="text-nature-accent italic">Impact</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            {[
              { label: "HAPPY EXPLORERS", val: 5000, suffix: "+" },
              { label: "RAFTING ROUTES", val: 4, suffix: "" },
              { label: "YEARS EXPERIENCE", val: 10, suffix: "+" },
              { label: "SAFETY RATE", val: 100, suffix: "%" },
              { label: "ADVENTURE ACTIVITIES", val: 15, suffix: "+" },
              { label: "TREK ROUTES", val: 20, suffix: "+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="text-4xl md:text-5xl font-black font-outfit text-nature-accent group-hover:scale-110 transition-transform mb-2">
                  <AnimatedCounter end={stat.val} suffix={stat.suffix} />
                </div>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-4xl font-black font-outfit uppercase tracking-tight mb-12 text-center">
            What We <span className="text-nature-accent italic">Offer</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Waves, title: "River Rafting", desc: "4 exciting routes from 12-36 KM", color: "from-blue-500 to-indigo-700" },
              { icon: Tent, title: "Camping", desc: "Riverside camps with bonfire & music", color: "from-emerald-500 to-green-700" },
              { icon: Bike, title: "Scooty Rent", desc: "Explore scenic mountain roads", color: "from-orange-500 to-red-600" },
              { icon: Zap, title: "Adventure Activities", desc: "Bungee, cliff jumping & more", color: "from-purple-500 to-pink-600" },
              { icon: Mountain, title: "Trekking", desc: "Guided treks through mountains", color: "from-cyan-500 to-blue-700" }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-nature-accent/30 transition-all group text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="font-black font-outfit uppercase text-sm mb-2 group-hover:text-nature-accent transition-colors">{service.title}</h3>
                <p className="text-xs text-gray-500 font-medium">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-32">
            <h2 className="text-4xl font-black font-outfit uppercase tracking-tight mb-16 text-center">Certified Excellence</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <div className="h-16 flex items-center justify-center border border-white/10 rounded-xl px-8">
                    <span className="font-outfit font-black tracking-widest text-sm">NOLS CERTIFIED</span>
                </div>
                <div className="h-16 flex items-center justify-center border border-white/10 rounded-xl px-8">
                    <span className="font-outfit font-black tracking-widest text-sm">SAFETY APPROVED</span>
                </div>
                <div className="h-16 flex items-center justify-center border border-white/10 rounded-xl px-8">
                    <span className="font-outfit font-black tracking-widest text-sm">ECO-FRIENDLY</span>
                </div>
                <div className="h-16 flex items-center justify-center border border-white/10 rounded-xl px-8">
                    <span className="font-outfit font-black tracking-widest text-sm">INSURED</span>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
