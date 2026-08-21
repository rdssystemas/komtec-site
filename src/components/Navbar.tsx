import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Módulos', href: '/#modulos' },
  { label: 'Diferenciais', href: '/#diferenciais' },
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Informações', href: '/informacoes' },
  { label: 'Dicas', href: '/dicas' },
  { label: 'Falar com Especialista', href: '/#planos' },
  { label: 'Contato', href: '/#contato' },
];

export function Navbar() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="ERP KomTec Pro" className="h-8 w-auto" />
          <span className="flex flex-col leading-tight">
            <span className="font-bold text-gray-900 text-lg">ERP <span className="text-orange-600">KomTec</span> <span className="text-orange-500 text-sm font-semibold">Pro</span></span>
            <span className="hidden sm:block text-[10px] text-gray-400 font-medium uppercase tracking-wide">Sistema de Gestão Empresarial</span>
          </span>
        </a>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-gray-600 hover:text-orange-600 font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#experimente"
            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Solicitar Demo
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {aberto && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setAberto(false)}
              className="block text-sm text-gray-700 font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#experimente"
            className="block w-full text-center px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded-lg"
            onClick={() => setAberto(false)}
          >
            Solicitar Demo
          </a>
        </div>
      )}
    </header>
  );
}
