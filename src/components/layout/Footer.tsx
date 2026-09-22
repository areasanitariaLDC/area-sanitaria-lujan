import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Área Sanitaria Luján de Cuyo</h3>
            <p className="text-sm text-slate-400">
              Ministerio de Salud y Deportes<br />
              Gobierno de Mendoza
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#mapa" className="hover:text-white transition-colors">Mapa de centros</Link></li>
              <li><Link href="#centros" className="hover:text-white transition-colors">Lista de Centros de Salud</Link></li>
              <li><Link href="#contacto" className="hover:text-white transition-colors">Contacto y Emergencias</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Luján de Cuyo, Mendoza</li>
              <li>Emergencias: 107</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 text-center">
          &copy; {new Date().getFullYear()} Área Sanitaria Luján de Cuyo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
