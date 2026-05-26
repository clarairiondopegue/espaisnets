import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Assistant from './pages/Assistant';
import Comunitat from './pages/Comunitat';
import Knowledge from './pages/Knowledge';
import { ShieldAlert } from 'lucide-react';

// Scroll to top helper component on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Simple wireframe 404 fallback page
function NotFound() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center gap-6 py-16">
      <div className="border-4 border-black p-4 bg-neutral-50">
        <ShieldAlert className="w-12 h-12 text-black" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-sans text-3xl font-black uppercase">ERROR 404</h2>
        <p className="font-mono text-xs text-neutral-600">Aquesta pàgina no existeix o ha estat traslladada.</p>
      </div>
      <Link 
        to="/" 
        className="border-2 border-black bg-black text-white hover:bg-[#fffcf6] hover:text-black font-mono text-xs font-bold uppercase py-2 px-6 transition-all duration-200"
      >
        Tornar a l'Inici
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* All routes are children of the main Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="assistant" element={<Assistant />} />
          <Route path="network" element={<Comunitat />} />
          <Route path="knowledge" element={<Knowledge />} />
          
          {/* 404 Wildcard Page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
