import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Releases from './pages/Releases';
import Marketing from './pages/Marketing';
import Royalties from './pages/Royalties';
import MetadataOptimization from './pages/MetadataOptimization';
import '@questlabs/react-sdk/dist/style.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="releases" element={<Releases />} />
          <Route path="metadata" element={<MetadataOptimization />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="royalties" element={<Royalties />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;