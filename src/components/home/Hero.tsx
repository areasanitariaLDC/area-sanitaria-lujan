import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-32 overflow-hidden">
      {/* Background decoration placeholder */}
      <div className="absolute inset-0 bg-blue-600/5" aria-hidden="true" />
      
      <div className="container relative mx-auto px-4 flex flex-col items-center text-center">
        <p className="text-sm md:text-base font-semibold text-blue-600 uppercase tracking-wider mb-4">
          Área Sanitaria Luján de Cuyo
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl">
          Salud cerca, <br className="hidden md:block" />
          estés donde estés.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10">
          Encontrá centros de salud, especialidades y horarios de atención en todo el departamento de Luján de Cuyo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#centros" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors shadow-sm"
          >
            Encontrar un centro
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link 
            href="#mapa" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors"
          >
            Ver mapa
          </Link>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-4 text-sm text-slate-500 font-medium">
          <span>Centros de Salud y Postas</span>
          <span aria-hidden="true">&bull;</span>
          <span>Luján de Cuyo, Mendoza</span>
        </div>
      </div>
    </section>
  );
}
