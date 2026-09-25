"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ComunidadPage() {
  const [isHpvModalOpen, setIsHpvModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex flex-col">
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewB°ox="0 0 20 20" fill="currentColor">
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewB°ox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-white/90 bg-mendoza-blue-dark border-t border-white/10 mt-2 pt-4">
                <p className="mb-4">
                  A continuación encontrarás el listado de los centros vacunatorios del departamento de Luján de Cuyo con sus respectivos días y horarios de atención:
                </p>
                <div className="overflow-x-auto bg-white rounded-xl shadow-inner border border-slate-200">
                  <table className="w-full text-left text-sm text-slate-700">
                    <thead className="bg-slate-50 text-mendoza-blue-dark font-bold uppercase text-xs border-b border-slate-200">
                      <tr>
                        <th className="px-4 py-3">Nombre Efector</th>
                        <th className="px-4 py-3">Domicilio</th>
                        <th className="px-4 py-3">Distrito</th>
                        <th className="px-4 py-3 min-w-[200px]">Días y horarios de vacunación</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 3</td>
                        <td className="px-4 py-3">B°° Supe, Ingeniero Krause y Cutral-Co Luján</td>
                        <td className="px-4 py-3">Carrodilla</td>
                        <td className="px-4 py-3">Lunes, miércoles y viernes 8 a 17.30<br/>Martes y jueves de 8 a 13.30<br/>Sábados de 8 a 11.30</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 202</td>
                        <td className="px-4 py-3">B°° Solar de Cuyo M J – C 35</td>
                        <td className="px-4 py-3">Perdriel</td>
                        <td className="px-4 py-3">Lunes a viernes de 8 a 17.30<br/>Sábados 8 a 11.30</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 217</td>
                        <td className="px-4 py-3">Manuel Antonio Sáez 8257</td>
                        <td className="px-4 py-3">Carrodilla</td>
                        <td className="px-4 py-3">Lunes a viernes, de 8 a 13.30<br/>Sábados de 8 a 11.30</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 218</td>
                        <td className="px-4 py-3">Los Alerces Terrada 8080 Luján</td>
                        <td className="px-4 py-3">Carrodilla</td>
                        <td className="px-4 py-3">Lunes a miércoles, de 8 a 13.30<br/>Jueves de 8 a 16.30<br/>Viernes de 8 a 13.30<br/>Sábados de 8 a 11.30</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 224</td>
                        <td className="px-4 py-3">B°º Costa Flores M-A C-13 Luján – Perdriel</td>
                        <td className="px-4 py-3">Pedriel</td>
                        <td className="px-4 py-3">Lunes a viernes, de 8 a 13.30<br/>Sábados de 8 a 11.30</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 31</td>
                        <td className="px-4 py-3">Federico Serpa y Republica del Libano</td>
                        <td className="px-4 py-3">Luján de cuyo</td>
                        <td className="px-4 py-3">Lunes a viernes, de 7 a 13.30</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 32</td>
                        <td className="px-4 py-3">Saenz Peña 8801</td>
                        <td className="px-4 py-3">Las Compuertas</td>
                        <td className="px-4 py-3">Lunes a viernes, de 8 a 13.30<br/>Sábados 8 a 11.30</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 33</td>
                        <td className="px-4 py-3">Calle Cobos s/n La Colonia</td>
                        <td className="px-4 py-3">Agrelo</td>
                        <td className="px-4 py-3">Lunes 8 a 12.30<br/>Martes de 8 a 17.30<br/>Miércoles a viernes, de 8 a 12.30</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 34</td>
                        <td className="px-4 py-3">Ruta 7 km 60</td>
                        <td className="px-4 py-3">Potrerillos</td>
                        <td className="px-4 py-3">Lunes a viernes, de 8 a 18<br/>Sábados 8 a 12</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 35</td>
                        <td className="px-4 py-3">San Martin 8995</td>
                        <td className="px-4 py-3">Agrelo</td>
                        <td className="px-4 py-3">Lunes a viernes, de 8 a 13.30<br/>Sábados 8 a 11.30</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 36</td>
                        <td className="px-4 py-3">Ruta 16 km 11</td>
                        <td className="px-4 py-3">Carrizal de Arriba</td>
                        <td className="px-4 py-3">Lunes a viernes, de 8 a 13.30<br/>Sábados de 8 a 11.30</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 37</td>
                        <td className="px-4 py-3">Ruta 16 km 20</td>
                        <td className="px-4 py-3">Carrizal de Abajo</td>
                        <td className="px-4 py-3">Lunes a viernes, de 8 a 13.30<br/>Sábados de 8 a 11.30</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 38</td>
                        <td className="px-4 py-3">Italia 5600</td>
                        <td className="px-4 py-3">Chacras de Coria</td>
                        <td className="px-4 py-3">Lunes a viernes, de 8 a 17.30<br/>Sábados de 8 a 12</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Centro de Salud 39</td>
                        <td className="px-4 py-3">Ruta 40, km 38 B°° Cuadro Estación</td>
                        <td className="px-4 py-3">Ugarteche</td>
                        <td className="px-4 py-3">Lunes a viernes, de 8 a 18<br/>Sábados 8 a 12</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-4 py-3 font-semibold">Consultorios externos</td>
                        <td className="px-4 py-3">Lateral Oeste del Acceso Sur y Quintana</td>
                        <td className="px-4 py-3">Perdriel</td>
                        <td className="px-4 py-3">Lunes a viernes, de 7 a 13.30<br/>Sábados 7 a 11.30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>

                        {/* Accordion Item 2 */}
            <details className="group bg-mendoza-blue-dark rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between p-6 text-white font-bold text-xl">
                Campañas de prevención
                <span className="flex-shrink-0 ml-4 bg-white text-mendoza-blue-dark rounded-full w-8 h-8 flex items-center justify-center group-open:-rotate-45 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewB°ox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-800 bg-slate-50 border-t border-white/10 mt-2 pt-6">
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* B°ronquiolitis Card */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 flex flex-col transition-transform hover:-translate-y-1">
                    <img src="/campana-bronquiolitis.png" alt="Campaña B°ronquiolitis" className="w-full h-auto object-cover" />
                  </div>
                  
                  {/* HPV Card */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 flex flex-col transition-transform hover:-translate-y-1 relative group/hpv">
                    <img src="/campana-hpv.png" alt="Campaña Cáncer de Cuello de Útero" className="w-full h-auto object-cover" />
                    
                    {/* B°anner inferior clickeable */}
                    <div 
                      onClick={() => setIsHpvModalOpen(true)}
                      className="absolute bottom-0 inset-x-0 bg-[#d81b60] text-white p-3 text-center cursor-pointer hover:bg-pink-700 transition-colors shadow-[0_-4px_10px_rgba(0,0,0,0.2)]"
                    >
                      <span className="font-bold text-sm md:text-base uppercase tracking-wider block">
                        Conocé tu centro de testeo más cercano
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info HPV Section */}
                
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* HPV Info Modal */}
      {isHpvModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-mendoza-blue-dark/70 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsHpvModalOpen(false)}
          ></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
              <h3 className="text-xl font-bold text-pink-600">Centros de Testeo HPV</h3>
              <button 
                onClick={() => setIsHpvModalOpen(false)}
                className="w-8 h-8 flex-shrink-0 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full flex items-center justify-center transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewB°ox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="p-2 md:p-4">
              <div className="bg-white rounded-2xl p-4 md:p-6 text-slate-800">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                    <div className="bg-pink-600 text-white p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewB°ox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-pink-600">1 test = cero cáncer</h3>
                      <p className="text-slate-600 font-medium">Campaña de prevención del cáncer de cuello de útero</p>
                    </div>
                  </div>

                  <div className="text-slate-800 max-w-none space-y-4">
                    <p className="text-lg font-bold text-mendoza-blue-dark">
                      Hacete el TEST DE HPV para prevenir el cáncer de cuello uterino. Test simple, rápido que salva vidas.
                    </p>
                    <p className="text-slate-800 font-medium">
                      El cáncer de cuello de útero es 100% prevenible. El Test de HPV detecta el virus que causa esta enfermedad.
                    </p>
                    
                    <div className="bg-pink-50 border-l-4 border-pink-500 p-4 my-6 rounded-r-lg">
                      <h4 className="font-bold text-pink-700 mb-2">Antes de hacerte el test:</h4>
                      <ul className="list-none space-y-2 mb-0 text-slate-800 font-semibold">
                        <li className="flex items-start gap-2"><span className="text-green-500">✅</span> No hacerlo durante el período menstrual.</li>
                        <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Esperar 48 hs después de tener relaciones sexuales, usar óvulos, cremas vaginales o duchas internas.</li>
                        <li className="flex items-start gap-2"><span className="text-green-500">✅</span> Si tuviste parto reciente, esperá al menos 3 meses.</li>
                      </ul>
                    </div>

                    <p className="text-slate-800 font-bold">Podés hacer el test de HPV de manera gratuita en todos los hospitales y centros de salud públicos de Mendoza.</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2 mb-6 text-slate-800 font-medium">
                      <li><strong>Mujeres con coberturas privadas o particulares:</strong> podrán realizarse su test en cualquier laboratorio bioquímico privado adherido a la campaña, a un monto fijado por convenio.</li>
                      <li><strong>Docentes y personal de DGE:</strong> con cualquier tipo de cobertura con puntos de testeo en las escuelas, en horarios definidos, en concordancia con la campaña de vacunación escolar.</li>
                      <li>Establecimientos de salud de OSEP.</li>
                      <li>Hospital Universitario.</li>
                    </ul>

                    <div className="bg-slate-100 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 my-6 text-slate-800">
                      <div>
                        <p className="font-bold text-mendoza-blue-dark m-0">¿Dudas o consultas?</p>
                        <p className="text-sm m-0">Para obtener orientación e información adicional:</p>
                      </div>
                      <div className="flex flex-col gap-2 text-sm font-bold">
                        <span className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewB°ox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg> Línea 148, opción 6 "Salud"</span>
                        <a href="mailto:preventivosmendoza@mendoza.gov.ar" className="flex items-center gap-2 text-mendoza-blue-light hover:underline"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewB°ox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg> preventivosmendoza@mendoza.gov.ar</a>
                        <a href="https://casadelamujer.mendoza.gov.ar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-600 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewB°ox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg> Acceso a Casa de la Mujer</a>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-mendoza-blue-dark mt-8 mb-4 border-b border-slate-200 pb-2">Centros de Testeo en Luján de Cuyo</h4>
                  <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
                    <table className="w-full text-left text-sm text-slate-700">
                      <thead className="bg-slate-50 text-mendoza-blue-dark font-bold uppercase text-xs border-b border-slate-200">
                        <tr>
                          <th className="px-4 py-3">Nombre Efector</th>
                          <th className="px-4 py-3">Domicilio (Maps)</th>
                          <th className="px-4 py-3">Días y horarios</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 03 Pablo Casale</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/fped3yP9Psxq6jB°EA" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">B°° Supe, Ingeniero Krause y Cutral-Co Luján</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 31 David B°usana</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/D3DbcWSruTK9Z2AV7" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Federico Serpa y Republica del Libano</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 32 Las Compuertas</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/kanEt8nDB°5PZRGR77" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Saenz Peña 8801</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 33 La Colonia</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/E9u6WnNPwkNmcxmg9" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Calle Cobos s/n La Colonia</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 34 Potrerillos</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/CUys6RCrDd7iR8z39" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Ruta 7 km 60</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 35 Agrelo</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/CUYFX3D3t4YPxMfVA" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">San Martin 8995</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 36 Carrizal del Medio</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/cdWjmigGMTk8oK3i6" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Ruta 16 km 11</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 37 Carrizal de Abajo</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/6wM97RTDjYvuXasF9" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Ruta 16 km 20</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 38 Chacras de Coria</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/aTcyS9UX5FznaXUm6" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Italia 5648</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 39 Ugarteche</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/wxhi6vFH7Cdqe3qy7" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Ruta 40, km 38 B°° Cuadro Estación</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 202 Perdriel</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/T8ZxV1S176JYuMdSA" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">B°° Solar de Cuyo M J – C 35</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 217 Los Olivos</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/6FDjRCq8Xe6RTwpf7" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Manuel Antonio Sáez 8257</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 218 Los Alerces</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/SWqVHdwkvDX3effb9" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Los Alerces Terrada 8080 Luján</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">CAPS Nº 224 Costa Flores</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/qAe1WGVUDC7vPDR59" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">B°º Costa Flores M-A C-13 Luján – Perdriel</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">POSTA SANITARIA Nº 521 Cacheuta Norte</td>
                          <td className="px-4 py-3"><a href="https://www.google.com/maps/?q=-33.01085800000000000000,-69.12142100000000000000" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Camping EDEMSA</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">POSTA SANITARIA Nº 525 B°ella Vista</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/F7sbn7cHffFUNFb6A" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Luján de Cuyo</a></td>
                          <td className="px-4 py-3">Lunes a viernes, de 8 a 13hs</td>
                        </tr>
                        <tr className="bg-slate-100">
                          <td colSpan={3} className="px-4 py-3 font-bold text-mendoza-blue-dark">Laboratorios Privados</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">Laboratorio Scopel</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/2RkdTcj8jGV1XkpcA" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Juan de Dios Vallcanera 80 Local 2, Luján de Cuyo</a></td>
                          <td className="px-4 py-3">-</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">Innovis Laboratorio B°ioquímico Integral</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/rZegdvdhzGDKfjB°D7" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Viamonte 5263 Chacras de Coria, Luján de Cuyo</a></td>
                          <td className="px-4 py-3">Lunes a viernes de 7 a 13 / 14 a 19hs.</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="px-4 py-3 font-semibold">Laboratorio de análisis clínicos Gastrolab</td>
                          <td className="px-4 py-3"><a href="https://maps.app.goo.gl/8yhSg8AAv9YuTG3QA" target="_blank" rel="noopener noreferrer" className="text-mendoza-blue-light hover:underline">Rivadavia 88, Luján de Cuyo</a></td>
                          <td className="px-4 py-3">Lunes a viernes 8:30 a 12:30 / 16 a 20hs.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
          </div>
        </div>
      )}

    </main>
    <Footer />
  </div>
  );
}
