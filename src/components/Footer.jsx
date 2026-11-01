// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Cpu, 
//   MapPin, 
//   Phone, 
//   Mail, 
//   ArrowUpRight, 
//   ShieldCheck, 
//   Heart,
//   Linkedin,
//   Facebook,
//   Twitter,
//   Instagram
// } from 'lucide-react';

// const Footer = () => {
//   const quickLinks = [
//     { title: 'Home', path: '/' },
//     { title: 'About Us', path: '/about' },
//     { title: 'Contact Us', path: '/contact' },
//   ];

//   const services = [
//     'PCB Assembly (PCBA)',
//     'LED Circuit Boards',
//     'SMD IC Work',
//     'Industrial Control Panels',
//     'Turnkey Automation Systems',
//     'Rigorous Quality Testing'
//   ];

//   return (
//     <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden">
//       {/* Decorative Glow */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80"
//         >
          
//           {/* Column 1: Company Profile */}
//           <div className="space-y-4">
//             <Link to="/" className="flex items-center gap-3">
//               <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/30">
//                 <Cpu className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <span className="text-xl font-bold tracking-wider text-white block leading-tight">
//                   SWASTIK
//                 </span>
//                 <span className="text-[10px] text-blue-400 font-semibold tracking-widest block uppercase">
//                   Electrotech & Automation
//                 </span>
//               </div>
//             </Link>

//             <p className="text-slate-400 text-sm leading-relaxed">
//               Founded in 2013 in Pune, delivering world-class Contract Manufacturing for PCB Assembly, LED Boards, and Turnkey Industrial Automation Solutions.
//             </p>

//             <div className="flex items-center gap-2 text-xs text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 w-fit">
//               <ShieldCheck className="w-4 h-4" />
//               <span>ISO & Quality Compliant Manufacturing</span>
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-base font-bold text-white uppercase tracking-wider">
//               Quick Links
//             </h4>
//             <ul className="space-y-2.5 text-sm">
//               {quickLinks.map((link) => (
//                 <li key={link.title}>
//                   <Link
//                     to={link.path}
//                     className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200"
//                   >
//                     <span>›</span>
//                     <span>{link.title}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Capabilities */}
//           <div className="space-y-4">
//             <h4 className="text-base font-bold text-white uppercase tracking-wider">
//               Capabilities
//             </h4>
//             <ul className="space-y-2 text-sm text-slate-400">
//               {services.map((service, index) => (
//                 <li key={index} className="flex items-center gap-2">
//                   <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
//                   <span>{service}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Contact & Office Info */}
//           <div className="space-y-4">
//             <h4 className="text-base font-bold text-white uppercase tracking-wider">
//               Plant & Office
//             </h4>
//             <ul className="space-y-3 text-sm text-slate-400">
//               <li className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
//                 <span>
//                   Sr. No. 38/1, 1st Floor, Above Sachin Tools, Khedekar Ind. Estate, Narhe Dhayari Road, Pune - 411041
//                 </span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone className="w-4 h-4 text-blue-400 shrink-0" />
//                 <a href="tel:9112233188" className="hover:text-blue-400 transition">
//                   +91 9112233188 / 9112233177
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail className="w-4 h-4 text-blue-400 shrink-0" />
//                 <a href="mailto:swastikelectrotech.pune@gmail.com" className="hover:text-blue-400 transition break-all">
//                   swastikelectrotech.pune@gmail.com
//                 </a>
//               </li>
//             </ul>
//           </div>

//         </motion.div>

//         {/* Bottom Bar */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400"
//         >
//           <p>© {new Date().getFullYear()} Swastik Electrotech Automation. All rights reserved.</p>

//           {/* Social Icons Animated */}
//           <div className="flex items-center space-x-3">
//             {[Linkedin, Facebook, Twitter, Instagram].map((Icon, idx) => (
//               <motion.a
//                 key={idx}
//                 href="#"
//                 whileHover={{ scale: 1.2, color: '#60A5FA' }}
//                 whileTap={{ scale: 0.9 }}
//                 className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-blue-500/40 transition"
//               >
//                 <Icon className="w-4 h-4" />
//               </motion.a>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck 
} from 'lucide-react';

// सोशल आइकन्स के इनलाइन SVGs (बिना किसी बाहरी पैकेज एरर के चलेंगे)
const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: '#',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
      </svg>
    )
  },
  {
    name: 'Twitter',
    href: '#',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: '#',
    svg: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  }
];

const Footer = () => {
  const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact Us', path: '/contact' },
  ];

  const services = [
    'PCB Assembly (PCBA)',
    'LED Circuit Boards',
    'SMD IC Work',
    'Industrial Control Panels',
    'Turnkey Automation Systems',
    'Rigorous Quality Testing'
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80"
        >
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/30">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-wider text-white block leading-tight">
                  SWASTIK
                </span>
                <span className="text-[10px] text-blue-400 font-semibold tracking-widest block uppercase">
                  Electrotech & Automation
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              Founded in 2013 in Pune, delivering world-class Contract Manufacturing for PCB Assembly, LED Boards, and Turnkey Industrial Automation Solutions.
            </p>

            <div className="flex items-center gap-2 text-xs text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO & Quality Compliant</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200"
                  >
                    <span>›</span>
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Info */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              Plant & Office
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Sr. No. 38/1, 1st Floor, Above Sachin Tools, Khedekar Ind. Estate, Narhe Dhayari Road, Pune - 411041
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:9112233188" className="hover:text-blue-400 transition">
                  +91 9112233188 / 9112233177
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:swastikelectrotech.pune@gmail.com" className="hover:text-blue-400 transition break-all">
                  swastikelectrotech.pune@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400"
        >
          <p>© {new Date().getFullYear()} Swastik Electrotech Automation. All rights reserved.</p>

          {/* Social Icons Animated */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                aria-label={item.name}
                whileHover={{ scale: 1.2, color: '#60A5FA' }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-blue-500/40 transition"
              >
                {item.svg}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;