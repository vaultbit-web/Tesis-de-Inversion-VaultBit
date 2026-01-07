
import React, { useState, useMemo, useEffect } from 'react';
import OnePager from './components/OnePager';
import InteractiveDashboard from './components/InteractiveDashboard';
import CapitalLoungeCTA from './components/CapitalLoungeCTA';
import PitchDeck from './components/PitchDeck';
import { Language } from './types';
import { TRANSLATIONS, VAULTBIT_SHARED } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const [view, setView] = useState<'overview' | 'deck'>('overview');
  const content = useMemo(() => TRANSLATIONS[lang], [lang]);

  useEffect(() => {
    const isES = lang === 'es';
    const baseTitle = isES ? 'Portal de Inversores | VaultBit' : 'Investor Portal | VaultBit';
    const viewTitle = view === 'deck' 
      ? (isES ? 'Pitch Deck' : 'Pitch Deck')
      : (isES ? 'Vista General' : 'Overview');
    document.title = `${baseTitle} - ${viewTitle}`;
    document.documentElement.lang = lang;
  }, [lang, view]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="bg-[#050505] min-h-screen flex flex-col items-center selection:bg-[#FF8A00] selection:text-black font-host w-full">
      {/* Navbar - Optimized for Mobile/Tablet */}
      <nav className="w-full h-16 md:h-20 px-4 md:px-12 flex justify-between items-center fixed top-0 z-[60] bg-black/95 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4 md:gap-10 overflow-hidden">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375/mP43LZ32R1CBREy3/logo-principal-png-AGBzjqQ2gWtpMMzp.png" alt="VaultBit" className="h-5 md:h-7 object-contain shrink-0" />
            
            <div className="hidden sm:flex items-center gap-6 md:gap-10">
              <button 
                onClick={() => setView('overview')}
                className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all relative py-2 ${view === 'overview' ? 'text-white' : 'text-gray-600 hover:text-white'}`}
              >
                {content.nav.overview}
                {view === 'overview' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF8A00]"></span>}
              </button>
              <button 
                onClick={() => setView('deck')}
                className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all relative py-2 ${view === 'deck' ? 'text-white' : 'text-gray-600 hover:text-white'}`}
              >
                {content.nav.deck}
                {view === 'deck' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF8A00]"></span>}
              </button>
            </div>
        </div>
        
        <div className="flex items-center gap-3 md:gap-10 shrink-0">
            <a 
              href={VAULTBIT_SHARED.roundtableLink} 
              target="_blank" 
              className="text-[8px] md:text-[10px] text-white hover:text-black hover:bg-white transition-all uppercase font-black tracking-[0.2em] md:tracking-[0.4em] bg-white/5 border border-white/10 px-4 md:px-8 py-2 md:py-2.5 rounded-full"
            >
              {lang === 'es' ? 'INVERTIR' : 'INVEST'}
            </a>
            <button 
              onClick={toggleLanguage}
              className="bg-white/5 border border-white/10 hover:border-[#FF8A00]/50 text-white px-3 md:px-5 py-2 rounded-full text-[8px] md:text-[10px] font-black transition-all flex items-center gap-2 md:gap-4"
            >
              <span className={lang === 'es' ? 'text-[#FF8A00]' : 'opacity-20'}>ES</span>
              <span className="opacity-10 text-xs md:text-lg font-thin">|</span>
              <span className={lang === 'en' ? 'text-[#FF8A00]' : 'opacity-20'}>EN</span>
            </button>
        </div>
      </nav>

      {/* View Switcher for Mobile (Hidden on SM+) */}
      <div className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] flex gap-2 p-1.5 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
        <button 
          onClick={() => setView('overview')}
          className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === 'overview' ? 'bg-[#FF8A00] text-black shadow-lg shadow-[#FF8A00]/20' : 'text-gray-400'}`}
        >
          {lang === 'es' ? 'ANÁLISIS' : 'ANALYSIS'}
        </button>
        <button 
          onClick={() => setView('deck')}
          className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === 'deck' ? 'bg-[#FF8A00] text-black shadow-lg shadow-[#FF8A00]/20' : 'text-gray-400'}`}
        >
          DECK
        </button>
      </div>

      <div className="h-16 md:h-20 w-full shrink-0"></div>

      <main className="w-full flex-1">
        {view === 'overview' ? (
          <>
            <section className="w-full">
              <OnePager lang={lang} />
            </section>

            <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
              <CapitalLoungeCTA lang={lang} />
            </section>

            <section id="dashboard" className="w-full py-16 md:py-24 bg-gradient-to-b from-black to-[#050505] border-t border-white/5">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-20">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/20 mb-6 md:mb-8">
                      <span className="text-[#FF8A00] text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">{content.dashboard.label}</span>
                  </div>
                  <h2 className="text-3xl md:text-[3.5rem] font-black text-white mt-4 tracking-tighter uppercase leading-[0.9] text-balance">
                      {content.dashboard.title}
                  </h2>
                </div>
                <InteractiveDashboard lang={lang} />
              </div>
            </section>
          </>
        ) : (
          <PitchDeck lang={lang} />
        )}
      </main>

      <footer className="w-full py-16 md:py-24 border-t border-white/5 bg-black flex flex-col items-center">
        <div className="flex flex-col items-center text-center px-6 max-w-4xl w-full">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375/mP43LZ32R1CBREy3/logo-principal-png-AGBzjqQ2gWtpMMzp.png" alt="VaultBit" className="h-5 md:h-6 opacity-30 grayscale mb-12 md:mb-16" />
            <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 md:mb-16 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-600">
                <a href={`https://${VAULTBIT_SHARED.website}`} target="_blank" className="hover:text-[#FF8A00] transition-colors">{lang === 'es' ? 'WEB OFICIAL' : 'OFFICIAL WEBSITE'}</a>
                <a href={VAULTBIT_SHARED.roundtableLink} target="_blank" className="hover:text-[#FF8A00] transition-colors">ROUNDTABLE</a>
                <a href="mailto:danielbrosed@vaultbit.es" className="hover:text-[#FF8A00] transition-colors">{lang === 'es' ? 'CONTACTO' : 'CONTACT'}</a>
            </nav>
            <div className="p-6 md:p-10 bg-white/[0.02] border border-white/[0.05] rounded-[2rem] md:rounded-[2.5rem] mb-12 w-full">
                <p className="text-[8px] md:text-[10px] text-gray-500 uppercase leading-relaxed tracking-[0.1em] md:tracking-widest font-bold max-w-3xl mx-auto">
                  {content.footer.confidential}
                </p>
            </div>
            <p className="text-[8px] md:text-[10px] text-gray-800 font-black uppercase tracking-[0.5em]">{content.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
