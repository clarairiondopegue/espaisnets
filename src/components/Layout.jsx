import React, { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { Search, Menu, X, Trash2, ArrowUpRight } from 'lucide-react';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { 
      path: '/', 
      label: 'Inici', 
      rotation: '-rotate-[12deg]', 
      activeRotation: '-rotate-[6deg]', 
      hoverRotation: 'hover:-rotate-[6deg]' 
    },
    { 
      path: '/assistant', 
      label: 'Assistent', 
      rotation: '-rotate-[8deg]', 
      activeRotation: '-rotate-[2deg]', 
      hoverRotation: 'hover:-rotate-[2deg]' 
    },
    { 
      path: '/network', 
      label: 'Comunitat', 
      rotation: '-rotate-[10deg]', 
      activeRotation: '-rotate-[4deg]', 
      hoverRotation: 'hover:-rotate-[4deg]' 
    },
    { 
      path: '/knowledge', 
      label: 'Aprofundeix', 
      rotation: '-rotate-[7deg]', 
      activeRotation: '-rotate-[1deg]', 
      hoverRotation: 'hover:-rotate-[1deg]' 
    }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Cercant: "${searchQuery}" (Funció de cerca en desenvolupament)`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fffcf6] text-black selection:bg-black selection:text-[#fffcf6]">
      
      {/* Permanent Minimalist Top Navbar (Visible on all pages including Home Page) */}
      <div className="hidden lg:flex fixed top-0 left-0 right-0 z-50 h-[64px] bg-[#fffcf6] border-b-2 border-black items-center justify-center shadow-[0px_4px_10px_rgba(0,0,0,0.03)]">
        <div className="flex flex-row items-center justify-evenly font-normal text-sm text-black tracking-wide w-full max-w-none px-12" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-neutral-500 hover:text-black transition-colors duration-200 cursor-pointer select-none ${isActive ? 'text-black underline underline-offset-4 decoration-2 font-medium' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          
          {/* Minimalist Search aligned with exact same spacing */}
          <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b border-black pb-0.5 w-[140px]">
            <input
              type="text"
              placeholder="Buscar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none p-0 pr-6 text-black placeholder-neutral-500 font-normal text-xs focus:outline-none"
              style={{ boxShadow: 'none', fontFamily: "'Montserrat', sans-serif" }}
            />
            <button type="submit" aria-label="Search" className="absolute right-0 p-0.5">
              <Search className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Top Header (Mobile - Header and Mobile Hamburger) */}
      <header className="lg:hidden w-full border-b-2 border-black bg-[#fffcf6] sticky top-0 z-50 px-4 py-3 flex justify-between items-center gap-4">
        <Link 
          to="/" 
          className="flex items-center gap-1.5 font-bold tracking-tight uppercase border-2 border-black px-2.5 py-0.5 bg-[#fffcf6]"
        >
          <Trash2 className="w-4 h-4 text-black" />
          <span className="text-[13px]">ESPAISNETS</span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Mobile Search Icon/Input */}
          <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b border-black py-0.5 max-w-[120px] xs:max-w-[160px]">
            <input
              type="text"
              placeholder="Buscar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none p-0 pr-5 text-black placeholder-neutral-500 font-semibold text-[11px] focus:bg-transparent focus:text-black focus:outline-none"
              style={{ boxShadow: 'none' }}
            />
            <button type="submit" aria-label="Search" className="absolute right-0 p-0.5">
              <Search className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            </button>
          </form>

          {/* Toggle Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="border-2 border-black bg-[#fffcf6] p-1 text-black hover:bg-black hover:text-[#fffcf6] transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[51px] bg-[#fffcf6] z-40 flex flex-col items-center justify-center p-8 animate-fade-in">
          <div className="flex flex-col gap-6 w-full max-w-xs items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => {
                  const baseStyles = "block w-full border-[1.5px] border-black py-2 px-6 text-center font-medium text-sm transition-all duration-300";
                  const stateStyles = isActive 
                    ? `bg-black text-[#fffcf6] ${link.activeRotation}` 
                    : `bg-[#fffcf6] text-black hover:bg-black hover:text-[#fffcf6] ${link.rotation} ${link.hoverRotation}`;
                  return `${baseStyles} ${stateStyles}`;
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area - Shifted down by 64px permanently to avoid top header overlaps */}
      <main className="flex-grow flex flex-col w-full relative pt-[64px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-black py-8 bg-[#fffcf6] font-bold text-xs uppercase tracking-wider text-center mt-auto z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 border-2 border-black bg-[#fffcf6] px-3 py-1 font-extrabold">
            ESPAISNETS © {new Date().getFullYear()}
          </div>
          <div className="flex flex-wrap justify-center gap-6 font-bold">
            <a href="#about" className="hover:underline flex items-center gap-0.5 text-black">
              Sobre nosaltres <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
            <a href="#terms" className="hover:underline flex items-center gap-0.5 text-black">
              Termes <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
            <a href="#github" className="hover:underline flex items-center gap-0.5 text-black">
              Open Source <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
          <div className="text-neutral-500 tracking-normal uppercase text-[10px] font-semibold">
            Digital Fabrication Circular Economy for FabLabs
          </div>
        </div>
      </footer>
    </div>
  );
}
