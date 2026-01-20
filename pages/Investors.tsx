import React from 'react';
import RevenueChart from '../components/RevenueChart';
import { Download, TrendingUp, PieChart, Users } from 'lucide-react';

const Investors: React.FC = () => {
  return (
    <div className="w-full pt-20">
       <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Investor Relations</h1>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <p className="text-slate-400 text-sm mb-1">Stock Price (ASTN)</p>
                <p className="text-3xl font-bold text-white">$42.85</p>
                <p className="text-green-400 text-xs mt-2 flex items-center"><TrendingUp className="w-3 h-3 mr-1"/> +2.4% Today</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <p className="text-slate-400 text-sm mb-1">Satellites Active</p>
                <p className="text-3xl font-bold text-white">1,240</p>
                <p className="text-cyan-400 text-xs mt-2">Target: 4,000 by 2026</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <p className="text-slate-400 text-sm mb-1">Market Cap</p>
                <p className="text-3xl font-bold text-white">$4.2B</p>
                <p className="text-slate-500 text-xs mt-2">FY Q3 2024</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <p className="text-slate-400 text-sm mb-1">Enterprise Clients</p>
                <p className="text-3xl font-bold text-white">85+</p>
                <p className="text-green-400 text-xs mt-2"><TrendingUp className="w-3 h-3 mr-1"/> +15% QoQ</p>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
                <RevenueChart />
            </div>
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
                <h3 className="text-xl font-bold text-white mb-6">Financial Documents</h3>
                <ul className="space-y-4">
                    {[
                        "Q3 2024 Earnings Report",
                        "Investor Presentation Nov 2024",
                        "2023 Annual Report",
                        "Prospectus",
                        "ESG Impact Report"
                    ].map((doc, i) => (
                        <li key={i} className="flex items-center justify-between p-3 bg-slate-800 rounded hover:bg-slate-700 transition-colors cursor-pointer group">
                            <span className="text-slate-300 text-sm">{doc}</span>
                            <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                        </li>
                    ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-700">
                    <h4 className="text-white font-semibold mb-2">Investor Contact</h4>
                    <p className="text-slate-400 text-sm">ir@astranet.ai</p>
                    <p className="text-slate-400 text-sm">+1 (555) 012-3456</p>
                </div>
            </div>
        </div>

        {/* Governance */}
        <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-6">Corporate Governance</h2>
          <div className="grid md:grid-cols-3 gap-6 text-slate-300 text-sm">
             <div className="flex items-start gap-3">
                 <Users className="w-6 h-6 text-cyan-500 shrink-0" />
                 <div>
                    <h4 className="font-bold text-white mb-1">Board of Directors</h4>
                    <p>Led by industry veterans from aerospace and deep tech.</p>
                 </div>
             </div>
             <div className="flex items-start gap-3">
                 <PieChart className="w-6 h-6 text-purple-500 shrink-0" />
                 <div>
                    <h4 className="font-bold text-white mb-1">Share Structure</h4>
                    <p>Dual-class share structure ensuring long-term mission alignment.</p>
                 </div>
             </div>
             <div className="flex items-start gap-3">
                 <TrendingUp className="w-6 h-6 text-green-500 shrink-0" />
                 <div>
                    <h4 className="font-bold text-white mb-1">Sustainable Growth</h4>
                    <p>Commitment to debris mitigation and dark sky compliance.</p>
                 </div>
             </div>
          </div>
        </div>
       </div>
    </div>
  );
};

export default Investors;
