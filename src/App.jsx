import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';



// Placeholder Pages (नेक्स्ट स्टेप में इन्हें बनाएंगे)


// const Contact = () => (
//   <div className="min-h-[80vh] flex items-center justify-center text-center">
//     <h1 className="text-3xl font-bold text-blue-400">Contact Us Page Coming Next</h1>
//   </div>
// );

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
        {/* Navbar सभी पेजों पर हमेशा ऊपर रहेगा */}
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;