import React from 'react';
import { ArrowRight, Globe, Cpu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 border border-cyan-500/30 rounded-full bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Orchestrating the Cosmos</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            AI-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Orbital Intelligence</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            AstraNet revolutionizes satellite communication with NeuroOrbit™, an autonomous AI engine that optimizes orbital paths and spectrum allocation in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/solutions" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group">
              Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-slate-600 hover:border-slate-400 text-slate-200 hover:text-white rounded-lg font-semibold transition-all backdrop-blur-sm bg-white/5">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <Globe className="w-12 h-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Global Mesh Network</h3>
              <p className="text-slate-400">Low-latency broadband delivered via a dynamically reconfiguring mesh of thousands of satellites.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <Cpu className="w-12 h-12 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous AI Core</h3>
              <p className="text-slate-400">NeuroOrbit™ processes petabytes of telemetry to predict traffic and optimize coverage instantly.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <ShieldCheck className="w-12 h-12 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">Collision Avoidance</h3>
              <p className="text-slate-400">Predictive maneuvering ensures asset safety in an increasingly crowded orbital environment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
