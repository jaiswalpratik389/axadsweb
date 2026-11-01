import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: 'HOME', path: '/' },
    { title: 'ABOUT US', path: '/about' },
    { title: 'CONTACT US', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2.5 bg-blue-600 rounded-xl group-hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider block leading-tight">
                SWASTIK
              </span>
              <span className="text-xs text-blue-400 font-medium tracking-widest block uppercase">
                Electrotech & Automation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition shadow-md shadow-blue-600/20"
            >
              <PhoneCall className="w-4 h-4" />
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium ${
                isActive(link.path)
                  ? 'bg-blue-600/20 text-blue-400'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {link.title}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold"
            >
              <PhoneCall className="w-4 h-4" />
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;