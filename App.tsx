
import React, { useState, useMemo, useEffect } from 'react';
import OnePager from './components/OnePager';
import InteractiveDashboard from './components/InteractiveDashboard';
import CapitalLoungeCTA from './components/CapitalLoungeCTA';
import ChatBot from './components/ChatBot';
import { Language } from './types';
import { TRANSLATIONS, VAULTBIT_SHARED } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');

  const content = useMemo(() => TRANSLATIONS[lang], [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  // Scroll al inicio al cambiar de idioma
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <div className="bg-[#050505] min-h-screen flex flex-col items-center selection:bg-[#FF8A00] selection:text-black">
      {/* Barra de Navegación Fija - Optimizada para Subdominio */}
      <nav className="w-full h-20 px-6 md:px-12 flex justify-between items-center fixed top-0 z-[60] bg-black/90 backdrop-blur-2xl border-b border-white/5">
        <div className="flex items-center gap-4">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/mP43LZ32R1CBREy3/logo-principal-png-AGBzjqQ2gWtpMMzp.png" alt="VaultBit" className="h-8 md:h-9 object-contain" />
            <div className="hidden sm:block h-4 w-px bg-white/10 mx-2"></div>
            <span className="hidden sm:block text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Investor Portal</span>
        </div>
        
        <div className="flex items-center gap-6">
            <a 
              href={`https://${VAULTBIT_SHARED.website}`}
              className="hidden md:block text-[10px] text-gray-400 hover:text-white transition-colors uppercase font-bold tracking-widest"
            >
              Main Site
            </a>
            <button 
              onClick={toggleLanguage}
              className="bg-white/5 border border-white/10 hover:border-[#FF8A00] text-white px-4 py-2 rounded-full text-[10px] font-black transition-all flex items-center gap-2 group shadow-xl"
            >
              <span className={lang === 'es' ? 'text-[#FF8A00]' : 'opacity-40'}>ES</span>
              <span className="opacity-20">|</span>
              <span className={lang === 'en' ? 'text-[#FF8A00]' : 'opacity-40'}>EN</span>
            </button>
        </div>
      </nav>

      {/* Espaciador de Navegación */}
      <div className="h-24"></div>

      {/* Main Content */}
      <main className="w-full flex flex-col items-center px-4 md:px-6">
        {/* Hero / One Pager Section */}
        <div className="w-full max-w-5xl py-8 md:py-16 flex justify-center">
          <OnePager lang={lang} />
        </div>

        {/* Community / Capital Lounge Section */}
        <div className="w-full max-w-5xl py-12">
          <CapitalLoungeCTA lang={lang} />
        </div>

        {/* Data Dashboard Section */}
        <section id="dashboard" className="w-full max-w-7xl py-24 mt-12 border-t border-white/5">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF8A00]/10 border border-[#FF8A00]/20 mb-6">
                <span className="text-[#FF8A00] text-[10px] font-black uppercase tracking-[0.4em]">{content.dashboard.label}</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mt-4 tracking-tighter uppercase leading-[0.9]">
                {content.dashboard.title.split(' ').map((word, i) => (
                    <span key={i} className={i === 2 ? 'text-gray-600 block sm:inline' : ''}>{word} </span>
                ))}
            </h2>
          </div>
          <InteractiveDashboard lang={lang} />
        </section>
      </main>

      {/* AI Assistant Overlay */}
      <ChatBot />

      {/* Footer Minimalista */}
      <footer className="w-full py-24 border-t border-white/5 bg-black flex flex-col items-center gap-10">
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/mP43LZ32R1CBREy3/logo-principal-png-AGBzjqQ2gWtpMMzp.png" alt="VaultBit" className="h-7 opacity-20 grayscale" />
        
        <div className="flex flex-col items-center text-center px-6">
            <nav className="flex gap-8 mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">
                <a href={`https://${VAULTBIT_SHARED.website}`} className="hover:text-[#FF8A00] transition-colors">Home</a>
                <a href="mailto:danielbrosed@vaultbit.es" className="hover:text-[#FF8A00] transition-colors">Contact</a>
                <a href="#" className="hover:text-[#FF8A00] transition-colors">Legal</a>
            </nav>
            
            <p className="text-[10px] uppercase tracking-[0.5em] text-gray-700 font-bold mb-6">Safe • Physical • Private</p>
            
            <div className="max-w-xl p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl mb-8">
                <p className="text-[9px] text-gray-500 uppercase leading-loose text-center">
                  {content.footer.confidential}
                </p>
            </div>
            
            <p className="text-[10px] text-gray-600 opacity-40 font-medium">{content.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
