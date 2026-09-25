export default function Footer() {
  return (
    <footer className="bg-mendoza-blue-dark text-slate-300 py-12 border-t border-mendoza-blue-dark">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-10">
          <h3 className="text-white text-2xl font-bold mb-2">Coordinación Área Sanitaria Luján de Cuyo</h3>
          <p className="mb-6">Ministerio de Salud y Deportes de Mendoza</p>
          <div className="space-y-3 text-sm">
            <p><strong className="text-white">Dirección:</strong> Luján de Cuyo, Mendoza</p>
            <p><strong className="text-white">Contacto:</strong> (0261) 123-4567 | correo@mendoza.gov.ar</p>
            <p><strong className="text-white">Horario de atención:</strong> Lunes a viernes de 7 a 13 hs</p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 pb-8 flex flex-col md:flex-row justify-start items-center gap-8 md:gap-12 text-sm font-semibold">
          <a href="https://www.mendoza.gov.ar/salud/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
            <img 
              src="/logo-mendoza-horizontal.png" 
              alt="Escudo de Mendoza" 
              className="h-12 w-auto mb-2 brightness-0 invert" 
            />
            <span className="text-white hover:underline decoration-white/30 underline-offset-4">Ministerio de Salud y Deportes</span>
          </a>
          
          <a href="https://www.mendoza.gov.ar/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
            Gobierno de Mendoza
          </a>
          
          <a href="https://id.mxm.mendoza.gov.ar/realms/mendoza_x_mi/protocol/openid-connect/auth?client_id=mxm_portal&scope=openid%20email%20profile&response_type=code&redirect_uri=https%3A%2F%2Fmxm.mendoza.gov.ar%2Fapi%2Fauth%2Fcallback%2Fkeycloak&state=umBiYrNUWYWLe_efphQxu2XBPKmCab9EntotJwBre2Y&code_challenge=heunD2jMJCNXzI_n14PMaYRpNb72qD2p2VGSW19YvQ8&code_challenge_method=S256" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
            <img 
              src="/mxm.png" 
              alt="Logo Mendoza por Mi" 
              className="h-12 w-auto mb-2" 
            />
            <span className="text-white hover:underline decoration-white/30 underline-offset-4">Mendoza por Mi</span>
          </a>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-sm text-center md:text-left text-slate-400">
          &copy; {new Date().getFullYear()} Coordinación Área Sanitaria Luján de Cuyo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
