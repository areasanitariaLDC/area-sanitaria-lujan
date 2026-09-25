export default function ComunidadPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-mendoza-blue-dark overflow-hidden">
        {/* Subtle circle patterns for background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full border border-white/30 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border border-white/30 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border border-white/30 -translate-y-1/2 translate-x-1/3"></div>
          {/* Small dots */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-mendoza-gold rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-mendoza-blue-light rounded-full"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 flex flex-col items-start justify-center text-left max-w-6xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-mendoza-gold"></div>
            <p className="text-sm md:text-base font-bold text-white uppercase tracking-widest">
              Para Vecinos y Vecinas
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-2xl leading-tight">
            Información clara para cuidar tu salud
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 font-light">
            Encontrá centros de salud, ubicaciones y contenidos sanitarios útiles para vos y tu familia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#accesos" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-mendoza-blue-dark bg-mendoza-gold hover:bg-mendoza-gold/90 rounded-lg transition-colors shadow-lg"
            >
              Ver accesos rápidos
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="#informacion" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border-2 border-white hover:bg-white/10 rounded-lg transition-colors shadow-lg"
            >
              Información sanitaria
            </a>
          </div>
        </div>
      </section>

      {/* Accesos Rápidos Section */}
      <section id="accesos" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-bold text-mendoza-gold uppercase tracking-widest mb-2">
              Resolvé tu consulta
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-mendoza-blue-dark mb-4">
              Todo lo esencial, a mano
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Accesos directos para ubicar un centro, consultar el mapa sanitario o gestionar tu atención.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <a href="/#centros" className="group block bg-white border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-mendoza-blue-dark hover:border-t-mendoza-gold relative overflow-hidden">
              <h3 className="text-2xl font-bold text-mendoza-blue-dark mb-2 group-hover:text-mendoza-blue-light transition-colors">Centros de salud y postas</h3>
              <p className="text-slate-600">Dirección, horarios de atención y profesionales de cada centro de salud del departamento.</p>
            </a>
            
            <a href="/#mapa" className="group block bg-white border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-mendoza-blue-dark hover:border-t-mendoza-gold relative overflow-hidden">
              <h3 className="text-2xl font-bold text-mendoza-blue-dark mb-2 group-hover:text-mendoza-blue-light transition-colors">Mapa del área sanitaria</h3>
              <p className="text-slate-600">Ubicación de los centros de salud y postas sanitarias sobre el mapa de Luján de Cuyo.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Información Sanitaria Section */}
      <section id="informacion" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-bold text-mendoza-gold uppercase tracking-widest mb-2">
              Guía para la comunidad
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-mendoza-blue-dark mb-4">
              Información sanitaria
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Recomendaciones y orientaciones para acceder a una atención segura y oportuna.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Accordion Item 1 */}
            <details className="group bg-mendoza-blue-dark rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-white font-bold text-xl">
                Vacunación
                <span className="flex-shrink-0 ml-4 bg-white text-mendoza-blue-dark rounded-full w-8 h-8 flex items-center justify-center group-open:-rotate-45 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-white/90 bg-mendoza-blue-dark border-t border-white/10 mt-2 pt-4">
                <p>
                  Información sobre el calendario nacional de vacunación, campañas vigentes y centros vacunatorios en Luján de Cuyo. (Contenido a desarrollar)
                </p>
              </div>
            </details>

            {/* Accordion Item 2 */}
            <details className="group bg-mendoza-blue-dark rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-white font-bold text-xl">
                Campañas de prevención
                <span className="flex-shrink-0 ml-4 bg-white text-mendoza-blue-dark rounded-full w-8 h-8 flex items-center justify-center group-open:-rotate-45 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-white/90 bg-mendoza-blue-dark border-t border-white/10 mt-2 pt-4">
                <p>
                  Recomendaciones para la prevención de enfermedades estacionales, dengue, cuidado cardiovascular y más. (Contenido a desarrollar)
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
