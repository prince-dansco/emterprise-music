import React from 'react';
import SafeIcon from '../../common/SafeIcon';

export default function Header() {
  return (
    <header className="h-16 glass-panel rounded-none border-t-0 border-l-0 border-r-0 border-b-gray-800 sticky top-0 z-10 flex items-center justify-between px-8">
      <div className="flex items-center bg-gray-900 border border-gray-700 rounded-full px-4 py-1.5 w-96 focus-within:border-indigo-500 transition-colors">
        <SafeIcon icon={null} name="Search" className="text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search releases, analytics, AI prompts..." 
          className="bg-transparent border-none outline-none text-sm text-gray-200 w-full placeholder-gray-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-white transition-colors relative">
          <SafeIcon icon={null} name="Bell" className="text-xl" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 border-l border-gray-800 pl-6">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" 
            alt="Profile" 
            className="w-8 h-8 rounded-full border border-gray-700 object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-200">Sarah Artist</span>
            <span className="text-xs text-gray-500">Pro Tier</span>
          </div>
        </div>
      </div>
    </header>
  );
}