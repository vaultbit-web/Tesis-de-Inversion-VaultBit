
import React, { useState, useMemo } from 'react';
import OnePager from './components/OnePager';
import InteractiveDashboard from './components/InteractiveDashboard';
import CapitalLoungeCTA from './components/CapitalLoungeCTA';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');

  const content = useMemo(() => TRANSLATIONS[lang], [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className="bg-neutral-950 min-h-screen flex flex-col items-center selection:bg-[#FF8A00] selection:text-black">
      {/* Selector de Idioma Flotante Superior */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] flex items-center gap-2">
        <button 
          onClick={toggleLanguage}
          className="bg-black/60 backdrop-blur-md border border-white/20 hover:border-[#FF8A00] text-white px-3 md:px-4 py-2 rounded-full text-[10px] md:text-xs font-bold transition-all duration-300 flex items-center gap-2 group shadow-2xl"
        >
          <span className={lang === 'es' ? 'text-[#FF8A00]' : 'opacity-40'}>ES</span>
          <span className="opacity-20">|</span>
          <span className={lang === 'en' ? 'text-[#FF8A00]' : 'opacity-40'}>EN</span>
          <svg className={`w-3 h-3 md:w-4 md:h-4 text-[#FF8A00] transition-transform duration-500 ${lang === 'en' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Visualización del One Pager A4 */}
      <div className="w-full py-8 md:py-16 flex justify-center bg-black/50 px-4">
        <OnePager lang={lang} />
      </div>

      {/* Comunidad Privada VaultBit Capital Lounge */}
      <div className="w-full max-w-4xl px-4 py-8 md:py-12 md:-mt-6">
        <CapitalLoungeCTA lang={lang} />
      </div>

      {/* Dashboard Interactivo */}
      <div className="w-full max-w-7xl px-4 py-16 md:py-24 border-t border-gray-900 bg-black">
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
            <span className="text-[#FF8A00] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4">{content.dashboard.label}</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight px-4">{content.dashboard.title}</h2>
            <div className="w-16 md:w-24 h-1 bg-[#FF8A00] mt-6 rounded-full opacity-50"></div>
        </div>
        <InteractiveDashboard lang={lang} />
      </div>

      {/* Footer Final */}
      <footer className="w-full py-12 md:py-16 border-t border-gray-900 flex flex-col items-center text-gray-600 bg-black px-6">
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/mP43LZ32R1CBREy3/logo-principal-png-AGBzjqQ2gWtpMMzp.png" alt="VaultBit" className="h-6 md:h-8 opacity-20 mb-6" />
        <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold text-center">Safe. Physical. Private.</p>
        <p className="text-[9px] md:text-[10px] mt-6 opacity-50 font-medium text-center">{content.footer.rights}</p>
      </footer>
    </div>
  );
};

export default App;
