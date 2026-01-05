
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, ROADMAP, VAULTBIT_SHARED } from '../constants';

interface Props {
  lang: Language;
}

const OnePager: React.FC<Props> = ({ lang }) => {
  const content = TRANSLATIONS[lang];
  const currentRoadmap = ROADMAP[lang];

  return (
    <div className="mx-auto bg-[#050505] w-full max-w-[210mm] lg:min-h-[297mm] shadow-2xl overflow-hidden relative flex flex-col text-gray-200 border border-gray-800 font-inter fade-in">
      {/* Header */}
      <header className="bg-black p-4 md:p-8 pb-4 md:pb-6 flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-800 gap-4">
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start">
          <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/mP43LZ32R1CBREy3/logo-principal-png-AGBzjqQ2gWtpMMzp.png" alt="VaultBit Logo" className="h-10 md:h-14 mb-3 object-contain" />
          <p className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold text-center md:text-left">{content.tagline}</p>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <div className="inline-block bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[8px] md:text-[10px] text-[#FF8A00] font-bold mb-2 tracking-wide uppercase">{content.round}</div>
          <p className="text-[9px] md:text-[10px] font-medium text-gray-400">{content.location}</p>
          <p className="text-[9px] md:text-[10px] font-medium text-gray-400">{VAULTBIT_SHARED.website}</p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Column (Narrative) */}
        <div className="w-full md:w-[63%] p-4 md:p-8 md:pr-6 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col gap-6 md:gap-8">
          
          {/* Executive Summary */}
          <section>
            <h2 className="text-base md:text-lg font-bold text-white border-l-[3px] border-[#FF8A00] pl-3 mb-3 uppercase tracking-wide">
              {lang === 'es' ? 'La Oportunidad' : 'The Opportunity'}
            </h2>
            <p className="text-[11px] md:text-xs text-gray-300 leading-relaxed text-justify font-light">
              {content.opportunity}
            </p>
          </section>

          {/* Problem & Solution */}
          <section>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="w-full sm:w-1/2">
                <h3 className="font-bold text-white text-[11px] md:text-xs mb-3 flex items-center uppercase tracking-wide">
                  <span className="text-red-500 mr-2 text-sm">●</span> {lang === 'es' ? 'El Problema' : 'The Problem'}
                </h3>
                <ul className="text-[10px] md:text-[11px] text-gray-400 space-y-3 list-none">
                  {content.problem.map((p, i) => (
                    <li key={i} className="pl-2 border-l border-red-500/30">
                      <strong className="text-gray-200 block mb-0.5">{p.title}</strong>
                      {p.desc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full sm:w-1/2">
                <h3 className="font-bold text-white text-[11px] md:text-xs mb-3 flex items-center uppercase tracking-wide">
                  <span className="text-[#FF8A00] mr-2 text-sm">●</span> {lang === 'es' ? 'La Solución' : 'The Solution'}
                </h3>
                <ul className="text-[10px] md:text-[11px] text-gray-400 space-y-3 list-none">
                  {content.solution.map((s, i) => (
                    <li key={i} className="pl-2 border-l border-[#FF8A00]">
                      <strong className="text-gray-200 block mb-0.5">{s.title}</strong>
                      {s.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Market & Traction */}
          <section>
            <h2 className="text-base md:text-lg font-bold text-white border-l-[3px] border-[#FF8A00] pl-3 mb-3 uppercase tracking-wide">
              {lang === 'es' ? 'Mercado y Tracción' : 'Market & Traction'}
            </h2>
            
            <div className="bg-[#121212] p-4 rounded mb-5 border border-gray-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">TAM: {lang === 'es' ? 'Mercado Total' : 'Total Market'}</span>
                <span className="text-[9px] md:text-[10px] font-bold text-white">4M+ {lang === 'es' ? 'Usuarios Cripto en España' : 'Crypto Users in Spain'}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1">
                <div className="bg-gradient-to-r from-orange-600 to-[#FF8A00] h-1 rounded-full shadow-[0_0_15px_rgba(255,138,0,0.6)]" style={{ width: '75%' }}></div>
              </div>
              <p className="text-[8px] md:text-[9px] text-gray-500 mt-2 text-right italic font-medium">
                {lang === 'es' ? 'Impulsado por regulación MiCA (2025-2026).' : 'Driven by MiCA regulation (2025-2026).'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {content.partners.map((p, i) => (
                <div key={i} className="bg-[#121212] border border-gray-800 p-2 rounded flex items-center">
                  <div className={`w-1.5 h-1.5 rounded-full mr-2 ${p.status === 'confirmed' || p.status === 'strategic' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                  <span className="text-[10px] font-medium text-gray-300">
                    {p.name} {p.status === 'interest' ? (lang === 'es' ? '(Interés)' : '(Interest)') : ''}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section className="mt-auto pb-4 md:pb-0">
            <h2 className="text-base md:text-lg font-bold text-white border-l-[3px] border-[#FF8A00] pl-3 mb-3 uppercase tracking-wide">Roadmap 2026</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 pt-3 border-t border-gray-800">
              {currentRoadmap.map((item, idx) => (
                <div key={idx} className={`text-left ${idx > 0 && idx % 2 !== 0 ? 'sm:border-l sm:border-gray-800 sm:pl-3' : idx > 0 ? 'lg:border-l lg:border-gray-800 lg:pl-3' : 'pr-2'}`}>
                  <div className="font-bold text-[#FF8A00] mb-1 text-[9px] md:text-[10px]">{item.quarter}</div>
                  <div className="text-gray-200 font-bold mb-0.5 text-[10px] md:text-[11px]">{item.title}</div>
                  <div className="text-gray-500 leading-tight text-[8px] md:text-[9px]">{item.description}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (Data & Ask) */}
        <div className="w-full md:w-[37%] bg-[#0A0A0A] p-4 md:p-8 flex flex-col justify-between gap-8 md:gap-0">
          
          {/* Financial Highlights */}
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-5 border-b border-gray-800 pb-2 text-center md:text-left">Unit Economics</h2>
            <div className="space-y-4">
              {content.financials.map((metric, i) => (
                <div key={i} className={`bg-[#121212] p-4 md:p-5 rounded-lg border-l-[3px] relative overflow-hidden group ${i === 0 ? 'border-[#FF8A00]' : i === 1 ? 'border-white' : 'border-gray-600'}`}>
                  <p className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-widest mb-1">{metric.label}</p>
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tighter">{metric.value}</p>
                  <p className="text-[8px] md:text-[9px] text-gray-500">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Deal */}
          <div className="mt-2 md:mt-8">
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-5 border-b border-gray-800 pb-2">
               {lang === 'es' ? 'La Ronda' : 'The Round'}
            </h2>
            <div className="bg-gradient-to-b from-gray-900 to-black p-5 md:p-6 rounded-xl border border-gray-800 relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF8A00] rounded-full opacity-10 blur-2xl pointer-events-none"></div>
              
              <div className="mb-4 relative z-10">
                <p className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-wider mb-1">
                  {lang === 'es' ? 'Objetivo de Financiación' : 'Funding Target'}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white tracking-tighter">{content.deal.target}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4 border-t border-gray-800 pt-4 relative z-10">
                <div>
                  <p className="text-[8px] md:text-[9px] text-gray-500 uppercase">{lang === 'es' ? 'Instrumento' : 'Instrument'}</p>
                  <p className="text-[10px] md:text-xs font-bold text-white mt-0.5">{content.deal.instrument}</p>
                </div>
                <div>
                  <p className="text-[8px] md:text-[9px] text-gray-500 uppercase">Valuation Cap</p>
                  <p className="text-[10px] md:text-xs font-bold text-white mt-0.5">{content.deal.valuationCap}</p>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-[8px] md:text-[9px] text-gray-500 uppercase mb-2">
                  {lang === 'es' ? 'Uso de Fondos' : 'Use of Funds'}
                </p>
                <div className="flex h-1.5 w-full rounded-full overflow-hidden bg-gray-800">
                  <div className="bg-[#FF8A00] w-[70%]"></div>
                  <div className="bg-white w-[20%]"></div>
                  <div className="bg-gray-600 w-[10%]"></div>
                </div>
                <div className="flex justify-between text-[7px] md:text-[8px] text-gray-400 mt-1.5 font-medium">
                  <span>70% Capex</span>
                  <span>20% Opex</span>
                  <span>10% GTM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-8 md:mt-auto pt-6 border-t border-gray-800 md:border-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#FF8A00] rounded-full flex items-center justify-center text-black font-black text-xs shadow-[0_0_15px_rgba(255,138,0,0.3)] shrink-0">
                DB
              </div>
              <div>
                <p className="text-xs font-bold text-white">{VAULTBIT_SHARED.founder.name}</p>
                <p className="text-[10px] text-[#FF8A00] font-bold uppercase tracking-widest">{VAULTBIT_SHARED.founder.role}</p>
              </div>
            </div>
            <div className="mt-3 text-[10px] text-gray-400 space-y-1 pl-1">
              <p className="hover:text-white transition-colors cursor-pointer break-all">{VAULTBIT_SHARED.founder.email}</p>
              <p className="hover:text-white transition-colors cursor-pointer">{VAULTBIT_SHARED.founder.phone}</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black p-3 text-[7px] text-gray-600 text-center border-t border-gray-900 uppercase tracking-widest">
        {content.footer.confidential}
      </footer>
    </div>
  );
};

export default OnePager;
