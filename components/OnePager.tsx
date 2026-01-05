
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
    <div className="mx-auto bg-[#050505] w-full max-w-[210mm] shadow-2xl overflow-hidden relative flex flex-col text-gray-200 border border-gray-800 font-inter fade-in mb-8">
      {/* Header */}
      <header className="bg-black p-6 md:p-8 pb-4 md:pb-6 flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-800 gap-4">
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start">
          <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/mP43LZ32R1CBREy3/logo-principal-png-AGBzjqQ2gWtpMMzp.png" alt="VaultBit Logo" className="h-10 md:h-14 mb-3 object-contain" />
          <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold text-center md:text-left">{content.tagline}</p>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <div className="inline-block bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[9px] md:text-[10px] text-[#FF8A00] font-bold mb-2 tracking-wide uppercase">{content.round}</div>
          <p className="text-[10px] font-medium text-gray-400">{VAULTBIT_SHARED.website}</p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Column */}
        <div className="w-full md:w-[63%] p-6 md:p-8 md:pr-6 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col gap-6 md:gap-8">
          <section>
            <h2 className="text-base md:text-lg font-bold text-white border-l-[3px] border-[#FF8A00] pl-3 mb-3 uppercase tracking-wide">
              {lang === 'es' ? 'La Oportunidad' : 'The Opportunity'}
            </h2>
            <p className="text-[12px] md:text-xs text-gray-300 leading-relaxed text-justify font-light">
              {content.opportunity}
            </p>
          </section>

          <section>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/2">
                <h3 className="font-bold text-white text-xs mb-3 flex items-center uppercase tracking-wide">
                  <span className="text-red-500 mr-2">●</span> {lang === 'es' ? 'El Problema' : 'The Problem'}
                </h3>
                <ul className="text-[11px] text-gray-400 space-y-3">
                  {content.problem.map((p, i) => (
                    <li key={i} className="pl-2 border-l border-red-500/30">
                      <strong className="text-gray-200 block mb-0.5">{p.title}</strong>
                      {p.desc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full sm:w-1/2">
                <h3 className="font-bold text-white text-xs mb-3 flex items-center uppercase tracking-wide">
                  <span className="text-[#FF8A00] mr-2">●</span> {lang === 'es' ? 'La Solución' : 'The Solution'}
                </h3>
                <ul className="text-[11px] text-gray-400 space-y-3">
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

          <section className="mt-auto">
            <h2 className="text-base md:text-lg font-bold text-white border-l-[3px] border-[#FF8A00] pl-3 mb-3 uppercase tracking-wide">Roadmap 2026</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 pt-3 border-t border-gray-800">
              {currentRoadmap.map((item, idx) => (
                <div key={idx} className={`text-left ${idx > 0 ? 'lg:border-l lg:border-gray-800 lg:pl-3' : ''}`}>
                  <div className="font-bold text-[#FF8A00] mb-1 text-[10px]">{item.quarter}</div>
                  <div className="text-gray-200 font-bold mb-0.5 text-[11px]">{item.title}</div>
                  <div className="text-gray-500 leading-tight text-[9px]">{item.description}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[37%] bg-[#0A0A0A] p-6 md:p-8 flex flex-col gap-8 md:gap-10">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-5 border-b border-gray-800 pb-2">Unit Economics</h2>
            <div className="space-y-4">
              {content.financials.map((metric, i) => (
                <div key={i} className={`bg-[#121212] p-5 rounded-lg border-l-[3px] ${i === 0 ? 'border-[#FF8A00]' : i === 1 ? 'border-white' : 'border-gray-600'}`}>
                  <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">{metric.label}</p>
                  <p className="text-3xl font-bold text-white mb-1 tracking-tighter">{metric.value}</p>
                  <p className="text-[9px] text-gray-500">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800">
            <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">{lang === 'es' ? 'Objetivo Ronda' : 'Round Target'}</p>
            <p className="text-3xl font-bold text-white tracking-tighter mb-4">{content.deal.target}</p>
            <div className="space-y-3 pt-3 border-t border-gray-800">
               <div className="flex justify-between text-[10px] font-bold">
                 <span className="text-gray-500">BSA AIR</span>
                 <span className="text-white">{content.deal.valuationCap} Cap</span>
               </div>
               <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden flex">
                  <div className="bg-[#FF8A00] w-[70%]"></div>
                  <div className="bg-white w-[30%]"></div>
               </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-800 md:border-0">
            <p className="text-xs font-bold text-white">{VAULTBIT_SHARED.founder.name}</p>
            <p className="text-[10px] text-[#FF8A00] font-bold uppercase tracking-widest">{VAULTBIT_SHARED.founder.role}</p>
            <div className="mt-3 text-[10px] text-gray-500 space-y-1">
              <p>{VAULTBIT_SHARED.founder.email}</p>
              <p>{VAULTBIT_SHARED.founder.phone}</p>
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
