
import React from 'react';
import { VAULTBIT_SHARED, TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const CapitalLoungeCTA: React.FC<Props> = ({ lang }) => {
  const content = TRANSLATIONS[lang];
  // URL del logo oficial proporcionado
  const loungeLogoUrl = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=113,fit=crop/mP43LZ32R1CBREy3/vaultbit-capital-lounge-sin-fondo-vvy3jluGFWrfgrXT.png";

  return (
    <div className="bg-[#0D0D0D] border border-gray-800 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-2xl">
      {/* Efecto de resplandor de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent pointer-events-none group-hover:from-orange-500/20 transition-all duration-700"></div>
      
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
        <div className="bg-orange-500/10 border border-orange-500/30 text-orange-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          {content.lounge.badge}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{content.lounge.title}</h3>
        <p className="text-sm text-gray-400 font-light leading-relaxed">
          {content.lounge.description}
        </p>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
        {/* Botón de Entrada */}
        <a 
          href={VAULTBIT_SHARED.communityLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-white text-black px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,138,0,0.5)] flex items-center gap-3 whitespace-nowrap order-2 md:order-1"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701-.331 4.956c.488 0 .702-.223.974-.488l2.339-2.275 4.864 3.593c.897.494 1.542.239 1.766-.831l3.193-15.039c.328-1.312-.5-1.908-1.353-1.543z" fill="currentColor"/>
          </svg>
          {content.lounge.button}
        </a>

        {/* Logo Lounge Oficial */}
        <div className="flex flex-col items-center min-w-[200px] md:min-w-[280px] order-1 md:order-2">
            <img 
                src={loungeLogoUrl} 
                alt="VaultBit Capital Lounge Logo" 
                className="w-[240px] md:w-[320px] h-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,138,0,0.2)] transition-all duration-500 hover:scale-105" 
            />
        </div>
      </div>
    </div>
  );
};

export default CapitalLoungeCTA;
