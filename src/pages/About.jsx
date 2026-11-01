import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  CheckCircle2, 
  Factory, 
  Microchip, 
  Zap, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const stats = [
  { value: '2013', label: 'Year Established in Pune' },
  { value: '1000+', label: 'Happy Clients Served' },
  { value: '100%', label: 'Strict Quality Inspection' },
  { value: '20+', label: 'Years Combined Experience' },
];

const capabilities = [
  {
    icon: Microchip,
    title: 'PCBA Contract Manufacturing',
    desc: 'High-speed automated SMT and through-hole Printed Circuit Board Assembly tailored to exact specifications.',
  },
  {
    icon: Zap,
    title: 'LED Circuit Board Assembly',
    desc: 'Specialized high-thermal conductivity LED boards engineered for automotive and commercial illumination.',
  },
  {
    icon: Cpu,
    title: 'SMD IC & Micro-BGA Work',
    desc: 'Precision micro-soldering, SMD IC placement, and multi-layer rework using cutting-edge machinery.',
  },
  {
    icon: Factory,
    title: 'Turnkey Industrial Panels',
    desc: 'Custom-engineered automation control panels and PLC integration built for tough industrial environments.',
  },
];

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To empower global and domestic electronics industries with precision manufacturing, uncompromising quality, and agile turnaround times.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To be India’s most trusted Electronics Manufacturing Services (EMS) partner by pioneering advanced automation and PCB fabrication standards.',
  },
  {
    icon: Award,
    title: 'Quality Policy',
    desc: 'Every assembled board undergoes rigorous automated optical inspection (AOI), thermal stress testing, and functional bench verification.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      
      {/* 1. Header Banner */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-blue-600/15 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Company Profile & Heritage
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Swastik Electrotech</span>
            </h1>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Pune’s premier Electronics Manufacturing Services (EMS) enterprise specializing in PCBA, LED boards, and industrial automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Story Section (Ref Website Content) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">
              Engineering Excellence
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Quality-Driven <span className="text-blue-400">PCB Solutions</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Founded in 2013, <strong className="text-white font-semibold">Swastik Electrotech Automation</strong> is a leading EMS company specializing in Contract Manufacturing and Services for Printed Circuit Board Assembly (PCBA), LED Circuit Boards, SMD IC Work, and PCB Fabrication.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              Based in Pune, we cater to a wide range of industries, assembling all types of PCBs tailored to client specifications. Our team of highly skilled professionals operates with cutting-edge technology and state-of-the-art machinery.
            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              We place a strong emphasis on delivering high-quality, advanced solutions for diverse applications. Thanks to our modern infrastructure, advanced facilities, and well-defined processes, we offer dependable products at competitive market prices.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-sm text-slate-200 font-medium">Pune Based Facility</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-sm text-slate-200 font-medium">Rigorous Testing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-sm text-slate-200 font-medium">Rapid Prototyping</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-sm text-slate-200 font-medium">Competitive Pricing</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 p-3 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
                alt="PCB Assembly & Testing"
                className="rounded-2xl w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
                <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">Manufacturing Plant</p>
                <p className="text-base font-bold text-white">Narhe Dhayari Industrial Estate, Pune</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Fast Numbers / Stats */}
      <section className="py-16 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {stat.value}
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Specialized <span className="text-blue-400">Capabilities</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            End-to-end manufacturing backed by automated machinery and precision testing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-900 border border-slate-800 p-7 rounded-2xl shadow-xl hover:border-blue-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/10 text-blue-400 flex items-center justify-center rounded-xl mb-5 border border-blue-500/20">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. Mission, Vision & Quality Policy */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-slate-900/90 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/40 transition"
                >
                  <div className="p-3 bg-blue-600/10 text-blue-400 rounded-xl w-fit mb-5 border border-blue-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-blue-900/60 to-indigo-900/60 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h4 className="text-2xl font-bold text-white">Partner With Us for Precision Manufacturing</h4>
              <p className="text-slate-300 text-sm mt-1">Contact our Pune engineering division to review your BOM and Gerber files.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-xl transition shadow-lg shrink-0"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;