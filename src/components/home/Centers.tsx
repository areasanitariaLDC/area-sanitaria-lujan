import centros from '@/data/centros.json';

export default function Centers() {
  return (
    <section id="centros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
            Red territorial de atención
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Encontrá tu centro de salud
          </h2>
          <p className="text-lg text-slate-600">
            Buscá por nombre o localidad. Contamos con {centros.length} establecimientos en el departamento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {centros.map((centro, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all bg-slate-50/50 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4 gap-2">
                <h3 className="font-bold text-lg text-slate-900 leading-tight">
                  {centro.name}
                </h3>
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold shrink-0 ${
                  centro.type === 'Hospital' 
                    ? 'bg-purple-100 text-purple-800' 
                    : centro.type === 'Posta Sanitaria' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {centro.type}
                </span>
              </div>
              
              {centro.description && (
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {centro.description}
                </p>
              )}
              
              <div className="mt-auto pt-4 flex gap-3 border-t border-slate-200">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${centro.lat},${centro.lng}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 font-medium text-sm flex items-center transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver en mapa
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
