import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <Link href="/" className="font-bold text-xl tracking-tight text-slate-900">
            Área Sanitaria <span className="text-blue-600">Luján de Cuyo</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#mapa" className="hover:text-blue-600 transition-colors">Mapa</Link>
          <Link href="#centros" className="hover:text-blue-600 transition-colors">Centros de Salud</Link>
          <Link href="#comunidad" className="hover:text-blue-600 transition-colors">Comunidad</Link>
          <Link href="#equipos" className="hover:text-blue-600 transition-colors">Equipos de Salud</Link>
        </nav>

        <div className="flex md:hidden">
          {/* Mobile Menu Button Placeholder */}
          <button className="text-slate-600 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
