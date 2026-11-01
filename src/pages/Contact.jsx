// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Send, 
//   User, 
//   Phone, 
//   Mail, 
//   MessageSquare, 
//   MapPin, 
//   Clock, 
//   CheckCircle, 
//   AlertCircle, 
//   Loader2, 
//   Sparkles,
//   ShieldCheck
// } from 'lucide-react';
// import axios from 'axios';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     purpose: '',
//   });

//   const [status, setStatus] = useState({
//     loading: false,
//     success: false,
//     error: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ loading: true, success: false, error: '' });

//     try {
//       // Backend API call (Backend पोर्ट 5000 पर रन करेंगे)
//       const res = await axios.post('http://localhost:5000/api/enquiry', formData);

//       if (res.data.success) {
//         setStatus({ loading: false, success: true, error: '' });
//         setFormData({ name: '', phone: '', email: '', purpose: '' });
        
//         // 5 सेकंड बाद सक्सेस मैसेज हटा दें
//         setTimeout(() => {
//           setStatus((prev) => ({ ...prev, success: false }));
//         }, 5000);
//       }
//     } catch (err) {
//       console.error(err);
//       setStatus({
//         loading: false,
//         success: false,
//         error: err.response?.data?.message || 'Failed to submit enquiry. Please check backend connection.',
//       });
//     }
//   };

//   return (
//     <div className="relative min-h-screen bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
//       {/* Background Animated Gradient Blobs */}
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.2, 1],
//           opacity: [0.15, 0.25, 0.15]
//         }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-blue-600/25 blur-[140px] rounded-full pointer-events-none" 
//       />
//       <motion.div 
//         animate={{ 
//           scale: [1.2, 1, 1.2],
//           opacity: [0.15, 0.3, 0.15]
//         }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none" 
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Header Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: -25 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
//             <Sparkles className="w-3.5 h-3.5" />
//             Quick Response Guaranteed
//           </div>
//           <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
//             Connect With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Engineering Experts</span>
//           </h1>
//           <p className="text-slate-400 mt-4 text-base sm:text-lg">
//             Looking for PCB assembly, automation panels, or custom contract manufacturing? Fill the enquiry form below and our Pune team will get back to your email instantly.
//           </p>
//         </motion.div>

//         {/* Content Grid */}
//         <div className="grid lg:grid-cols-12 gap-10 items-start">
          
//           {/* Left Column: Contact Info Cards */}
//           <motion.div 
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="lg:col-span-5 space-y-6"
//           >
//             <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden">
//               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//                 <span>Headquarters & Works</span>
//               </h3>

//               <div className="space-y-6 text-sm">
//                 <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
//                   <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20 shrink-0">
//                     <MapPin className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-white">Pune Plant</h4>
//                     <p className="text-slate-400 mt-1 leading-relaxed">
//                       Sr. No. 38/1, First Floor, Above Sachin Tools, Khedekar Industrial Estate, Narhe Dhayari Road, Pune - 411041, Maharashtra.
//                     </p>
//                   </div>
//                 </motion.div>

//                 <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
//                   <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20 shrink-0">
//                     <Phone className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-white">Phone Support</h4>
//                     <p className="text-slate-400 mt-1">
//                       +91 9112233188 <br />
//                       +91 9112233177
//                     </p>
//                   </div>
//                 </motion.div>

//                 <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
//                   <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400 border border-teal-500/20 shrink-0">
//                     <Mail className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-white">Direct Email</h4>
//                     <p className="text-slate-400 mt-1 break-all">
//                       swastikelectrotech.pune@gmail.com
//                     </p>
//                   </div>
//                 </motion.div>

//                 <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
//                   <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 shrink-0">
//                     <Clock className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-white">Working Hours</h4>
//                     <p className="text-slate-400 mt-1">Mon - Sat: 9:00 AM - 6:30 PM</p>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Quality Seal */}
//               <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-slate-300">
//                 <ShieldCheck className="w-5 h-5 text-emerald-400" />
//                 <span className="text-xs">Direct response delivered straight to management inbox.</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Column: Animated Enquiry Form */}
//           <motion.div 
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className="lg:col-span-7"
//           >
//             <div className="bg-slate-900/90 border border-slate-800 p-8 sm:p-10 rounded-3xl backdrop-blur-md shadow-2xl relative">
              
//               <div className="mb-6">
//                 <h3 className="text-2xl font-bold text-white">Enquiry Form</h3>
//                 <p className="text-slate-400 text-sm mt-1">Please provide your details and requirements.</p>
//               </div>

//               {/* Success / Error Banners */}
//               <AnimatePresence>
//                 {status.success && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm"
//                   >
//                     <CheckCircle className="w-5 h-5 shrink-0" />
//                     <span>Your enquiry has been submitted and sent to our email successfully! We will contact you shortly.</span>
//                   </motion.div>
//                 )}

//                 {status.error && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-400 text-sm"
//                   >
//                     <AlertCircle className="w-5 h-5 shrink-0" />
//                     <span>{status.error}</span>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <form onSubmit={handleSubmit} className="space-y-5">
                
