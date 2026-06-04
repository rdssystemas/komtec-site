export function Footer() {
  return (
    <footer className="bg-orange-950 text-orange-200/70 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="ERP KomTec Pro" className="h-9 w-auto" />
            <span className="font-bold text-white text-base leading-none flex items-center gap-1">
              ERP <span className="text-orange-400">KomTec</span><span className="text-orange-300 text-xs font-semibold self-center">Pro</span>
            </span>
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

        <div className="border-t border-orange-900 mt-8 pt-6 text-center text-xs">
          <p>© {new Date().getFullYear()} ERP KomTec Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
