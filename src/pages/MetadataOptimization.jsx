import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';

const metadataChecks = [
  { id: 'title', label: 'Title Formatting', status: 'warning', message: 'Title should be in Title Case.', suggestion: 'Midnight Echo', original: 'midnight echo' },
  { id: 'genre', label: 'Genre Classification', status: 'success', message: 'AI confirmed Synthwave / 80s Pop.', confidence: 98 },
  { id: 'explicit', label: 'Explicit Content', status: 'error', message: 'Explicit lyrics detected but not flagged.', suggestion: 'Mark as Explicit' },
  { id: 'isrc', label: 'ISRC Generation', status: 'pending', message: 'Ready to generate unique code.' },
  { id: 'roles', label: 'Contributor Roles', status: 'success', message: 'All roles assigned and verified.' },
];

export default function MetadataOptimization() {
  const [processing, setProcessing] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setProcessing(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Metadata Optimizer</h1>
          <p className="text-gray-400">AI-powered validation to prevent DSP rejections and improve SEO.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-xl hover:bg-gray-700 transition border border-gray-700 text-sm">
            Reset All
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/20 text-sm font-medium">
            Approve & Sync
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Track Selection & Preview */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-panel p-6 overflow-hidden">
            <div className="relative aspect-square rounded-xl overflow-hidden mb-4 group">
              <img 
                src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=500&q=80" 
                alt="Artwork" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <SafeIcon icon={null} name="Edit" className="text-white text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">Midnight Echo</h3>
            <p className="text-gray-400 text-sm">Sarah Artist • Single</p>
          </div>

          <div className="glass-panel p-6">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">AI Audio Fingerprint</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">BPM</span>
                <span className="text-white font-mono">124</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Key</span>
                <span className="text-white font-mono">C# Minor</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Loudness</span>
                <span className="text-white font-mono">-14 LUFS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Analysis & Optimization */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-panel overflow-hidden">
            <div className="p-4 bg-gray-800/50 border-b border-gray-800 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-300">AI Validation Dashboard</span>
              {processing && (
                <div className="flex items-center gap-2 text-indigo-400 text-xs">
                  <div className="w-3 h-3 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
                  Analyzing Audio & Metadata...
                </div>
              )}
            </div>
            
            <div className="divide-y divide-gray-800">
              {metadataChecks.map((check) => (
                <motion.div 
                  key={check.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-6 transition-colors cursor-pointer ${activeItem === check.id ? 'bg-indigo-500/5' : 'hover:bg-gray-800/30'}`}
                  onClick={() => setActiveItem(activeItem === check.id ? null : check.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${
                        check.status === 'success' ? 'bg-emerald-500/10 text-emerald-400' :
                        check.status === 'warning' ? 'bg-amber-500/10 text-amber-400' :
                        check.status === 'error' ? 'bg-pink-500/10 text-pink-400' :
                        'bg-gray-700/30 text-gray-400'
                      }`}>
                        <SafeIcon icon={null} name={
                          check.status === 'success' ? 'Check' :
                          check.status === 'warning' ? 'AlertCircle' :
                          check.status === 'error' ? 'XCircle' : 'Clock'
                        } />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{check.label}</h4>
                        <p className="text-xs text-gray-500">{check.message}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {check.confidence && (
                        <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded uppercase">
                          {check.confidence}% Match
                        </span>
                      )}
                      <SafeIcon icon={null} name="ChevronDown" className={`text-gray-600 transition-transform ${activeItem === check.id ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeItem === check.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-2 gap-4">
                          {check.suggestion && (
                            <div className="col-span-2 p-3 bg-gray-900 rounded-lg border border-gray-700">
                              <p className="text-[10px] uppercase text-gray-500 font-bold mb-2">AI Recommendation</p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-200">Change to <span className="text-indigo-400 font-bold">"{check.suggestion}"</span>?</span>
                                <button className="text-xs bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 transition">
                                  Apply Fix
                                </button>
                              </div>
                            </div>
                          )}
                          <div className="p-3 bg-gray-800/30 rounded-lg">
                            <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">Standard Requirement</p>
                            <p className="text-xs text-gray-400">All titles must follow Apple Music & Spotify capitalization guidelines.</p>
                          </div>
                          <div className="p-3 bg-gray-800/30 rounded-lg">
                            <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">Impact</p>
                            <p className="text-xs text-gray-400">Correct formatting reduces rejection risk by 85%.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-500 rounded-lg">
                <SafeIcon icon={null} name="Cpu" className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Smart Tagging</h3>
                <p className="text-xs text-indigo-300">AI has generated 12 SEO-optimized tags for this track.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['80s Revival', 'Cyberpunk', 'Late Night', 'Driving', 'Melancholic', 'Synthwave', 'Analog', 'Nostalgic'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/5 hover:bg-white/20 cursor-pointer transition">
                  #{tag}
                </span>
              ))}
              <button className="text-xs text-indigo-400 font-bold px-2">+ More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}