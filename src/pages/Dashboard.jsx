import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SafeIcon from '../common/SafeIcon';

const data = [
  { name: 'Jan', streams: 4000, revenue: 2400 },
  { name: 'Feb', streams: 3000, revenue: 1398 },
  { name: 'Mar', streams: 9800, revenue: 3800 },
  { name: 'Apr', streams: 8908, revenue: 4800 },
  { name: 'May', streams: 12800, revenue: 6800 },
  { name: 'Jun', streams: 18900, revenue: 8900 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Sarah</h1>
          <p className="text-gray-400">Here's what the AI has analyzed for your catalog today.</p>
        </div>
        <button className="bg-white text-gray-950 px-5 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition flex items-center gap-2">
          <SafeIcon icon={null} name="Plus" />
          New Release
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Streams', value: '2.4M', trend: '+14%', icon: 'Play' },
          { label: 'Forecasted Revenue', value: '$12,450', trend: '+8%', icon: 'DollarSign' },
          { label: 'Active Listeners', value: '840K', trend: '+22%', icon: 'Users' },
          { label: 'AI Health Score', value: '98/100', trend: '+2', icon: 'Activity' },
        ].map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="glass-panel p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-gray-800 rounded-lg">
                <SafeIcon icon={null} name={stat.icon} className="text-indigo-400" />
              </div>
              <span className="text-emerald-400 text-sm font-medium">{stat.trend}</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-panel p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-white">AI Revenue Forecast</h2>
            <select className="bg-gray-800 border border-gray-700 text-sm rounded-lg px-3 py-1.5 outline-none">
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" axisLine={false} tickLine={false} />
                <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} tickFormatter={(val) => `$${val}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#818cf8" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel p-6 flex flex-col">
          <h2 className="text-lg font-semibold text-white mb-4">AI Business Coach</h2>
          <div className="flex-1 space-y-4">
            <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <SafeIcon icon={null} name="TrendingUp" className="text-indigo-400" />
                <span className="font-medium text-indigo-300 text-sm">Viral Opportunity</span>
              </div>
              <p className="text-sm text-gray-300">Your track "Midnight Echo" is gaining traction on TikTok in Brazil. We recommend launching a localized ad campaign.</p>
              <button className="mt-3 text-xs bg-indigo-500 text-white px-3 py-1.5 rounded-lg w-full hover:bg-indigo-600">Generate Campaign</button>
            </div>
            <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <SafeIcon icon={null} name="Calendar" className="text-gray-400" />
                <span className="font-medium text-gray-300 text-sm">Release Strategy</span>
              </div>
              <p className="text-sm text-gray-400">Based on your audience data, Thursdays at 4PM EST is the optimal time for your next drop.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}