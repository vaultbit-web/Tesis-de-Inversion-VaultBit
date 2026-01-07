
import React from 'react';
import { VAULTBIT_SHARED, TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface Props { lang: Language; }

const TelegramIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const CapitalLoungeCTA: React.FC<Props> = ({ lang }) => {
  const content = TRANSLATIONS[lang];
  const loungeLogoUrl = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=113,fit=crop/mP43LZ32R1CBREy3/vaultbit-capital-lounge-sin-fondo-vvy3jluGFWrfgrXT.png";

  return (
    <div className="glass-card rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 relative overflow-hidden group border border-white/5 bg-gradient-to-br from-[#FF8A00]/5 to-transparent">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8A00]/10 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
        <div className="bg-[#FF8A00]/10 border border-[#FF8A00]/20 text-[#FF8A00] text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] px-6 py-2 rounded-full mb-8 md:mb-10 shadow-lg backdrop-blur-md">
          {content.lounge.badge}
        </div>
        <h3 className="text-2xl md:text-5xl font-black text-white mb-6 md:mb-8 uppercase tracking-tighter leading-tight text-balance">
          {content.lounge.title}
        </h3>
        <p className="text-xs md:text-xl text-gray-400 font-bold leading-relaxed uppercase tracking-wide opacity-80 mb-8 md:mb-12">
          {content.lounge.description}
        </p>
        
        <a 
          href={VAULTBIT_SHARED.communityLink}
          target="_blank"
          className="w-full sm:w-auto bg-[#FF8A00] hover:bg-white text-black px-10 md:px-14 py-5 md:py-6 rounded-2xl font-black text-[11px] md:text-[13px] uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all duration-500 shadow-[0_20px_50px_rgba(255,138,0,0.3)] flex items-center justify-center gap-4 hover:scale-105 active:scale-95"
        >
          <TelegramIcon />
          {content.lounge.button}
        </a>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full lg:w-1/2">
          <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[500px] lg:max-w-full">
              <img 
                  src={loungeLogoUrl} 
                  alt="VaultBit Capital Lounge" 
                  className="w-full h-auto object-contain filter drop-shadow-[0_0_30px_rgba(255,138,0,0.15)] transition-all duration-1000 group-hover:scale-105 group-hover:drop-shadow-[0_0_40px_rgba(255,138,0,0.25)]" 
              />
          </div>
      </div>
    </div>
  );
};

export default CapitalLoungeCTA;
