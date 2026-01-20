import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <div className="w-full pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-12">Case Studies</h1>

        <div className="space-y-16">
          {/* Study 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-800 rounded-2xl h-80 overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              <img src="https://images.unsplash.com/photo-1517427677506-ade074eb87e7?q=80&w=2000&auto=format&fit=crop" alt="Maritime" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-cyan-400 text-sm font-bold uppercase tracking-wide mb-2">Maritime Logistics</div>
              <h2 className="text-3xl font-bold text-white mb-6">Global Shipping Giant optimizes routes via IoT</h2>
              <div className="space-y-4 text-slate-300">
                <p><strong className="text-white">Challenge:</strong> A fleet of 200 cargo ships suffered from 40% data blackouts in the Pacific, delaying logistics updates.</p>
                <p><strong className="text-white">Solution:</strong> Deployed AstraNet IoT terminals with "always-on" mesh routing.</p>
                <p><strong className="text-white">Result:</strong> 99.99% uptime achieved. $12M saved annually in fuel via real-time weather routing updates.</p>
              </div>
              <button className="mt-8 flex items-center text-cyan-400 font-bold hover:underline">
                Read Full Report <ArrowUpRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          <hr className="border-slate-800" />

           {/* Study 2 */}
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1">
              <div className="text-purple-400 text-sm font-bold uppercase tracking-wide mb-2">Government Defense</div>
              <h2 className="text-3xl font-bold text-white mb-6">Secure Comms in Contested Environments</h2>
              <div className="space-y-4 text-slate-300">
                <p><strong className="text-white">Challenge:</strong> Need for resilient, jam-resistant communications for rapid deployment forces.</p>
                <p><strong className="text-white">Solution:</strong> SpectraFlow™ dynamic frequency hopping managed by onboard AI.</p>
                <p><strong className="text-white">Result:</strong> Maintained high-bandwidth link despite active interference attempts during exercises.</p>
              </div>
              <button className="mt-8 flex items-center text-purple-400 font-bold hover:underline">
                Read Full Report <ArrowUpRight className="w-4 h-4 ml-2" />
              </button>
            </div>
             <div className="bg-slate-800 rounded-2xl h-80 overflow-hidden relative group order-1 md:order-2">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              <img src="https://images.unsplash.com/photo-1626262464734-d881eb557008?q=80&w=2000&auto=format&fit=crop" alt="Defense" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
