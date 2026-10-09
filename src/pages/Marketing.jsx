import React from 'react';
import SafeIcon from '../common/SafeIcon';

export default function Marketing() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">AI Marketing Studio</h1>
        <p className="text-gray-400">Generate multi-channel campaigns, ad copy, and social media assets instantly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <div className="glass-panel p-6">
            <h3 className="font-semibold text-white mb-4">Select Target Release</h3>
            <select className="w-full bg-gray-800 border border-gray-700 text-sm rounded-lg px-3 py-2.5 outline-none text-white mb-4">
              <option>Midnight Echo (Single)</option>
              <option>Neon Nights (EP)</option>
            </select>
            
            <h3 className="font-semibold text-white mb-4 mt-6">Campaign Goals</h3>
            <div className="space-y-2">
              {['Increase Spotify Streams', 'Grow TikTok Followers', 'Sell Merchandise', 'Boost YouTube Views'].map(goal => (
                <label key={goal} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-800 transition">
                  <input type="checkbox" className="accent-indigo-500 w-4 h-4" />
                  <span className="text-sm text-gray-300">{goal}</span>
                </label>
              ))}
            </div>
            
            <button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition shadow-lg shadow-indigo-500/25">
              Generate Campaign
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 glass-panel p-6 flex flex-col items-center justify-center text-center min-h-[400px]">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
            <SafeIcon icon={null} name="Wand" className="text-3xl text-purple-400" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">Ready to generate magic</h3>
          <p className="text-gray-500 text-sm max-w-md mb-6">
            Select your release and goals on the left. The AI will instantly generate Instagram Reels scripts, TikTok captions, Facebook ad copy, and a complete content calendar.
          </p>
        </div>
      </div>
    </div>
  );
}