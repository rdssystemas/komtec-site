export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="ERP KomTec" className="h-7 w-auto brightness-0 invert" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#modulos" className="hover:text-white transition-colors">Módulos</a>
            <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
            <a href="#planos" className="hover:text-white transition-colors">Planos</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>

          <div className="text-sm text-center">
            <p>contato@erpkomtec.com.br</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs">
          <p>© {new Date().getFullYear()} ERP KomTec. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
