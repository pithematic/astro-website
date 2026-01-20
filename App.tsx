import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { NavItem } from './types';

// Page Imports
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import News from './pages/News';
import Investors from './pages/Investors';
import PartnersCareers from './pages/PartnersCareers';
import Contact from './pages/Contact';

// Components
import ChatWidget from './components/ChatWidget';

const NAV_ITEMS: NavItem[] = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'About', path: '/about' },
  { label: 'News', path: '/news' },
  { label: 'Investors', path: '/investors' },
  { label: 'Partners & Careers', path: '/partners-careers' },
  { label: 'Contact', path: '/contact' },
];

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-cyan-500 p-1.5 rounded-lg group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-shadow">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-wide">ASTRA<span className="text-cyan-400">NET</span></span>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path 
                      ? 'text-cyan-400 bg-slate-900' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="block w-6 h-6" /> : <Menu className="block w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                   location.pathname === item.path 
                      ? 'text-cyan-400 bg-slate-800' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="w-5 h-5 text-cyan-500" />
            <span className="text-white font-bold text-lg">ASTRANET</span>
          </div>
          <p className="text-sm">Powering the next generation of orbital connectivity with autonomous intelligence.</p>
        </div>
        <div>
           <h4 className="text-white font-bold mb-4">Solutions</h4>
           <ul className="space-y-2 text-sm">
             <li><Link to="/solutions" className="hover:text-cyan-400">Broadband</Link></li>
             <li><Link to="/solutions" className="hover:text-cyan-400">IoT Nexus</Link></li>
             <li><Link to="/solutions" className="hover:text-cyan-400">Earth Observation</Link></li>
           </ul>
        </div>
         <div>
           <h4 className="text-white font-bold mb-4">Company</h4>
           <ul className="space-y-2 text-sm">
             <li><Link to="/about" className="hover:text-cyan-400">About Us</Link></li>
             <li><Link to="/careers" className="hover:text-cyan-400">Careers</Link></li>
             <li><Link to="/investors" className="hover:text-cyan-400">Investors</Link></li>
           </ul>
        </div>
         <div>
           <h4 className="text-white font-bold mb-4">Legal</h4>
           <ul className="space-y-2 text-sm">
             <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
             <li><a href="#" className="hover:text-cyan-400">Terms of Service</a></li>
             <li><a href="#" className="hover:text-cyan-400">Orbital Debris Statement</a></li>
           </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-900 text-center text-xs">
        © {new Date().getFullYear()} AstraNet AI Inc. All rights reserved.
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/partners-careers" element={<PartnersCareers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
