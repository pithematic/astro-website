import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2023', revenue: 0, deployment: 5 },
  { year: '2024', revenue: 15, deployment: 25 },
  { year: '2025', revenue: 45, deployment: 80 },
  { year: '2026', revenue: 120, deployment: 200 },
  { year: '2027', revenue: 350, deployment: 450 },
  { year: '2028', revenue: 800, deployment: 1200 },
];

const RevenueChart: React.FC = () => {
  return (
    <div className="h-[400px] w-full bg-slate-800/50 p-6 rounded-xl border border-slate-700">
      <h3 className="text-xl font-bold text-white mb-4">Projected Growth & Scale</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorDep" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="year" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
            itemStyle={{ color: '#f8fafc' }}
          />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#06b6d4" fill="url(#colorRev)" name="Revenue ($M)" />
          <Area type="monotone" dataKey="deployment" stackId="1" stroke="#8b5cf6" fill="url(#colorDep)" name="Satellites" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
