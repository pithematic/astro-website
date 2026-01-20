import React from 'react';

const newsData = [
  {
    id: 1,
    category: "Technology",
    date: "Oct 12, 2024",
    title: "NeuroOrbit 2.0 Released: 30% Efficiency Gain",
    excerpt: "Our latest AI model update has significantly reduced latency in inter-satellite links by optimizing pathfinding algorithms."
  },
  {
    id: 2,
    category: "Corporate",
    date: "Sep 28, 2024",
    title: "AstraNet Secures Series B Funding",
    excerpt: "Leading venture firms double down on our vision for autonomous orbital management, raising $120M."
  },
  {
    id: 3,
    category: "Industry",
    date: "Sep 15, 2024",
    title: "The Future of Spectrum Sharing",
    excerpt: "Our CTO discusses how dynamic spectrum access is the only solution for the crowding LEO environment."
  }
];

const News: React.FC = () => {
  return (
    <div className="w-full pt-20">
       <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-12">News & Insights</h1>
          
          <div className="grid gap-8">
             {newsData.map(item => (
                 <article key={item.id} className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col md:flex-row gap-8">
                     <div className="md:w-1/4">
                         <span className="inline-block px-3 py-1 bg-slate-800 text-cyan-400 text-xs font-bold uppercase rounded mb-2">
                             {item.category}
                         </span>
                         <p className="text-slate-500 text-sm">{item.date}</p>
                     </div>
                     <div className="md:w-3/4">
                         <h2 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 cursor-pointer">{item.title}</h2>
                         <p className="text-slate-400 mb-4">{item.excerpt}</p>
                         <button className="text-cyan-500 font-semibold hover:text-cyan-400 flex items-center gap-1 text-sm">
                             Read Full Story &rarr;
                         </button>
                     </div>
                 </article>
             ))}
          </div>
       </div>
    </div>
  );
};

export default News;
