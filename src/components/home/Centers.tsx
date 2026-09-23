"use client";

import centros from '@/data/centros.json';

interface CentersProps {
  selectedCenterIndex: number | null;
  setSelectedCenterIndex: (idx: number | null) => void;
}

export default function Centers({ selectedCenterIndex, setSelectedCenterIndex }: CentersProps) {
  return (
    <section id="centros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-bold text-mendoza-gold uppercase tracking-wider mb-2">
            Red territorial de atención
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-mendoza-blue-dark mb-4">
            Encontrá tu centro de salud
          </h2>
          <p className="text-lg text-slate-600">
            Buscá por nombre o localidad. Contamos con {centros.length} establecimientos en el departamento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {centros.map((centro, i) => {
            const isSelected = selectedCenterIndex === i;
            return (
              <div 
                key={i} 
                onClick={() => {
                  setSelectedCenterIndex(i);
                  // Scroll slightly to map after selection if on mobile
                  const mapaEl = document.getElementById("mapa");
                  if (mapaEl) {
                    mapaEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`border rounded-2xl p-6 cursor-pointer hover:shadow-md transition-all flex flex-col h-full ${
                  isSelected 
                    ? 'border-red-400 bg-red-50/30 ring-2 ring-red-100 shadow-sm' 
                    : 'border-slate-200 hover:border-blue-300 bg-slate-50/50'
                }`}
              >
                <div className="flex justify-between items-start mb-4 gap-2">
                  <h3 className="font-bold text-lg text-slate-900 leading-tight">
                    {centro.name}
                  </h3>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold shrink-0 ${
                    centro.type === 'Hospital' 
                      ? 'bg-purple-100 text-purple-800' 
                      : centro.type === 'Posta Sanitaria' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-mendoza-blue-light/10 text-mendoza-blue-dark'
                  }`}>
                    {centro.type}
                  </span>
                </div>
                
                {centro.description && (
                  <p className="text-slate-600 text-sm mb-2 line-clamp-2">
                    {centro.description}
                  </p>
                )}

                <div className="flex items-start gap-2 mb-4 text-sm text-slate-600 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{centro.address || "Dirección no disponible"}</span>
                </div>
                
                <div className="mt-auto pt-4 flex gap-3 border-t border-slate-200">
                  <span 
                    className={`font-medium text-sm flex items-center transition-colors ${
                      isSelected ? 'text-red-600' : 'text-slate-600 group-hover:text-blue-600'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {isSelected ? 'Mostrando en mapa' : 'Ubicar en mapa'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
