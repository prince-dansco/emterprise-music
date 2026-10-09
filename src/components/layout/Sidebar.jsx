import React from 'react';
import { NavLink } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';

const navItems = [
  { name: 'Dashboard', icon: 'FiHome', path: '/' },
  { name: 'AI Release Manager', icon: 'FiUploadCloud', path: '/releases' },
  { name: 'Marketing Studio', icon: 'FiTrendingUp', path: '/marketing' },
  { name: 'Audience Intel', icon: 'FiPieChart', path: '/analytics' },
  { name: 'Royalties & Splits', icon: 'FiDollarSign', path: '/royalties' },
  { name: 'Copyright Guard', icon: 'FiShield', path: '/copyright' },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 border-r border-gray-800 flex flex-col fixed left-0 top-0">
      <div className="h-16 flex items-center px-6 border-b border-gray-800">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <SafeIcon icon={null} name="Music" className="text-indigo-500" />
          <span className="text-gradient">AuraStream</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">
          Core Features
        </div>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-indigo-500/10 text-indigo-400 font-medium' 
                  : 'text-gray-400 hover:text-gray-100 hover:bg-gray-800'
              }`
            }
          >
            <SafeIcon icon={null} name={item.icon.replace('Fi', '')} className="text-lg" />
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="glass-panel p-4 rounded-xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/20">
          <div className="flex items-center gap-2 mb-2">
            <SafeIcon icon={null} name="Cpu" className="text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-300">AI Coach</span>
          </div>
          <p className="text-xs text-gray-400 mb-3">Your next best action is ready.</p>
          <button className="w-full py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium rounded-lg transition-colors">
            View Insights
          </button>
        </div>
      </div>
    </div>
  );
}