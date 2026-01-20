import React from 'react';
import OrbitSimulation from '../components/OrbitSimulation';
import { Wifi, Radio, Eye } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <div className="w-full pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Orbital Solutions</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Leveraging our proprietary AI to deliver uncompromised connectivity and data from Low Earth Orbit (LEO).
          </p>
        </div>

        {/* Orbit Sim */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Live Orbit Optimization Demo</h2>
            <span className="text-cyan-400 text-sm">Interactive Visualization</span>
          </div>
          <OrbitSimulation />
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1516339901601-2e1b87046c69?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Wifi className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">AstraLink™ Broadband</h3>
              </div>
              <p className="text-slate-400 mb-6">
                Enterprise-grade connectivity anywhere on Earth. Our AI routes traffic around weather interference and network congestion.
              </p>
              <ul className="text-sm text-slate-300 space-y-2 mb-6">
                <li className="flex gap-2"><span>•</span> <span className="font-semibold">Bandwidth:</span> Up to 10 Gbps</li>
                <li className="flex gap-2"><span>•</span> <span className="font-semibold">Latency:</span> &lt; 20ms</li>
                <li className="flex gap-2"><span>•</span> <span className="font-semibold">Sector:</span> Maritime, Aviation, Defense</li>
              </ul>
              <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded transition-colors">Learn More</button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Radio className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">IoT Nexus</h3>
              </div>
              <p className="text-slate-400 mb-6">
                Direct-to-device satellite IoT for asset tracking, agriculture, and utility monitoring across remote geographies.
              </p>
               <ul className="text-sm text-slate-300 space-y-2 mb-6">
                <li className="flex gap-2"><span>•</span> <span className="font-semibold">Capacity:</span> 1M devices/sq km</li>
                <li className="flex gap-2"><span>•</span> <span className="font-semibold">Battery:</span> 10+ year device life</li>
                <li className="flex gap-2"><span>•</span> <span className="font-semibold">Sector:</span> Logistics, Agriculture</li>
              </ul>
              <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded transition-colors">Learn More</button>
            </div>
          </div>

           {/* Service 3 */}
           <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Orbital Sense</h3>
              </div>
              <p className="text-slate-400 mb-6">
                Real-time optical and SAR imagery processed on-orbit by edge AI chips to deliver insights in seconds, not hours.
              </p>
               <ul className="text-sm text-slate-300 space-y-2 mb-6">
                <li className="flex gap-2"><span>•</span> <span className="font-semibold">Resolution:</span> 30cm</li>
                <li className="flex gap-2"><span>•</span> <span className="font-semibold">Revisit:</span> Hourly</li>
                <li className="flex gap-2"><span>•</span> <span className="font-semibold">Sector:</span> Environmental, Gov</li>
              </ul>
              <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded transition-colors">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
