"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const videos = [
  "/Video1.mp4",
  "/Video3.mp4"
];

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay the first video when component mounts
    if (videoRef1.current) {
      videoRef1.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  const handleVideoEnded = (currentIndex: number) => {
    const nextVideo = (currentIndex + 1) % videos.length;
    setCurrentVideo(nextVideo);
    
    if (nextVideo === 0 && videoRef1.current) {
      videoRef1.current.currentTime = 0;
      videoRef1.current.play().catch(e => console.log(e));
    } else if (nextVideo === 1 && videoRef2.current) {
      videoRef2.current.currentTime = 0;
      videoRef2.current.play().catch(e => console.log(e));
    }
  };

  const handleTimeUpdate1 = () => {
    if (videoRef1.current && videoRef1.current.currentTime >= 14) {
      videoRef1.current.pause();
      handleVideoEnded(0);
    }
  };

  const handleTimeUpdate2 = () => {
    if (videoRef2.current && videoRef2.current.currentTime >= 25) {
      videoRef2.current.pause();
      handleVideoEnded(1);
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Background Videos Slider */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 -z-20"></div>
      
      <video
        ref={videoRef1}
        src={videos[0]}
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate1}
        onEnded={() => handleVideoEnded(0)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          currentVideo === 0 ? "opacity-100 z-0" : "opacity-0 -z-10"
        }`}
      />
      <video
        ref={videoRef2}
        src={videos[1]}
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate2}
        onEnded={() => handleVideoEnded(1)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          currentVideo === 1 ? "opacity-100 z-0" : "opacity-0 -z-10"
        }`}
      />

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />
      
      <div className="container relative z-20 mx-auto px-4 flex flex-col items-center text-center">
        <p className="text-sm md:text-base font-bold text-mendoza-gold uppercase tracking-wider mb-2 drop-shadow-md">
          Gobierno de Mendoza
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2 max-w-4xl drop-shadow-lg">
          Área Sanitaria Luján de Cuyo
        </h1>
        <p className="text-sm md:text-base font-bold text-mendoza-gold uppercase tracking-wider mb-8 drop-shadow-md">
          Ministerio de Salud y Deportes
        </p>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 drop-shadow-md">
          Encontrá centros de salud, especialidades y horarios de atención en todo el departamento. Salud cerca, estés donde estés.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#centros" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-mendoza-blue-dark hover:bg-mendoza-blue-light rounded-full transition-colors shadow-lg"
          >
            Encontrar un centro
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a 
            href="#mapa" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border-2 border-white/80 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors shadow-lg"
          >
            Ver mapa
          </a>
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
