
import React, { useState, useMemo, useEffect } from 'react';
import OnePager from './components/OnePager';
import InteractiveDashboard from './components/InteractiveDashboard';
import CapitalLoungeCTA from './components/CapitalLoungeCTA';
import { Language } from './types';
import { TRANSLATIONS, VAULTBIT_SHARED } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const content = useMemo(() => TRANSLATIONS[lang], [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <div className="bg-[#050505] min-h-screen flex flex-col items-center selection:bg-[#FF8A00] selection:text-black font-host">
      {/* Header Fijo Premium */}
      <nav className="w-full h-16 px-6 md:px-12 flex justify-between items-center fixed top-0 z-[60] bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375/mP43LZ32R1CBREy3/logo-principal-png-AGBzjqQ2gWtpMMzp.png" alt="VaultBit" className="h-7 md:h-8 object-contain" />
            <div className="hidden sm:block h-4 w-px bg-white/10 mx-2"></div>
            <span className="hidden sm:block text-[9px] text-gray-500 font-bold uppercase tracking-[0.4em]">
              {lang === 'es' ? 'PORTAL INVERSOR' : 'IR PORTAL'}
            </span>
        </div>
        
        <div className="flex items-center gap-8">
            <a href={VAULTBIT_SHARED.roundtableLink} target="_blank" className="hidden md:block text-[9px] text-[#FF8A00] hover:text-white transition-colors uppercase font-bold tracking-[0.3em]">
              {lang === 'es' ? 'Invertir Ahora' : 'Invest Now'}
            </a>
            <button 
              onClick={toggleLanguage}
              className="bg-white/5 border border-white/10 hover:border-[#FF8A00] text-white px-4 py-1.5 rounded-full text-[9px] font-bold transition-all flex items-center gap-3"
            >
              <span className={lang === 'es' ? 'text-[#FF8A00]' : 'opacity-30'}>ES</span>
              <span className="opacity-10">/</span>
              <span className={lang === 'en' ? 'text-[#FF8A00]' : 'opacity-30'}>EN</span>
            </button>
        </div>
      </nav>

      <div className="h-16 w-full"></div>

      <main className="w-full">
        {/* Parte 1: El OnePager Rediseñado */}
        <section className="w-full pt-12 md:pt-16">
          <OnePager lang={lang} />
        </section>

        {/* Lounge / Community */}
        <section className="w-full max-w-7xl mx-auto px-6 py-16">
          <CapitalLoungeCTA lang={lang} />
        </section>

        {/* Parte 2: Deep Dive Dashboard */}
        <section id="dashboard" className="w-full py-24 bg-gradient-to-b from-black via-[#080808] to-[#050505] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 px-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF8A00]/5 border border-[#FF8A00]/10 mb-6">
                  <span className="text-[#FF8A00] text-[9px] font-bold uppercase tracking-[0.4em]">{content.dashboard.label}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-4 tracking-tight uppercase leading-[1]">
                  {content.dashboard.title}
              </h2>
              <p className="text-gray-500 mt-8 text-[10px] uppercase tracking-[0.2em] font-medium">
                {lang === 'es' ? 'Métricas internas y modelado de crecimiento' : 'Internal metrics & growth modeling'}
              </p>
            </div>
            <InteractiveDashboard lang={lang} />
          </div>
        </section>
      </main>

      {/* Footer Institucional */}
      <footer className="w-full py-24 border-t border-white/5 bg-black flex flex-col items-center">
        <div className="flex flex-col items-center text-center px-6 max-w-4xl">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375/mP43LZ32R1CBREy3/logo-principal-png-AGBzjqQ2gWtpMMzp.png" alt="VaultBit" className="h-6 opacity-10 grayscale mb-16" />
            <nav className="flex flex-wrap justify-center gap-10 mb-12 text-[9px] font-bold uppercase tracking-[0.3em] text-gray-600">
                <a href={`https://${VAULTBIT_SHARED.website}`} className="hover:text-[#FF8A00] transition-colors">{lang === 'es' ? 'Sitio Web' : 'Website'}</a>
                <a href={VAULTBIT_SHARED.roundtableLink} className="hover:text-[#FF8A00] transition-colors">Roundtable</a>
                <a href="mailto:danielbrosed@vaultbit.es" className="hover:text-[#FF8A00] transition-colors">{lang === 'es' ? 'Contacto' : 'Contact'}</a>
            </nav>
            <div className="p-8 bg-white/[0.01] border border-white/[0.03] rounded-3xl mb-10">
                <p className="text-[9px] text-gray-500 uppercase leading-relaxed tracking-widest">
                  {content.footer.confidential}
                </p>
            </div>
            <p className="text-[9px] text-gray-700 font-bold uppercase tracking-widest">{content.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
