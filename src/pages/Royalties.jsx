import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import SafeIcon from '../common/SafeIcon';

const forecastData = [
  { month: 'Jul', actual: 4200, projected: 4200 },
  { month: 'Aug', actual: 4800, projected: 4800 },
  { month: 'Sep', actual: 5100, projected: 5100 },
  { month: 'Oct', actual: null, projected: 5800 },
  { month: 'Nov', actual: null, projected: 7200 },
  { month: 'Dec', actual: null, projected: 8900 },
];

const platformData = [
  { name: 'Spotify', value: 45, color: '#1DB954' },
  { name: 'Apple Music', value: 25, color: '#FA243C' },
  { name: 'YouTube', value: 20, color: '#FF0000' },
  { name: 'Amazon', value: 10, color: '#FF9900' },
];

const collaborators = [
  { name: 'Sarah Artist', role: 'Main Artist', share: '60%', amount: '$5,340' },
  { name: 'Alex Producer', role: 'Producer', share: '30%', amount: '$2,670' },
  { name: 'Mix Master', role: 'Engineer', share: '10%', amount: '$890' },
];

export default function Royalties() {
  const [activeTab, setActiveTab] = useState('forecast');

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">AI Royalty Forecasting</h1>
          <p className="text-gray-400">Predictive financial intelligence powered by streaming trends and audience growth.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded-xl hover:bg-gray-700 transition flex items-center gap-2 border border-gray-700">
            <SafeIcon icon={null} name="Download" className="text-sm" />
            Export Report
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition flex items-center gap-2 shadow-lg shadow-indigo-500/20">
            <SafeIcon icon={null} name="DollarSign" className="text-sm" />
            Request Payout
          </button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 border-l-4 border-l-emerald-500">
          <p className="text-sm text-gray-400 mb-1">Available to Withdraw</p>
          <h3 className="text-3xl font-bold text-white">$8,420.50</h3>
          <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
            <SafeIcon icon={null} name="TrendingUp" />
            Ready for payout immediately
          </p>
        </div>
        <div className="glass-panel p-6 border-l-4 border-l-indigo-500">
          <p className="text-sm text-gray-400 mb-1">Next Month Forecast</p>
          <h3 className="text-3xl font-bold text-white">$9,240.00</h3>
          <p className="text-xs text-indigo-400 mt-2 flex items-center gap-1">
            <SafeIcon icon={null} name="Cpu" />
            Based on current streaming velocity
          </p>
        </div>
        <div className="glass-panel p-6 border-l-4 border-l-purple-500">
          <p className="text-sm text-gray-400 mb-1">Estimated Annual Earnings</p>
          <h3 className="text-3xl font-bold text-white">$112,400</h3>
          <p className="text-xs text-purple-400 mt-2 flex items-center gap-1">
            <SafeIcon icon={null} name="PieChart" />
            Projected with 12% growth rate
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Forecasting Chart */}
        <div className="lg:col-span-2 glass-panel p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-semibold text-white">Earnings Projection</h2>
            <div className="flex bg-gray-800 p-1 rounded-lg">
              <button 
                onClick={() => setActiveTab('forecast')}
                className={`px-3 py-1 text-xs rounded-md transition ${activeTab === 'forecast' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
              >
                Forecast
              </button>
              <button 
                onClick={() => setActiveTab('history')}
                className={`px-3 py-1 text-xs rounded-md transition ${activeTab === 'history' ? 'bg-gray-700 text-white' : 'text-gray-400'}`}
              >
                History
              </button>
            </div>
          </div>
          
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={forecastData}>
                <defs>
                  <linearGradient id="actualGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="projectedGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                <XAxis dataKey="month" stroke="#9ca3af" axisLine={false} tickLine={false} />
                <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#6366f1" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#actualGrad)" 
                  name="Actual"
                />
                <Area 
                  type="monotone" 
                  dataKey="projected" 
                  stroke="#a855f7" 
                  strokeWidth={2} 
                  strokeDasharray="5 5"
                  fillOpacity={1} 
                  fill="url(#projectedGrad)" 
                  name="AI Projection"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Platform & Split Insights */}
        <div className="space-y-6">
          <div className="glass-panel p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Revenue Sources</h2>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {platformData.map(platform => (
                <div key={platform.name} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: platform.color }}></div>
                  <span className="text-xs text-gray-400">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-6">
            <div className="flex items-center gap-2 text-indigo-400 mb-4">
              <SafeIcon icon={null} name="Cpu" />
              <h2 className="text-sm font-semibold uppercase tracking-wider">AI Optimizer</h2>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              You could increase your monthly revenue by <span className="text-emerald-400 font-bold">18%</span>.
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-gray-800/50 rounded-xl text-xs border border-gray-700">
                <p className="text-gray-400 mb-1 italic">Recommendation:</p>
                <p className="text-gray-200">Renew your Sync License for "Neon Nights" in the APAC region.</p>
              </div>
              <button className="w-full py-2 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-lg hover:bg-indigo-500/20 transition">
                Take Action
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Collaborator Splits */}
      <div className="glass-panel overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">Automated Splits</h2>
          <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300">Manage Splits</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-800/30 text-gray-400 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Collaborator</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Split %</th>
                <th className="px-6 py-4 font-medium">Paid to Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {collaborators.map((person, i) => (
                <tr key={i} className="hover:bg-gray-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm font-medium text-gray-200">{person.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">{person.role}</td>
                  <td className="px-6 py-4 text-sm text-gray-200">{person.share}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-white">{person.amount}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] rounded-full uppercase font-bold tracking-wider">
                      Verified
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}