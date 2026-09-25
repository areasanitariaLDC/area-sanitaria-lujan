"use client";

import { useState } from "react";
import centros from '@/data/centros.json';

interface CentersProps {
  selectedCenterIndex: number | null;
  setSelectedCenterIndex: (idx: number | null) => void;
}

export default function Centers({ selectedCenterIndex, setSelectedCenterIndex }: CentersProps) {
  const [expandedCenterIndex, setExpandedCenterIndex] = useState<number | null>(null);
  const [activeDay, setActiveDay] = useState<number>(0); 
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const hospitales = centros.map((c, i) => ({ ...c, originalIndex: i })).filter(c => c.type === 'Hospital');
  const centrosSalud = centros.map((c, i) => ({ ...c, originalIndex: i })).filter(c => c.type === 'Centro de Salud');
  const postas = centros.map((c, i) => ({ ...c, originalIndex: i })).filter(c => c.type === 'Posta Sanitaria');

  const toggleExpand = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setExpandedCenterIndex(prev => prev === index ? null : index);
  };

  const renderCenterCard = (i: number, centro: any) => {
    const isSelected = selectedCenterIndex === i;
    const isExpanded = expandedCenterIndex === i;
    
    return (
      <div 
        key={i} 
        onClick={() => {
          setSelectedCenterIndex(i);
          const mapaEl = document.getElementById("mapa");
          if (mapaEl && window.innerWidth < 768) {
            mapaEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className={`border rounded-2xl p-5 cursor-pointer hover:shadow-md transition-all flex flex-col h-full bg-white ${
          isSelected 
            ? 'border-red-400 ring-2 ring-red-100 shadow-sm' 
            : 'border-slate-200 hover:border-mendoza-blue-light'
        }`}
      >
        <div className="flex justify-between items-start mb-2 gap-2">
          <div>
            <h3 className="font-bold text-lg text-mendoza-blue-dark leading-tight mb-2">
              {centro.name}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {centro.description && (
                <span className="text-slate-600 text-sm">
                  {centro.description}
                </span>
              )}
              <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-bold shrink-0 uppercase tracking-wide ${
                centro.type === 'Hospital' 
                  ? 'bg-purple-100 text-purple-800' 
                  : centro.type === 'Posta Sanitaria' 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : 'bg-mendoza-blue-light/20 text-mendoza-blue-dark'
              }`}>
                {centro.type}
              </span>
            </div>
          </div>
          
          {centro.type !== 'Hospital' && (
            <button 
              onClick={(e) => toggleExpand(e, i)}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-mendoza-blue-dark hover:bg-slate-200 transition-colors"
              title={isExpanded ? "Contraer información" : "Expandir información y agenda"}
            >
              {isExpanded ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          )}
        </div>

        {!isExpanded && (
          <div className="flex items-start gap-2 text-sm text-slate-500 mt-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="line-clamp-1">{centro.address || "Dirección no disponible"}</span>
          </div>
        )}

        <div className="mt-auto pt-4 flex gap-3 border-t border-slate-100 justify-between items-center">
          <span 
            className={`font-bold text-sm flex items-center transition-colors ${
              isSelected ? 'text-red-600' : 'text-slate-500 group-hover:text-mendoza-blue-dark'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {isSelected ? 'Mostrando en mapa' : 'Ubicar en mapa'}
          </span>
          
          {centro.type === 'Hospital' && (
            <a 
              href="#" 
              onClick={e => e.stopPropagation()}
              className="text-sm font-bold text-mendoza-blue-light hover:text-mendoza-blue-dark transition-colors flex items-center gap-1"
            >
              Sitio web oficial
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        {/* Expanded View */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-slate-200 animate-in fade-in duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Dirección</h4>
              <p className="text-slate-800 text-sm">{centro.address}, Luján de Cuyo, Mendoza</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <div className="text-xs font-bold text-mendoza-blue-light uppercase tracking-wider">Atención por especialidad</div>
                <span className="text-[10px] font-bold bg-mendoza-gold/20 text-mendoza-gold px-2 py-1 rounded-full uppercase w-fit">
                  Información relevada
                </span>
              </div>
              
              <h5 className="text-xl font-bold text-mendoza-blue-dark mb-2">Agenda semanal</h5>
              <p className="text-xs text-slate-500 mb-6">
                Información declarada por el centro de salud en el relevamiento de profesionales, especialidades y horarios.
              </p>

              {/* Day Picker Placeholder */}
              <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
                {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, idx) => (
                  <button 
                    key={day}
                    onClick={() => setActiveDay(idx)}
                    className={`flex flex-col items-center justify-center rounded-lg py-2 min-w-[3.5rem] transition-colors ${
                      activeDay === idx 
                        ? 'bg-mendoza-blue-dark text-white shadow-md' 
                        : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span className="text-xs font-bold">{day}</span>
                    <span className="text-sm mt-1">{19 + idx}</span>
                  </button>
                ))}
              </div>

              {/* Schedule Placeholder */}
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm">
                  <div>
                    <div className="font-bold text-sm text-slate-800">Enfermería de guardia</div>
                  </div>
                  <div className="text-mendoza-blue-dark font-bold text-sm bg-mendoza-blue-light/10 px-3 py-1 rounded-full w-fit">
                    24 horas
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm">
                  <div>
                    <div className="font-bold text-sm text-slate-800">Medicina general</div>
                    <div className="text-xs text-slate-500 mt-0.5">Dra. Mariana Apuggliese</div>
                  </div>
                  <div className="text-mendoza-blue-dark font-bold text-sm bg-mendoza-blue-light/10 px-3 py-1 rounded-full w-fit">
                    07:30 a 15:30
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-center text-slate-400 italic">
                (Las agendas reales se cargarán próximamente cuando envíes la información)
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderCategoryBlock = (title: string, category: string, items: any[]) => {
    const isActive = activeCategory === category;
    if (items.length === 0) return null;

    return (
      <div className="mb-6 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <button 
          onClick={() => setActiveCategory(isActive ? null : category)}
          className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-mendoza-blue-dark">
              {title}
            </h3>
            <span className="bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded-full text-sm">
              {items.length}
            </span>
          </div>
          <div className={`transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mendoza-blue-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        
        {isActive && (
          <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50 animate-in slide-in-from-top-2 duration-300">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start mt-6">
              {items.map((item) => renderCenterCard(item.originalIndex, item))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="centros" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center mb-16 px-4">
          <p className="text-sm font-bold text-mendoza-gold uppercase tracking-wider mb-2">
            Red territorial de atención
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-mendoza-blue-dark mb-4">
            Aquí podes encontrar los principales Hospitales de la Provincia y Buscar también Centros de Salud y Postas Sanitarias del Departamento de Luján de Cuyo
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Buscá por nombre o localidad. Contamos con {centrosSalud.length + postas.length} establecimientos en el departamento.
          </p>
          
          <div className="max-w-4xl mx-auto text-left">
            {renderCategoryBlock("Hospitales Provinciales", "Hospital", hospitales)}
            {renderCategoryBlock("Centros de Salud (CAPS)", "Centro de Salud", centrosSalud)}
            {renderCategoryBlock("Postas Sanitarias", "Posta Sanitaria", postas)}
          </div>
        </div>
      </div>
    </section>
  );
}
