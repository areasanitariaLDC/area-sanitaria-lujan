"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  const navLinks = [
    { href: "/#mapa", label: "Mapa" },
    { href: "/#centros", label: "Centros de Salud" },
    { href: "/comunidad", label: "Comunidad" },
    { href: "/#equipos", label: "Equipos de Salud" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 py-3 min-h-[5rem] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 xl:gap-5">
            <img src="/logo-mendoza-asldc.png" alt="Logo Gobierno de Mendoza" className="h-20 xl:h-28 w-auto object-contain drop-shadow-sm" />
            <span className="font-bold text-lg xl:text-2xl tracking-tight text-mendoza-blue-dark hidden sm:block">
              Área Sanitaria Luján de Cuyo
            </span>
            <img src="/mapa-lujan.png" alt="Mapa Luján de Cuyo" className="h-12 xl:h-16 w-auto object-contain drop-shadow-md hidden md:block ml-2" />
          </Link>
        </div>
        
        <div className="flex items-center gap-4 xl:gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 mr-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-700 hover:text-mendoza-blue-light transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mendoza-gold transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <img src="/logo-mendoza-horizontal.png" alt="Mendoza Gobierno" className="h-16 xl:h-24 w-auto object-contain hidden lg:block drop-shadow-sm" />
          
          {/* Home button (only visible on non-root pages) */}
          {pathname !== '/' && (
            <Link 
              href="/" 
              className="text-mendoza-blue-dark p-2 hover:bg-slate-100 rounded-md transition-colors focus:outline-none flex items-center justify-center"
              title="Volver a Inicio"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
          )}

          {/* Dropdown Menu Container (Mobile/Tablet only) */}
          <div className="relative xl:hidden" ref={menuRef}>
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-mendoza-blue-dark p-2 hover:bg-slate-100 rounded-md transition-colors focus:outline-none"
              aria-label="Menú"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Dropdown Content */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-lg py-2 flex flex-col z-50 animate-in fade-in slide-in-from-top-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-mendoza-blue-light transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