//                 {/* 1. Name */}
//                 <div>
//                   <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
//                     Your Full Name <span className="text-blue-400">*</span>
//                   </label>
//                   <div className="relative">
//                     <User className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="e.g. Rajesh Kumar"
//                       className="w-full bg-slate-950 border border-slate-800 rounded-xl px-12 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
//                     />
//                   </div>
//                 </div>

//                 {/* 2. Contact Number & 3. Email Address (Grid) */}
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
//                       Contact Number <span className="text-blue-400">*</span>
//                     </label>
//                     <div className="relative">
//                       <Phone className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
//                       <input
//                         type="tel"
//                         name="phone"
//                         required
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="+91 98765 43210"
//                         className="w-full bg-slate-950 border border-slate-800 rounded-xl px-12 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
//                       Email Address <span className="text-blue-400">*</span>
//                     </label>
//                     <div className="relative">
//                       <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
//                       <input
//                         type="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="rajesh@company.com"
//                         className="w-full bg-slate-950 border border-slate-800 rounded-xl px-12 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* 4. Enquiry Purpose */}
//                 <div>
//                   <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
//                     Enquiry Purpose / Requirements <span className="text-blue-400">*</span>
//                   </label>
//                   <div className="relative">
//                     <MessageSquare className="w-5 h-5 text-slate-500 absolute left-4 top-4" />
//                     <textarea
//                       name="purpose"
//                       rows="4"
//                       required
//                       value={formData.purpose}
//                       onChange={handleChange}
//                       placeholder="Specify your inquiry (e.g., PCBA prototype manufacturing, quotation for control panel, LED board fabrication...)"
//                       className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition resize-none"
//                     />
//                   </div>
//                 </div>

//                 {/* Submit Button with Framer Motion Animation */}
//                 <motion.button
//                   type="submit"
//                   disabled={status.loading}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition disabled:opacity-50 cursor-pointer"
//                 >
//                   {status.loading ? (
//                     <>
//                       <Loader2 className="w-5 h-5 animate-spin" />
//                       <span>Sending to Email & Saving...</span>
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5" />
//                       <span>Submit Enquiry</span>
//                     </>
//                   )}
//                 </motion.button>
//               </form>

//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Loader2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      // 1. बैकएंड API कॉल (MongoDB Atlas में डेटा सेव होगा)
      await axios.post('http://localhost:5000/api/enquiry', formData);

      // 2. ईमेल सीधे आपके इनबॉक्स (jaiswalpratik389@gmail.com) पर जाएगा
      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '9d67eec8-21cd-4d0b-a762-f7c479e2c0e8',
          subject: `🚨 New Enquiry from ${formData.name} - Swastik Electrotech`,
          from_name: 'Swastik Electrotech Portal',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.purpose,
        }),
      });

      const emailResult = await emailResponse.json();

      if (emailResult.success) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', phone: '', email: '', purpose: '' });

        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 6000);
      } else {
        throw new Error(emailResult.message || 'Email delivery failed.');
      }

    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.message || err.message || 'Failed to submit enquiry.',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Animated Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/4 w-[450px] h-[450px] bg-blue-600/25 blur-[140px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Email & Instant Response
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Connect With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Engineering Experts</span>
          </h1>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Looking for PCB assembly, automation panels, or custom contract manufacturing? Fill the enquiry form below.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-6">Plant & Office Details</h3>

              <div className="space-y-6 text-sm">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Pune Plant</h4>
                    <p className="text-slate-400 mt-1 leading-relaxed">
                      Sr. No. 38/1, First Floor, Above Sachin Tools, Khedekar Industrial Estate, Narhe Dhayari Road, Pune - 411041.
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/20 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone Support</h4>
                    <p className="text-slate-400 mt-1">+91 91xxxx / 91xxx</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400 border border-teal-500/20 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Direct Email</h4>
                    <p className="text-slate-400 mt-1 break-all">swastikelectrotech.pune@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Working Hours</h4>
                    <p className="text-slate-400 mt-1">Mon - Sat: 9:00 AM - 6:30 PM</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-slate-300">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-xs">Direct response delivered straight to management inbox.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900/90 border border-slate-800 p-8 sm:p-10 rounded-3xl backdrop-blur-md shadow-2xl relative">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Enquiry Form</h3>
                <p className="text-slate-400 text-sm mt-1">Please provide your details and technical requirements.</p>
              </div>

              {/* Status Alert */}
              <AnimatePresence>
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Enquiry submitted successfully! Email has been delivered to management inbox.</span>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-400 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{status.error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Pratik Jaiswal"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-12 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Contact Number <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 82250 33135"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-12 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="client@gmail.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-12 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Enquiry Purpose / Requirement <span className="text-blue-400">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-5 h-5 text-slate-500 absolute left-4 top-4" />
                    <textarea
                      name="purpose"
                      rows="4"
                      required
                      value={formData.purpose}
                      onChange={handleChange}
                      placeholder="Specify your inquiry (e.g. PCB prototype manufacturing, SMD IC work quote...)"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={status.loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition disabled:opacity-50 cursor-pointer"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Email & Saving...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </motion.button>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;