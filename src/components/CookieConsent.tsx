import { useEffect, useState } from 'react';
import { initAnalytics } from '../lib/analytics';

const STORAGE_KEY = 'komtec_cookie_consent';

export function CookieConsent() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const consentimento = localStorage.getItem(STORAGE_KEY);
    if (consentimento === 'aceito') {
      initAnalytics();
    } else if (consentimento !== 'recusado') {
      setVisivel(true);
    }
  }, []);

  const aceitar = () => {
    localStorage.setItem(STORAGE_KEY, 'aceito');
    initAnalytics();
    setVisivel(false);
  };

  const recusar = () => {
    localStorage.setItem(STORAGE_KEY, 'recusado');
    setVisivel(false);
  };

  if (!visivel) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-gray-200 px-4 py-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <p className="text-xs sm:text-sm text-gray-300 flex-1">
          Usamos cookies para entender como você usa o site e melhorar sua experiência.
          Veja nossa{' '}
          <a href="/privacidade" className="text-orange-400 hover:underline">Política de Privacidade</a>.
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={recusar}
            className="px-4 py-2 text-xs sm:text-sm text-gray-300 hover:text-white border border-gray-600 rounded-lg transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={aceitar}
            className="px-4 py-2 text-xs sm:text-sm bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
