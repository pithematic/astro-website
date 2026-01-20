import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">About AstraNet</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto text-center mb-16">
          Founded in 2021, we are on a mission to democratize space access through autonomous artificial intelligence.
        </p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed">
                    To build a self-organizing orbital infrastructure that maximizes the utility of space resources, ensuring sustainable and efficient connectivity for every corner of the planet.
                </p>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed">
                    A future where orbital congestion is managed by intelligent agents, eliminating collisions and spectrum interference, making space safe and accessible for generations.
                </p>
            </div>
        </div>

        {/* Team */}
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
             {[
                 { name: "Dr. Elena Vos", role: "CEO & Founder", bio: "Former NASA JPL Engineer, AI Specialist." },
                 { name: "Marcus Thorne", role: "CTO", bio: "20 years in Satellite RF Engineering." },
                 { name: "Sarah Jenkins", role: "COO", bio: "Ex-SpaceX Operations Lead." }
             ].map((member, i) => (
                 <div key={i} className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center hover:-translate-y-2 transition-transform">
                     <div className="w-24 h-24 bg-slate-700 rounded-full mx-auto mb-4 overflow-hidden">
                         <img src={`https://picsum.photos/200?random=${i+10}`} alt={member.name} className="w-full h-full object-cover opacity-80" />
                     </div>
                     <h3 className="text-xl font-bold text-white">{member.name}</h3>
                     <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                     <p className="text-slate-400 text-sm">{member.bio}</p>
                 </div>
             ))}
        </div>
      </div>
    </div>
  );
};

export default About;
