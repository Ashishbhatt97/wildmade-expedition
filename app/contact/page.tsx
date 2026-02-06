'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Globe, Cpu, Radio } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  interest: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("TRANSMISSION RECEIVED // We will contact you via secure link shortly.");
    reset();
  };

  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 text-nature-accent mb-6 animate-pulse">
                <Radio size={20} /> <span className="text-xs font-black uppercase tracking-widest">Live Uplink Estabilished</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black font-outfit uppercase tracking-tighter leading-none mb-8">
                OPEN <br/><span className="text-nature-accent italic">LINK</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium mb-12 max-w-lg">
                Ready to initialize your adventure protocol? Connect with our HQ or visit a bio-hub near you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-nature-accent group-hover:bg-nature-accent group-hover:text-nature-900 transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                   <h4 className="font-black font-outfit uppercase text-sm mb-1">Global Basecamp</h4>
                   <p className="text-gray-500 font-medium">123 Neo-Greenway, Bio-District 7, PNW 98101</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-nature-accent group-hover:bg-nature-accent group-hover:text-nature-900 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                   <h4 className="font-black font-outfit uppercase text-sm mb-1">Secure Comms</h4>
                   <p className="text-gray-500 font-medium">+1 (888) NEO-WILD</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-nature-accent group-hover:bg-nature-accent group-hover:text-nature-900 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                   <h4 className="font-black font-outfit uppercase text-sm mb-1">Neural Mail</h4>
                   <p className="text-gray-500 font-medium">tours@wildmadeexpedition.io</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/5 flex gap-6">
                <Globe className="text-gray-600 hover:text-nature-accent cursor-pointer transition-colors" size={20} />
                <Cpu className="text-gray-600 hover:text-nature-accent cursor-pointer transition-colors" size={20} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="futuristic-card relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
                <div className="w-2 h-2 rounded-full bg-nature-accent animate-ping" />
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 block group-focus-within:text-nature-accent transition-colors">Explorer_Identity</label>
                <input 
                  type="text" 
                  {...register('name', { required: true })}
                  className="w-full bg-transparent border-b border-white/10 py-4 font-outfit text-xl font-bold uppercase tracking-widest text-white outline-none focus:border-nature-accent transition-all"
                  placeholder="NAME // CODE"
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 block group-focus-within:text-nature-accent transition-colors">Contact_Frequency</label>
                <input 
                  type="email" 
                  {...register('email', { required: true })}
                  className="w-full bg-transparent border-b border-white/10 py-4 font-outfit text-xl font-bold uppercase tracking-widest text-white outline-none focus:border-nature-accent transition-all"
                  placeholder="EMAIL@NETWORK.SYS"
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 block group-focus-within:text-nature-accent transition-colors">Protocol_Interest</label>
                <select 
                  {...register('interest')}
                  className="w-full bg-transparent border-b border-white/10 py-4 font-outfit text-xl font-bold uppercase tracking-widest text-white outline-none focus:border-nature-accent transition-all appearance-none"
                >
                  <option className="bg-nature-900" value="standard">FOREST CORE</option>
                  <option className="bg-nature-900" value="premium">SKY-VAULT</option>
                  <option className="bg-nature-900" value="elite">HYDRO FLOW</option>
                  <option className="bg-nature-900" value="custom">CUSTOM MISSION</option>
                </select>
              </div>

              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2 block group-focus-within:text-nature-accent transition-colors">Transmission_Details</label>
                <textarea 
                  rows={4}
                  {...register('message')}
                  className="w-full bg-transparent border border-white/10 rounded-xl p-6 font-medium text-white outline-none focus:border-nature-accent transition-all mt-2"
                  placeholder="Type your message or special requirements..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-futuristic flex items-center justify-center gap-3 text-lg py-5"
              >
                {isSubmitting ? 'PROCESSING...' : 'SEND TRANSMISSION'} <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
