'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  Zap, 
  Shield, 
  Waves, 
  Mountain, 
  Tent, 
  ChevronRight,
  Wind,
  Layers,
  Activity
} from 'lucide-react';

const ServiceSection = ({ title, subtitle, desc, image, icon: Icon, index, stats }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });
  
  return (
    <section ref={ref} className="min-h-screen py-24 flex items-center relative overflow-hidden border-t border-white/5">
      <div className={`container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
        
        <motion.div 
          style={{ 
            order: index % 2 !== 0 ? 2 : 1,
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : index % 2 === 0 ? -100 : 100,
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="flex items-center gap-3 text-nature-accent mb-6">
            <div className="w-12 h-12 rounded-2xl bg-nature-accent/10 flex items-center justify-center shadow-[0_0_15px_rgba(173,255,47,0.2)]">
                <Icon size={24} />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.4em]">{subtitle}</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black font-outfit uppercase tracking-tighter mb-8 leading-[0.85]">
            {title.split(' ')[0]} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature-accent to-emerald-400 italic">
                {title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-xl leading-relaxed">
            {desc}
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12 border-y border-white/5 py-8">
              {stats.map((stat: any, i: number) => (
                  <div key={i}>
                      <span className="block text-3xl font-black font-outfit text-white mb-1">{stat.value}</span>
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</span>
                  </div>
              ))}
          </div>

          <Link href="/services" className="btn-futuristic group inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase">
            Initialize Access <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        <motion.div 
          style={{ 
            order: index % 2 !== 0 ? 1 : 2,
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.8,
            rotate: isInView ? 0 : index % 2 === 0 ? 5 : -5,
          }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden group shadow-2xl"
        >
          <Image 
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-[2s] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nature-900 via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 border border-white/10 group-hover:border-nature-accent/30 transition-colors duration-500 pointer-events-none rounded-3xl" />
          
          {/* Animated UI Elements */}
          <div className="absolute top-8 right-8 futuristic-card py-3 px-6 bg-black/40 backdrop-blur-xl border-nature-accent/20">
              <div className="flex items-center gap-3">
                  <Activity size={16} className="text-nature-accent animate-pulse" />
                  <span className="text-[10px] font-black tracking-widest uppercase">Live_Telemetry</span>
              </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background elements unique to section */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nature-accent/5 rounded-full blur-[120px] -z-10 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`} />
    </section>
  );
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="bg-nature-900">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden py-24 md:py-0">
        {/* Wildmade Branding Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[25vw] font-black text-white/[0.02] select-none pointer-events-none z-0 tracking-tighter uppercase whitespace-nowrap">
            WILDMADE
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=100&w=2574&auto=format&fit=crop"
            alt="Futuristic Wilderness"
            fill
            className="object-cover opacity-60 brightness-75 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nature-900/40 to-nature-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-6xl mx-auto"
            >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 rounded-full bg-white/5 border border-white/10 text-nature-accent text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] mb-8 md:mb-12 shadow-2xl backdrop-blur-md"
                >
                  <Sparkles size={16} className="animate-spin-slow" /> CAMPING, RAFTING & ADVENTUROUS TOURS
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] 1440p:text-[10rem] 2xl:text-[11rem] font-black font-outfit uppercase tracking-tighter leading-[0.8] mb-10 flex flex-col">
                  <span className="inline-block overflow-hidden h-fit py-2">
                    <motion.span 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="inline-block"
                    >
                        WILDMADE
                    </motion.span>
                  </span>
                  <span className="inline-block overflow-hidden h-fit py-2">
                    <motion.span 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-nature-accent via-emerald-400 to-nature-500 italic block"
                    >
                        EXPEDITION
                    </motion.span>
                  </span>
                </h1>

                <p className="text-gray-300 text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in-up [animation-delay:1s] [animation-fill-mode:forwards]">
                  Master the elements of <span className="text-white font-bold underline decoration-nature-accent decoration-2 underline-offset-4">Rafting</span>, <span className="text-white font-bold underline decoration-nature-accent decoration-2 underline-offset-4">Camping</span>, and <span className="text-white font-bold underline decoration-nature-accent decoration-2 underline-offset-4">Trekking</span> with next-gen bio-integrated tech.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 opacity-0 animate-fade-in-up [animation-delay:1.2s] [animation-fill-mode:forwards]">
                  <Link href="/contact" className="btn-futuristic w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 text-base md:text-lg font-black tracking-[0.2em] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(173,255,47,0.3)]">
                    INITIALIZE SYNC
                  </Link>
                  <Link href="#explore" className="group flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-[0.3em] hover:text-nature-accent transition-colors">
                    EXPLORE_TOURS <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-nature-accent transition-all duration-500" />
                  </Link>
                </div>
            </motion.div>
        </div>

        <div className="absolute bottom-12 left-10 hidden lg:block animate-pulse">
            <div className="flex items-center gap-4 text-gray-500 font-black text-[10px] tracking-[0.5em] uppercase vertical-text">
                <div className="w-[1px] h-32 bg-gradient-to-b from-nature-accent to-transparent" />
                SYSTEM_STATUS // 100% OPERATIONAL
            </div>
        </div>
      </section>

      {/* CORE SERVICES SECTIONS */}
      <div id="explore">
        <ServiceSection 
          index={0}
          title="HYPER RAFTING"
          subtitle="AQUATIC_MASTERY"
          desc="Navigate high-velocity rapids with AR-assisted water flow predictions. Our proprietary impact-reduction crafts ensure the ultimate adrenaline safely."
          image="https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&q=100&w=1200"
          icon={Waves}
          stats={[
            { label: 'VELOCITY', value: '45 KM/H' },
            { label: 'DIFFICULTY', value: 'CLASS V+' }
          ]}
        />

        <ServiceSection 
          index={1}
          title="MATRIX TREKKING"
          subtitle="VERTICALITY_PROTOCOL"
          desc="Scale vertical terrains with bio-sync exosuits that harmonize with your muscle pace. Never experience fatigue on the path to the summit."
          image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=100&w=1200"
          icon={Mountain}
          stats={[
            { label: 'ALTITUDE', value: '6200 M' },
            { label: 'OXYGEN_SYNC', value: '99.8%' }
          ]}
        />

        <ServiceSection 
          index={2}
          title="NEO CAMPING"
          subtitle="HABITAT_IMMERSION"
          desc="Sleep in habitats that breathe with you. Self-regulating climate pods integrated into the wild, providing safety and total sensory immersion."
          image="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=100&w=1200"
          icon={Tent}
          stats={[
            { label: 'IMMERSION', value: 'CORE_SYNC' },
            { label: 'TEMP_STABLE', value: '22°C' }
          ]}
        />
      </div>

      {/* WHY US - REDUX */}
      <section className="py-40 bg-white/[0.02] relative overflow-hidden">
          <div className="container mx-auto px-6">
              <div className="text-center mb-24 max-w-3xl mx-auto">
                   <h2 className="text-5xl md:text-7xl font-black font-outfit uppercase tracking-tighter mb-8 leading-none">
                       THE <span className="text-nature-accent font-italic">NEO-LAYER</span>
                   </h2>
                   <p className="text-gray-400 font-medium">Why we are the primary selection for 21st-century exploration.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                      { icon: Shield, title: "SAFETY_01", desc: "Redundant AI-monitored life support layers." },
                      { icon: Wind, title: "ECO_SYNC", desc: "Carbon-negative footprint on every mission." },
                      { icon: Layers, title: "GEO_DATA", desc: "Real-time topographic holographic feeds." },
                      { icon: Activity, title: "BIO_METRIC", desc: "Constant health monitoring to predict fatigue." }
                  ].map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="futuristic-card group hover:border-nature-accent/50 transition-all cursor-pointer"
                      >
                          <item.icon size={32} className="text-nature-accent mb-6 group-hover:scale-110 transition-transform" />
                          <h4 className="text-lg font-black font-outfit uppercase mb-3 tracking-widest">{item.title}</h4>
                          <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-48 text-center relative overflow-hidden bg-black">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-nature-accent/5 rounded-full blur-[150px] -z-10" />
          
          <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                  <h2 className="text-5xl md:text-7xl lg:text-[10rem] font-black font-outfit uppercase tracking-tighter leading-[0.8] mb-12">
                      LEAVE THE <br/><span className="text-nature-accent italic">ORDINARY</span>
                  </h2>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                      <Link href="/contact" className="btn-futuristic px-16 py-6 text-xl tracking-[0.3em] font-black group flex items-center justify-center gap-4">
                        SYNC NOW <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                      </Link>
                      <Link href="/about" className="text-xs font-black uppercase tracking-[0.5em] text-gray-400 hover:text-white transition-colors">
                        VISUAL_PROOFS
                      </Link>
                  </div>
              </motion.div>
          </div>
      </section>
    </div>
  );
}
