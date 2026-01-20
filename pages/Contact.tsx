import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', type: 'sales', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent via quantum uplink (simulated). We will contact you shortly.");
  };

  return (
    <div className="w-full pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formState.name}
                          onChange={e => setFormState({...formState, name: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          required
                           value={formState.email}
                          onChange={e => setFormState({...formState, email: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none" 
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Department</label>
                        <select 
                           value={formState.type}
                          onChange={e => setFormState({...formState, type: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none">
                            <option value="sales">Sales & Enterprise Solutions</option>
                            <option value="support">Technical Support</option>
                            <option value="media">Media & Press</option>
                            <option value="investors">Investor Relations</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-2">Message</label>
                        <textarea 
                          rows={4} 
                          required
                           value={formState.message}
                          onChange={e => setFormState({...formState, message: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-700 rounded p-3 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1">
                        Transmit Request
                    </button>
                </form>
            </div>

            {/* Info & FAQ */}
            <div className="space-y-12">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Contact Info</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-lg">
                                <MapPin className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Global HQ</h3>
                                <p className="text-slate-400">101 Orbit Way, Tech Park<br/>San Francisco, CA 94107</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-lg">
                                <Mail className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Email</h3>
                                <p className="text-slate-400">contact@astranet.ai</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-lg">
                                <Phone className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">Phone</h3>
                                <p className="text-slate-400">+1 (888) ASTRA-NET</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-white mb-6">FAQ</h2>
                    <div className="space-y-4">
                        <details className="bg-slate-900 border border-slate-800 rounded-lg p-4 cursor-pointer group">
                            <summary className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">How does the AI allocation work?</summary>
                            <p className="mt-2 text-slate-400 text-sm">NeuroOrbit™ analyzes traffic demand and orbital dynamics to dynamically assign satellite beams, ensuring maximum throughput and minimal latency.</p>
                        </details>
                        <details className="bg-slate-900 border border-slate-800 rounded-lg p-4 cursor-pointer group">
                            <summary className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">What frequency bands do you use?</summary>
                            <p className="mt-2 text-slate-400 text-sm">We utilize Ka and Ku bands for broadband, with V-band inter-satellite links. Our SpectraFlow tech manages interference.</p>
                        </details>
                         <details className="bg-slate-900 border border-slate-800 rounded-lg p-4 cursor-pointer group">
                            <summary className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">Is global coverage available now?</summary>
                            <p className="mt-2 text-slate-400 text-sm">We currently cover 60% of the globe (latitudes 30° to 60°). Full global coverage is expected by Q4 2026.</p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
