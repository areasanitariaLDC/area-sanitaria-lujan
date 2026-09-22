"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const backgrounds = [
  "/backgrounds/bg1.jpg",
  "/backgrounds/bg2.webp",
  "/backgrounds/bg3.jpg",
  "/backgrounds/bg4.webp"
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Background Images Slider */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentBg ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <img
            src={bg}
            alt="Fondo Luján de Cuyo"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />
      
      <div className="container relative z-20 mx-auto px-4 flex flex-col items-center text-center">
        <p className="text-sm md:text-base font-semibold text-white/90 uppercase tracking-wider mb-4 drop-shadow-md">
          Área Sanitaria Luján de Cuyo
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl drop-shadow-lg">
          Salud cerca, <br className="hidden md:block" />
          estés donde estés.
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 drop-shadow-md">
          Encontrá centros de salud, especialidades y horarios de atención en todo el departamento de Luján de Cuyo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#centros" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-900 bg-white hover:bg-slate-100 rounded-full transition-colors shadow-lg"
          >
            Encontrar un centro
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link 
            href="#mapa" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border-2 border-white/80 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors shadow-lg"
          >
            Ver mapa
          </Link>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-4 text-sm text-white/80 font-medium drop-shadow-md">
          <span>Centros de Salud y Postas</span>
          <span aria-hidden="true">&bull;</span>
          <span>Luján de Cuyo, Mendoza</span>
        </div>
      </div>
    </section>
  );
}
