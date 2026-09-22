"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/mapa-lujan.png" alt="Mapa Luján de Cuyo" className="h-10 w-auto object-contain drop-shadow-md" />
            <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">
              Área Sanitaria <span className="text-blue-600">Luján de Cuyo</span>
            </span>
          </Link>
        </div>
        
        {/* Dropdown Menu Container */}
        <div className="relative" ref={menuRef}>
          {/* Hamburger Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-900 p-2 hover:bg-slate-100 rounded-md transition-colors focus:outline-none"
            aria-label="Menú"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Dropdown Content */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-lg py-2 flex flex-col z-50 animate-in fade-in slide-in-from-top-2">
              <a 
                href="https://www.google.com/maps/d/viewer?mid=1tFDDOe8sAZwnwMJhdnLG7XO1zH_xO_8" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                Mapa
              </a>
              <Link 
                href="#centros" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                Centros de Salud
              </Link>
              <Link 
                href="#comunidad" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                Comunidad
              </Link>
              <Link 
                href="#equipos" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                Equipos de Salud
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
