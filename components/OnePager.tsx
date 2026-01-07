
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, VAULTBIT_SHARED } from '../constants';

interface Props {
  lang: Language;
}

const OnePager: React.FC<Props> = ({ lang }) => {
  const content = TRANSLATIONS[lang];
  const deal = content.roundtableInfo;
  const comp = content.competition;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12 md:space-y-32 px-4 sm:px-8 font-host overflow-hidden pb-16 md:pb-32">
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-gradient-radial from-[#FF8A00]/10 via-transparent to-transparent opacity-60 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10 px-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 shadow-inner backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse shadow-[0_0_10px_#FF8A00]"></span>
            <span className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/80">{content.round}</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white leading-[0.9] tracking-tighter uppercase mb-8 md:mb-10 text-balance">
            {lang === 'es' ? 'EL ESTÁNDAR EUROPEO DE' : 'THE EUROPEAN STANDARD FOR'} <br className="hidden sm:block"/>
            <span className="text-[#FF8A00]">{lang === 'es' ? 'CUSTODIA INSTITUCIONAL' : 'INSTITUTIONAL CUSTODY'}</span>
          </h1>
          
          <p className="text-xs md:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto mb-10 md:mb-12 opacity-90 uppercase tracking-tight">
            {content.opportunity}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            <a 
              href={VAULTBIT_SHARED.roundtableLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-[#FF8A00] hover:bg-white text-black font-black text-[10px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.3em] px-8 md:px-14 py-5 md:py-6 rounded-2xl transition-all duration-500 hover:scale-105 shadow-[0_15px_40px_rgba(255,138,0,0.2)]"
            >
              {lang === 'es' ? 'INVERTIR EN ROUNDTABLE' : 'INVEST ON ROUNDTABLE'}
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Deal Information Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start pt-6">
        <div className="lg:col-span-7 space-y-8 md:space-y-12 order-2 lg:order-1">
            <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none text-center lg:text-left">
              {lang === 'es' ? 'VISIÓN GENERAL DEL DEAL' : 'DEAL OVERVIEW'}
            </h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-xs md:text-lg text-gray-400 font-medium leading-relaxed uppercase tracking-widest opacity-80 border-l-2 border-[#FF8A00] pl-4 md:pl-6">
                {lang === 'es' 
                  ? "VaultBit es el primer operador europeo de infraestructura física Grado VII especializado en la custodia profesional de activos digitales. Combinamos activos físicos de ultra-seguridad con protocolos de herencia digital."
                  : "VaultBit is the first European physical infrastructure operator specialized in the professional custody of digital assets. We combine ultra-high security physical assets with digital inheritance protocols."}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {content.market.map((m, i) => (
                      <div key={i} className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl group hover:border-[#FF8A00]/50 transition-all">
                          <p className="text-[8px] md:text-[9px] text-[#FF8A00] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-3 md:mb-4">{m.label}</p>
                          <p className="text-2xl md:text-3xl font-black text-white">{m.value}</p>
                      </div>
                  ))}
              </div>
            </div>
        </div>

        {/* Roundtable Deal Card */}
        <div className="lg:col-span-5 bg-white text-black p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl space-y-8 md:space-y-10 relative order-1 lg:order-2">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-5">
                <h3 className="text-[10px] font-black uppercase tracking-widest">{deal.title}</h3>
                <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]"></span>
                    <span className="text-[8px] md:text-[9px] font-black uppercase">{deal.spv}</span>
                </div>
            </div>
            
            <div className="space-y-4 md:space-y-6">
                {[
                  { label: "ALLOCATION", value: deal.allocation },
                  { label: "DEAL TYPE", value: "Pre-Seed" },
                  { label: "INSTRUMENT", value: deal.instrument },
                  { label: "DISCOUNT", value: deal.discount },
                  { label: "VALUATION", value: deal.valType }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-gray-500">
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                      <span className="text-xs md:text-sm font-black text-black">{item.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    <span className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">VALUATION CAP</span>
                    <span className="text-lg md:text-xl font-black text-[#FF8A00]">{deal.cap}</span>
                </div>
            </div>

            <a 
              href={VAULTBIT_SHARED.roundtableLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center bg-black text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#FF8A00] transition-all"
            >
              {lang === 'es' ? 'INVERTIR EN ROUNDTABLE' : 'INVEST ON ROUNDTABLE'}
            </a>
        </div>
      </section>

      {/* Strategic Comparison Table - Responsive Wrap */}
      <section className="space-y-10 md:space-y-16 pt-12 border-t border-white/5">
        <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
          <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4 md:mb-6">
            {comp.title}
          </h2>
          <p className="text-xs md:text-lg text-gray-400 font-medium uppercase tracking-widest opacity-80">
            {comp.subtitle}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.01]">
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 md:py-8 px-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 w-1/4">{comp.headers[0]}</th>
                  {comp.headers.slice(1).map((h, i) => (
                    <th key={i} className="py-6 md:py-8 px-4 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-gray-600 text-center">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comp.rows.map((row, i) => (
                  <tr key={i} className={`border-b border-white/5 transition-colors ${row.name === 'VaultBit' ? 'bg-[#FF8A00]/5' : 'hover:bg-white/[0.02]'}`}>
                    <td className={`py-6 md:py-8 px-4 font-black uppercase tracking-widest text-[10px] md:text-sm ${row.name === 'VaultBit' ? 'text-[#FF8A00]' : 'text-white'}`}>
                      {row.name}
                    </td>
                    {row.values.map((val, j) => (
                      <td key={j} className="py-6 md:py-8 px-4 text-center">
                        <div className="flex justify-center">
                          {val ? (
                            <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center ${row.name === 'VaultBit' ? 'bg-[#FF8A00]' : 'bg-green-500/20'}`}>
                              <svg className={`w-3 h-3 md:w-4 md:h-4 ${row.name === 'VaultBit' ? 'text-black' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                          ) : (
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-500/10 flex items-center justify-center">
                              <svg className="w-3 h-3 md:w-4 md:h-4 text-red-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            </div>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 text-right">
          * ANÁLISIS BASADO EN CERTIFICACIÓN EN 1143-1 GRADO VII Y PROTOCOLOS AIR-GAP.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 border-t border-white/5 pt-16 md:pt-24">
        {content.financials.map((metric, i) => (
          <div key={i} className="text-center sm:text-left group bg-white/[0.01] p-6 rounded-2xl border border-white/5 md:bg-transparent md:p-0 md:border-0">
            <p className="text-[9px] md:text-[11px] text-gray-600 uppercase tracking-[0.3em] md:tracking-[0.5em] font-black mb-4 md:mb-6 group-hover:text-[#FF8A00] transition-colors">{metric.label}</p>
            <p className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2 md:mb-4 leading-none">{metric.value}</p>
            <p className="text-[10px] md:text-[12px] text-white/40 font-black uppercase tracking-[0.2em]">{metric.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OnePager;
