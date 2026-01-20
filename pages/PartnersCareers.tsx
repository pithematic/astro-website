import React from 'react';
import { Briefcase, Handshake } from 'lucide-react';

const PartnersCareers: React.FC = () => {
  return (
    <div className="w-full pt-20">
       <div className="max-w-7xl mx-auto px-6 py-12">
          
          {/* Partners */}
          <section className="mb-24">
             <div className="flex items-center gap-4 mb-8">
                 <Handshake className="w-8 h-8 text-cyan-400" />
                 <h2 className="text-3xl font-bold text-white">Partner with Us</h2>
             </div>
             <div className="grid md:grid-cols-2 gap-12 bg-slate-900 p-8 rounded-2xl border border-slate-800">
                 <div>
                     <h3 className="text-xl font-bold text-white mb-4">Technology Partners</h3>
                     <p className="text-slate-400 mb-4">
                         Collaborate on edge computing hardware, optical inter-satellite links, or ground station infrastructure.
                     </p>
                     <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded border border-slate-600 transition-colors">Apply as Partner</button>
                 </div>
                 <div>
                     <h3 className="text-xl font-bold text-white mb-4">Resellers & Integrators</h3>
                     <p className="text-slate-400 mb-4">
                         Deliver AstraNet connectivity to your local markets. Perfect for maritime, aviation, and rural ISPs.
                     </p>
                     <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded border border-slate-600 transition-colors">Become a Reseller</button>
                 </div>
             </div>
          </section>

          {/* Careers */}
          <section>
             <div className="flex items-center gap-4 mb-8">
                 <Briefcase className="w-8 h-8 text-purple-400" />
                 <h2 className="text-3xl font-bold text-white">Join the Mission</h2>
             </div>
             <p className="text-slate-400 mb-8 max-w-2xl">
                 We are looking for visionaries to help us code the operating system of Low Earth Orbit. Remote-friendly culture with HQ in San Francisco.
             </p>
             
             <div className="grid gap-4">
                 {[
                     { title: "Senior AI Engineer (Reinforcement Learning)", loc: "San Francisco / Remote", type: "Full-time" },
                     { title: "RF Systems Architect", loc: "San Francisco", type: "Full-time" },
                     { title: "Frontend Engineer (React/WebGL)", loc: "Remote", type: "Full-time" },
                 ].map((job, i) => (
                     <div key={i} className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center hover:border-purple-500/50 transition-colors group">
                         <div className="mb-4 sm:mb-0">
                             <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{job.title}</h4>
                             <p className="text-slate-500 text-sm">{job.loc} • {job.type}</p>
                         </div>
                         <button className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded font-medium transition-colors">View Role</button>
                     </div>
                 ))}
             </div>
          </section>
       </div>
    </div>
  );
};

export default PartnersCareers;
