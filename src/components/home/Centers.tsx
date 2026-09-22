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
            Buscá por nombre o localidad. Después abrí el centro para consultar su agenda semanal completa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Placeholder for Centers */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-slate-200 rounded-2xl p-6 hover:border-blue-300 transition-colors bg-slate-50/50">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg text-slate-900">
                  Centro de Salud N.° {30 + i}
                </h3>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                  Urbano
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Calle Ejemplo 123, Distrito, Luján de Cuyo
              </p>
              <button className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-700">
                Ver agenda
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
