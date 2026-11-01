// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

// const Hero = () => {
//   return (
//     <div className="relative bg-slate-950 text-white overflow-hidden">
//       {/* Background Glow Effect */}
//       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
          
//           {/* Left Content */}
//           <div className="space-y-6 text-center lg:text-left">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
//               <Zap className="w-3.5 h-3.5 text-blue-400" />
//               Next-Gen Industrial Automation
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
//               Smart Electrical & <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
//                 Automation Solutions
//               </span>
//             </h1>

//             <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
//               We engineer state-of-the-art Control Panels, PLC/SCADA Automation, and Turnkey Electrical Systems designed for reliability and industrial efficiency.
//             </p>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
//               >
//                 Request an Enquiry
//                 <ArrowRight className="w-4 h-4" />
//               </Link>
//               <Link
//                 to="/about"
//                 className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold rounded-xl transition"
//               >
//                 Learn More
//               </Link>
//             </div>

//             {/* Highlights */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
//                 <span className="text-xs text-slate-300 font-medium">ISO Standards</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
//                 <span className="text-xs text-slate-300 font-medium">100% Tested Panels</span>
//               </div>
//               <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
//                 <Zap className="w-5 h-5 text-blue-400 shrink-0" />
//                 <span className="text-xs text-slate-300 font-medium">24/7 Tech Support</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Visual Card */}
//           <div className="relative">
//             <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/60 backdrop-blur-sm p-3">
//               <img
//                 src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
//                 alt="Industrial Automation Panels"
//                 className="rounded-xl w-full h-[380px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              
//               <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 border border-slate-700/60 backdrop-blur-md">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Reliability</p>
//                     <p className="text-lg font-bold text-white">99.9% Industrial Control</p>
//                   </div>
//                   <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
//                     Industry Leader
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-24">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Animated */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider"
            >
              <Zap className="w-4 h-4 text-blue-400" />
              Leading EMS & PCB Solutions in Pune
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Quality-Driven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                PCB & EMS Solutions
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Specializing in Contract Manufacturing for Printed Circuit Board Assembly (PCBA), LED Boards, SMD IC Work, and Advanced Industrial Automation since 2013.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 transition w-full sm:w-auto"
                >
                  Send Enquiry
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold rounded-xl transition w-full sm:w-auto"
                >
                  Explore Company
                </Link>
              </motion.div>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">SMD & Through-Hole</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">100% Quality Tested</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Zap className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Fast Turnaround</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Animated */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/50 p-2 backdrop-blur-sm group">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
                alt="Electronic Circuit Board Assembly"
                className="rounded-xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center justify-between"
              >
                <div>
                  <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">Pune Facility</p>
                  <p className="text-lg font-bold text-white">Precision PCBA & Testing</p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                  ISO Certified
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;