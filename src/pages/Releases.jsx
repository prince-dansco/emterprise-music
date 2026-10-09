import React from 'react';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';

export default function Releases() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">AI Release Manager</h1>
          <p className="text-gray-400">Upload your tracks and let AI optimize your metadata, pricing, and distribution strategy.</p>
        </div>
        <button 
          onClick={() => navigate('/metadata')}
          className="bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-indigo-600 transition flex items-center gap-2"
        >
          <SafeIcon icon={null} name="Cpu" />
          AI Optimizer
        </button>
      </div>

      <div className="glass-panel p-10 flex flex-col items-center justify-center border-dashed border-2 border-gray-700 hover:border-indigo-500 transition-colors cursor-pointer group">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <SafeIcon icon={null} name="UploadCloud" className="text-3xl text-indigo-400" />
        </div>
        <h3 className="text-xl font-medium text-white mb-2">Drag & drop your masters</h3>
        <p className="text-gray-500 text-sm mb-6">WAV, FLAC, or ALAC up to 24-bit/192kHz</p>
        <button className="bg-gray-800 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-gray-700 transition">
          Browse Files
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <SafeIcon icon={null} name="Cpu" className="text-indigo-400" />
            AI Metadata Analysis
          </h2>
          <div className="space-y-4">
            {[
              { title: 'Genre Detection', value: 'Synthwave / Alternative', status: 'High Confidence' },
              { title: 'Mood Analysis', value: 'Energetic, Melancholic', status: 'Ready' },
              { title: 'Suggested ISRC', value: 'US-S1Z-23-00001', status: 'Generated' }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-400">{item.title}</p>
                  <p className="text-sm font-medium text-gray-200">{item.value}</p>
                </div>
                <span className="text-xs px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded-full">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
          <button 
            onClick={() => navigate('/metadata')}
            className="w-full mt-4 text-xs text-indigo-400 font-bold py-2 border border-indigo-500/20 rounded-lg hover:bg-indigo-500/5 transition"
          >
            Review Detailed Optimization
          </button>
        </div>
        
        <div className="glass-panel p-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <SafeIcon icon={null} name="Target" className="text-pink-400" />
            Distribution Strategy
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h4 className="text-sm font-medium text-white mb-1">Optimal Release Date</h4>
              <p className="text-sm text-gray-400 mb-3">Friday, Nov 24th - Avoids major label drops in your genre.</p>
              <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300">Apply Date →</button>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h4 className="text-sm font-medium text-white mb-1">Pricing Strategy</h4>
              <p className="text-sm text-gray-400 mb-3">Front-line pricing ($1.29/track) recommended based on fan engagement.</p>
              <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300">Apply Pricing →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}