import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { 
  Smile, 
  Calendar, 
  FolderCheck, 
  Award, 
  Truck, 
  ShieldCheck, 
  Headphones, 
  Cpu, 
  CheckCircle, 
  Handshake, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Smile, value: '1000+', label: 'Happy Clients Served' },
  { icon: Calendar, value: '20+', label: 'Years of Experience' },
  { icon: FolderCheck, value: '1000+', label: 'Project Designs Served' },
  { icon: Award, value: '50+', label: 'Industry Awards Won' },
];

const offerings = [
  { icon: Truck, title: 'On-Time Delivery', desc: 'We ensure that all projects are delivered on time, without compromising quality.' },
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'We maintain the highest standards in quality assurance to provide the best products.' },
  { icon: Headphones, title: 'Good Service', desc: 'Our team is always available to provide exceptional customer service and technical support.' },
  { icon: Cpu, title: 'Innovative Solutions', desc: 'We bring innovative solutions to solve complex challenges in your business.' },
  { icon: CheckCircle, title: 'Proven Results', desc: 'Our results speak for themselves with an outstanding track record of success.' },
  { icon: Handshake, title: 'Long-Term Partnerships', desc: 'We build long-term partnerships by focusing on mutual growth and client success.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Home = () => {
  return (
    <div className="bg-slate-950 text-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Milestones Section */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our <span className="text-blue-400">Milestones</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Over two decades of engineering excellence, trust, and continuous innovation.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg hover:border-blue-500/50 transition-all"
                >
                  <div className="p-4 bg-blue-600/10 text-blue-400 rounded-2xl mb-4 border border-blue-500/20">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-2">{item.value}</h3>
                  <p className="text-slate-400 text-sm font-medium">{item.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. What We Offer Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              What We <span className="text-blue-400">Offer</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Delivering high precision contract manufacturing, electronics assembly, and unmatched client support.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {offerings.map((offer, idx) => {
              const Icon = offer.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 p-8 rounded-2xl shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-400 flex items-center justify-center rounded-xl mb-6 border border-blue-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{offer.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{offer.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Have a Custom Project in Mind?</h3>
              <p className="text-blue-100 text-sm sm:text-base">Get in touch with our engineering team for instant technical consultation & quote.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition shadow-lg shrink-0"
            >
              Contact Us Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;